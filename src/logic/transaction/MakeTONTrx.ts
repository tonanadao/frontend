import { message } from "antd";
import TonWeb from "tonweb";
import { beginCell, Cell, Address } from "ton";
import { encodeOffChainContent, decodeOffChainContent } from "./BOCcontent";
import BN from "bn.js";

const MakeTONTrx = async (
	activeBtn: any,
	setIsload: any,
	TONAmount: any,
	walletFrom: any,
	walletTo: any,
	netTo: string,
	hexString: any,
	openData: boolean,
	add: string,
	params: string,
	isNft?: boolean,
	nftData?: any
) => {
	console.log(isNft, nftData)
	if (activeBtn) {
		setIsload(true);
		const rand = Math.floor(Math.random() * 100)
		listener(walletFrom, walletTo, netTo, hexString, setIsload, openData, add, params, rand, isNft, nftData, TONAmount);


		//@ts-ignore
		const ton = window.ton;
		if (isNft) {
			console.log(nftData)
			console.log(
				await ton.send("ton_sendTransaction", [
					{
						to: nftData.nft_address,
						value: TonWeb.utils.toNano(TONAmount).add(TonWeb.utils.toNano(0.1)).toString(),
						data:
							beginCell()
								.storeUint(0x5fcc3d14, 32)
								.storeUint(rand, 64)
								.storeAddress(Address.parseFriendly(process.env.REACT_APP_BACK_TON_WALLET ?? '').address)
								.storeAddress(Address.parseFriendly(nftData.address ?? '').address)
								.storeInt(0, 1)
								.storeCoins(TonWeb.utils.toNano(TONAmount))
								.endCell()
								.toBoc()
								.toString("base64"),
						dataType: "boc",
					},
				])
			);
		} else {

			console.log(
				await ton.send("ton_sendTransaction", [
					{
						to: process.env.REACT_APP_BACK_TON_WALLET,
						value: TonWeb.utils.toNano(Number(TONAmount)).toString(),
						data: encodeOffChainContent(
							`${openData ? "SM#" : ""}${netTo}#${openData ? add : walletTo}${openData ? `#${btoa(params)}` : ""
							}`
						)
							.toBoc()
							.toString("base64"),
						dataType: "boc",
					},
				])
			);
		}
	} else {
		message.error("Fill all forms and connect wallets!", 10);
	}
};

const listener = (
	walletFrom: any,
	walletTo: any,
	netTo: string,
	hexString: any,
	setIsload: any,
	openData: boolean,
	add: string,
	params: string,
	rand?: any,
	isNft?: boolean,
	nftData?: any,
	TONAmount?: any
) => {
	let trxs: any = [];
	const int = setInterval(() => {
		message.success("Wait BE trx pending...", 2);
		fetch(


			`https://${!isNft ? '' : 'testnet.'}toncenter.com/api/v2/getTransactions?address=${process.env.REACT_APP_BACK_TON_WALLET}&limit=1&to_lt=0&archival=false`
		)
			.then((e: any) => e.json())
			.then((e: any) => {
				const data = e.result.filter((e: any) => {
					console.log(
						Cell.fromBoc(
							Buffer.from(TonWeb.utils.base64ToBytes(e.in_msg.msg_data.body))
						)[0]
						, beginCell()
							.storeUint(0x05138d91, 32)
							.storeUint(rand, 64)
							.storeAddress(Address.parseFriendly(walletFrom ?? '').address)
							.endCell()
					);
					const cellFromTx = Cell.fromBoc(
						Buffer.from(TonWeb.utils.base64ToBytes(e.in_msg.msg_data.body))
					)[0].beginParse()
					const op = cellFromTx.readUint(32)
					console.log(op)
					const qid = cellFromTx.readUint(64)
					console.log(qid.eq(new BN(rand))
					)
					return ((!!isNft ?
						qid.eq(new BN(rand))
						: (decodeOffChainContent(
							Cell.fromBoc(
								Buffer.from(TonWeb.utils.base64ToBytes(e.in_msg.msg_data.body))
							)[0]
						) === `${openData ? "SM#" : ""}${netTo}#${openData ? add : walletTo}${openData ? `#${btoa(params)}` : ""}`)
					)

					);
				});
				if (!data[0] && trxs.length === 0)
					trxs.push({ transaction_id: { hash: "test" } });
				if (trxs.length === 0 && data[0]) trxs = data;

				if (
					data[0].transaction_id.hash !== trxs[0].transaction_id.hash &&
					trxs.length !== 0
				) {
					clearInterval(int);

					message.success("Done BE trx!", 10);

					fetch(
						!isNft ?
							"https://dev.api.tonana.org"
							:
							// "http://localhost:5050",
							process.env.REACT_APP_STATE === "dev"
								? "http://localhost:5050"
								: process.env.REACT_APP_STATE === "dev-remote"
									? "https://dev.api.tonana.org"
									: "https://api.tonana.org/",
						{
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								hash: data[0].transaction_id.hash,
								sourceChain: "ton",
								nft: !!isNft ? {
									address: nftData?.nft_address,
									address_to: walletTo,
								} : null
							}),
						}
					);

					setIsload(false);

					message.success("Done trx!", 10);
				}
			});
	}, 10000);
};

export default MakeTONTrx;
