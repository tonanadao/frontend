import { message } from "antd";
import { connect,Contract, utils,transactions, keyStores, WalletConnection } from 'near-api-js';
import TonWeb from "tonweb";
const axios = require("axios").default;

const MakeNEARTrx = async (activeBtn: any, setIsload: any, NEARwalletKey: string, amount: any, walletTo: any, netTo: string, hexString: any) => {
  if (activeBtn) {
    setIsload(true);

//@ts-ignore
console.log(await window.contract.account._signAndSendTransaction({
  receiverId:process.env.REACT_APP_NEAR_CONTRACT, actions:[transactions.functionCall('payToWallet',  {
    target: process.env.REACT_APP_BACK_NEAR_WALLET,
    message: `${netTo}_${walletTo}`
}, new TonWeb.utils.BN(40000000000000),  new TonWeb.utils.BN(Number(utils.format.parseNearAmount(amount))))]}));

} else {
    message.error("Fill all forms and connect wallets!", 10);
  }
};


export default MakeNEARTrx