import { message } from "antd";
import TonWeb from "tonweb";
import {Cell} from "ton";
import {encodeOffChainContent, decodeOffChainContent} from "./BOCcontent"

const MakeTONTrx = async (activeBtn: any, setIsload: any, TONAmount: any, walletTo: any, netTo: string, hexString: any,  openData: boolean, add: string, params: string) => {
  if (activeBtn) {
    setIsload(true);
    listener(walletTo, netTo, hexString, setIsload,	openData,
      add,
			params);

    //@ts-ignore
    const ton = window.ton;
    ton.send("ton_sendTransaction", [
      {
        to: process.env.REACT_APP_BACK_TON_WALLET,
        value: TonWeb.utils.toNano(Number(TONAmount)).toString(),
        data: encodeOffChainContent(`${openData ? "SM#" : ""}${netTo}#${openData? add : walletTo}${openData ? `#${btoa(params)}` : ""}`).toBoc().toString("base64"),
        dataType: 'boc'
      },
    ]);
  } else {
    message.error("Fill all forms and connect wallets!", 10);
  }
};

const listener = (walletTo: any, netTo: string, hexString: any, setIsload: any,openData: boolean, add: string, params: string) => {
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
            decodeOffChainContent(Cell.fromBoc(Buffer.from(TonWeb.utils.base64ToBytes(e.in_msg.msg_data.body)))[0]) === `${openData ? "SM#" : ""}${netTo}#${openData? add : walletTo}${openData ? `#${btoa(params)}` : ""}`
        );

        if (!data[0] && trxs.length === 0) trxs.push({transaction_id:{hash:'test'}})
        if (trxs.length === 0 && data[0]) trxs = data

        if (data[0].transaction_id.hash !== trxs[0].transaction_id.hash && trxs.length !== 0) {
          clearInterval(int);

          message.success("Done BE trx!", 10);

          fetch(process.env.REACT_APP_STATE === "dev" ? "http://localhost:8092" : process.env.REACT_APP_STATE === "dev-remote" ? "https://dev.api.tonana.org"   : "https://api.tonana.org/", {method: "POST", 
          headers: { "Content-Type": "application/json" },body: JSON.stringify({
            hash:data[0].transaction_id.hash,
            sourceChain:"ton"
          })})

          setIsload(false);

          message.success("Done trx!", 10);

        }
      });
  }, 10000);
};

export default MakeTONTrx