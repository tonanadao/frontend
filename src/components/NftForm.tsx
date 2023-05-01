import { useEffect, useState } from "react";
import { Form, Input, message, Button } from "antd";
import makeTrx from "../logic/trxBuilder";
import getTONNftBalances from "../logic/fetch/getTONNftBalances";
import getETHNftBalances from "../logic/fetch/getETHNftBalances";
import { useStores } from "../stores";

import styled from "styled-components";
// import { request, gql } from 'graphql-request'
const NftSelector = styled.div`
	img {
		width: 100px;
	}
 > div {
	display: flex;
 overflow-x: scroll;
 color: white;
 > div {
 max-width: 100px;
 		margin: 10px;
 }
 position: relative;
 }
 position: relative;
 overflow-x: scroll;
 width: 100%;
`
const SwapForm = (props: any) => {
	const [addVal, setAddVal] = useState("");
	const [params, setParams] = useState("");
	const [addMessage, setAddMessage] = useState(false);
	const [openData, setOpenData] = useState(false);
	const [nftsToShow, setNfts] = useState([]);
	const [selectedNft, selectNft] = useState(null);
	const { storeMain } = useStores();
	const isSouAtom = props.networkSource === "atom";
	const isSouNear = props.networkSource === "near";
	const isSouSol = props.networkSource === "sol";
	const isSouTon = props.networkSource === "ton";
	const isSouAur = props.networkSource === "aurora";
	const isSouUsn = props.networkSource === "usn";
	const isSouEth = props.networkSource === "eth" || props.networkSource === "mumbai";
	const isSouwSOLTON = props.networkSource === "wsol (ton)";
	const isSouwETHTON = props.networkSource === "weth (ton)";
	const isSouwATOMTON = props.networkSource === "watom (ton)";
	const isSouwNEARTON = props.networkSource === "wnear (ton)";
	const isSouwAURTON = props.networkSource === "waurora (ton)";
	const isSouwUSNTON = props.networkSource === "wusn (ton)";

	console.log(props)

	let dirKey: string = props.directionNetwork;
	if (dirKey.includes('(') && dirKey.includes(')')) {
		dirKey = dirKey.split(' ')[0]; // Reduced to the form: wsol, weth  etc.
	}
	if (dirKey.includes('mumbai')) { dirKey = 'eth' }

	let souKey: string = props.networkSource;
	if (souKey.includes('(') && souKey.includes(')')) {
		souKey = souKey.split(' ')[0];
	}
	if (souKey.includes('mumbai')) { souKey = 'eth' }


	const nftConfig: any = {
		atom: {
			walletKey: props.ATOMwalletKey,
			currency: storeMain.repository.get().au,
			maxAmount: props.ATOMMaxAmount,
			currencyName: "ATOM"
		},
		near: {
			walletKey: props.NEARwalletKey,
			currency: storeMain.repository.get().nu,
			maxAmount: props.NEARMaxAmount,
			currencyName: "NEAR"
		},
		sol: {
			walletKey: props.SOLwalletKey,
			currency: storeMain.repository.get().su,
			maxAmount: props.SOLMaxAmount,
			currencyName: "SOL"
		},
		ton: {
			walletKey: props.TONwalletKey,
			currency: storeMain.repository.get().tu,
			maxAmount: props.TONMaxAmount,
			currencyName: "TON"
		},
		aurora: {
			walletKey: props.AURwalletKey,
			currency: storeMain.repository.get().auru,
			maxAmount: props.AURMaxAmount,
			currencyName: "AURORA"
		},
		usn: {
			walletKey: props.NEARwalletKey,
			currency: storeMain.repository.get().usnu,
			maxAmount: props.USNMaxAmount,
			currencyName: "USN"
		},
		eth: {
			walletKey: props.ETHwalletKey,
			currency: storeMain.repository.get().maticu,
			maxAmount: props.ETHMaxAmount,
			currencyName: "ETH"
		},
		wsol: {
			walletKey: props.TONwalletKey,
			currency: storeMain.repository.get().su,
			maxAmount: props.SOLMaxAmount,
			currencyName: "wSOL"
		},
		weth: {
			walletKey: props.TONwalletKey,
			currency: storeMain.repository.get().maticu,
			maxAmount: props.ETHMaxAmount,
			currencyName: "wETH"
		},
		watom: {
			walletKey: props.TONwalletKey,
			currency: storeMain.repository.get().au,
			maxAmount: props.ATOMMaxAmount,
			currencyName: "wATOM"
		},
		wnear: {
			walletKey: props.TONwalletKey,
			currency: storeMain.repository.get().nu,
			maxAmount: props.NEARMaxAmount,
			currencyName: "wNEAR"
		},
		waurora: {
			walletKey: props.TONwalletKey,
			currency: storeMain.repository.get().auru,
			maxAmount: props.AURMaxAmount,
			currencyName: "wAURORA"
		},
		wusn: {
			walletKey: props.TONwalletKey,
			currency: storeMain.repository.get().usnu,
			maxAmount: props.USNMaxAmount,
			currencyName: "wUSN"
		}
	}

	const currency = nftConfig[souKey].currency;
	const walletDirKey = nftConfig[dirKey].walletKey;
	const walletSouKey = nftConfig[souKey].walletKey;

	useEffect(() => {
		setNfts([])
		selectNft(null)
		if (props.networkSource === "ton") {
			if (walletSouKey) {
				getTONNftBalances(walletSouKey, setNfts)
			}
		} else {
			if (walletSouKey) {
				getETHNftBalances(walletSouKey, setNfts)
			}
		}
	}, [walletSouKey, props.networkSource]);

	const sourceCurrencyName = nftConfig[souKey].currencyName;

	const activeBtn =
		(openData ? true : !!walletDirKey) &&
		!!props.firstCurrAmount &&
		!props.isload &&
		walletSouKey &&
		(openData ? !!params : true) &&
		(openData ? !!addVal : true) &&
		selectedNft;

	useEffect(() => {
		props.setFirstCurrAmount((1 / currency * 5 / 100).toFixed(7) + '')
	}, [currency])
	console.log(currency)
	return (
		<Form name="control-hooks" layout="vertical">
			{props.btn}
			<Form.Item label={`FROM (TESTNET ONLY)`}>
				{props.btnSelectSource}
				{props.btnSource}
				<NftSelector>
					<div>
						{nftsToShow.map((e: any) => <div onClick={() => selectNft(e)}><img src={e.image} /> {e.name}</div>)}
					</div>
				</NftSelector>
			</Form.Item>
			{props.changeDirection}
			<Form.Item label={`TO (TESTNET ONLY)`}>
				{props.btnSelectDirection}
				{props.btnDest}
				{selectedNft ?
					<NftSelector>
						<div>
							<div onClick={() => selectNft(null)}><img src={selectedNft.image} /> {selectedNft.name}</div>
						</div>
					</NftSelector> : null}
			</Form.Item>
			Nft transfer cost ≈ {(1 / currency * 5).toFixed(2)}{" "}{sourceCurrencyName} ≈ 5$

			<Form.Item
				style={{
					margin: "24px 0 0 0",
				}}>
				<Button
					type="primary"
					id={activeBtn ? "submitBtn" : "nonactivesubmitBtn"}
					onClick={() =>
						makeTrx(
							activeBtn,
							props,
							walletSouKey,
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
							isSouwUSNTON,
							true,
							selectedNft
						)()
					}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SwapForm;