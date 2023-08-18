import { message } from "antd";

const connectWalletSOL = async (setSOLWalletKey: any, isTestNet: boolean) => {
  try {
    // @ts-ignore
    const solana = window.solana;
    if (solana) {
      const response = await solana.connect();
      setSOLWalletKey(response.publicKey.toString());
    } else {
      message.error(
        "Install Phantom wallet. Close all Phantom wallet windows and try again pls",
        5
      );
    }
  } catch (err) {console.log(err)}
};

export default connectWalletSOL