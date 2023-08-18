const rpcsStatus = async (isTestNet) => {
	const csm = (
		await fetch(
			"https://proxy.tonana.org/https://rpc.cosmos.network/status?"
		).then((e) => e.json())
	).result.sync_info.latest_block_height;

	const rpcsa = {
		title: "Cosmos RPC",
		key: "atom",
		status: !!csm,
	};

	return rpcsa;
};

export default rpcsStatus;
