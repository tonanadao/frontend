const rpcsStatus = async () => {
	const csm = (
		await fetch(
			"https://proxy.tonana.org/https://rpc.cosmos.network/abci_info?"
		).then((e) => e.json())
	).result.response.last_block_height;

	const rpcsa = {
		title: "Cosmos RPC",
		key: "atom",
		status: !!csm,
	};

	return rpcsa;
};

export default rpcsStatus;
