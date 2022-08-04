import { useEffect, useState } from "react";
import { Form, Input, message, Button } from "antd";
import MakeSOLTrx from "../logic/transaction/MakeSOLTrx";
import MakeNEARTrx from "../logic/transaction/MakeNEARTrx";
import MakeTONTrx from "../logic/transaction/MakeTONTrx";
import MakeATOMTrx from "../logic/transaction/MakeATOMTrx";

// au,
// su,
// tu,
// nu,
// ATOMwalletKey,
// SOLwalletKey,
// TONwalletKey,
// NEARwalletKey,
// ATOMMaxAmount,
// SOLMaxAmount,
// TONMaxAmount,
// NEARMaxAmount,
// btnSelectSource,
// btnSelectDirection,
// btnDest,
// btnSource,
// setIsload,
// isload,
// hexString,
// changeDirection,
// directionNetwork
// networkSource

const SwapForm = (props: any) => {
	const isDirAtom = props.directionNetwork === "cosmos";
	const isDirNear = props.directionNetwork === "near";
	const isDirSol = props.directionNetwork === "solana";
	const isDirTon = props.directionNetwork === "ton";

	const isSouAtom = props.networkSource === "cosmos";
	const isSouNear = props.networkSource === "near";
	const isSouSol = props.networkSource === "solana";
	const isSouTon = props.networkSource === "ton";

	const walletDirKey = isDirAtom
		? props.ATOMwalletKey
		: isDirNear
		? props.NEARwalletKey
		: isDirTon
		? props.TONwalletKey
		: isDirSol
		? props.SOLwalletKey
		: null;

	const walletSouKey = isSouAtom
		? props.ATOMwalletKey
		: isSouNear
		? props.NEARwalletKey
		: isSouTon
		? props.TONwalletKey
		: isSouSol
		? props.SOLwalletKey
		: null;

	const secCurrency = isDirAtom
		? props.au
		: isDirNear
		? props.nu
		: isDirTon
		? props.tu
		: isSouSol
		? props.su
		: null;

	const currency = isSouAtom
		? props.au
		: isSouNear
		? props.nu
		: isSouTon
		? props.tu
		: isSouSol
		? props.su
		: null;

	// const MaxAmount = Number(
	// 	isAtom
	// 		? (Number(props.ATOMMaxAmount) * 1000000).toFixed(6)
	// 		: (Number(props.TONMaxAmount) / 1000000000).toFixed(6)
	// );

	// const MaxAmount = isAtom
	// 	? Number(props.ATOMMaxAmount)
	// 	: // ? Number(props.ATOMMaxAmount) * 1000000
	// 	isNear
	// 	? Number(props.NEARMaxAmount)
	// 	: Number(props.TONwalletKey);

	const MaxDirAmount = Number(
		isDirAtom
			? props.ATOMMaxAmount
			: isDirNear
			? props.NEARMaxAmount
			: isDirTon
			? props.TONwalletKey
			: isSouSol
			? props.SOLwalletKey
			: null
	);

	const TRXDir = props.directionNetwork.toUpperCase();

	const sourceCurrencyName = isSouAtom
		? "ATOM"
		: isSouNear
		? "NEAR"
		: isSouTon
		? "TON"
		: isSouSol
		? "SOL"
		: null;

	const directionCurrencyName = isDirAtom
		? "ATOM"
		: isDirNear
		? "NEAR"
		: isDirTon
		? "TON"
		: isSouSol
		? "SOL"
		: null;

	const [firstCurrAmount, setFirstCurrAmount] = useState<number>(0);
	const [secCurrAmount, setSecCurrAmount] = useState<number>(0);

	const activeBtn =
		!!walletDirKey && !!firstCurrAmount && !props.isload && walletSouKey;

	const TONTrx = () =>
		MakeTONTrx(
			activeBtn,
			props.setIsload,
			firstCurrAmount,
			walletDirKey,
			TRXDir,
			props.hexString
		);

	const SOLtrx = () =>
		MakeSOLTrx(
			activeBtn,
			props.setIsload,
			props.connection,
			props.SOLwalletKey,
			walletDirKey,
			TRXDir,
			firstCurrAmount
		);

	const NEARTrx = () =>
		MakeNEARTrx(
			activeBtn,
			props.setIsload,
			props.NEARwalletKey,
			firstCurrAmount,
			walletDirKey,
			TRXDir,

			props.hexString
		);

	const ATOMtrx = () =>
		MakeATOMTrx(
			activeBtn,
			props.setIsload,
			props.connection,
			props.ATOMwalletKey,
			walletDirKey,
			TRXDir,
			firstCurrAmount
		);

	// useEffect(() => {
	// 	setWalletTo(walletKey);
	// }, [walletKey]);

	// ???????
	useEffect(() => {
		setFirstCurrAmount(
			((Number(secCurrAmount) * secCurrency) / currency) * 1.025
		);

		setSecCurrAmount(
			((Number(firstCurrAmount) * currency) / secCurrency) * 0.975
		);
	}, [currency, secCurrency]);

	return (
		<Form name="control-hooks" layout="vertical">
			{props.btn}
			<Form.Item label={`FROM`}>
				<Input
					onChange={(e) => {
						if (
							(Number(e.target.value) * currency) / secCurrency <
							0.8 * MaxDirAmount
						) {
							setFirstCurrAmount(Number(e.target.value));
							setSecCurrAmount(
								((Number(e.target.value) * currency) / secCurrency) * 0.975
							);
						} else {
							message.error(
								`Set less, than ${
									(0.8 * MaxDirAmount * secCurrency) / currency
								} ${sourceCurrencyName}`,
								10
							);
						}
					}}
					value={
						!isNaN(Number(firstCurrAmount))
							? secCurrAmount === 0
								? ""
								: firstCurrAmount
							: ""
					}
					placeholder={"0.000"}
				/>
				{props.btnSelectSource}
				{props.btnSource}
			</Form.Item>
			{props.changeDirection}
			<Form.Item label={`TO`}>
				<Input
					value={
						!isNaN(Number(secCurrAmount))
							? firstCurrAmount === 0
								? ""
								: secCurrAmount
							: ""
					}
					onChange={(e) => {
						if (Number(e.target.value) < 0.8 * MaxDirAmount) {
							setFirstCurrAmount(
								((Number(e.target.value) * secCurrency) / currency) * 1.025
							);
							setSecCurrAmount(Number(e.target.value));
						} else {
							message.error(
								`Set less, than ${0.8 * MaxDirAmount} ${directionCurrencyName}`,
								10
							);
						}
					}}
					placeholder={"0.000"}
				/>
				{props.btnSelectDirection}
				{props.btnDest}
			</Form.Item>
			Price {sourceCurrencyName}: {currency / secCurrency}{" "}
			{directionCurrencyName}
			<br />
			Amount on our side: {MaxDirAmount} {directionCurrencyName}
			{/* <br />
			You will get{" "}
			{!!Number(otherAmount)
				? (Number(otherAmount) * 0.975).toFixed(6)
				: "0.000000"}{" "}
			{direction} */}
			<Form.Item
				style={{
					margin: "24px 0 0 0",
					filter: !activeBtn ? "grayscale(50%) contrast(50%)" : "",
				}}>
				<Button
					type="primary"
					onClick={
						isSouAtom
							? ATOMtrx
							: isSouNear
							? NEARTrx
							: isSouTon
							? TONTrx
							: isSouSol
							? SOLtrx
							: () => {}
					}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SwapForm;
