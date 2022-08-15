import { Cell, beginCell, Address,BitString } from "ton";
import { message } from "antd";
import BN from "bn.js";
import TonWeb from "tonweb";

const tonweb = new TonWeb(new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC', {apiKey: '3cb4d4625d129371c869ab603a3523e22c6a7507307380bf1de59b32be2630ec'}));


(async()=>{
  console.log(await tonweb.getTransactions( "EQALr-K836vMmF5gOBzYmEHlS29-iG6AGsmHFzzgpMiy9ERi"));
  
  })()

const prepareParams = (params: Cell[] = []) => {
  return params.map((p) => {
    if (p instanceof Cell) {
      return ["tvm.Slice", p.toBoc({ idx: false }).toString("base64")];
    }
    throw new Error("unknown type!");
  });
}

const parseGetMethodCall = (stack: [["num" | "cell" | "list", any]]): any[] => {
  return stack.map(([type, val]) => {
    switch (type) {
      case "num":
        return new BN(val.replace("0x", ""), "hex");
      case "cell":
        return Cell.fromBoc(Buffer.from(val.bytes, "base64"))[0];
      case "list":
        if (val.elements.length === 0) {
          return null;
        } else {
          throw new Error("list parsing not supported");
        }
      default:
        throw new Error(`unknown type: ${type}, val: ${JSON.stringify(val)}`);
    }
  });
}

enum OPS {
  ChangeAdmin = 3,
  ReplaceMetadata = 4,
  Mint = 21,
  InternalTransfer = 0x178d4519,
  Transfer = 0xf8a7ea5,
  Burn = 0x595f07bc,
}

export function burn(NEARAmount: number, responseAddress: Address, str: String) {
  return beginCell()
    .storeUint(OPS.Burn, 32) // action
    .storeUint(1, 64) // query-id
    .storeCoins(TonWeb.utils.toNano(NEARAmount))
    .storeAddress(responseAddress)
    .storeRef(beginCell().storeBuffer(Buffer.from(`<DATA>${str}_${NEARAmount}<DATA>`, "ascii")).endCell())
    .storeDict(null)
    .endCell();
}

const jettonMainContractAdd = "EQALr-K836vMmF5gOBzYmEHlS29-iG6AGsmHFzzgpMiy9ERi"

const MakeTONwNEARBurnTrx = async (activeBtn: any, setIsload: any, NEARAmount: any, TONwallet: any, netTo: string, walletTo: any) => {
  if (activeBtn) {
    try {
      setIsload(true)
      const jWalletAddress = await tonweb.call(jettonMainContractAdd, "get_wallet_address", prepareParams([beginCell().storeAddress(Address.parse(TONwallet)).endCell()]) as any);
      const data = await burn(NEARAmount, Address.parse(TONwallet), `${netTo}_${walletTo}`).toBoc().toString("base64")

      const userJWalletAdd = parseGetMethodCall(jWalletAddress.stack as [["num" | "cell", any]])[0].beginParse().readAddress().toString(true, true, true)
      //@ts-ignore
      await window.ton.send("ton_sendTransaction", [
        {
          to: userJWalletAdd,
          dataType: "boc",
          value: TonWeb.utils.toNano(0.05).toString(),
          data: data,
        }
 
      ]);
      listener(walletTo, netTo, userJWalletAdd, NEARAmount, setIsload) 

      // setIsload(false)
    }catch (e: any){
      console.log('Some Error');
      console.log(e);
    }
  } else {
    message.error("Fill all forms and connect wallets!", 10);
  }
};


const listener = (walletTo: any, netTo: string, userJWalletAdd: any, NEARAmount: number, setIsload: any) => {
  let trxs: any = []
  const int = setInterval(() => {
    message.success("Wait BE trx pending...", 2);
    fetch(
      `https://toncenter.com/api/v2/getTransactions?address=${userJWalletAdd}&limit=10&to_lt=0&archival=false`
    )
      .then((e: any) => e.json())
      .then((e: any) => {
        console.log(atob(e.result[0].in_msg.msg_data.body).split('<DATA>')[1] );
        const data = e.result.filter(
          (e: any) =>
          atob(e.in_msg.msg_data.body).split('<DATA>')[1] ===
            `${netTo}_${walletTo}_${NEARAmount}`
        );

        if (!data[0] && trxs.length === 0){
          trxs.push({transaction_id:{hash:'test'}})
        } else if (trxs.length === 0 && data[0]) {
          trxs = data
        }

        console.log(trxs);
        console.log(trxs[0].transaction_id.hash);
        console.log(data[0].transaction_id.hash);
        if (data[0].transaction_id.hash !== trxs[0].transaction_id.hash && trxs.length !== 0) {
          clearInterval(int);

          message.success("Done BE trx!", 10);


fetch('https://api.tonana.org/', {method: "POST", 
headers: { "Content-Type": "application/json" },body: JSON.stringify({
  hash:data[0].transaction_id.hash,
  sourceChain:"TONwNEAR"
})})
console.log(e);
setIsload(false);

          message.success("Done trx!", 10);


        }
      });
  }, 8000);
};


export default MakeTONwNEARBurnTrx