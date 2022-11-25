import * as solweb3 from "@solana/web3.js";

const call = async (func) => {
	try {
		const result = await func();
		return result;
	} catch (e) {
		return e;
	}
};
const rpcsStatus = async () => {
	// const near = await call(() =>
	// 	fetch(`https://proxy.tonana.org/https://rpc.mainnet.near.org`).then((e) =>
	// 		e.json()
	// 	)
	// );
	// const eth = await call(() =>
	// 	fetch(
	// 		"https://proxy.tonana.org/https://eth-mainnet.rpcfast.com/?api_key=yOCgA3ku0DbciIQ1Qj2BTpeHJ46sFpMWOfqHuvfZV541l8N7K9DCnMu62Uw5X3jX"
	// 	).then((e) => e.json())
	// );
	// const aurora = await call(() =>
	// 	fetch(
	// 		"https://proxy.tonana.org/https://mainnet.aurora.dev/7CgURzoyu4Ewczvs18zmkSPfDDSBoNVDsNDvcPbePdz"
	// 	).then((e) => e.json())
	// );
	// const ton = await call(() =>
	// 	fetch("https://proxy.tonana.org/https://toncenter.com/api/v2/jsonRPC").then(
	// 		(e) => e.json()
	// 	)
	// );
	// const cosmos = await call(() =>
	// 	fetch("https://proxy.tonana.org/https://api.cosmos.network").then((e) =>
	// 		e.json()
	// 	)
	// );
	// const sol = await call(() =>
	// 	fetch("https://proxy.tonana.org/https://api.mainnet-beta.solana.com/").then(
	// 		(e) => e.json()
	// 	)
	// );

	// const rpcsa = [
	// 	{
	// 		title: "Solana RPC",
	// 		key: "sol",
	// 		status: sol.message !== "Failed to fetch",
	// 	},

	// 	{
	// 		title: "Near RPC",
	// 		key: "near",
	// 		status: near.message !== "Failed to fetch",
	// 	},

	// 	{
	// 		title: "Ethereum RPC",
	// 		key: "eth",
	// 		status: eth.message !== "Failed to fetch",
	// 	},

	// 	{
	// 		title: "Aurora RPC",
	// 		key: "aurora",
	// 		status: aurora.message !== "Failed to fetch",
	// 	},

	// 	{
	// 		title: "Ton RPC",
	// 		key: "ton",
	// 		status: ton.message !== "Failed to fetch",
	// 	},

	// 	{
	// 		title: "Cosmos RPC",
	// 		key: "atom",
	// 		status: cosmos.message !== "Failed to fetch",
	// 	},
	// ];

	const rpcsa = [
		{
			title: "Solana RPC",
			key: "sol",
			status: true,
		},

		{
			title: "Near RPC",
			key: "near",
			status: true,
		},

		{
			title: "Ethereum RPC",
			key: "eth",
			status: true,
		},

		{
			title: "Aurora RPC",
			key: "aurora",
			status: true,
		},

		{
			title: "Ton RPC",
			key: "ton",
			status: true,
		},

		{
			title: "Cosmos RPC",
			key: "atom",
			status: true,
		},
	];

	return rpcsa;
};

export default rpcsStatus;

// import * as solweb3 from "@solana/web3.js";
// import nearAPI from "near-api-js";
// import Web3 from "web3";
// import TonWeb from "tonweb";
// import { Cosmos } from "@cosmostation/cosmosjs/src/index.js";

// const rpcsStatus = async () => {
// 	console.log("test");
// 	const connection = new solweb3.Connection(
// 		solweb3.clusterApiUrl("mainnet-beta")
// 	);
// 	console.log("sol", await connection.rpcEndpoint());

// 	const networkId = "mainnet";

// 	const nearProvider = new nearAPI.providers.JsonRpcProvider({
// 		url: `https://rpc.${networkId}.near.org`,
// 	});
// 	console.log("near", await nearProvider.status());
// 	const ethWeb3js = new Web3(
// 		new Web3.providers.HttpProvider(
// 			"https://eth-mainnet.rpcfast.com/?api_key=yOCgA3ku0DbciIQ1Qj2BTpeHJ46sFpMWOfqHuvfZV541l8N7K9DCnMu62Uw5X3jX"
// 		)
// 	);
// 	console.log("eth", ethWeb3js.givenProvider);

// 	const aurWeb3js = new Web3(
// 		new Web3.providers.HttpProvider(
// 			"https://mainnet.aurora.dev/7CgURzoyu4Ewczvs18zmkSPfDDSBoNVDsNDvcPbePdz"
// 		)
// 	);
// 	console.log("eth", aurWeb3js.givenProvider);

// 	const ton = new TonWeb(
// 		new TonWeb.HttpProvider(
// 			"https://proxy.tonana.org/http://159.223.20.111:8885/jsonRPC",
// 			{
// 				apiKey:
// 					"0e864b650c2d3fed65729622d72fc8b40686f38242e0c187bf2aafe7a028ac59",
// 			}
// 		)
// 	);
// 	console.log("ton", await ton.HttpProvider.getMasterchainInfo());
// 	const chainId = "cosmoshub-4";
// 	const cosmos = new Cosmos("https://api.cosmos.network", chainId);
// 	fetch("https://api.cosmos.network")
// 		.then((e) => e.json())
// 		.then((e) => {
// 			console.log("cosmos", e);
// 		});
// };

// export default rpcsStatus;
