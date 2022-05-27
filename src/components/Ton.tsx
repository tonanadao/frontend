import { useEffect, useState } from "react";
import { message, Form, Input, Button } from "antd";
import TonWeb from "tonweb";
import MakeTONTrx from "../logic/transaction/MakeTONTrx";

const Ton = (props: any) => {
	const isAtom = props.directionNetwork === "cosmos";
	const walletKey = isAtom ? props.ATOMwalletKey : props.SOLwalletKey;
	const secCurrency = isAtom ? props.au : props.su;
	const MaxAmount = isAtom
		? Number(props.ATOMMaxAmount)
		: Number(props.SOLMaxAmount);
	const direction = isAtom ? "ATOM" : "SOL";

	const [walletTo, setWalletTo] = useState<string>(walletKey);
	const [otherAmount, setOtherAmount] = useState<string>("");
	const [TONAmount, setTONAmount] = useState<string>("");
	const activeBtn =
		!!walletTo && !!TONAmount && !props.isload && props.TONwalletKey;

	useEffect(() => {
		setWalletTo(walletKey);
	}, [walletKey]);

	const TONTrx = () =>
		MakeTONTrx(
			activeBtn,
			props.setIsload,
			TONAmount,
			walletTo,
			props.hexString
		);

	useEffect(() => {
		setOtherAmount(
			(((Number(TONAmount) * props.tu) / secCurrency) * 0.975).toFixed(6)
		);
	}, [props.tu, secCurrency]);

	return (
		<Form name="control-hooks" layout="vertical">
			<h2>TON -&gt; {direction}</h2>
			{props.btn}
			<Form.Item label="Spend amount (TON)">
				<Input
					value={
						!isNaN(Number(TONAmount))
							? otherAmount === ""
								? ""
								: TONAmount
							: ""
					}
					onChange={(e) => {
						if (
							(Number(e.target.value) * props.tu) / secCurrency <
							MaxAmount * 0.8
						) {
							setOtherAmount(
								(
									((Number(e.target.value) * props.tu) / secCurrency) *
									0.975
								).toFixed(6)
							);
							setTONAmount(e.target.value);
						} else {
							message.error(
								"Set less, than " +
									((0.8 * MaxAmount * secCurrency) / props.tu).toFixed(6) +
									" TON",
								10
							);
						}
					}}
					placeholder={"0.000000"}
				/>
			</Form.Item>
			<Form.Item label={`Get amount (${direction})`}>
				<Input
					onChange={(e) => {
						if (Number(e.target.value) < 0.8 * MaxAmount) {
							setOtherAmount(e.target.value);
							setTONAmount(
								(
									((Number(e.target.value) * secCurrency) / props.tu) *
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
							? TONAmount === ""
								? ""
								: otherAmount
							: ""
					}
					placeholder={"0.000000"}
				/>
			</Form.Item>
			<Form.Item name="walletTo" label={`${direction} wallet`}>
				<span style={{ display: "none" }}>{walletTo}</span>
				<Input
					onChange={(e) => setWalletTo(e.target.value)}
					value={walletTo}
					placeholder={"0x0000...000"}
				/>
			</Form.Item>
			Price TON: {(props.tu / secCurrency).toFixed(6)} {direction}
			<br />
			Amount on our side: {isAtom
				? 1000000 * MaxAmount
				: MaxAmount.toFixed(6)}{" "}
			{direction}
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
				<Button type="primary" onClick={TONTrx}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Ton;
