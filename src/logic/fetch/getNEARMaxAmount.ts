import { connect, Contract, utils, transactions, keyStores, WalletConnection } from 'near-api-js';

const getNEARMaxAmount = (setNEARMaxAmount: any) => {


  //   const connectionConfig = {
  //     networkId: "mainnet",
  //     keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  //     nodeUrl: "https://rpc.mainnet.near.org",
  //     walletUrl: "https://wallet.mainnet.near.org",
  //     helperUrl: "https://helper.mainnet.near.org",
  //     explorerUrl: "https://explorer.mainnet.near.org",
  //   };

  // (async ()=>{

  //   const nearConnection = await connect(connectionConfig as any);
  //   const receiver = process.env.REACT_APP_BACK_NEAR_WALLET ? process.env.REACT_APP_BACK_NEAR_WALLET : '';

  //   const walletConnection = new WalletConnection(nearConnection, receiver);
  //   //@ts-ignore
  //   console.log(Number(await(await nearConnection.account('sepezho.near')).getAccountBalance()).available));
  //   //@ts-ignore
  //   //@ts-ignore
  //   console.log(Number(await(await nearConnection.account('sepezho.near')).getAccountBalance()).available) / 100000000000000000000000);
  //   //@ts-ignore
  //   setNEARMaxAmount(Number(await(await nearConnection.account('sepezho.near')).getAccountBalance()).available) / 100000000000000000000000)
  // })()


}

export default getNEARMaxAmount
