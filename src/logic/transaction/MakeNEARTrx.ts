import { message } from "antd";
import { connect, Contract, utils, transactions, keyStores, WalletConnection } from 'near-api-js';
import TonWeb from "tonweb";
const axios = require("axios").default;

const MakeNEARTrx = async (activeBtn: any,
  setIsload: any, 
  NEARwalletKey: string, 
  amount: any, 
  walletTo: any, 
  netTo: string, 
  hexString: any, 
  openData: boolean, 
  add: string, 
  params: string,
  isTestNet: boolean) => {




  if (activeBtn) {
    setIsload(true);
    //@ts-ignore
    const res = await (await window.selector.wallet()).signAndSendTransaction({
      receiverId: process.env.REACT_APP_NEAR_CONTRACT,
      actions: [
        {
          type: "FunctionCall",
          params: {
            methodName: 'payToWallet',
            args: {
              target: process.env.REACT_APP_BACK_NEAR_WALLET,
              message: `${openData ? "SM#" : ""}${netTo}#${openData ? add : walletTo}${openData ? `#${btoa(params)}` : ""}`
            },
            gas: '40000000000000',
            deposit: utils.format.parseNearAmount(amount) + ''
          },
        }
      ],
      callbackUrl: 'https://app.tonana.org/?isnear=true'
    })
    //@ts-ignore
    makeNEARTrxAfterLoad(res.transaction.hash, null, null, isTestNet)
  } else {
    message.error("Fill all forms and connect wallets!", 10);
  }
};

export const makeNEARTrxAfterLoad = (transactionHashes: any, setSearchParams: any, searchParams: any, isTestNet: boolean) => {
  if (transactionHashes) {
    fetch(process.env.REACT_APP_STATE === "dev" 
    ? "http://localhost:8092" 
    : process.env.REACT_APP_STATE === "dev-remote" || isTestNet 
    ? "https://dev.api.tonana.org" 
    : "https://api.tonana.org/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hash: transactionHashes,
        sourceChain: "near",
      }),
    })
      .then((e) => e.text())
      .then((e) => {
        if (e === "Done!") {
          alert('near trx done!')
          if (searchParams) {
            searchParams.delete("transactionHashes");
            searchParams.delete("isnear");
            setSearchParams(searchParams);
          }
        }
      });
  }
}

export default MakeNEARTrx
