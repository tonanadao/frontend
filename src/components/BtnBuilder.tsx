import { Button } from "antd";

import phantom from "../static/img/phantom.png";
import near from "../static/img/near.png";
import tonIco from "../static/img/ton.png";
import keplr from "../static/img/keplr.png";
import metamask from "../static/img/metamask.png";
import polygonIco from "../static/img/polygon.png";
import massaIco from "../static/img/massa.png";

import connectWalletSOL from "../logic/wallet/connectWalletSOL";
import connectWalletATOM from "../logic/wallet/connectWalletATOM";
import connectWalletAUR from "../logic/wallet/connectWalletAUR";
import connectWalletTON from "../logic/wallet/connectWalletTON";
import connectWalletNEAR from "../logic/wallet/connectWalletNEAR"
import connectWalletETH from "../logic/wallet/connectWalletETH";
import connectWalletMASSA from "../logic/wallet/connectWalletMASSA";

const zipName = (name: string) => `${name.slice(0, 5)}...${name.slice(-3)}`;

export const generateBtn = (props: any, currencyName: string) => {
	const {
		setSOLWalletKey,
		setETHWalletKey,
		setMASSAwalletKey,
		setTONwalletKey,
		setAURwalletKey,
		setNEARwalletKey,
		setATOMwalletKey,
		TONwalletKey,
		AURwalletKey,
		SOLwalletKey,
		MASSAwalletKey,
		NEARwalletKey,
		ATOMwalletKey,
		ETHwalletKey,
		setMUMBwalletKey,
		MUMBwalletKey,
	} = props;

	const sortedBtnProps: any = {
		sol: {
			connect: connectWalletSOL,
			set: setSOLWalletKey,
			walletKey: SOLwalletKey,
			img: phantom,
		},
		ton: {
			connect: connectWalletTON,
			set: setTONwalletKey,
			walletKey: TONwalletKey,
			img: tonIco,
		},
		atom: {
			connect: connectWalletATOM,
			set: setATOMwalletKey,
			walletKey: ATOMwalletKey,
			img: keplr,
		},
		aurora: {
			connect: connectWalletAUR,
			set: setAURwalletKey,
			walletKey: AURwalletKey,
			img: metamask
		},
		eth: {
			connect: connectWalletETH,
			set: setETHWalletKey,
			walletKey: ETHwalletKey,
			img: metamask,
		},
		near: {
			connect: connectWalletNEAR,
			set: setNEARwalletKey,
			walletKey: NEARwalletKey,
			img: near,
		},
		mumbai: {
			connect: connectWalletETH,
			set: setMUMBwalletKey,
			walletKey: MUMBwalletKey,
			img: polygonIco
		},
		massa: {
			connect: connectWalletMASSA,
			set: setMASSAwalletKey,
			walletKey: MASSAwalletKey,
			img: massaIco
		}

	};

	let key: string = currencyName.toLocaleLowerCase();
	if (key.includes('ton')) { key = "ton" }
	if (key.includes('usn')) { key = "near" }

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
					key === "massa" ? "Generate wallet" : "Connect wallet"
				)}
			</Button>
		</>
	);
};
