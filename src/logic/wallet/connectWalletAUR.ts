import { ethers } from "ethers";


const connectWalletAUR = async (setAurWalletKey)=>{

  const provider = new ethers.providers.Web3Provider(window.ethereum)

  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

    let userAddress = await signer.getAddress();

  setAurWalletKey(userAddress)

}
export default connectWalletAUR