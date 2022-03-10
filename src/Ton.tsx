import { useEffect, useState } from "react";
import { message, Form, Input, Button, Select, Alert } from "antd";
import web3, {
	SystemProgram,
	PublicKey,
	Transaction,
	LAMPORTS_PER_SOL,
	Connection,
	clusterApiUrl,
} from "@solana/web3.js";
const { Option } = Select;

function Ton(props: any) {
	const [walletTo, setWalletTo] = useState<string>(props.walletKey);
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

	const listener = () => {
		props.sisload(true);
		const int = setInterval(() => {
			fetch(
				"https://testnet.toncenter.com/api/v2/getTransactions?address=EQAxrdp9z7P73aYWc_CJSb1z_C2fF6cFpyfAUszgtzgc-iCu&limit=10&to_lt=0&archival=false"
			)
				.then((e) => e.json())
				.then((e) => {
					const data = e.result.filter(
						(e: any) =>
							e.in_msg.message === `TRX_ID_${hexString}${props.walletKey}`
					);
					console.log(e.result);
					if (data[0]) {
						props.sisload(false);
						message.success("Done!");
						clearInterval(int);

						const data = {
							trxId: hexString,
							walletTo: props.walletKey,
							price: props.tu / props.su,
							sarsTarget: "SOL",
						};

						fetch(
							"https://us-central1-hoteloffice-293914.cloudfunctions.net/solana_ton_bridge/attr?=" +
								props.walletKey +
								"/" +
								((Number(amount) * props.tu) / props.su).toFixed(2),
							{
								method: "POST",
							}
						)
							.then(console.log)
							.then(() => {
								// props.sisload(false);
								// message.success("Done!");
								clearInterval(int);
							});
					}
				});
		}, 5000);
	};

	return (
		<div className="App">
			<Form name="control-hooks" layout="vertical">
				<h2>TON -&gt; SOL</h2>
				{props.btn}
				<Form.Item name="amount" label="Amount (TON)">
					<Input
						onChange={(e) => setAmount(e.target.value)}
						placeholder={"0.00"}
					/>
				</Form.Item>
				<Form.Item name="walletTo" label="SOL wallet">
					<span style={{ display: "none" }}>{props.walletKey}</span>
					<Input
						onChange={(e) => setWalletTo(e.target.value)}
						value={props.walletKey}
						placeholder={"0x0000...000"}
					/>
				</Form.Item>
				Price TON/SOL: {(props.tu / props.su).toFixed(2)}
				<br />
				You will get {((Number(amount) * props.tu) / props.su).toFixed(2)} SOL
				<Form.Item style={{ margin: "24px 0 0 0" }}>
					<a
						href={`ton://transfer/EQAxrdp9z7P73aYWc_CJSb1z_C2fF6cFpyfAUszgtzgc-iCu?amount=${
							+1000000000 * Number(amount)
						}&text=TRX_ID_${hexString}${props.walletKey}`}>
						<span style={{ display: "none" }}>{props.walletKey}</span>

						<Button type="primary" onClick={listener}>
							Submit
						</Button>
					</a>
				</Form.Item>
			</Form>
		</div>
	);
}

export default Ton;
