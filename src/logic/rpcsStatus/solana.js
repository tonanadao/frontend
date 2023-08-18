const rpcsStatus = async (isTestNet) => {
	const net = isTestNet ? "devnet" : "mainnet"
	const solres = await fetch(
		`https://solana-${net}.g.alchemy.com/v2/B9sqdnSJnFWSdKlCTFqEQjMr8pnj7RAb`,
		{
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				jsonrpc: "2.0",
				id: 1,
				method: "getBlockHeight",
			}),
		}
	).then((res) => res.json());

	const rpcsa = {
		title: "Solana RPC",
		key: "sol",
		status: !!solres.result,
	};
	return rpcsa;
};

export default rpcsStatus;
