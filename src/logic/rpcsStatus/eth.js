import Web3 from "web3";

const rpcsStatus = async (isTestNet) => {
	const ethWeb3js = new Web3(
		new Web3.providers.HttpProvider(
			"https://eth-mainnet.rpcfast.com/?api_key=yOCgA3ku0DbciIQ1Qj2BTpeHJ46sFpMWOfqHuvfZV541l8N7K9DCnMu62Uw5X3jX" //need to replace //todo testnet
		)
	);
	const ethd = await ethWeb3js.eth.getBlockNumber();

	const rpcsa = {
		title: "Ethereum RPC",
		key: "eth",
		status: !!ethd,
	};
	return rpcsa;
};

export default rpcsStatus;
