import { message } from "antd";
import { connect,Contract, utils,transactions, keyStores, WalletConnection } from 'near-api-js';
import TonWeb from "tonweb";
const axios = require("axios").default;

const MakeNEARTrx = async (activeBtn: any, setIsload: any, NEARwalletKey: string, amount: any, walletTo: any, netTo: string, hexString: any) => {
  if (activeBtn) {
    setIsload(true);
    //@ts-ignore
    await window.contract.account._signAndSendTransaction({
      receiverId: process.env.REACT_APP_NEAR_CONTRACT,
      actions: [
        transactions.functionCall(
          'payToWallet',
          {
            target: process.env.REACT_APP_BACK_NEAR_WALLET,
            message: `${netTo}#${walletTo}`
          },
          new TonWeb.utils.BN(40000000000000),
          new TonWeb.utils.BN(utils.format.parseNearAmount(amount)+'')
        )
      ]
    })

  } else {
    message.error("Fill all forms and connect wallets!", 10);
  }
};

export const makeNEARTrxAfterLoad = (transactionHashes: any, setSearchParams:any,searchParams: any) => {
  if (transactionHashes) {
    fetch(process.env.REACT_APP_STATE === "dev" ? "http://localhost:8092" : "https://api.tonana.org/", {
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
          searchParams.delete("transactionHashes");
          setSearchParams(searchParams);
        }
      });
    }
  }

export default MakeNEARTrx