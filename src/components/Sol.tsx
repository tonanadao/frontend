import { useEffect, useState } from "react";
import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { Form, Input, message, Button } from "antd";
const bs58 = require("bs58");
const { Buffer } = require("buffer");
const web3 = require("@solana/web3.js");
const axios = require("axios").default;

const Sol = (props: any) => {
	const [walletTo, setWalletTo] = useState<string>(props.TONwalletKey);
	const [SOLAmount, setSOLAmount] = useState<string>("");
	const [TONAmount, setTONAmount] = useState<string>("");
	const activeBtn =
		!!walletTo && !!SOLAmount && !props.isload && props.SOLwalletKey;

	useEffect(() => {
		setWalletTo(props.TONwalletKey);
	}, [props.TONwalletKey]);

	const trxfnc = async () => {
		if (activeBtn) {
			props.sisload(true);
			let connection = props.connection;
			let recentBlockhash = await connection.getRecentBlockhash();
			let allocateTransaction = new web3.Transaction({
				recentBlockhash: recentBlockhash.blockhash,
				feePayer: new PublicKey(props.SOLwalletKey),
			});

			const instructionMessage = await new TransactionInstruction({
				keys: [],
				programId: new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
				data: Buffer.from(`TON_WALLET_${walletTo}`),
			});
			const instructionTransfer = web3.SystemProgram.transfer({
				fromPubkey: new PublicKey(props.SOLwalletKey),
				toPubkey: new PublicKey(
					process.env.REACT_APP_BACK_SOL_WALLET as string
				),
				lamports: Number(SOLAmount) * 1000000000,
			});
			allocateTransaction.add(instructionMessage).add(instructionTransfer);
			//@ts-ignore
			const { signature } = await window.solana.signAndSendTransaction(
				allocateTransaction
			);
			message.success("Wait BE trx pending...", 2);
			await connection.confirmTransaction(signature);
			const int = setInterval(() => {
				fetch("https://api.mainnet-beta.solana.com/", {
					method: "POST",
					headers: {
						Accept: "application/json, text/plain, */*",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						jsonrpc: "2.0",
						id: 1,
						method: "getTransaction",
						params: [signature, "json"],
					}),
				})
					.then((res) => res.json())
					.then(async (res) => {
						if (res.result == null) {
							console.log("res: null ");
							return false;
						}
						const buf = bs58.decode(
							res.result.transaction.message.instructions[0].data.toString(16)
						);
						if (buf.toString() === `TON_WALLET_${walletTo}`) {
							clearInterval(int);
							message.success("Done BE trx!", 10);

							axios.get(
								`https://us-central1-hoteloffice-293914.cloudfunctions.net/ton_solana_bridge/attr?=${signature}`
							);

							const int2 = setInterval(() => {
								message.success("Wallet trx pending...", 2);

								fetch(
									`https://toncenter.com/api/v2/getTransactions?address=${process.env.REACT_APP_BACK_TON_WALLET}&limit=10&to_lt=0&archival=false`
								)
									.then((e: any) => e.json())
									.then((e: any) => {
										console.log(e.result);
										const data = e.result.filter((e: any) =>
											e.out_msgs[0]
												? e.out_msgs[0].message === signature
												: false
										);
										if (data[0]) {
											clearInterval(int2);
											props.sisload(false);
											message.success("Done wallet trx, check it!", 10);
										}
									});
							}, 10000);
						}
					});
			}, 5000);
		} else {
			message.error("Fill all forms and connect wallets!", 10);
		}
	};

	return (
		<Form name="control-hooks" layout="vertical">
			<h2>SOL -&gt; TON</h2>
			{props.btn}
			<Form.Item label="Spend amount (SOL)">
				<Input
					onChange={(e) => {
						if (
							(Number(e.target.value) * props.su) / props.tu <
							(0.8 * Number(props.TONMaxAmount)) / 1000000000
						) {
							setSOLAmount(e.target.value);
							setTONAmount(
								((Number(e.target.value) * props.su) / props.tu).toFixed(6)
							);
						} else {
							message.error(
								"Set less, than " +
									(
										(((0.8 * Number(props.TONMaxAmount)) / 1000000000) *
											props.tu) /
										props.su
									).toFixed(6) +
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
			<Form.Item label="Get amount (TON)">
				<Input
					value={
						!isNaN(Number(TONAmount)) ? (SOLAmount === "" ? "" : TONAmount) : ""
					}
					onChange={(e) => {
						if (
							Number(e.target.value) <
							(0.8 * Number(props.TONMaxAmount)) / 1000000000
						) {
							setSOLAmount(
								((Number(e.target.value) * props.tu) / props.su).toFixed(6)
							);
							setTONAmount(e.target.value);
						} else {
							message.error(
								"Set less, than " +
									((0.8 * Number(props.TONMaxAmount)) / 1000000000).toFixed(6) +
									" TON",
								10
							);
						}
					}}
					placeholder={"0.000000"}
				/>
			</Form.Item>
			<Form.Item name="walletTo" label="TON wallet">
				<span style={{ display: "none" }}>{walletTo}</span>
				<Input
					onChange={(e) => setWalletTo(e.target.value)}
					value={walletTo}
					placeholder={"0x0000...000"}
				/>
			</Form.Item>
			Price SOL: {(props.su / props.tu).toFixed(6)} TON
			<br />
			Amount on our side: {(Number(props.TONMaxAmount) / 1000000000).toFixed(
				6
			)}{" "}
			TON
			<br />
			You will get {!!Number(TONAmount) ? TONAmount : "0.000000"} TON
			<Form.Item
				style={{
					margin: "24px 0 0 0",
					filter: !activeBtn ? "grayscale(50%) contrast(50%)" : "",
				}}>
				<Button type="primary" onClick={trxfnc}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Sol;
