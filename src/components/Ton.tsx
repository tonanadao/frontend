import { useEffect, useState } from "react";
import { message, Form, Input, Button } from "antd";
import TonWeb from "tonweb";
const bs58 = require("bs58");

const Ton = (props: any) => {
	const [walletTo, setWalletTo] = useState<string>(props.SOLwalletKey);
	const [SOLAmount, setSOLAmount] = useState<string>("");
	const [TONAmount, setTONAmount] = useState<string>("");
	const activeBtn =
		!!walletTo && !!TONAmount && !props.isload && props.TONwalletKey;

	useEffect(() => {
		setWalletTo(props.SOLwalletKey);
	}, [props.SOLwalletKey]);

	const makeTrx = async () => {
		if (activeBtn) {
			props.sisload(true);
			//@ts-ignore
			const ton = window.ton;
			ton.send("ton_sendTransaction", [
				{
					to: process.env.REACT_APP_BACK_TON_WALLET,
					value: TonWeb.utils.toNano(Number(TONAmount)).toString(),
					data: `SOL_WALLET_${walletTo}_TRX_ID_${props.hexString}`,
				},
			]);
			listener();
		} else {
			message.error("Fill all forms and connect wallets!", 10);
		}
	};

	const listener = () => {
		const int = setInterval(() => {
			message.success("Wait BE trx pending...", 2);
			fetch(
				`https://toncenter.com/api/v2/getTransactions?address=${process.env.REACT_APP_BACK_TON_WALLET}&limit=10&to_lt=0&archival=false`
			)
				.then((e: any) => e.json())
				.then((e: any) => {
					const data = e.result.filter(
						(e: any) =>
							e.in_msg.message ===
							`SOL_WALLET_${walletTo}_TRX_ID_${props.hexString}`
					);
					if (data[0]) {
						clearInterval(int);

						message.success("Done BE trx!", 10);

						fetch(
							`https://us-central1-hoteloffice-293914.cloudfunctions.net/solana_ton_bridge/attr?=${data[0].transaction_id.hash}`,
							{
								method: "GET",
							}
						);

						let i = 0;
						let oldOne = "";

						const int2 = setInterval(() => {
							message.success("Wallet trx pending...", 2);

							fetch(
								`https://api.${process.env.REACT_APP_SOL_NET}.solana.com/`,
								{
									method: "POST",
									headers: {
										Accept: "application/json, text/plain, */*",
										"Content-Type": "application/json",
									},
									body: JSON.stringify({
										jsonrpc: "2.0",
										id: 1,
										method: "getSignaturesForAddress",
										params: [walletTo, { limit: 1 }],
									}),
								}
							)
								.then((res) => res.json())
								.then(async (res) => {
									console.log(res);
									res.result.forEach((e: any) => {
										fetch(
											`https://api.${process.env.REACT_APP_SOL_NET}.solana.com/`,
											{
												method: "POST",
												headers: {
													Accept: "application/json, text/plain, */*",
													"Content-Type": "application/json",
												},
												body: JSON.stringify({
													jsonrpc: "2.0",
													id: 1,
													method: "getTransaction",
													params: [e.signature, "json"],
												}),
											}
										)
											.then((res) => res.json())
											.then(async (res: any) => {
												console.log(res);
												console.log(res.result.transaction.message);
												console.log(
													oldOne !== res.result.transaction.signatures[0]
												);
												console.log(res.result.transaction.signatures[0]);
												console.log(oldOne);
												if (
													res.result.transaction.message.accountKeys[0] ===
														process.env.REACT_APP_BACK_SOL_WALLET &&
													oldOne !== res.result.transaction.signatures[0] &&
													i > 0
												) {
													clearInterval(int2);
													props.sisload(false);
													message.success("Done wallet trx, check it!", 10);
												} else {
													if (i === 0) {
														oldOne = res.result.transaction.signatures[0];
													}
													i++;
												}
												// if (res.result == null) {
												// 	console.log("res: null ");
												// 	return false;
												// }
												// const buf = bs58.decode(
												// 	res.result.transaction.message.instructions[0].data.toString(
												// 		16
												// 	)
												// );
												// if (
												// 	buf.toString() ===
												// 	`SOL_WALLET_${walletTo}_TRX_ID_${props.hexString}`
												// ) {
												// 	message.success("Done wallet TRX!");
												// 	clearInterval(int2);
												// }
											});
									});
								});
						}, 10000);
					}
				});
		}, 10000);
	};

	return (
		<Form name="control-hooks" layout="vertical">
			<h2>TON -&gt; SOL</h2>
			{props.btn}
			<Form.Item label="Spend amount (TON)">
				<Input
					value={
						!isNaN(Number(TONAmount)) ? (SOLAmount === "" ? "" : TONAmount) : ""
					}
					onChange={(e) => {
						if (
							(Number(e.target.value) * props.tu) / props.su <
							Number(TonWeb.utils.fromNano(Number(props.SOLMaxAmount))) * 0.8
						) {
							setSOLAmount(
								((Number(e.target.value) * props.tu) / props.su).toFixed(6)
							);
							setTONAmount(e.target.value);
						} else {
							message.error(
								"Set less, than " +
									(
										(0.8 *
											Number(
												TonWeb.utils.fromNano(Number(props.SOLMaxAmount))
											) *
											props.su) /
										props.tu
									).toFixed(6) +
									" TON",
								10
							);
						}
					}}
					placeholder={"0.000000"}
				/>
			</Form.Item>
			<Form.Item label="Get amount (SOL)">
				<Input
					onChange={(e) => {
						if (
							Number(e.target.value) <
							0.8 * Number(TonWeb.utils.fromNano(Number(props.SOLMaxAmount)))
						) {
							setSOLAmount(e.target.value);
							setTONAmount(
								((Number(e.target.value) * props.su) / props.tu).toFixed(6)
							);
						} else {
							message.error(
								"Set less, than " +
									Number(
										(
											0.8 *
											Number(TonWeb.utils.fromNano(Number(props.SOLMaxAmount)))
										).toFixed(6)
									) +
									" SOL",
								10
							);
						}
					}}
					value={
						!isNaN(Number(SOLAmount)) ? (TONAmount === "" ? "" : SOLAmount) : ""
					}
					placeholder={"0.000000"}
				/>
			</Form.Item>
			<Form.Item name="walletTo" label="SOL wallet">
				<span style={{ display: "none" }}>{walletTo}</span>
				<Input
					onChange={(e) => setWalletTo(e.target.value)}
					value={walletTo}
					placeholder={"0x0000...000"}
				/>
			</Form.Item>
			Price TON: {(props.tu / props.su).toFixed(6)} SOL
			<br />
			Amount on our side:{" "}
			{Number(TonWeb.utils.fromNano(Number(props.SOLMaxAmount))).toFixed(6)} SOL
			<br />
			You will get {!!Number(SOLAmount) ? SOLAmount : "0.000000"} SOL
			<Form.Item
				style={{
					margin: "24px 0 0 0",
					filter: !activeBtn ? "grayscale(50%) contrast(50%)" : "",
				}}>
				<span style={{ display: "none" }}>{walletTo}</span>
				<Button type="primary" onClick={makeTrx}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Ton;
