import { message } from "antd";

const connectWalletATOM = async (setATOMWalletKey: any) => {
  try {
    // @ts-ignore
    const solana = window.solana;
    if (solana) {
      const response = await solana.connect();
      setATOMWalletKey(response.publicKey.toString());
    } else {
      message.error(
        "Install Phantom wallet. Close all Phantom wallet windows and try again pls",
        5
      );
    }
  } catch (err) {console.log(err)}
};

export default connectWalletATOM