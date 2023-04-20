import { useEffect, useState } from "react";
import { Form, Input, message, Button } from "antd";
import makeTrx from "../logic/trxBuilder";
import getTONNftBalances from "../logic/fetch/getTONNftBalances";
// import { request, gql } from 'graphql-request'
const SwapForm = (props: any) => {
	const [addVal, setAddVal] = useState("");
	const [params, setParams] = useState("");
	const [addMessage, setAddMessage] = useState(false);
	const [openData, setOpenData] = useState(false);
	const [nftsToShow, setNfts] = useState([]);

	const isDirAtom = props.directionNetwork === "atom";
	const isDirNear = props.directionNetwork === "near";
	const isDirSol = props.directionNetwork === "sol";
	const isDirTon = props.directionNetwork === "ton";
	const isDirAur = props.directionNetwork === "aurora";
	const isDirUsn = props.directionNetwork === "usn";
	const isDirEth = props.directionNetwork === "eth";
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
	const isSouEth = props.networkSource === "eth";
	const isSouwSOLTON = props.networkSource === "wsol (ton)";
	const isSouwETHTON = props.networkSource === "weth (ton)";
	const isSouwATOMTON = props.networkSource === "watom (ton)";
	const isSouwNEARTON = props.networkSource === "wnear (ton)";
	const isSouwAURTON = props.networkSource === "waurora (ton)";
	const isSouwUSNTON = props.networkSource === "wusn (ton)";

	const currency =
		isSouAtom || isSouwATOMTON
			? props.au
			: isSouNear || isSouwNEARTON
				? props.nu
				: isSouEth || isSouwETHTON
					? props.ethu
					: isSouTon
						? props.tu
						: isSouSol || isSouwSOLTON
							? props.su
							: isSouAur || isSouwAURTON
								? props.auru
								: isSouUsn || isSouwUSNTON
									? props.usnu
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
		if (props.networkSource === "ton") {
			if (walletSouKey) {
				getTONNftBalances(walletSouKey, setNfts)
			}
		} else {
			let headers = new Headers();
			headers.set('Authorization', 'Basic ' + new Buffer('ckey_a4c7d840a7774fea9b5d2d9198f').toString('base64'));

			fetch(`https://api.covalenthq.com/v1/80001/address/${walletSouKey}/balances_nft/?key=ckey_a4c7d840a7774fea9b5d2d9198f`, { method: 'GET', headers })
				.then((resp) => resp.json())
				.then((data) => console.log(data));
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
	const activeBtn = true
	console.log(nftsToShow)
	return (
		<Form name="control-hooks" layout="vertical">
			{props.btn}
			<Form.Item label={`FROM`}>
				{props.btnSelectSource}
				{props.btnSource}
				<div>
					{nftsToShow.map((e: any) => <div><img src={e.image} /> {e.name}</div>)}
				</div>
			</Form.Item>
			{props.changeDirection}
			<Form.Item label={`TO`}>
				{props.btnSelectDirection}
				{props.btnDest}
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
						)()
					}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SwapForm;
