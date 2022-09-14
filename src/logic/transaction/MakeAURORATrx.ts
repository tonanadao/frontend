import { ethers } from "ethers";
import ABI from "./auroraABI"

const MakeAURORATrx = async (activeBtn: any,
  setIsload: any,
  connection: any,
  ATOMwalletKey: any,
  walletDirKey: any,
  TRXDir: any,
  firstCurrAmount: any)=> {

    setIsload(true)

//@ts-ignore
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  const signer = provider.getSigner();

    let userAddress = await signer.getAddress();
    
    

    const contract = new ethers.Contract('0xAaAAAA20D9E0e2461697782ef11675f668207961', ABI, signer);
    // const price = await contract.getPrice();
    const tx = await contract.populateTransaction.transfer(
       "0x7858011704161f41880e7f7EaF1d4E3525094576",ethers.BigNumber.from(firstCurrAmount*1000000000000000000 + "")
    );
    function ascii_to_hex(str:string)
    {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n ++) 
       {
      var hex = Number(str.charCodeAt(n)).toString(16);
      arr1.push(hex);
     }
    return arr1.join('');
     }


    const transactionParameters = {
      to: "0x7858011704161f41880e7f7EaF1d4E3525094576",
      from: userAddress,
      data: tx.data+ascii_to_hex(`<DATA>${TRXDir}#${walletDirKey}<DATA>`),
      value: '0x00',
      chainId: (await provider.getNetwork()).chainId, // mainnet ETH
    };

    const mintData = await signer.sendTransaction(transactionParameters);

    fetch(process.env.REACT_APP_STATE === "dev" ? "http://localhost:8092" : "https://api.tonana.org/", {method: "POST",
    headers: { "Content-Type": "application/json" }, body: JSON.stringify({
      hash:mintData.hash,
      sourceChain:"aurora"
    })})


console.log(mintData);    // const transactionParameters = {
    //   to: '0x7858011704161f41880e7f7EaF1d4E3525094576', // Required except during contract publications.
    //   from: userAddress, // must match user's active address.
    //   value: '0x01', // Only required to send ether to the recipient from the initiating external account.
    // };
    
    // txHash is a hex string
    // As with any RPC call, it may throw an error
  setIsload(false)


}

export default MakeAURORATrx