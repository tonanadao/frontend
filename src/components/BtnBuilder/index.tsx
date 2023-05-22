import { useStores } from "../../stores";
import { ConnectWalletBtn } from "./styles";
import { useStore as useStoreNanoStores } from '@nanostores/react'

import phantom from "../../static/img/phantom.png";
import near from "../../static/img/near.png";
import tonIco from "../../static/img/ton.png";
import keplr from "../../static/img/keplr.png";
import metamask from "../../static/img/metamask.png";
import polygonIco from "../../static/img/polygon.png";

import connectWalletSOL from "../../logic/wallet/connectWalletSOL";
import connectWalletATOM from "../../logic/wallet/connectWalletATOM";
import connectWalletAUR from "../../logic/wallet/connectWalletAUR";
import connectWalletTON from "../../logic/wallet/connectWalletTON";
import connectWalletNEAR from "../../logic/wallet/connectWalletNEAR"
import connectWalletETH from "../../logic/wallet/connectWalletETH";


const zipName = (name: string) => `${name.slice(0, 5)}...${name.slice(-3)}`;

export const GenerateBtn = (currencyName: string) => {
	const { storeMain, storeSwitch } = useStores();
	const storeMainRepository = useStoreNanoStores(storeMain.repository);
	const storeSwitchRepository = useStoreNanoStores(storeSwitch.repository);

	let key: string = currencyName.toLocaleLowerCase();
	if (key.includes('ton')) { key = "ton" }
	if (key.includes('usn')) { key = "near" }
	console.log('key:');
	console.log(key);

	const sortedBtnProps: any = {
		sol: {
			connect: connectWalletSOL,
			set: storeMain.setSOLwalletKey,
			walletKey: storeMainRepository.SOLwalletKey,
			img: phantom,
		},
		ton: {
			connect: connectWalletTON,
			set: storeMain.setTONwalletKey,
			walletKey: storeMainRepository.TONwalletKey,
			img: tonIco,
		},
		atom: {
			connect: connectWalletATOM,
			set: storeMain.setATOMwalletKey,
			walletKey: storeMainRepository.ATOMwalletKey,
			img: keplr,
		},
		aurora: {
			connect: connectWalletAUR,
			set: storeMain.setAURwalletKey,
			walletKey: storeMainRepository.AURwalletKey,
			img: metamask,
		},
		eth: {
			connect: connectWalletETH,
			set: storeMain.setETHwalletKey,
			walletKey: storeMainRepository.ETHwalletKey,
			img: metamask,
		},
		near: {
			connect: connectWalletNEAR,
			set: storeMain.setNEARwalletKey,
			walletKey: storeMainRepository.NEARwalletKey,
			img: near,
		},
		mumbai: {
			connect: connectWalletETH,
			set: storeMain.setMUMBwalletKey,
			walletKey: storeMainRepository.MUMBwalletKey,
			img: polygonIco,
		}
	};

	return (
		<>
			<ConnectWalletBtn
				type="primary"
				onClick={() => sortedBtnProps[key].connect(sortedBtnProps[key].set, storeSwitchRepository.isTestNet)}>
				{sortedBtnProps[key].walletKey ? (
					<>
						<img src={sortedBtnProps[key].img} alt={"Wallet picture"} />
						{zipName(sortedBtnProps[key].walletKey)}
					</>
				) : (
					"Connect wallet"
				)}
			</ConnectWalletBtn>
		</>
	);
};
