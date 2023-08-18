import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { message } from "antd";
const bs58 = require("bs58");
const { Buffer } = require("buffer");
const web3 = require("@solana/web3.js");
const axios = require("axios").default;

const MakeSOLTrx = async (
	activeBtn: any,
	setIsload: any,
	connection: any,
	SOLwalletKey: any,
	walletTo: any,
	netTo: string,
	SOLAmount: any,
	isTestNet: boolean
) => {
	if (activeBtn) {
		setIsload(true);

		let recentBlockhash = await connection.getRecentBlockhash();
		let allocateTransaction = new web3.Transaction({
			recentBlockhash: recentBlockhash.blockhash,
			feePayer: new PublicKey(SOLwalletKey),
		});

		const instructionMessage = await new TransactionInstruction({
			keys: [],
			programId: new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"), 
			data: Buffer.from(`${netTo}#${walletTo}`),
		});

		const instructionTransfer = web3.SystemProgram.transfer({
			fromPubkey: new PublicKey(SOLwalletKey),
			toPubkey: new PublicKey(isTestNet ? process.env.REACT_APP_BACK_SOL_TESTNET_WALLET as string : process.env.REACT_APP_BACK_SOL_WALLET as string), //todo testnet
			lamports: Number(SOLAmount) * 1000000000,
		});
		allocateTransaction.add(instructionMessage).add(instructionTransfer);
		//@ts-ignore
		const { signature } = await window.solana.signAndSendTransaction(
			allocateTransaction
		);
		await connection.confirmTransaction(signature);
		const int = setInterval(() => {
			const net = isTestNet ? "devnet" : "mainnet";
			fetch(
				`https://solana-${net}.g.alchemy.com/v2/B9sqdnSJnFWSdKlCTFqEQjMr8pnj7RAb`,
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
						params: [signature, "json"],
					}),
				}
			)
				.then((res) => res.json())
				.then(async (res) => {
					message.success("Wait BE trx pending...", 2);

					if (res.result == null) {
						return false;
					}
					const buf = bs58.decode(
						res.result.transaction.message.instructions[0].data.toString(16)
					);
					if (buf.toString() === `${netTo}#${walletTo}`) {
						fetch(
							process.env.REACT_APP_STATE === "dev"
								? "http://localhost:8092"
								: process.env.REACT_APP_STATE === "dev-remote" || isTestNet
									? "https://dev.api.tonana.org"
									: "https://api.tonana.org/",
							{
								method: "POST",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify({
									hash: signature,
									sourceChain: "solana",
								}),
							}
						);
						clearInterval(int);
						setIsload(false);
						message.success("Done trx!", 10);
					}
				});
		}, 5000);
	} else {
		message.error("Fill all forms and connect wallets!", 10);
	}
};

export default MakeSOLTrx;
