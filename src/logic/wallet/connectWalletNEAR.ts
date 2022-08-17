
import { connect,Contract, utils,transactions, keyStores, WalletConnection } from 'near-api-js';
import { message } from "antd";
import "dotenv/config";



const connectWalletNear = async (setNearWalletKey: any) => {
  try {

    const connectionConfig = {
      networkId: "mainnet",
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: "https://rpc.mainnet.near.org",
      walletUrl: "https://wallet.mainnet.near.org",
      helperUrl: "https://helper.mainnet.near.org",
      explorerUrl: "https://explorer.mainnet.near.org",
    };
    
    const nearConnection = await connect(connectionConfig as any);
    const receiver = process.env.REACT_APP_NEAR_CONTRACT ? process.env.REACT_APP_NEAR_CONTRACT : '';

    const walletConnection = new WalletConnection(nearConnection, receiver);
  //@ts-ignore
window.contract = await new Contract(walletConnection.account(), receiver, {
  changeMethods: ['payToWallet'],
  viewMethods: []
})
    if (walletConnection.isSignedIn()) {
      const walletAccountId = walletConnection.getAccountId();
      setNearWalletKey(walletAccountId);
    } else {
      await walletConnection.requestSignIn(
        {
          contractId:process.env.REACT_APP_NEAR_CONTRACT,
          methodNames:['payToWallet']
      }
        
      );
    }
  } catch (err) {
    console.log(err);
    message.error(
      "Use NEAR wallet. Close all windows and try again pls",
      5
    );
  }
};



export default connectWalletNear


  // NEAR CHECK FEES ALOWANCE 
//   const response = await near.connection.provider.query({
//   request_type: "view_access_key",
//   finality: "final",
//   account_id: "client.chainlink.testnet",
//   public_key: "ed25519:H9k5eiU4xXS3M4z8HzKJSLaZdqGdGwBG49o7orNC4eZW",
// });
