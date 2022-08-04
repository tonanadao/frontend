import { useEffect, useState } from "react";
import { Form, Input, message, Button } from "antd";
import MakeATOMTrx from "../logic/transaction/MakeATOMTrx";

const Atom = (props: any) => {
	const isSol = props.directionNetwork === "sol";
	const isNear = props.directionNetwork === "near";

	const walletKey = isSol
		? props.SOLwalletKey
		: isNear
		? props.NEARwalletKey
		: props.TONwalletKey;
	const secCurrency = isSol ? props.su : isNear ? props.nu : props.tu;
	// const MaxAmount = Number(
	// 	isSol
	// 		? Number(props.SOLMaxAmount * 10).toFixed(6)
	// 		: (Number(props.TONMaxAmount) / 1000000000).toFixed(6)
	// );

	const MaxAmount = isSol
		? Number(props.SOLMaxAmount)
		: // ? Number(props.ATOMMaxAmount) * 1000000
		isNear
		? Number(props.NEARMaxAmount)
		: Number(props.TONwalletKey);

	const direction = isSol ? "SOL" : isNear ? "NEAR" : "TON";

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
			isSol ? "SOLANA" : isNear ? "NEAR" : "TON",
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
			{props.btn}
			<Form.Item label="FROM">
				<Input
					onChange={(e) => {
						if (
							(Number(e.target.value) * props.au) / secCurrency <
							0.8 * MaxAmount
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
									((0.8 * MaxAmount * secCurrency) / props.au).toFixed(6) +
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
				{props.btnSelectSource}
				{props.btnSource}
			</Form.Item>
			{props.changeDirection}
			<Form.Item label={"TO"}>
				<Input
					value={
						!isNaN(Number(otherAmount))
							? ATOMAmount === ""
								? ""
								: otherAmount
							: ""
					}
					onChange={(e) => {
						if (Number(e.target.value) < 0.8 * MaxAmount) {
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
									(0.8 * MaxAmount).toFixed(6) +
									" " +
									direction,
								10
							);
						}
					}}
					placeholder={"0.000000"}
				/>
				{props.btnSelectDirection}
				{props.btnDest}
			</Form.Item>
			{/* <Form.Item name="walletTo" label={direction + " wallet"}>
				<span style={{ display: "none" }}>{walletTo}</span>
				<Input
					onChange={(e) => setWalletTo(e.target.value)}
					value={walletTo}
					placeholder={"0x0000...000"}
				/>
			</Form.Item> */}
			Price ATOM: {(props.au / secCurrency).toFixed(6)} {direction}
			<br />
			Amount on our side: {MaxAmount} {direction}
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
