import { useEffect, useState } from "react";
import { Form, Input, message, Button } from "antd";
import makeTrx from "../../logic/trxBuilder";
import getTONNftBalances from "../../logic/fetch/getTONNftBalances";
import getETHNftBalances from "../../logic/fetch/getETHNftBalances";
import { useStores } from "../../stores";
import { SubmitBtn, NonactiveSubmitBtn } from "./styles";

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
	const [selectedNft, selectNft] = useState<null | any>(null);
	const { storeMain } = useStores();

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

	console.log(souKey);
	console.log(dirKey);

	const nftConfig: any = {
		atom: {
			walletKey: storeMain.repository.get().ATOMMaxAmount,
			currency: storeMain.repository.get().au,
			maxAmount: storeMain.repository.get().ATOMMaxAmount,
			currencyName: "ATOM"
		},
		near: {
			walletKey: storeMain.repository.get().NEARwalletKey,
			currency: storeMain.repository.get().nu,
			maxAmount: storeMain.repository.get().NEARMaxAmount,
			currencyName: "NEAR"
		},
		sol: {
			walletKey: storeMain.repository.get().SOLwalletKey,
			currency: storeMain.repository.get().su,
			maxAmount: storeMain.repository.get().SOLMaxAmount,
			currencyName: "SOL"
		},
		ton: {
			walletKey: storeMain.repository.get().TONwalletKey,
			currency: storeMain.repository.get().tu,
			maxAmount: storeMain.repository.get().TONMaxAmount,
			currencyName: "TON"
		},
		aurora: {
			walletKey: storeMain.repository.get().AURwalletKey,
			currency: storeMain.repository.get().auru,
			maxAmount: storeMain.repository.get().AURMaxAmount,
			currencyName: "AURORA"
		},
		usn: {
			walletKey: storeMain.repository.get().NEARwalletKey,
			currency: storeMain.repository.get().usnu,
			maxAmount: storeMain.repository.get().USNMaxAmount,
			currencyName: "USN"
		},
		eth: {
			walletKey: storeMain.repository.get().ETHwalletKey,
			currency: storeMain.repository.get().maticu,
			maxAmount: storeMain.repository.get().ETHMaxAmount,
			currencyName: "ETH"
		},
		wsol: {
			walletKey: storeMain.repository.get().TONwalletKey,
			currency: storeMain.repository.get().su,
			maxAmount: storeMain.repository.get().SOLMaxAmount,
			currencyName: "wSOL"
		},
		weth: {
			walletKey: storeMain.repository.get().TONwalletKey,
			currency: storeMain.repository.get().maticu,
			maxAmount: storeMain.repository.get().ETHMaxAmount,
			currencyName: "wETH"
		},
		watom: {
			walletKey: storeMain.repository.get().TONwalletKey,
			currency: storeMain.repository.get().au,
			maxAmount: storeMain.repository.get().ATOMMaxAmount,
			currencyName: "wATOM"
		},
		wnear: {
			walletKey: storeMain.repository.get().TONwalletKey,
			currency: storeMain.repository.get().nu,
			maxAmount: storeMain.repository.get().NEARMaxAmount,
			currencyName: "wNEAR"
		},
		waurora: {
			walletKey: storeMain.repository.get().TONwalletKey,
			currency: storeMain.repository.get().auru,
			maxAmount: storeMain.repository.get().AURMaxAmount,
			currencyName: "wAURORA"
		},
		wusn: {
			walletKey: storeMain.repository.get().TONwalletKey,
			currency: storeMain.repository.get().usnu,
			maxAmount: storeMain.repository.get().USNMaxAmount,
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
	console.log(walletSouKey)
	console.log(walletDirKey)
	useEffect(() => {
		props.setFirstCurrAmount((1 / currency * 5 / 100).toFixed(7) + '')
	}, [currency])
	console.log(currency)

	const StyledBtn = activeBtn ? SubmitBtn : NonactiveSubmitBtn;

	return (
		<Form name="control-hooks" layout="vertical">
			{props.btn}
			<Form.Item label={`FROM (TESTNET ONLY)`}>
				{props.btnSelectSource}
				{props.btnSource}
				<NftSelector>
					<div>
						{nftsToShow.map((e: any) => (e.image && e.name) ? <div onClick={() => selectNft(e)}> <img src={e.image} /> {e.name}</div> : null)}
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
							<div onClick={() => selectNft(null)}><img src={selectedNft?.image} /> {selectedNft.name}</div>
						</div>
					</NftSelector> : null}
			</Form.Item>
			Nft transfer cost ≈ {(1 / currency * 5).toFixed(2)}{" "}{sourceCurrencyName} ≈ 5$

			<Form.Item
				style={{
					margin: "24px 0 0 0",
				}}>
				<StyledBtn
					type="primary"
					onClick={() =>
						makeTrx(
							activeBtn,
							props,
							walletSouKey,
							walletDirKey,
							openData,
							addVal,
							params,
							true,
							selectedNft
						)()
					}>
					Submit
				</StyledBtn>
			</Form.Item>
		</Form>
	);
};

export default SwapForm;