import { useEffect, useState } from "react";
import { Form, Input, message, Button } from "antd";
import MakeSOLTrx from "../logic/transaction/MakeSOLTrx";

const Sol = (props: any) => {
	const isAtom = props.directionNetwork === "cosmos";
	const walletKey = isAtom ? props.ATOMwalletKey : props.TONwalletKey;
	const secCurrency = isAtom ? props.au : props.tu;
	const MaxAmount = isAtom
		? Number(props.ATOMMaxAmount)
		: Number(props.TONMaxAmount);
	const direction = isAtom ? "ATOM" : "TON";

	const [walletTo, setWalletTo] = useState<string>(walletKey);
	const [otherAmount, setOtherAmount] = useState<string>("");
	const [SOLAmount, setSOLAmount] = useState<string>("");
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
		setWalletTo(walletKey);
	}, [walletKey]);

	useEffect(() => {
		setOtherAmount(
			(((Number(SOLAmount) * props.su) / secCurrency) * 0.975).toFixed(6)
		);
	}, [props.tu, props.su]);

	return (
		<Form name="control-hooks" layout="vertical">
			<h2>SOL -&gt; {direction}</h2>
			{props.btn}
			<Form.Item label={`Spend amount (SOL)`}>
				<Input
					onChange={(e) => {
						if (
							(Number(e.target.value) * props.su) / secCurrency <
							(0.8 * MaxAmount) / 1000000000
						) {
							setSOLAmount(e.target.value);
							setOtherAmount(
								(
									((Number(e.target.value) * props.su) / secCurrency) *
									0.975
								).toFixed(6)
							);
						} else {
							message.error(
								"Set less, than " +
									(
										(((0.8 * MaxAmount) / 1000000000) * props.tu) /
										props.su
									).toFixed(6) +
									" SOL",
								10
							);
						}
					}}
					value={
						!isNaN(Number(SOLAmount))
							? otherAmount === ""
								? ""
								: SOLAmount
							: ""
					}
					placeholder={"0.000000"}
				/>
			</Form.Item>
			<Form.Item label={`Get amount (${direction})`}>
				<Input
					value={
						!isNaN(Number(otherAmount))
							? SOLAmount === ""
								? ""
								: otherAmount
							: ""
					}
					onChange={(e) => {
						if (Number(e.target.value) < (0.8 * MaxAmount) / 1000000000) {
							setSOLAmount(
								(
									((Number(e.target.value) * secCurrency) / props.su) *
									1.025
								).toFixed(6)
							);
							setOtherAmount(e.target.value);
						} else {
							message.error(
								"Set less, than " +
									((0.8 * MaxAmount) / 1000000000).toFixed(6) +
									" " +
									direction,
								10
							);
						}
					}}
					placeholder={"0.000000"}
				/>
			</Form.Item>
			<Form.Item name="walletTo" label={direction + " wallet"}>
				<span style={{ display: "none" }}>{walletTo}</span>
				<Input
					onChange={(e) => setWalletTo(e.target.value)}
					value={walletTo}
					placeholder={"0x0000...000"}
				/>
			</Form.Item>
			Price SOL: {(props.su / secCurrency).toFixed(6)} {direction}
			<br />
			Amount on our side:{" "}
			{Number(isAtom ? MaxAmount * 1000000 : MaxAmount / 1000000000).toFixed(
				6
			)}{" "}
			{direction}
			<br />
			You will get{" "}
			{!!Number(otherAmount)
				? (Number(otherAmount) * 0.975).toFixed(6)
				: "0.000000"}{" "}
			{direction}
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
