import { ethers } from "ethers";


const connectWalletETH = async (setETHWalletKey: any, isTestNet: boolean)=>{

  //@ts-ignore
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

    let userAddress = await signer.getAddress();

    setETHWalletKey(userAddress)

}
export default connectWalletETH