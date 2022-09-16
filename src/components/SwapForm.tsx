import { useEffect, useState } from "react";
import { Form, Input, message, Button } from "antd";
import MakeSOLTrx from "../logic/transaction/MakeSOLTrx";
import MakeNEARTrx from "../logic/transaction/MakeNEARTrx";
import MakeTONTrx from "../logic/transaction/MakeTONTrx";
import MakeATOMTrx from "../logic/transaction/MakeATOMTrx";
import MakeAURORATrx from "../logic/transaction/MakeAURORATrx";

import useResponsive from "../logic/Responsive";
import MakeTONJettonsBurnTrx from "../logic/transaction/MakeTONJettonsBurnTrx";

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
	const isDirAtom = props.directionNetwork === "atom";
	const isDirNear = props.directionNetwork === "near";
	const isDirSol = props.directionNetwork === "sol";
	const isDirTon = props.directionNetwork === "ton";
	const isDirAur = props.directionNetwork === "aurora";
	const isDirwSOLTON = props.directionNetwork === "wsol (ton)";
	const isDirwAURTON = props.directionNetwork === "waurora (ton)";
	const isDirwNEARTON = props.directionNetwork === "wnear (ton)";
	const isDirwATOMTON = props.directionNetwork === "watom (ton)";

	const isSouAtom = props.networkSource === "atom";
	const isSouNear = props.networkSource === "near";
	const isSouSol = props.networkSource === "sol";
	const isSouTon = props.networkSource === "ton";
	const isSouAur = props.networkSource === "aurora";
	const isSouwSOLTON = props.networkSource === "wsol (ton)";
	const isSouwATOMTON = props.networkSource === "watom (ton)";
	const isSouwNEARTON = props.networkSource === "wnear (ton)";
	const isSouwAURTON = props.networkSource === "waurora (ton)";

	const sourceChain = isSouwSOLTON
		? "TONwSOL"
		: isSouwATOMTON
		? "TONwATOM"
		: isSouwNEARTON
		? "TONwAURORA"
		: isSouwAURTON
		? "TONwNEAR"
		: "";

	const TONJettonContractAdd = isSouwSOLTON
		? "EQC4cCygTZPKIP9cCsWx7DW5i5MQPOsEcfKkKwBZKkRCCfaW"
		: isSouwATOMTON
		? "EQCa5-xswEfQM5x_CBb5f53ghfy8ZYTAMCohgqSO6rBYMlkD"
		: isSouwNEARTON
		? "EQALr-K836vMmF5gOBzYmEHlS29-iG6AGsmHFzzgpMiy9ERi"
		: isSouwAURTON
		? "EQALr-K836vMmF5gOBzYmEHlS29-iG6AGsmHFzzgpMiy9ERi"
		: "";

	const walletDirKey = isDirAtom
		? props.ATOMwalletKey
		: isDirNear
		? props.NEARwalletKey
		: isDirTon || isDirwSOLTON || isDirwNEARTON || isDirwATOMTON || isDirwAURTON
		? props.TONwalletKey
		: isDirSol
		? props.SOLwalletKey
		: isDirAur
		? props.AURwalletKey
		: null;

	const walletSouKey = isSouAtom
		? props.ATOMwalletKey
		: isSouNear
		? props.NEARwalletKey
		: isSouTon || isSouwATOMTON || isSouwNEARTON || isSouwSOLTON || isSouwAURTON
		? props.TONwalletKey
		: isSouSol
		? props.SOLwalletKey
		: isSouAur
		? props.AURwalletKey
		: null;

	const secCurrency =
		isDirAtom || isDirwATOMTON
			? props.au
			: isDirNear || isDirwNEARTON
			? props.nu
			: isDirTon
			? props.tu
			: isDirAur || isDirwAURTON
			? props.auru
			: isDirSol || isDirwSOLTON
			? props.su
			: null;

	const currency =
		isSouAtom || isSouwATOMTON
			? props.au
			: isSouNear || isSouwNEARTON
			? props.nu
			: isSouTon
			? props.tu
			: isSouSol || isSouwSOLTON
			? props.su
			: isSouAur || isSouwAURTON
			? props.auru
			: null;

	const MaxDirAmount = Number(
		isDirAtom || isDirwATOMTON
			? props.ATOMMaxAmount
			: isDirNear || isDirwNEARTON
			? props.NEARMaxAmount
			: isDirTon
			? props.TONMaxAmount
			: isDirSol || isDirwSOLTON
			? props.SOLMaxAmount
			: isDirAur || isDirwAURTON
			? props.AURMaxAmount
			: null
	);

	const TRXDir = (
		props.directionNetwork === "sol"
			? "SOLANA"
			: props.directionNetwork === "wnear (ton)"
			? "TONwNEAR"
			: props.directionNetwork === "wsol (ton)"
			? "TONwSOL"
			: props.directionNetwork === "watom (ton)"
			? "TONwATOM"
			: props.directionNetwork === "waurora (ton)"
			? "TONwAURORA"
			: props.directionNetwork === "atom"
			? "COSMOS"
			: props.directionNetwork
	).toUpperCase();

	const sourceCurrencyName = isSouAtom
		? "ATOM"
		: isSouNear
		? "NEAR"
		: isSouTon
		? "TON"
		: isSouAur
		? "AURORA"
		: isSouSol
		? "SOL"
		: isSouwNEARTON
		? "wNEAR"
		: isSouwSOLTON
		? "wSOL"
		: isSouwATOMTON
		? "wATOM"
		: isSouwAURTON
		? "wAURORA"
		: null;

	const directionCurrencyName = isDirAtom
		? "ATOM"
		: isDirNear
		? "NEAR"
		: isDirTon
		? "TON"
		: isDirSol
		? "SOL"
		: isDirAur
		? "AURORA"
		: isDirwNEARTON
		? "wNEAR"
		: isDirwATOMTON
		? "wATOM"
		: isDirwAURTON
		? "wAURORA"
		: isDirwSOLTON
		? "wSOL"
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
	const AURORAtrx = () =>
		MakeAURORATrx(props.setIsload, walletDirKey, TRXDir, firstCurrAmount);
	const TONJettonsBurnTrx = () =>
		MakeTONJettonsBurnTrx(
			sourceChain,
			TONJettonContractAdd,
			activeBtn,
			props.setIsload,
			firstCurrAmount,
			props.TONwalletKey,
			TRXDir,
			walletDirKey
		);

	return (
		<Form name="control-hooks" layout="vertical">
			{props.btn}
			<Form.Item label={`FROM`}>
				{props.btnSelectSource}
				{props.btnSource}
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
				{/* {!isMobile ? props.btnSelectSource : null}
				{!isMobile ? props.btnSource : null} */}
			</Form.Item>
			{props.changeDirection}
			<Form.Item label={`TO`}>
				{props.btnSelectDirection}
				{props.btnDest}
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
				{/* {!isMobile ? props.btnSelectDirection : null}
				{!isMobile ? props.btnDest : null} */}
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
							: isSouAur
							? AURORAtrx
							: isSouwNEARTON || isSouwSOLTON || isSouwATOMTON || isSouwAURTON
							? TONJettonsBurnTrx
							: () => {}
					}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SwapForm;
