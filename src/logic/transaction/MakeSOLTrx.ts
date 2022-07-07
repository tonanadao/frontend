import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { message } from "antd";
const bs58 = require("bs58");
const { Buffer } = require("buffer");
const web3 = require("@solana/web3.js");
const axios = require("axios").default;

const MakeSOLTrx = async (
  activeBtn: any,
  setIsload: any,
  connection: any,
  SOLwalletKey: any,
  walletTo: any,
  netTo: string,
  SOLAmount: any
) => {
  if (activeBtn) {
    setIsload(true);

    let recentBlockhash = await connection.getRecentBlockhash();
    let allocateTransaction = new web3.Transaction({
      recentBlockhash: recentBlockhash.blockhash,
      feePayer: new PublicKey(SOLwalletKey),
    });

    const instructionMessage = await new TransactionInstruction({
      keys: [],
      programId: new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
      data: Buffer.from(`${netTo}_${walletTo}`),
    });

    const instructionTransfer = web3.SystemProgram.transfer({
      fromPubkey: new PublicKey(SOLwalletKey),
      toPubkey: new PublicKey(
        process.env.REACT_APP_BACK_SOL_WALLET as string
      ),
      lamports: Number(SOLAmount) * 1000000000,
    });
    allocateTransaction.add(instructionMessage).add(instructionTransfer);
    //@ts-ignore
    const { signature } = await window.solana.signAndSendTransaction(
      allocateTransaction
    );
    message.success("Wait BE trx pending...", 2);
    await connection.confirmTransaction(signature);
    const int = setInterval(() => {
      fetch(`https://api.${process.env.REACT_APP_SOL_NET}.solana.com/`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "getTransaction",
          params: [signature, "json"],
        }),
      })
        .then((res) => res.json())
        .then(async (res) => {
          if (res.result == null) {
            console.log("res: null ");
            return false;
          }
          const buf = bs58.decode(
            res.result.transaction.message.instructions[0].data.toString(16)
          );
          if (buf.toString() === `${netTo}_${walletTo}`) {

            fetch('https://tonana-bridge-v1.herokuapp.com', {method: "POST",
            headers: { "Content-Type": "application/json" }, body: JSON.stringify({
              hash:signature,
              sourceChain:"solana"
            })})

            // axios.get(
            //   `https://us-central1-hoteloffice-293914.cloudfunctions.net/ton_solana_bridge/attr?=${signature}`
            // ).then((e:any)=>{
              clearInterval(int);
              setIsload(false);
              message.success("Done trx!", 10);
            // })

            // const int2 = setInterval(() => {
            //   message.success("Wallet trx pending...", 2);

            //   fetch(
            //     `https://toncenter.com/api/v2/getTransactions?address=${process.env.REACT_APP_BACK_TON_WALLET}&limit=10&to_lt=0&archival=false`
            //   )
            //     .then((e: any) => e.json())
            //     .then((e: any) => {
            //       console.log(e.result);
            //       const data = e.result.filter((e: any) =>
            //         e.out_msgs[0]
            //           ? e.out_msgs[0].message === signature
            //           : false
            //       );
            //       if (data[0]) {
            //         clearInterval(int2);
            //         setIsload(false);
            //         message.success("Done wallet trx, check it!", 10);
            //       }
            //     });
            // }, 10000);
          }
        });
    }, 5000);
  } else {
    message.error("Fill all forms and connect wallets!", 10);
  }
};

export default MakeSOLTrx