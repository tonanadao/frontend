import { useEffect, useState } from "react";
import {
	SystemProgram,
	PublicKey,
	Transaction,
	LAMPORTS_PER_SOL,
	Message,
	TransactionInstruction,
} from "@solana/web3.js";
import { Form, Input, message, Button } from "antd";
const bs58 = require("bs58");
const { struct, u32, ns64 } = require("@solana/buffer-layout");
const { Buffer } = require("buffer");
const web3 = require("@solana/web3.js");
const nacl = require("tweetnacl");

const Sol = (props: any) => {
	const [walletTo, setWalletTo] = useState<string>(props.TONwalletKey);
	const [SOLAmount, setSOLAmount] = useState<string>("");
	const [TONAmount, setTONAmount] = useState<string>("");

	useEffect(() => {
		setWalletTo(props.TONwalletKey);
	}, [props.TONwalletKey]);

	const trxfnc = async () => {
		if (props.SOLwalletKey && walletTo && SOLAmount) {
			props.sisload(true);
			let connection = props.connection;
			let recentBlockhash = await connection.getRecentBlockhash();
			let allocateTransaction = new web3.Transaction({
				recentBlockhash: recentBlockhash.blockhash,
				feePayer: new PublicKey(props.SOLwalletKey),
			});
			let keys = [
				{
					pubkey: new PublicKey(props.SOLwalletKey),
					isSigner: true,
					isWritable: true,
				},
				{
					pubkey: new PublicKey(
						process.env.REACT_APP_BACK_SOL_WALLET as string
					),
					isSigner: false,
					isWritable: true,
				},
			];
			const instructionMessage = await new TransactionInstruction({
				keys: keys,
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
			await connection.confirmTransaction(signature);
			const int = setInterval(() => {
				fetch("https://api.devnet.solana.com/", {
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
							fetch(
								`https://us-central1-hoteloffice-293914.cloudfunctions.net/solana_ton_bridge/attr?=${walletTo}/${TONAmount}/${signature}`,
								{
									method: "GET",
								}
							)
								.then(console.log)
								.then(() => {
									props.sisload(false);
									message.success("Done!");
									clearInterval(int);
								});
						}
					});
			}, 5000);
		}
	};

	return (
		<Form name="control-hooks" layout="vertical">
			<h2>SOL -&gt; TON</h2>
			{props.btn}
			<Form.Item label="Spend amount (SOL)">
				<Input
					onChange={(e) => {
						setSOLAmount(e.target.value);
						setTONAmount(
							((Number(e.target.value) * props.su) / props.tu).toFixed(6)
						);
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
						setSOLAmount(
							((Number(e.target.value) * props.tu) / props.su).toFixed(6)
						);
						setTONAmount(e.target.value);
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
			Max amount: {(Number(props.TONMaxAmount) / 1000000000).toFixed(6)} TON
			<br />
			You will get {!!Number(TONAmount) ? TONAmount : "0.000000"} TON
			<Form.Item style={{ margin: "24px 0 0 0" }}>
				<Button type="primary" onClick={trxfnc}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Sol;

// await web3.sendAndConfirmTransaction(connection, allocateTransaction, [
// 	payer,
// 	keypair,
// ]);

// const allocateTransaction = new Transaction();
// allocateTransaction.fromPubkey = new PublicKey(props.SOLwalletKey);
// allocateTransaction.toPubkey = new PublicKey(
// 	"CTvNC2kCAxkMgwdySxz8WeQenEw7zGdApo253NMyPbPR"
// );
// // allocateTransaction.lamports = LAMPORTS_PER_SOL * Number(SOLAmount);
// let recentBlockhash = await connection.getRecentBlockhash();

// let messageParams = {
// 	accountKeys: [
// 		props.SOLwalletKey.toString(),
// 		"CTvNC2kCAxkMgwdySxz8WeQenEw7zGdApo253NMyPbPR",
// 		web3.SystemProgram.programId.toString(),
// 	],
// 	header: {
// 		numReadonlySignedAccounts: 0,
// 		numReadonlyUnsignedAccounts: 1,
// 		numRequiredSignatures: 1,
// 	},
// 	instructions: [
// 		{
// 			accounts: [0, 1],
// 			data: Buffer.from("layoutFieldslayoutFields", "utf8"),
// 			programIdIndex: 2,
// 		},
// 	],
// 	recentBlockhash,
// };

// console.log("2");
// let message = new web3.Message(messageParams);

// let allocateTransaction = new web3.Transaction({
// 	recentBlockhash: recentBlockhash.blockhash,
// 	feePayer: new PublicKey(props.SOLwalletKey),
// }).populate(message, [props.SOLwalletKey.toString()]);
// let keys = [
// 	{
// 		pubkey: new PublicKey(props.SOLwalletKey),
// 		isSigner: true,
// 		isWritable: true,
// 	},
// ];
// let params = { TRX_ID: `${hexString}${walletTo}` };

// let allocateStruct = {
// 	index: 8,
// 	layout: struct([u32("instruction"), ns64("space")]),
// };

// console.log("2");

// let data = Buffer.alloc(allocateStruct.layout.span);

// let layoutFields = Object.assign(
// 	{ instruction: allocateStruct.index },
// 	params
// );
// // const msg = new Message([new PublicKey(props.SOLwalletKey)], )
// console.log("2");

// let messageParams = {
// 	accountKeys: [
// 		props.SOLwalletKey.toString(),
// 		"CTvNC2kCAxkMgwdySxz8WeQenEw7zGdApo253NMyPbPR",
// 		web3.SystemProgram.programId.toString(),
// 	],
// 	header: {
// 		numReadonlySignedAccounts: 0,
// 		numReadonlyUnsignedAccounts: 1,
// 		numRequiredSignatures: 1,
// 	},
// 	instructions: [
// 		{
// 			accounts: [0, 1],
// 			data: Buffer.from("layoutFieldslayoutFields", "utf8"),
// 			programIdIndex: 2,
// 		},
// 	],
// 	recentBlockhash,
// };

// console.log("2");
// let message = new web3.Message(messageParams);

// allocateStruct.layout.encode(layoutFields, data);
// allocateTransaction.add(trxIn);
// console.log(allocateStruct);
// console.log(message);
// allocateTransaction.add(
// 	new web3.TransactionInstruction({
// 		keys,
// 		programId: web3.SystemProgram.programId,
// 	})
// );

// //@ts-ignore
// const { signature } = await window.solana.request({
// 	method: "signAndSendTransaction",
// 	params: {
// 		message: bs58.encode(allocateTransaction.serializeMessage()),
// 	},
// });
// console.log(signature);
// await connection.confirmTransaction(signature);

// console.log(signature);

// const provider = props.getProvider();

// let signed = await provider.signTransaction(allocateTransaction);
// console.log("signed: ", signed);
// let signature = await connection.sendRawTransaction(signed.serialize());
// console.log("signature: ", signature);
// const trxdata = await connection.confirmTransaction(signature);
// console.log(trxdata);
// console.log(allocateTransaction);
// let transactionBuffer = allocateTransaction.serializeMessage();
// console.log("transactionBuffer: ", transactionBuffer);
// await web3.sendAndConfirmTransaction(connection, allocateTransaction, [payer, keypair]);
// console.log(Buffer.from("layoutFieldslayoutFields", "utf8"));
// console.log(allocateTransaction);			// allocateTransaction.add(
// 	web3.SystemProgram.transfer({
// 		fromPubkey: new PublicKey(props.SOLwalletKey),
// 		toPubkey: new PublicKey(walletTo),
// 		lamports: 1000,
// 	})
// );
// let signature = nacl.sign.detached(transactionBuffer, payer.secretKey);

// manualTransaction.addSignature(payer.publicKey, signature);

// let isVerifiedSignature = manualTransaction.verifySignatures();
// console.log(`The signatures were verifed: ${isVerifiedSignature}`);

// The signatures were verified: true

// let signed = await props.connection.signTransaction(transactionBuffer);
// let signature = await props.connection.sendRawTransaction(
// 	signed.serialize()
// );
// const trxdata = await props.connection.confirmTransaction(signature);
// console.log("trxdata: ", trxdata);

// await web3.sendAndConfirmTransaction(connection, allocateTransaction, [new PublicKey(props.SOLwalletKey), keypair])

// const transaction = new Transaction();
// const provider = props.getProvider();
// const trxIn = SystemProgram.transfer({
// 	fromPubkey: new PublicKey(props.SOLwalletKey),
// 	toPubkey: new PublicKey("CTvNC2kCAxkMgwdySxz8WeQenEw7zGdApo253NMyPbPR"),
// 	lamports: LAMPORTS_PER_SOL * Number(SOLAmount),
// });
// trxIn.data = Buffer.from("Test Signing Message ", "utf8");
// console.log(trxIn);
// var trx = transaction.add(trxIn);
// console.log(trx);
// trx.feePayer = await new PublicKey(props.SOLwalletKey);
// let blockhashObj = await props.connection.getRecentBlockhash();
// trx.recentBlockhash = await blockhashObj.blockhash;
