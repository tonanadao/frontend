import { connect, Contract, keyStores, WalletConnection } from "near-api-js";

export const initializeWalletNEAR = async (setNEARMaxAmount: any, setNEARwalletKey: any) => {
  const connectionConfig = {
    networkId: "mainnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.mainnet.near.org",
    walletUrl: "https://wallet.mainnet.near.org",
    helperUrl: "https://helper.mainnet.near.org",
    explorerUrl: "https://explorer.mainnet.near.org",
  };

  const receiver = process.env.REACT_APP_NEAR_CONTRACT
    ? process.env.REACT_APP_NEAR_CONTRACT
    : "";

  const nearConnection = await connect(connectionConfig as any);
  const walletConnection = new WalletConnection(nearConnection, receiver);

  const account = await nearConnection.account(
    process.env.REACT_APP_BACK_NEAR_WALLET
      ? process.env.REACT_APP_BACK_NEAR_WALLET
      : ""
  );
  setNEARMaxAmount(
    Number((await account.state()).amount) / 1000000000000000000000000
  );

  if (walletConnection.isSignedIn()) {
    const walletAccountId = walletConnection.getAccountId();
    setNEARwalletKey(walletAccountId);

    //@ts-ignore
    window.contract = await new Contract(
      walletConnection.account(),
      receiver,
      {
        changeMethods: ["payToWallet"],
        viewMethods: [],
      }
    );
  }
};