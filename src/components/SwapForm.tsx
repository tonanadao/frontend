import { useEffect, useState } from "react";
import { Form, Input, message, Button } from "antd";
import MakeSOLTrx from "../logic/transaction/MakeSOLTrx";
import MakeNEARTrx from "../logic/transaction/MakeNEARTrx";
import MakeTONTrx from "../logic/transaction/MakeTONTrx";
import MakeATOMTrx from "../logic/transaction/MakeATOMTrx";
import MakeUSNTrx from "../logic/transaction/MakeUSNTrx";
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
	const [addVal, setAddVal] = useState("");
	const [params, setParams] = useState("");
	const [addMessage, setAddMessage] = useState(false);
	const [openData, setOpenData] = useState(false);

	const isDirAtom = props.directionNetwork === "atom";
	const isDirNear = props.directionNetwork === "near";
	const isDirSol = props.directionNetwork === "sol";
	const isDirTon = props.directionNetwork === "ton";
	const isDirAur = props.directionNetwork === "aurora";
	const isDirUsn = props.directionNetwork === "usn";
	const isDirwSOLTON = props.directionNetwork === "wsol (ton)";
	const isDirwAURTON = props.directionNetwork === "waurora (ton)";
	const isDirwNEARTON = props.directionNetwork === "wnear (ton)";
	const isDirwATOMTON = props.directionNetwork === "watom (ton)";
	const isDirwUSNTON = props.directionNetwork === "wusn (ton)";

	const isSouAtom = props.networkSource === "atom";
	const isSouNear = props.networkSource === "near";
	const isSouSol = props.networkSource === "sol";
	const isSouTon = props.networkSource === "ton";
	const isSouAur = props.networkSource === "aurora";
	const isSouUsn = props.networkSource === "usn";
	const isSouwSOLTON = props.networkSource === "wsol (ton)";
	const isSouwATOMTON = props.networkSource === "watom (ton)";
	const isSouwNEARTON = props.networkSource === "wnear (ton)";
	const isSouwAURTON = props.networkSource === "waurora (ton)";
	const isSouwUSNTON = props.networkSource === "wusn (ton)";

	const sourceChain = isSouwSOLTON
		? "TONwSOL"
		: isSouwATOMTON
		? "TONwATOM"
		: isSouwNEARTON
		? "TONwNEAR"
		: isSouwAURTON
		? "TONwAURORA"
		: isSouwUSNTON
		? "TONwUSN"
		: "";

	const TONJettonContractAdd = isSouwSOLTON
		? "EQC4cCygTZPKIP9cCsWx7DW5i5MQPOsEcfKkKwBZKkRCCfaW"
		: isSouwATOMTON
		? "EQCa5-xswEfQM5x_CBb5f53ghfy8ZYTAMCohgqSO6rBYMlkD"
		: isSouwNEARTON
		? "EQALr-K836vMmF5gOBzYmEHlS29-iG6AGsmHFzzgpMiy9ERi"
		: isSouwAURTON
		? "EQAlLZSs3HbZ6W5CoesPbqBoBLfS88FG1T0kLwaCC3fRF3ut"
		: isSouwUSNTON
		? "EQAfuJx-GWk0rn4T1r3g6SKmXRwBnW7I4jG2izu2qdoNH4aI" // TODO UPDATE
		: "";

	useEffect(() => {
		setParams("");
		setAddVal("");
		setAddMessage(false);
		if (isSouNear && isDirTon) setAddMessage(true);
		if (isSouTon && isDirNear) setAddMessage(true);
		if (isSouTon && isDirUsn) setAddMessage(true);
		if (isSouUsn && isDirTon) setAddMessage(true);
	}, [props.networkSource, props.directionNetwork]);

	const walletDirKey = isDirAtom
		? props.ATOMwalletKey
		: isDirNear || isDirUsn
		? props.NEARwalletKey
		: isDirTon ||
		  isDirwSOLTON ||
		  isDirwNEARTON ||
		  isDirwATOMTON ||
		  isDirwAURTON ||
		  isDirwUSNTON
		? props.TONwalletKey
		: isDirSol
		? props.SOLwalletKey
		: isDirAur
		? props.AURwalletKey
		: null;

	const walletSouKey = isSouAtom
		? props.ATOMwalletKey
		: isSouNear || isSouUsn
		? props.NEARwalletKey
		: isSouTon ||
		  isSouwATOMTON ||
		  isSouwNEARTON ||
		  isSouwSOLTON ||
		  isSouwAURTON ||
		  isSouwUSNTON
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
			: isDirUsn || isDirwUSNTON
			? props.usnu
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
			: isSouUsn || isSouwUSNTON
			? props.usnu
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
			: isDirUsn || isDirwUSNTON
			? props.USNMaxAmount
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
			: props.directionNetwork === "wusn (ton)"
			? "TONwUSN"
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
		: isSouUsn
		? "USN"
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
		: isSouwUSNTON
		? "wUSN"
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
		: isDirUsn
		? "USN"
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
		: isDirwUSNTON
		? "wUSN"
		: null;

	const activeBtn =
		(openData ? true : !!walletDirKey) &&
		!!props.firstCurrAmount &&
		!props.isload &&
		walletSouKey &&
		(openData ? !!params : true) &&
		(openData ? !!addVal : true);

	const TONTrx = () =>
		MakeTONTrx(
			activeBtn,
			props.setIsload,
			props.firstCurrAmount,
			walletDirKey,
			TRXDir,
			props.hexString,
			openData,
			addVal,
			params
		);

	useEffect(() => {
		if (openData) setAddVal(walletDirKey);
	}, [openData, walletDirKey]);

	const SOLtrx = () =>
		MakeSOLTrx(
			activeBtn,
			props.setIsload,
			props.connection,
			props.SOLwalletKey,
			walletDirKey,
			TRXDir,
			props.firstCurrAmount
		);

	const NEARTrx = () =>
		MakeNEARTrx(
			activeBtn,
			props.setIsload,
			props.NEARwalletKey,
			props.firstCurrAmount,
			walletDirKey,
			TRXDir,
			props.hexString,
			openData,
			addVal,
			params
		);

	const ATOMtrx = () =>
		MakeATOMTrx(
			activeBtn,
			props.setIsload,
			props.connection,
			props.ATOMwalletKey,
			walletDirKey,
			TRXDir,
			props.firstCurrAmount
		);

	const USNtrx = () =>
		MakeUSNTrx(
			activeBtn,
			props.setIsload,
			props.NEARwalletKey,
			props.firstCurrAmount,
			walletDirKey,
			TRXDir,
			props.hexString,
			openData,
			addVal,
			params
		);

	const AURORAtrx = () =>
		MakeAURORATrx(props.setIsload, walletDirKey, TRXDir, props.firstCurrAmount);

	const TONJettonsBurnTrx = () =>
		MakeTONJettonsBurnTrx(
			sourceChain,
			TONJettonContractAdd,
			activeBtn,
			props.setIsload,
			props.firstCurrAmount,
			props.TONwalletKey,
			TRXDir,
			walletDirKey
		);

	useEffect(() => {
		props.setFirstCurrAmount("");
		props.setSecCurrAmount("");
	}, [props.directionNetwork, props.networkSource]);

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
							props.setFirstCurrAmount(e.target.value);
							props.setSecCurrAmount(
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
						!isNaN(Number(props.firstCurrAmount))
							? props.secCurrAmount === ""
								? ""
								: props.firstCurrAmount
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
						!isNaN(Number(props.secCurrAmount))
							? props.firstCurrAmount === ""
								? ""
								: props.secCurrAmount
							: ""
					}
					onChange={(e) => {
						if (Number(e.target.value) < 0.8 * MaxDirAmount) {
							props.setFirstCurrAmount(
								((Number(e.target.value) * secCurrency) / currency) * 1.025 + ""
							);
							props.setSecCurrAmount(e.target.value);
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
			{addMessage ? (
				<>
					<Form.Item
						style={{
							margin: "0px 0 24px 0",
						}}>
						<Button
							type="primary"
							id={"submitBtn"}
							onClick={() => setOpenData(!openData)}>
							{!openData ? "Add more data" : "Discard trx data"}
						</Button>
					</Form.Item>
					{openData ? (
						<>
							<Form.Item label={`Reciver ${props.directionNetwork} address`}>
								<Input
									value={addVal}
									onChange={(e) => setAddVal(e.target.value)}
									placeholder={"Address"}
								/>
							</Form.Item>
							<Form.Item label={`Message in ${props.directionNetwork} trx`}>
								<Input
									value={params}
									onChange={(e) => {
										if (String(e.target.value).length <= 5000) {
											setParams(e.target.value);
										} else {
											message.error(
												`The message should be less than 5000 characters`,
												3
											);
										}
									}}
									placeholder={"Type text here"}
								/>
							</Form.Item>
						</>
					) : null}
				</>
			) : null}
			Exchange rate: 1 {sourceCurrencyName} ≈{" "}
			{((currency / secCurrency) * 0.975).toFixed(3)} {directionCurrencyName}
			<br />
			Tonana reserve: {MaxDirAmount.toFixed(3)} {directionCurrencyName}
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
							: isSouUsn
							? USNtrx
							: isSouTon
							? TONTrx
							: isSouSol
							? SOLtrx
							: isSouAur
							? AURORAtrx
							: isSouwNEARTON ||
							  isSouwSOLTON ||
							  isSouwATOMTON ||
							  isSouwAURTON ||
							  isSouwUSNTON
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
