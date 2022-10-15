import { message } from "antd";
import { connect,Contract, utils,transactions, keyStores, WalletConnection } from 'near-api-js';
import TonWeb from "tonweb";
import { parseUsnAmount } from "./formatUsn.js";
const axios = require("axios").default;


const MakeUSNTrx = async (activeBtn: any, setIsload: any, NEARwalletKey: string, amount: any, walletTo: any, netTo: string, hexString: any, openData: boolean, add: string, params: string) => {
  if (activeBtn) {
    setIsload(true);
    //@ts-ignore
    await window.contract.account._signAndSendTransaction({
      receiverId: process.env.REACT_APP_USN_CONTRACT,
      actions: [
        transactions.functionCall(
          'ft_transfer',
          Buffer.from(JSON.stringify({ receiver_id: process.env.REACT_APP_BACK_NEAR_WALLET, amount: parseUsnAmount(amount), memo: `${openData ? "SM#" : ""}${netTo}#${openData? add : walletTo}${openData ? `#${btoa(params)}` : ""}` })),
          new TonWeb.utils.BN(40000000000000),
          new TonWeb.utils.BN(1),
        )
      ]
    })

  } else {
    message.error("Fill all forms and connect wallets!", 10);
  }
};

export const makeUSNTrxAfterLoad = (transactionHashes: any, setSearchParams:any,searchParams: any) => {
  if (transactionHashes) {
    fetch(process.env.REACT_APP_STATE === "dev" ? "http://localhost:8092" : "https://api.tonana.org/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hash: transactionHashes,
        sourceChain: "usn",
      }),
    })
      .then((e) => e.text())
      .then((e) => {
        if (e === "Done!") {
          searchParams.delete("transactionHashes");
          setSearchParams(searchParams);
        }
      });
    }
  }

export default MakeUSNTrx