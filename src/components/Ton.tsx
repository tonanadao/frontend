import { useEffect, useState } from "react";
import { message, Form, Input, Button } from "antd";
import TonWeb from "tonweb";

const Ton = (props: any) => {
	const [walletTo, setWalletTo] = useState<string>(props.SOLwalletKey);
	const [SOLAmount, setSOLAmount] = useState<string>("");
	const [TONAmount, setTONAmount] = useState<string>("");

	useEffect(() => {
		setWalletTo(props.SOLwalletKey);
	}, [props.SOLwalletKey]);

	const makeTrx = () => {
		//@ts-ignore
		const ton = window.ton;
		ton.send("ton_sendTransaction", [
			{
				to: process.env.REACT_APP_BACK_TON_WALLET,
				value: TonWeb.utils.toNano(Number(TONAmount)).toString(),
				data: `SOL_WALLET_${walletTo}`,
			},
		]);
		listener();
	};

	const listener = () => {
		props.sisload(true);
		const int = setInterval(() => {
			fetch(
				`https://toncenter.com/api/v2/getTransactions?address=${process.env.REACT_APP_BACK_TON_WALLET}&limit=10&to_lt=0&archival=false`
			)
				.then((e) => e.json())
				.then((e) => {
					const data = e.result.filter(
						(e: any) => e.in_msg.message === `SOL_WALLET_${walletTo}`
					);
					if (data[0]) {
						fetch(
							`https://us-central1-hoteloffice-293914.cloudfunctions.net/solana_ton_bridge/attr?=${walletTo}/${(
								(Number(TONAmount) * props.tu) /
								props.su
							).toFixed(6)}`,
							{
								method: "GET",
							}
						)
							.then((e) => e.json)
							.then(() => {
								console.log(e);
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
			<Form.Item label="Get amount (SOL)">
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
			Max amount:{" "}
			{Number(TonWeb.utils.fromNano(Number(props.SOLMaxAmount))).toFixed(6)} SOL
			<br />
			You will get {!!Number(SOLAmount) ? SOLAmount : "0.000000"} SOL
			<Form.Item style={{ margin: "24px 0 0 0" }}>
				<span style={{ display: "none" }}>{walletTo}</span>
				<Button type="primary" onClick={makeTrx}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Ton;
