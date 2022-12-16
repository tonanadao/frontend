import MakeSOLTrx from "../logic/transaction/MakeSOLTrx";
import MakeNEARTrx from "../logic/transaction/MakeNEARTrx";
import MakeTONTrx from "../logic/transaction/MakeTONTrx";
import MakeATOMTrx from "../logic/transaction/MakeATOMTrx";
import MakeUSNTrx from "../logic/transaction/MakeUSNTrx";
import MakeAURORATrx from "../logic/transaction/MakeAURORATrx";
import MakeETHTrx from "../logic/transaction/MakeETHTrx";
import { message } from "antd";

import MakeTONJettonsBurnTrx from "../logic/transaction/MakeTONJettonsBurnTrx";

const makeTrx = (
	activeBtn,
	props,
	walletDirKey,
	openData,
	addVal,
	params,
	isSouAtom,
	isSouNear,
	isSouUsn,
	isSouTon,
	isSouSol,
	isSouAur,
	isSouEth,
	isSouwNEARTON,
	isSouwSOLTON,
	isSouwATOMTON,
	isSouwAURTON,
	isSouwETHTON,
	isSouwUSNTON
) => {
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
			: props.directionNetwork === "weth (ton)"
			? "TONwETH"
			: props.directionNetwork === "wusn (ton)"
			? "TONwUSN"
			: props.directionNetwork === "atom"
			? "COSMOS"
			: props.directionNetwork
	).toUpperCase();

	const TONJettonContractAdd = isSouwSOLTON
		? "EQC4cCygTZPKIP9cCsWx7DW5i5MQPOsEcfKkKwBZKkRCCfaW"
		: isSouwATOMTON
		? "EQCa5-xswEfQM5x_CBb5f53ghfy8ZYTAMCohgqSO6rBYMlkD"
		: isSouwNEARTON
		? "EQALr-K836vMmF5gOBzYmEHlS29-iG6AGsmHFzzgpMiy9ERi"
		: isSouwAURTON
		? "EQAlLZSs3HbZ6W5CoesPbqBoBLfS88FG1T0kLwaCC3fRF3ut"
		: isSouwUSNTON
		? "EQAfuJx-GWk0rn4T1r3g6SKmXRwBnW7I4jG2izu2qdoNH4aI"
		: isSouwETHTON
		? "EQB6l24gEV_OIR0IlZHpoWAnNzj-xS2Nf_uSAEcTx_7B4k_U"
		: "";

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
		: isSouwETHTON
		? "TONwETH"
		: "";

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
		MakeAURORATrx(
			props.setIsload,
			walletDirKey,
			TRXDir,
			activeBtn,
			props.firstCurrAmount
		);

	const ETHtrx = () =>
		MakeETHTrx(
			props.setIsload,
			walletDirKey,
			TRXDir,
			activeBtn,
			props.firstCurrAmount
		);

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

	const isSouRpcOk = props.rpcsStatuses.filter((e) =>

		(e.key === props.networkSource) === "usn"
			? "near"
			: props.networkSource === "wsol (ton)" ||
			  props.networkSource === "weth (ton)" ||
			  props.networkSource === "watom (ton)" ||
			  props.networkSource === "wnear (ton)" ||
			  props.networkSource === "waurora (ton)" ||
			  props.networkSource === "wusn (ton)"
			? "ton"
			: props.networkSource
	)[0].status;

	const isDirRpcOk = props.rpcsStatuses.filter((e) =>

		(e.key === props.directionNetwork) === "usn"
			? "near"
			: props.directionNetwork === "wsol (ton)" ||
			  props.directionNetwork === "weth (ton)" ||
			  props.directionNetwork === "watom (ton)" ||
			  props.directionNetwork === "wnear (ton)" ||
			  props.directionNetwork === "waurora (ton)" ||
			  props.directionNetwork === "wusn (ton)"
			? "ton"
			: props.directionNetwork
	)[0].status;

	const isBackOk = props.rpcsStatuses.filter((e) => e.key === "tnn")[0].status;

	if (!isDirRpcOk) {
		message.error(props.directionNetwork.toUpperCase() + " RPC is DEAD");
	}

	if (!isSouRpcOk) {
		message.error(props.networkSource.toUpperCase() + " RPC is DEAD");
	}

	if (!isBackOk) {
		message.error("Tonana oracle is DEAD");
	}

	if (!isDirRpcOk || !isSouRpcOk || !isBackOk) return () => {};

	return isSouAtom
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
		: isSouEth
		? ETHtrx
		: isSouwNEARTON ||
		  isSouwSOLTON ||
		  isSouwATOMTON ||
		  isSouwAURTON ||
		  isSouwETHTON ||
		  isSouwUSNTON
		? TONJettonsBurnTrx
		: () => {};
};

export default makeTrx;
