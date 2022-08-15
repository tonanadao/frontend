import { useEffect, useState } from "react";
import { Form, Input, message, Button } from "antd";
import MakeSOLTrx from "../logic/transaction/MakeSOLTrx";
import MakeNEARTrx from "../logic/transaction/MakeNEARTrx";
import MakeTONTrx from "../logic/transaction/MakeTONTrx";
import MakeATOMTrx from "../logic/transaction/MakeATOMTrx";
import useResponsive from "../logic/Responsive";
import MakeTONwNEARBurnTrx from "../logic/transaction/MakeTONwNEARBurnTrx";
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
	const isDirSol = props.directionNetwork === "sol";
	const isDirTon = props.directionNetwork === "ton";
	const isDirwNEARTON = props.directionNetwork === "wnear (ton)";

	const isSouAtom = props.networkSource === "cosmos";
	const isSouNear = props.networkSource === "near";
	const isSouSol = props.networkSource === "sol";
	const isSouTon = props.networkSource === "ton";
	const isSouNEARTON = props.networkSource === "wnear (ton)";

	const isMobile = useResponsive("(max-width: 480px)", true);

	const walletDirKey = isDirAtom
		? props.ATOMwalletKey
		: isDirNear
		? props.NEARwalletKey
		: isDirTon
		? props.TONwalletKey
		: isDirSol
		? props.SOLwalletKey
		: isDirwNEARTON
		? props.TONwalletKey
		: null;

	const walletSouKey = isSouAtom
		? props.ATOMwalletKey
		: isSouNear
		? props.NEARwalletKey
		: isSouTon
		? props.TONwalletKey
		: isSouSol
		? props.SOLwalletKey
		: isSouNEARTON
		? props.TONwalletKey
		: null;

	const secCurrency = isDirAtom
		? props.au
		: isDirNear
		? props.nu
		: isDirTon
		? props.tu
		: isDirSol
		? props.su
		: isDirwNEARTON
		? props.nu
		: null;

	console.log(props.networkSource);
	console.log(props.directionNetwork);
	const currency = isSouAtom
		? props.au
		: isSouNear
		? props.nu
		: isSouTon
		? props.tu
		: isSouSol
		? props.su
		: isSouNEARTON
		? props.nu
		: null;

	const MaxDirAmount = Number(
		isDirAtom
			? props.ATOMMaxAmount
			: isDirNear
			? props.NEARMaxAmount
			: isDirTon
			? props.TONMaxAmount
			: isDirSol
			? props.SOLMaxAmount
			: isDirwNEARTON
			? props.NEARMaxAmount
			: null
	);

	const TRXDir = (
		props.directionNetwork === "sol"
			? "SOLANA"
			: props.directionNetwork === "wnear (ton)"
			? "TONwNEAR"
			: props.directionNetwork
	).toUpperCase();

	const sourceCurrencyName = isSouAtom
		? "ATOM"
		: isSouNear
		? "NEAR"
		: isSouTon
		? "TON"
		: isSouSol
		? "SOL"
		: isSouNEARTON
		? "wNEAR"
		: null;

	const directionCurrencyName = isDirAtom
		? "ATOM"
		: isDirNear
		? "NEAR"
		: isDirTon
		? "TON"
		: isDirSol
		? "SOL"
		: isDirwNEARTON
		? "wNEAR"
		: null;

	const [firstCurrAmount, setFirstCurrAmount] = useState<string>("");
	const [secCurrAmount, setSecCurrAmount] = useState<string>("");

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

	//TODO BURN WRAPS HERE
	const TONwNEARTrx = () =>
		MakeTONwNEARBurnTrx(
			activeBtn,
			props.setIsload,
			firstCurrAmount,
			props.TONwalletKey,
			TRXDir,
			walletDirKey
		);
	// ???????
	// useEffect(() => {
	// 	// setFirstCurrAmount(
	// 	// 	((Number(secCurrAmount) * secCurrency) / currency) * 1.025
	// 	// );

	// 	setSecCurrAmount(((firstCurrAmount * currency) / secCurrency) * 0.975);
	// }, [currency, secCurrency]);

	return (
		<Form name="control-hooks" layout="vertical">
			{props.btn}
			<Form.Item label={`FROM`}>
				{isMobile ? props.btnSelectSource : null}
				{isMobile ? props.btnSource : null}
				<Input
					onChange={(e) => {
						if (
							(Number(e.target.value) * currency) / secCurrency <
							0.8 * MaxDirAmount
						) {
							setFirstCurrAmount(e.target.value);
							setSecCurrAmount(
								((Number(e.target.value) * currency) / secCurrency) * 0.975 + ""
							);
						} else {
							message.error(
								`Set less, than ${
									(0.8 * MaxDirAmount * secCurrency) / currency
								} ${sourceCurrencyName}`,
								3
							);
						}
					}}
					value={
						!isNaN(Number(firstCurrAmount))
							? secCurrAmount === ""
								? ""
								: firstCurrAmount
							: ""
					}
					placeholder={"0.000"}
				/>
				{!isMobile ? props.btnSelectSource : null}
				{!isMobile ? props.btnSource : null}
			</Form.Item>
			{props.changeDirection}
			<Form.Item label={`TO`}>
				{isMobile ? props.btnSelectDirection : null}
				{isMobile ? props.btnDest : null}
				<Input
					value={
						!isNaN(Number(secCurrAmount))
							? firstCurrAmount === ""
								? ""
								: secCurrAmount
							: ""
					}
					onChange={(e) => {
						if (Number(e.target.value) < 0.8 * MaxDirAmount) {
							setFirstCurrAmount(
								((Number(e.target.value) * secCurrency) / currency) * 1.025 + ""
							);
							setSecCurrAmount(e.target.value);
						} else {
							message.error(
								`Set less, than ${0.8 * MaxDirAmount} ${directionCurrencyName}`,
								3
							);
						}
					}}
					placeholder={"0.000"}
				/>
				{!isMobile ? props.btnSelectDirection : null}
				{!isMobile ? props.btnDest : null}
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
					// filter: !activeBtn ? "grayscale(50%) contrast(50%)" : "",
				}}>
				<Button
					type="primary"
					id={activeBtn ? "submitBtn" : "nonactivesubmitBtn"}
					onClick={
						isSouAtom
							? ATOMtrx
							: isSouNear
							? NEARTrx
							: isSouTon
							? TONTrx
							: isSouSol
							? SOLtrx
							: isSouNEARTON
							? TONwNEARTrx
							: () => {}
					}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SwapForm;
