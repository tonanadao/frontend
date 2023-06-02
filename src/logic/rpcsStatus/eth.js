import Web3 from "web3";

const rpcsStatus = async (isTestNet) => {
	const ethWeb3js = new Web3(
		new Web3.providers.HttpProvider(
			isTestNet ? "https://eth.getblock.io/4ac0dba3-02ef-4876-9a42-b24581cf18b8/goerli/" : "https://eth-mainnet.rpcfast.com/?api_key=yOCgA3ku0DbciIQ1Qj2BTpeHJ46sFpMWOfqHuvfZV541l8N7K9DCnMu62Uw5X3jX" 
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
