import { useEffect, useState } from "react";
import { message, Form, Input, Button } from "antd";

const Ton = (props: any) => {
	const [walletTo, setWalletTo] = useState<string>(props.walletKey);
	const [SOLAmount, setSOLAmount] = useState<string>("");
	const [TONAmount, setTONAmount] = useState<string>("");
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
						(e: any) => e.in_msg.message === `TRX_ID_${hexString}${walletTo}`
					);
					console.log(e.result);
					if (data[0]) {
						const dataObj = {
							trxId: hexString,
							walletTo: walletTo,
							price: props.tu / props.su,
							sarsTarget: "SOL",
						};

						console.log(dataObj);

						const url = `https://us-central1-hoteloffice-293914.cloudfunctions.net/solana_ton_bridge/attr?=${walletTo}/${(
							(Number(TONAmount) * props.tu) /
							props.su
						).toFixed(6)}`;

						fetch(url, {
							method: "POST",
						})
							.then(console.log)
							.then(() => {
								props.sisload(false);
								message.success("Done!");
								clearInterval(int);
							});
					}
				});
		}, 5000);
	};

	return (
		<Form name="control-hooks" layout="vertical">
			<h2>TON -&gt; SOL</h2>
			{props.btn}
			<Form.Item label="Spend amount (TON)">
				<Input
					value={!!Number(TONAmount) ? TONAmount : ""}
					onChange={(e) => {
						setSOLAmount(
							((Number(e.target.value) * props.tu) / props.su).toFixed(6)
						);
						setTONAmount(e.target.value);
					}}
					placeholder={"0.000000"}
				/>
			</Form.Item>
			<Form.Item label="Get amount (SOL)">
				<Input
					onChange={(e) => {
						setSOLAmount(e.target.value);
						setTONAmount(
							((Number(e.target.value) * props.su) / props.tu).toFixed(6)
						);
					}}
					value={!!Number(SOLAmount) ? SOLAmount : ""}
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
			Price TON/SOL: {(props.tu / props.su).toFixed(6)}
			<br />
			You will get {!!Number(SOLAmount) ? SOLAmount : "0.000000"} SOL
			<Form.Item style={{ margin: "24px 0 0 0" }}>
				<a
					href={`ton://transfer/EQAxrdp9z7P73aYWc_CJSb1z_C2fF6cFpyfAUszgtzgc-iCu?amount=${
						+1000000000 * Number(TONAmount)
					}&text=TRX_ID_${hexString}${walletTo}`}>
					<span style={{ display: "none" }}>{walletTo}</span>
					<Button type="primary" onClick={listener}>
						Submit
					</Button>
				</a>
			</Form.Item>
		</Form>
	);
};

export default Ton;
