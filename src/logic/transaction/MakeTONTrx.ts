import { message } from "antd";
import TonWeb from "tonweb";
const axios = require("axios").default;

const MakeTONTrx = async (activeBtn: any, setIsload: any, TONAmount: any, walletTo: any, netTo: string, hexString: any) => {
  if (activeBtn) {
    setIsload(true);
    listener(walletTo, netTo, hexString, setIsload);

    //@ts-ignore
    const ton = window.ton;
    ton.send("ton_sendTransaction", [
      {
        to: process.env.REACT_APP_BACK_TON_WALLET,
        value: TonWeb.utils.toNano(Number(TONAmount)).toString(),
        data: `${netTo}#${walletTo}`,
      },
    ]);
  } else {
    message.error("Fill all forms and connect wallets!", 10);
  }
};

const listener = (walletTo: any, netTo: string, hexString: any, setIsload: any) => {
  let trxs: any = []
  const int = setInterval(() => {
    message.success("Wait BE trx pending...", 2);
    fetch(
      `https://toncenter.com/api/v2/getTransactions?address=${process.env.REACT_APP_BACK_TON_WALLET}&limit=10&to_lt=0&archival=false`
    )
      .then((e: any) => e.json())
      .then((e: any) => {
        const data = e.result.filter(
          (e: any) =>
            e.in_msg.message ===
            `${netTo}#${walletTo}`
        );

        if (!data[0] && trxs.length === 0) trxs.push({transaction_id:{hash:'test'}})
        if (trxs.length === 0 && data[0]) trxs = data

        if (data[0].transaction_id.hash !== trxs[0].transaction_id.hash && trxs.length !== 0) {
          clearInterval(int);

          message.success("Done BE trx!", 10);

          // fetch(
          //   `https://us-central1-hoteloffice-293914.cloudfunctions.net/solana_ton_bridge/attr?=${data[0].transaction_id.hash}`,
          //   {
          //     method: "GET",
          //   }
          // );


//         axios.get(
//             `https://us-central1-hoteloffice-293914.cloudfunctions.net/solana_ton_bridge/attr?=${data[0].transaction_id.hash}`,
//           // `https://us-central1-hoteloffice-293914.cloudfunctions.net/ton_solana_bridge/attr?=`
//         ).then((e:any)=>{
//           console.log(e);
// setIsload(false);

//           message.success("Done trx!", 10);

//         })

fetch(process.env.REACT_APP_STATE === "dev" ? "http://localhost:8092" : "https://api.tonana.org/", {method: "POST", 
headers: { "Content-Type": "application/json" },body: JSON.stringify({
  hash:data[0].transaction_id.hash,
  sourceChain:"ton"
})})
setIsload(false);

          message.success("Done trx!", 10);




        //   let i = 0;
        //   let oldOne = "";

        //   const int2 = setInterval(() => {
        //     message.success("Wallet trx pending...", 2);

        //     fetch(
        //       `https://api.${process.env.REACT_APP_SOL_NET}.solana.com/`,
        //       {
        //         method: "POST",
        //         headers: {
        //           Accept: "application/json, text/plain, */*",
        //           "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //           jsonrpc: "2.0",
        //           id: 1,
        //           method: "getSignaturesForAddress",
        //           params: [walletTo, { limit: 1 }],
        //         }),
        //       }
        //     )
        //       .then((res) => res.json())
        //       .then(async (res) => {
        //         console.log(res);
        //         res.result.forEach((e: any) => {
        //           fetch(
        //             `https://api.${process.env.REACT_APP_SOL_NET}.solana.com/`,
        //             {
        //               method: "POST",
        //               headers: {
        //                 Accept: "application/json, text/plain, */*",
        //                 "Content-Type": "application/json",
        //               },
        //               body: JSON.stringify({
        //                 jsonrpc: "2.0",
        //                 id: 1,
        //                 method: "getTransaction",
        //                 params: [e.signature, "json"],
        //               }),
        //             }
        //           )
        //             .then((res) => res.json())
        //             .then(async (res: any) => {
                    
        //               if (
        //                 res.result.transaction.message.accountKeys[0] ===
        //                   process.env.REACT_APP_BACK_SOL_WALLET &&
        //                 oldOne !== res.result.transaction.signatures[0] &&
        //                 i > 0
        //               ) {
        //                 clearInterval(int2);
        //                 setIsload(false);
        //                 message.success("Done wallet trx, check it!", 10);
        //               } else {
        //                 if (i === 0) {
        //                   oldOne = res.result.transaction.signatures[0];
        //                 }
        //                 i++;
        //               }
        //               // if (res.result == null) {
        //               // 	console.log("res: null ");
        //               // 	return false;
        //               // }
        //               // const buf = bs58.decode(
        //               // 	res.result.transaction.message.instructions[0].data.toString(
        //               // 		16
        //               // 	)
        //               // );
        //               // if (
        //               // 	buf.toString() ===
        //               // 	`SOL_WALLET_${walletTo}_TRX_ID_${props.hexString}`
        //               // ) {
        //               // 	message.success("Done wallet TRX!");
        //               // 	clearInterval(int2);
        //               // }
        //             });
        //         });
        //       });
        //   }, 10000);
        }
      });
  }, 10000);
};

export default MakeTONTrx