import Web3 from "web3";

const rpcsStatus = async () => {
	const ethWeb3js = new Web3(
		new Web3.providers.HttpProvider(
			"https://eth.getblock.io/4ac0dba3-02ef-4876-9a42-b24581cf18b8/mainnet/"
		)
	);
	const ethd = await ethWeb3js.eth.getBlockNumber();
	console.log(ethd)
	const rpcsa = {
		title: "Ethereum RPC",
		key: "eth",
		status: !!ethd,
	};
	return rpcsa;
};

export default rpcsStatus;
