import { Button } from "antd";
import { useStores } from "../stores";

import phantom from "../static/img/phantom.png";
import near from "../static/img/near.png";
import tonIco from "../static/img/ton.png";
import keplr from "../static/img/keplr.png";
import metamask from "../static/img/metamask.png";
import polygonIco from "../static/img/polygon.png";

import connectWalletSOL from "../logic/wallet/connectWalletSOL";
import connectWalletATOM from "../logic/wallet/connectWalletATOM";
import connectWalletAUR from "../logic/wallet/connectWalletAUR";
import connectWalletTON from "../logic/wallet/connectWalletTON";
import connectWalletNEAR from "../logic/wallet/connectWalletNEAR"
import connectWalletETH from "../logic/wallet/connectWalletETH";


const zipName = (name: string) => `${name.slice(0, 5)}...${name.slice(-3)}`;

export const GenerateBtn = (currencyName: string) => {

	let key: string = currencyName.toLocaleLowerCase();
	if (key.includes('ton')) { key = "ton" }
	if (key.includes('usn')) { key = "near" }

	const sortedBtnProps: any = {
		sol: {
			connect: connectWalletSOL,
			set: useStores().storeMain.setSOLwalletKey,
			walletKey: useStores().storeMain.repository.get().SOLwalletKey,
			img: phantom,
		},
		ton: {
			connect: connectWalletTON,
			set: useStores().storeMain.setTONwalletKey,
			walletKey: useStores().storeMain.repository.get().TONwalletKey,
			img: tonIco,
		},
		atom: {
			connect: connectWalletATOM,
			set: useStores().storeMain.setATOMwalletKey,
			walletKey: useStores().storeMain.repository.get().ATOMwalletKey,
			img: keplr,
		},
		aurora: {
			connect: connectWalletAUR,
			set: useStores().storeMain.setAURwalletKey,
			walletKey: useStores().storeMain.repository.get().AURwalletKey,
			img: metamask,
		},
		eth: {
			connect: connectWalletETH,
			set: useStores().storeMain.setETHwalletKey,
			walletKey: useStores().storeMain.repository.get().ETHwalletKey,
			img: metamask,
		},
		near: {
			connect: connectWalletNEAR,
			set: useStores().storeMain.setNEARwalletKey,
			walletKey: useStores().storeMain.repository.get().NEARwalletKey,
			img: near,
		},
		mumbai: {
			connect: connectWalletETH,
			set: useStores().storeMain.setMUMBwalletKey,
			walletKey: useStores().storeMain.repository.get().MUMBwalletKey,
			img: polygonIco,
		}
	};

	return (
		<>
			<Button
				type="primary"
				id={"connectWalletBtn"}
				onClick={() => sortedBtnProps[key].connect(sortedBtnProps[key].set)}>
				{sortedBtnProps[key].walletKey ? (
					<>
						<img src={sortedBtnProps[key].img} alt={"Wallet picture"} />
						{zipName(sortedBtnProps[key].walletKey)}
					</>
				) : (
					"Connect wallet"
				)}
			</Button>
		</>
	);
};
