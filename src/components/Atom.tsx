import { useEffect, useState } from "react";
import { Form, Input, message, Button } from "antd";
import MakeATOMTrx from "../logic/transaction/MakeATOMTrx";

const Atom = (props: any) => {
	const [walletTo, setWalletTo] = useState<string>(props.TONwalletKey);
	const [ATOMAmount, setATOMAmount] = useState<string>("");
	const [TONAmount, setTONAmount] = useState<string>("");
	const activeBtn =
		!!walletTo && !!ATOMAmount && !props.isload && props.ATOMwalletKey;

	const ATOMtrx = () =>
		MakeATOMTrx(
			activeBtn,
			props.setIsload,
			props.connection,
			props.ATOMwalletKey,
			walletTo,
			ATOMAmount
		);

	useEffect(() => {
		setWalletTo(props.TONwalletKey);
	}, [props.TONwalletKey]);

	useEffect(() => {
		setTONAmount(String(((Number(ATOMAmount) * props.su) / props.tu) * 0.975));
	}, [props.tu, props.su]);

	return (
		<Form name="control-hooks" layout="vertical">
			<h2>ATOM -&gt; TON</h2>
			{props.btn}
			<Form.Item label="Spend amount (ATOM)">
				<Input
					onChange={(e) => {
						if (
							(Number(e.target.value) * props.su) / props.tu <
							(0.8 * Number(props.TONMaxAmount)) / 1000000000
						) {
							setATOMAmount(e.target.value);
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
									" Atom",
								10
							);
						}
					}}
					value={
						!isNaN(Number(ATOMAmount)) ? (TONAmount === "" ? "" : ATOMAmount) : ""
					}
					placeholder={"0.000000"}
				/>
			</Form.Item>
			<Form.Item label="Get amount (TON)">
				<Input
					value={
						!isNaN(Number(TONAmount)) ? (ATOMAmount === "" ? "" : TONAmount) : ""
					}
					onChange={(e) => {
						if (
							Number(e.target.value) <
							(0.8 * Number(props.TONMaxAmount)) / 1000000000
						) {
							setATOMAmount(
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
			Price ATOM: {(props.su / props.tu).toFixed(6)} TON
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
				<Button type="primary" onClick={ATOMtrx}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Atom;
