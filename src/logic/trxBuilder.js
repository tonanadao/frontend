import MakeSOLTrx from "./transaction/MakeSOLTrx";
import MakeNEARTrx from "./transaction/MakeNEARTrx";
import MakeTONTrx from "./transaction/MakeTONTrx";
import MakeATOMTrx from "./transaction/MakeATOMTrx";
import MakeUSNTrx from "./transaction/MakeUSNTrx";
import MakeAURORATrx from "./transaction/MakeAURORATrx";
import MakeETHTrx from "./transaction/MakeETHTrx";
import { message } from "antd";

import MakeTONJettonsBurnTrx from "./transaction/MakeTONJettonsBurnTrx";

const makeTrx = (
	activeBtn,
	props,
	walletSouKey,
	walletDirKey,
	openData,
	addVal,
	params,
	isNft,
	nftData,
	isTestNet
) => {

	const TONconfig = {
		sol: {
			TRX: "SOLANA",
		},
		atom : {
			TRX: "COSMOS",
		},

		//todo testnet // need to deploy a contracts
		wsol: {
			TRX: "TONwSOL",
			TONJettonContractAdd: isTestNet ? "" : "EQC4cCygTZPKIP9cCsWx7DW5i5MQPOsEcfKkKwBZKkRCCfaW", 
		},
		weth: {
			TRX: "TONwETH",
			TONJettonContractAdd: isTestNet ? "" : "EQB6l24gEV_OIR0IlZHpoWAnNzj-xS2Nf_uSAEcTx_7B4k_U",
		},
		watom: {
			TRX: "TONwATOM",
			TONJettonContractAdd: isTestNet ? "" : "EQCa5-xswEfQM5x_CBb5f53ghfy8ZYTAMCohgqSO6rBYMlkD",
		},
		wnear: {
			TRX: "TONwNEAR",
			TONJettonContractAdd: isTestNet ? "" : "EQALr-K836vMmF5gOBzYmEHlS29-iG6AGsmHFzzgpMiy9ERi",
		},
		waurora: {
			TRX: "TONwAURORA",
			TONJettonContractAdd: isTestNet ? "" : "EQAlLZSs3HbZ6W5CoesPbqBoBLfS88FG1T0kLwaCC3fRF3ut",
		},
		wusn: {
			TRX: "TONwUSN",
			TONJettonContractAdd: isTestNet ? "" : "EQAfuJx-GWk0rn4T1r3g6SKmXRwBnW7I4jG2izu2qdoNH4aI",
		}
	}

	let dirKey = props.directionNetwork;
	if (dirKey.includes('(') && dirKey.includes(')')) {
		dirKey = dirKey.split(' ')[0]; 
	}

	let souKey = props.networkSource;
	if (souKey.includes('(') && souKey.includes(')')) {
		souKey = souKey.split(' ')[0];
	}
	
	const TRXDir = TONconfig[dirKey].TRX.toUpperCase();
	const TONJettonContractAdd = TONconfig[souKey].TONJettonContractAdd;
	const sourceChain = TONconfig[souKey].TRX;

	const TONTrx = () =>
		MakeTONTrx(
			isTestNet,
			activeBtn,
			props.setIsload,
			props.firstCurrAmount,
			walletSouKey,
			walletDirKey,
			TRXDir,
			props.hexString,
			openData,
			addVal,
			params,
			isNft,
			nftData,
		);

	const SOLtrx = () =>
		MakeSOLTrx(
			activeBtn,
			props.setIsload,
			props.connection,
			props.SOLwalletKey,
			walletDirKey,
			TRXDir,
			props.firstCurrAmount,
			isTestNet
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
			params,
			isTestNet
		);

	const ATOMtrx = () =>
		MakeATOMTrx(
			activeBtn,
			props.setIsload,
			props.connection,
			props.ATOMwalletKey,
			walletDirKey,
			TRXDir,
			props.firstCurrAmount,
			isTestNet
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
			params,
			isTestNet
		);

	const AURORAtrx = () =>
		MakeAURORATrx(
			props.setIsload,
			walletDirKey,
			TRXDir,
			activeBtn,
			props.firstCurrAmount,
			isTestNet
		);

	const ETHtrx = () =>
		MakeETHTrx(
			props.setIsload,
			walletDirKey,
			TRXDir,
			activeBtn,
			props.firstCurrAmount,
			isNft,
			nftData,
			isTestNet
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
			walletDirKey,
			isTestNet
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

	if (!isDirRpcOk || !isSouRpcOk || !isBackOk) return () => { };

	

	const trxConfig = {
		atom: ATOMtrx,
		near: NEARTrx,
		sol: SOLtrx,
		ton: TONTrx,
		aurora: AURORAtrx,
		usn: USNtrx,
		eth: ETHtrx,
		wrap: TONJettonsBurnTrx
	}
	const keyForTRX = props.networkSource;
	if (keyForTRX.includes('(') && keyForTRX.includes(')')) {
		keyForTRX = 'wrap';
	}

	return trxConfig[keyForTRX]
};

export default makeTrx;
