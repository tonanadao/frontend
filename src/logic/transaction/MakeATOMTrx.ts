import {
	assertIsDeliverTxSuccess,
	SigningStargateClient,
} from "@cosmjs/stargate";
import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { message } from "antd";
const bs58 = require("bs58");
const { Buffer } = require("buffer");
const web3 = require("@solana/web3.js");
const axios = require("axios").default;


const MakeATOMTrx = async (
  activeBtn: any,
  setIsload: any,
  connection: any,
  ATOMwalletKey: any,
  walletTo: any,
  netTo: string,
  ATOMAmount: any,
  isTestNet: boolean
) => {
  if (activeBtn) {
    setIsload(true);
    try {
      if (window) {
        if (window["keplr"]) {
          const chainId = isTestNet ? "theta-testnet-001" : "cosmoshub-4"; 
          await window.keplr.enable(chainId);
          //@ts-ignore
          if (typeof window === "undefined") return;
          await window.keplr.enable(chainId);
          const offlineSigner =
            window.getOfflineSigner != null
              ? window.getOfflineSigner(chainId)
              : null;
          if (offlineSigner == null) return "error";
          const accounts = await offlineSigner.getAccounts();
          // return
          const client = await SigningStargateClient.connectWithSigner(
            "https://proxy.tonana.org/https://rpc.cosmos.network/",
            // "https://rpc.sentry-01.theta-testnet.polypore.xyz/",
            offlineSigner
          );
          message.success("Wait BE trx pending...", 2);
  
          const amountFinal = {
            denom: "uatom",
            amount: (Number(ATOMAmount) * 1000000).toString(),
          };
          const fee = {
            amount: [
              {
                denom: "uatom",
                amount: "5000",
              },
            ],
            gas: "200000",
          };
          const result = await client.sendTokens(
            accounts[0].address,
            process.env.REACT_APP_BACK_COSMOS_WALLET
              ? process.env.REACT_APP_BACK_COSMOS_WALLET
              : "",
            [amountFinal],
            fee,
            `${netTo}#${walletTo}`
          );
          await assertIsDeliverTxSuccess(result);
          if (result.code !== undefined && result.code !== 0) {
          	alert("Failed to send tx: ");
          } else {

            fetch(process.env.REACT_APP_STATE === "dev" 
            ? "http://localhost:8092" : process.env.REACT_APP_STATE === "dev-remote" || isTestNet
            ? "https://dev.api.tonana.org"   
            : "https://api.tonana.org/", 
            {method: "POST", headers: { "Content-Type": "application/json" },body: JSON.stringify({
              hash:result.transactionHash,
              sourceChain:"cosmos"
            })})
              setIsload(false);
              message.success("Done trx!", 10);

    //     axios.get(
    //           `https://us-central1-hoteloffice-293914.cloudfunctions.net/ton_solana_bridge/attr?=`
    //         ).then((e:any)=>{
    //           console.log(e);
    // setIsload(false);

    //           message.success("Done trx!", 10);

    //         })

    // const int = setInterval(() => {
    //   // return
    //   fetch(`https://api.${process.env.REACT_APP_SOL_NET}.solana.com/`, {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json, text/plain, */*",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       jsonrpc: "2.0",
    //       id: 1,
    //       method: "getTransaction",

    //       params: ["json"],
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then(async (res) => {
    //       if (res.result == null) {
    //         console.log("res: null ");
    //         return false;
    //       }
    //       const buf = bs58.decode(
    //         res.result.transaction.message.instructions[0].data.toString(16)
    //       );
    //       if (buf.toString() === `TON_WALLET_${walletTo}`) {
    //         clearInterval(int);
    //         message.success("Done BE trx!", 10);

    //         axios.get(
    //           `https://us-central1-hoteloffice-293914.cloudfunctions.net/ton_solana_bridge/attr?=`
    //         );

    //         const int2 = setInterval(() => {
    //           message.success("Wallet trx pending...", 2);

    //           fetch(
    //             `https://toncenter.com/api/v2/getTransactions?address=${process.env.REACT_APP_BACK_TON_WALLET}&limit=10&to_lt=0&archival=false`
    //           )
    //             .then((e: any) => e.json())
    //             .then((e: any) => {
    //               console.log(e.result);
    //               const data = e.result.filter((e: any) =>
    //                 e.out_msgs[0]
    //                   ? e.out_msgs[0].message === true
    //                   : false
    //               );
    //               if (data[0]) {
    //                 clearInterval(int2);
    //                 setIsload(false);
    //                 message.success("Done wallet trx, check it!", 10);
    //               }
    //             });
    //         }, 10000);
    //       }
    //     });
    // }, 5000);


    //       	alert("Succeed to send tx:" + result.transactionHash);
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    message.error("Fill all forms and connect wallets!", 10);
  }
};

export default MakeATOMTrx
