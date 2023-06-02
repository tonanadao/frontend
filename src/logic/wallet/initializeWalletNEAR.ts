import { connect, Contract, keyStores, WalletConnection } from "near-api-js";

export const initializeWalletNEAR = async (setNEARMaxAmount: any, setNEARwalletKey: any, setUSNMaxAmount: any, isTestNet: boolean) => {
  const net = isTestNet ? "testnet" : "mainnet"
  const connectionConfig = {
    networkId: `${net}`,
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: `https://rpc.${net}.near.org`,
    walletUrl: `https://wallet.${net}.near.org`,
    helperUrl: `https://helper.${net}.near.org`,
    explorerUrl: `https://explorer.${net}.near.org`,
  };

  const receiver = process.env.REACT_APP_NEAR_CONTRACT //todo testnet // need deploy
    ? process.env.REACT_APP_NEAR_CONTRACT
    // : isTestNet ? process.env.REACT_APP_NEAR_TEST_CONTRACT
    : "";

  const nearConnection = await connect(connectionConfig as any);
  const walletConnection = new WalletConnection(nearConnection, receiver);

  const account = await nearConnection.account( //todo testnet
    process.env.REACT_APP_BACK_NEAR_WALLET
      ? process.env.REACT_APP_BACK_NEAR_WALLET
      // : isTestNet ? process.env.REACT_APP_BACK_NEAR_TESTNET_WALLET
      : ""
  );
  setNEARMaxAmount(
    Number((await account.state()).amount) / 1000000000000000000000000
  );
  
  
  setUSNMaxAmount(await new Contract(
  walletConnection.account(),
  'usn',
  {
    changeMethods: [""],
    viewMethods: ['ft_balance_of'],
  }
  //@ts-ignore
).ft_balance_of({account_id: isTestNet ? "tonana_wallet.testnet" : 'tonanawallet.near'}) / 1000000000000000000
)

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