import { useEffect, useState } from "react";
import {
	SystemProgram,
	PublicKey,
	Transaction,
	LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import { Form, Input, message, Button } from "antd";

const Sol = (props: any) => {
	const [walletTo, setWalletTo] = useState<string>("");
	const [amount, setAmount] = useState<string>("");
	const [hexString, shexString] = useState("");

	useEffect(() => {
		shexString(
			Array(16)
				.fill("")
				.map(() => Math.round(Math.random() * 0xf).toString(16))
				.join("")
		);
	}, []);

	const trxfnc = async () => {
		if (props.walletKey && walletTo) {
			const transaction = new Transaction();
			const provider = props.getProvider();

			var trx = transaction.add(
				SystemProgram.transfer({
					fromPubkey: new PublicKey(props.walletKey),
					toPubkey: new PublicKey(
						"CTvNC2kCAxkMgwdySxz8WeQenEw7zGdApo253NMyPbPR"
					),
					lamports: LAMPORTS_PER_SOL * Number(amount),
				})
			);

			trx.feePayer = await new PublicKey(props.walletKey);
			let blockhashObj = await props.connection.getRecentBlockhash();
			trx.recentBlockhash = await blockhashObj.blockhash;

			if (provider) {
				let signed = await provider.signTransaction(trx);
				let signature = await props.connection.sendRawTransaction(
					signed.serialize()
				);
				const trxdata = await props.connection.confirmTransaction(signature);
				console.log("trxdata: ", trxdata);

				const data = {
					trxId: hexString,
					walletTo: walletTo,
					price: props.su / props.tu,
					sarsTarget: "TON",
				};

				fetch(
					"https://us-central1-hoteloffice-293914.cloudfunctions.net/solana_ton_bridge",
					{
						method: "POST",
						body: JSON.stringify(data),
					}
				)
					.then(console.log)
					.then(() => {
						props.sisload(false);
						message.success("Done!");
					});
			}
		}
	};

	return (
		<Form name="control-hooks" layout="vertical">
			<h2>SOL -&gt; TON</h2>
			{props.btn}
			<Form.Item name="amount" label="Amount (SOL)">
				<Input
					onChange={(e) => setAmount(e.target.value)}
					placeholder={"0.00"}
				/>
			</Form.Item>
			<Form.Item name="walletTo" label="TON wallet">
				<Input
					onChange={(e) => setWalletTo(e.target.value)}
					placeholder={"0x0000...000"}
				/>
			</Form.Item>
			Price SOL/TON: {(props.su / props.tu).toFixed(2)}
			<br />
			You will get {((Number(amount) * props.su) / props.tu).toFixed(2)} TON
			<Form.Item style={{ margin: "24px 0 0 0" }}>
				<Button type="primary" onClick={trxfnc}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Sol;
