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

	const isDirAtom = props.directionNetwork === "atom";
	const isDirNear = props.directionNetwork === "near";
	const isDirSol = props.directionNetwork === "sol";
	const isDirTon = props.directionNetwork === "ton";
	const isDirAur = props.directionNetwork === "aurora";
	const isDirUsn = props.directionNetwork === "usn";
	const isDirEth = props.directionNetwork === "eth" || props.directionNetwork === "mumbai";
	const isDirwSOLTON = props.directionNetwork === "wsol (ton)";
	const isDirwETHTON = props.directionNetwork === "weth (ton)";
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
	const isSouEth = props.networkSource === "eth" || props.networkSource === "mumbai";
	const isSouwSOLTON = props.networkSource === "wsol (ton)";
	const isSouwETHTON = props.networkSource === "weth (ton)";
	const isSouwATOMTON = props.networkSource === "watom (ton)";
	const isSouwNEARTON = props.networkSource === "wnear (ton)";
	const isSouwAURTON = props.networkSource === "waurora (ton)";
	const isSouwUSNTON = props.networkSource === "wusn (ton)";

	console.log(props)

	const currency =
		isSouAtom || isSouwATOMTON
			? storeMain.repository.get().au
			: isSouNear || isSouwNEARTON
				? storeMain.repository.get().nu
				: isSouEth || isSouwETHTON
					? storeMain.repository.get().maticu
					: isSouTon
						? storeMain.repository.get().tu
						: isSouSol || isSouwSOLTON
							? storeMain.repository.get().su
							: isSouAur || isSouwAURTON
								? storeMain.repository.get().auru
								: isSouUsn || isSouwUSNTON
									? storeMain.repository.get().usnu
									: null;

	const walletDirKey = isDirAtom
		? props.ATOMwalletKey
		: isDirNear || isDirUsn
			? props.NEARwalletKey
			: isDirTon ||
				isDirwSOLTON ||
				isDirwNEARTON ||
				isDirwATOMTON ||
				isDirwAURTON ||
				isDirwETHTON ||
				isDirwUSNTON
				? props.TONwalletKey
				: isDirSol
					? props.SOLwalletKey
					: isDirEth
						? props.ETHwalletKey
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
				isSouwETHTON ||
				isSouwUSNTON
				? props.TONwalletKey
				: isSouSol
					? props.SOLwalletKey
					: isSouAur
						? props.AURwalletKey
						: isSouEth
							? props.ETHwalletKey
							: null;

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
						: isSouEth
							? "MATIC"
							: isSouSol
								? "SOL"
								: isSouEth
									? "ETH"
									: isSouwNEARTON
										? "wNEAR"
										: isSouwSOLTON
											? "wSOL"
											: isSouwATOMTON
												? "wATOM"
												: isSouwUSNTON
													? "wUSN"
													: isSouwETHTON
														? "wETH"
														: isSouwAURTON
															? "wAURORA"
															: null;
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
