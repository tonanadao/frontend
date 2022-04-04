import { useEffect, useState } from "react";
import { message, Form, Input, Button } from "antd";
import TonWeb from "tonweb";
import MakeTONTrx from "../logic/transaction/MakeTONTrx";

const Ton = (props: any) => {
	const [walletTo, setWalletTo] = useState<string>(props.SOLwalletKey);
	const [SOLAmount, setSOLAmount] = useState<string>("");
	const [TONAmount, setTONAmount] = useState<string>("");
	const activeBtn =
		!!walletTo && !!TONAmount && !props.isload && props.TONwalletKey;

	useEffect(() => {
		setWalletTo(props.SOLwalletKey);
	}, [props.SOLwalletKey]);

	const TONTrx = () =>
		MakeTONTrx(
			activeBtn,
			props.setIsload,
			TONAmount,
			walletTo,
			props.hexString
		);

	useEffect(() => {
		setSOLAmount(String(((Number(TONAmount) * props.tu) / props.su) * 0.975));
	}, [props.tu, props.su]);

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
						if (
							(Number(e.target.value) * props.tu) / props.su <
							Number(TonWeb.utils.fromNano(Number(props.SOLMaxAmount))) * 0.8
						) {
							setSOLAmount(
								(
									((Number(e.target.value) * props.tu) / props.su) *
									0.975
								).toFixed(6)
							);
							setTONAmount(e.target.value);
						} else {
							message.error(
								"Set less, than " +
									(
										(0.8 *
											Number(
												TonWeb.utils.fromNano(Number(props.SOLMaxAmount))
											) *
											props.su) /
										props.tu
									).toFixed(6) +
									" TON",
								10
							);
						}
					}}
					placeholder={"0.000000"}
				/>
			</Form.Item>
			<Form.Item label="Get amount (SOL)">
				<Input
					onChange={(e) => {
						if (
							Number(e.target.value) <
							0.8 * Number(TonWeb.utils.fromNano(Number(props.SOLMaxAmount)))
						) {
							setSOLAmount(e.target.value);
							setTONAmount(
								(
									((Number(e.target.value) * props.su) / props.tu) *
									1.025
								).toFixed(6)
							);
						} else {
							message.error(
								"Set less, than " +
									Number(
										(
											0.8 *
											Number(TonWeb.utils.fromNano(Number(props.SOLMaxAmount)))
										).toFixed(6)
									) +
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
			Amount on our side:{" "}
			{Number(TonWeb.utils.fromNano(Number(props.SOLMaxAmount))).toFixed(6)} SOL
			<br />
			You will get{" "}
			{!!Number(SOLAmount) ? Number(SOLAmount) * 0.975 : "0.000000"} SOL
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
