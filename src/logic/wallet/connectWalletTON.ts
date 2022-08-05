import { message } from "antd";

const connectWalletTON = async (setTONwalletKey: any) => {
  try {
    //@ts-ignore
    const ton = window.ton;
    if (ton) {
      console.log(ton);
      const accounts = await ton.send("ton_requestWallets");
      console.log(accounts);
      setTONwalletKey(accounts[0].address);
    }
  } catch (err) {
    message.error(
      "Install TonWallet. Close all TonWallet windows and try again pls",
      5
    );
  }
};

export default connectWalletTON