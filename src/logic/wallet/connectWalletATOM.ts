import { message } from "antd";

const connectWalletATOM = async (setATOMWalletKey: any, isTestNet: boolean) => {
  try {
    if (window["keplr"]) {
      const chainId = "cosmoshub-4"; //theta-testnet-001
      await window.keplr.enable(chainId);
      //@ts-ignore
      if (typeof window === "undefined") return;
      await window.keplr.enable(chainId);
      const offlineSigner =
        window.getOfflineSigner != null
          ? window.getOfflineSigner(chainId)
          : null;
      if (offlineSigner == null) return "error";
      const accounts = await offlineSigner.getAccounts();
      setATOMWalletKey(accounts[0].address)
    } else {
      message.error(
        "Install Keplr wallet. Close all Keplr wallet windows and try again pls",
        5
      );
    }
  } catch (err) {console.log(err)}
};

export default connectWalletATOM