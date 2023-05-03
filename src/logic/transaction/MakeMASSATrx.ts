import { message } from "antd";
import TonWeb from "tonweb";
import { beginCell, Cell, Address } from "ton";
import { encodeOffChainContent, decodeOffChainContent } from "./BOCcontent";
import BN from "bn.js";

const MakeTONTrx = async (
	activeBtn: any,
	setIsload: any,
	TONAmount: any,
	walletFrom: any,
	walletTo: any,
	netTo: string,
	hexString: any,
	openData: boolean,
	add: string,
	params: string,
	isNft?: boolean,
	nftData?: any
) => {
	console.log(isNft, nftData)
	if (activeBtn) {
		setIsload(true);
		const rand = Math.floor(Math.random() * 100)
		// listener(walletFrom, walletTo, netTo, hexString, setIsload, openData, add, params, rand, isNft, nftData, TONAmount);
	} else {
		message.error("Fill all forms and connect wallets!", 10);
	}
};


export default MakeTONTrx;
