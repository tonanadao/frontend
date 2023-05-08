import { RootStore, StoreProvider, useStores } from "../stores";
const { storeMain } = useStores();

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


const sortedBtnProps: any = {
    sol: {
        connect: connectWalletSOL,
        set: storeMain.setSOLwalletKey,
        walletKey: storeMain.repository.get().SOLwalletKey,
        img: phantom,
    },
    ton: {
        connect: connectWalletTON,
        set: storeMain.setTONwalletKey,
        walletKey: storeMain.repository.get().TONwalletKey,
        img: tonIco,
    },
    atom: {
        connect: connectWalletATOM,
        set: storeMain.setATOMwalletKey,
        walletKey: storeMain.repository.get().ATOMwalletKey,
        img: keplr,
    },
    aurora: {
        connect: connectWalletAUR,
        set: storeMain.setAURwalletKey,
        walletKey: storeMain.repository.get().AURwalletKey,
        img: metamask,
    },
    eth: {
        connect: connectWalletETH,
        set: storeMain.setETHwalletKey,
        walletKey: storeMain.repository.get().ETHwalletKey,
        img: metamask,
    },
    near: {
        connect: connectWalletNEAR,
        set: storeMain.setNEARwalletKey,
        walletKey: storeMain.repository.get().NEARwalletKey,
        img: near,
    },
    mumbai: {
        connect: connectWalletETH,
        set: storeMain.setMUMBwalletKey,
        walletKey: storeMain.repository.get().MUMBwalletKey,
        img: polygonIco,
    }
};

export default sortedBtnProps;