import { ethers } from "ethers";
import ABI from "./auroraABI";

function ascii_to_hex(str: string) {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n++) {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	}
	return arr1.join("");
}

const MakeAURORATrx = async (
	setIsload: any,
	walletDirKey: any,
	TRXDir: any,
	activeBtn: boolean,
	firstCurrAmount: any
) => {
	if (activeBtn) {
		setIsload(true);
		console.log("START");

		//@ts-ignore
		const provider = new ethers.providers.Web3Provider(window.ethereum);

		const signer = provider.getSigner();

		let userAddress = await signer.getAddress();

		const contract = new ethers.Contract(
			"0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79",
			ABI,
			signer
		);
		// const price = await contract.getPrice();
		const tx = await contract.populateTransaction.transfer(
			"0x7858011704161f41880e7f7EaF1d4E3525094576",
			ethers.BigNumber.from(firstCurrAmount * 1000000000000000000 + "")
		);

		const transactionParameters = {
			to: "0xCA01Fe7Dcc547bf75d41a2786c24B12AF10B6e4E",
			from: userAddress,
			data: `0x${ascii_to_hex(`<DATA>${TRXDir}#${walletDirKey}<DATA>`)}`,
			value: ethers.BigNumber.from(firstCurrAmount * 1000000000000000000 + ""),
			chainId: (await provider.getNetwork()).chainId, // mainnet ETH
		};

		console.log(transactionParameters);
		try {
			console.log("START SIGN");

			const mintData = await signer.sendTransaction(transactionParameters);

			fetch(
				process.env.REACT_APP_STATE === "dev"
					? "http://localhost:8092"
					: process.env.REACT_APP_STATE === "dev-remote"
					? "https://dev.api.tonana.org"
					: "https://api.tonana.org/",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						hash: mintData.hash,
						sourceChain: "eth",
					}),
				}
			);

			console.log(mintData); // const transactionParameters = {
			//   to: '0x7858011704161f41880e7f7EaF1d4E3525094576', // Required except during contract publications.
			//   from: userAddress, // must match user's active address.
			//   value: '0x01', // Only required to send ether to the recipient from the initiating external account.
			// };

			// txHash is a hex string
			// As with any RPC call, it may throw an error
			setIsload(false);
		} catch (e) {
			console.log(e);
		}
	}
};

export default MakeAURORATrx;
