import { useEffect, useState } from "react";
import { Form, Input, message, Button } from "antd";
import MakeATOMTrx from "../logic/transaction/MakeATOMTrx";

const Atom = (props: any) => {
	const isSol = props.directionNetwork === "sol";
	const walletKey = isSol ? props.SOLwalletKey : props.TONwalletKey;
	const secCurrency = isSol ? props.su : props.tu;
	const maxAmount = Number(
		isSol
			? Number(props.SOLMaxAmount * 10).toFixed(6)
			: (Number(props.TONMaxAmount) / 1000000000).toFixed(6)
	);
	const direction = isSol ? "SOL" : "TON";

	const [walletTo, setWalletTo] = useState<string>(walletKey);
	const [ATOMAmount, setATOMAmount] = useState<string>("");
	const [otherAmount, setOtherAmount] = useState<string>("");
	const activeBtn =
		!!walletTo && !!ATOMAmount && !props.isload && props.ATOMwalletKey;
	console.log(props);
	const ATOMtrx = () =>
		MakeATOMTrx(
			activeBtn,
			props.setIsload,
			props.connection,
			props.ATOMwalletKey,
			walletTo,
			direction,
			ATOMAmount
		);

	useEffect(() => {
		setWalletTo(walletKey);
	}, [walletKey]);

	useEffect(() => {
		setOtherAmount(
			String(((Number(ATOMAmount) * props.au) / secCurrency) * 0.975)
		);
	}, [secCurrency, props.au]);

	return (
		<Form name="control-hooks" layout="vertical">
			<h2>ATOM -&gt; {direction}</h2>
			{props.btn}
			<Form.Item label="Spend amount (ATOM)">
				<Input
					onChange={(e) => {
						if (
							(Number(e.target.value) * props.au) / secCurrency <
							0.8 * maxAmount
						) {
							setATOMAmount(e.target.value);
							setOtherAmount(
								(
									((Number(e.target.value) * props.au) / secCurrency) *
									0.975
								).toFixed(6)
							);
						} else {
							message.error(
								"Set less, than " +
									((0.8 * maxAmount * secCurrency) / props.au).toFixed(6) +
									" ATOM",
								10
							);
						}
					}}
					value={
						!isNaN(Number(ATOMAmount))
							? otherAmount === ""
								? ""
								: ATOMAmount
							: ""
					}
					placeholder={"0.000000"}
				/>
			</Form.Item>
			<Form.Item label={"Get amount (" + direction + ")"}>
				<Input
					value={
						!isNaN(Number(otherAmount))
							? ATOMAmount === ""
								? ""
								: otherAmount
							: ""
					}
					onChange={(e) => {
						if (Number(e.target.value) < 0.8 * maxAmount) {
							setATOMAmount(
								(
									((Number(e.target.value) * secCurrency) / props.au) *
									1.025
								).toFixed(6)
							);
							setOtherAmount(e.target.value);
						} else {
							message.error(
								"Set less, than " +
									(0.8 * maxAmount).toFixed(6) +
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
			Price ATOM: {(props.au / secCurrency).toFixed(6)} {direction}
			<br />
			Amount on our side: {maxAmount} {direction}
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
				<Button type="primary" onClick={ATOMtrx}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Atom;
