import { useEffect, useState } from "react";
import { message, Form, Input, Button } from "antd";
import MakeNEARTrx from "../logic/transaction/MakeNEARTrx";

const Near = (props: any) => {
	const isAtom = props.directionNetwork === "cosmos";
	const isTon = props.directionNetwork === "ton";
	const walletKey = isAtom
		? props.ATOMwalletKey
		: isTon
		? props.TONwalletKey
		: props.SOLwalletKey;
	const secCurrency = isAtom ? props.au : isTon ? props.tu : props.su;
	const MaxAmount = isAtom
		? Number(props.ATOMMaxAmount)
		: isTon
		? Number(props.TONMaxAmount)
		: Number(props.SOLMaxAmount);
	console.log(MaxAmount);
	const direction = isAtom ? "ATOM" : isTon ? "TON" : "SOL";

	const [walletTo, setWalletTo] = useState<string>(walletKey);
	const [otherAmount, setOtherAmount] = useState<string>("");
	const [NEARAmount, setNEARAmount] = useState<string>("");
	const activeBtn =
		!!walletTo && !!NEARAmount && !props.isload && props.NEARwalletKey;

	useEffect(() => {
		setWalletTo(walletKey);
	}, [walletKey]);

	const NEARTrx = () =>
		MakeNEARTrx(
			activeBtn,
			props.setIsload,
			props.NEARwalletKey,
			NEARAmount,
			walletTo,
			isAtom ? "COSMOS" : isTon ? "TON" : "SOLANA",
			props.hexString
		);

	useEffect(() => {
		setOtherAmount(
			(((Number(NEARAmount) * props.nu) / secCurrency) * 0.975).toFixed(6)
		);
	}, [props.nu, secCurrency]);

	return (
		<Form name="control-hooks" layout="vertical">
			{props.btn}
			<Form.Item label="FROM">
				<Input
					value={
						!isNaN(Number(NEARAmount))
							? otherAmount === ""
								? ""
								: NEARAmount
							: ""
					}
					onChange={(e) => {
						if (
							(Number(e.target.value) * props.nu) / secCurrency <
							MaxAmount * 0.8
						) {
							setOtherAmount(
								(
									((Number(e.target.value) * props.nu) / secCurrency) *
									0.975
								).toFixed(6)
							);
							setNEARAmount(e.target.value);
						} else {
							message.error(
								"Set less, than " +
									((0.8 * MaxAmount * secCurrency) / props.nu).toFixed(6) +
									" NEAR",
								10
							);
						}
					}}
					placeholder={"0.000000"}
				/>
				{props.btnSelectSource}
				{props.btnSource}
			</Form.Item>
			{props.changeDirection}
			<Form.Item label={`TO`}>
				<Input
					onChange={(e) => {
						if (Number(e.target.value) < 0.8 * MaxAmount) {
							setOtherAmount(e.target.value);
							setNEARAmount(
								(
									((Number(e.target.value) * secCurrency) / props.nu) *
									1.025
								).toFixed(6)
							);
						} else {
							message.error(
								`Set less, than ${Number(
									(0.8 * MaxAmount).toFixed(6)
								)} ${direction}`,
								10
							);
						}
					}}
					value={
						!isNaN(Number(otherAmount))
							? NEARAmount === ""
								? ""
								: otherAmount
							: ""
					}
					placeholder={"0.000000"}
				/>
				{props.btnSelectDirection}
				{props.btnDest}
			</Form.Item>
			{/* <Form.Item name="walletTo" label={`${direction} wallet`}>
				<span style={{ display: "none" }}>{walletTo}</span>
				<Input
					onChange={(e) => setWalletTo(e.target.value)}
					value={walletTo}
					placeholder={"0x0000...000"}
				/>
			</Form.Item> */}
			Price NEAR: {(props.nu / secCurrency).toFixed(6)} {direction}
			<br />
			Amount on our side: {MaxAmount} {direction}
			<br />
			You will get{" "}
			{!!Number(otherAmount) ? Number(otherAmount) * 0.975 : "0.000000"}{" "}
			{direction}
			<Form.Item
				style={{
					margin: "24px 0 0 0",
					filter: !activeBtn ? "grayscale(50%) contrast(50%)" : "",
				}}>
				<span style={{ display: "none" }}>{walletTo}</span>
				<Button type="primary" onClick={NEARTrx}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Near;
