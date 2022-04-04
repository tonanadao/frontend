import { useEffect, useState } from "react";
import { Form, Input, message, Button } from "antd";
import MakeSOLTrx from "../logic/transaction/MakeSOLTrx";

const Sol = (props: any) => {
	const [walletTo, setWalletTo] = useState<string>(props.TONwalletKey);
	const [SOLAmount, setSOLAmount] = useState<string>("");
	const [TONAmount, setTONAmount] = useState<string>("");
	const activeBtn =
		!!walletTo && !!SOLAmount && !props.isload && props.SOLwalletKey;

	const SOLtrx = () =>
		MakeSOLTrx(
			activeBtn,
			props.setIsload,
			props.connection,
			props.SOLwalletKey,
			walletTo,
			SOLAmount
		);

	useEffect(() => {
		setWalletTo(props.TONwalletKey);
	}, [props.TONwalletKey]);

	useEffect(() => {
		setTONAmount(String(((Number(SOLAmount) * props.su) / props.tu) * 0.975));
	}, [props.tu, props.su]);

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
								(
									((Number(e.target.value) * props.su) / props.tu) *
									0.975
								).toFixed(6)
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
								(
									((Number(e.target.value) * props.tu) / props.su) *
									1.025
								).toFixed(6)
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
			You will get{" "}
			{!!Number(TONAmount)
				? (Number(TONAmount) * 0.975).toFixed(6)
				: "0.000000"}{" "}
			TON
			<Form.Item
				style={{
					margin: "24px 0 0 0",
					filter: !activeBtn ? "grayscale(50%) contrast(50%)" : "",
				}}>
				<Button type="primary" onClick={SOLtrx}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Sol;
