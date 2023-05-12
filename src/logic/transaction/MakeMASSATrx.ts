import { message } from "antd";
import TonWeb from "tonweb";
import { beginCell, Cell, Address } from "ton";
import { encodeOffChainContent, decodeOffChainContent } from "./BOCcontent";
import BN from "bn.js";
import { parse_private_base58check, compute_bytes_compact, sign_content } from "../browserify_xbcrypto.js";
import {
	ClientFactory,
	Client,
	DefaultProviderUrls,
	IAccount,
	fromMAS
} from "@massalabs/massa-web3";
const MakeTONTrx = async (
	setIsload: any,
	walletDirKey: any,
	TRXDir: any,
	activeBtn: any,
	firstCurrAmount: any
) => {
	if (activeBtn) {
		setIsload(true);
		const target = 'AU124RTKxgwSkMGp7cHfxMrhVhsjK2hJa2RDUtsxsTPwXhgTgNDQ2'
		const val = firstCurrAmount * 1e9;
		const massalocalst = JSON.parse(localStorage.getItem("massakey") ?? '{}');
		const sender_public_key = massalocalst.b58cpubkey
		const fee = '0'
		const expire_period = 999999999 + 5
		const recipient_address = target
		const amount = val.toString()
		// var privkey = parse_private_base58check(massalocalst.b58cprivkey);
		// const bytesCompact = compute_bytes_compact(fee, amount, expire_period, recipient_address);
		// sign_content(bytesCompact, sender_public_key, privkey);
		// create a base account for signing transactions
		const baseAccount = {
			address: massalocalst.address,
			secretKey: Buffer.from(massalocalst.b58cprivkey),
			publicKey: Buffer.from(massalocalst.b58cpubkey),
		} as any;

		// initialize a testnet client
		const testnetClient: Client = await ClientFactory.createDefaultClient(
			DefaultProviderUrls.TESTNET,
			true,
			baseAccount
		);
		const sendTxIds: Array<string> = await testnetClient.wallet().sendTransaction(
			{
				fee: 0n,
				amount: fromMAS("1"),
				recipientAddress:
					"AU12PWTzCKkkE9P5Supt3Fkb4QVZ3cdfB281TGaup7Nv1DY12a6F1",
			},
			baseAccount
		);
		console.log(sendTxIds);
		setIsload(false);
		// alet('done massa tx!');
	} else {
		message.error("Fill all forms and connect wallets!", 10);
	}
};


export default MakeTONTrx;
