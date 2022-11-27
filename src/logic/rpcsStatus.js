// import * as solweb3 from "@solana/web3.js";

// const call = async (func) => {
// 	try {
// 		const result = await func();
// 		return result;
// 	} catch (e) {
// 		return e;
// 	}
// };
// const rpcsStatus = async () => {
// 	// const near = await call(() =>
// 	// 	fetch(`https://proxy.tonana.org/https://rpc.mainnet.near.org`).then((e) =>
// 	// 		e.json()
// 	// 	)
// 	// );
// 	// const eth = await call(() =>
// 	// 	fetch(
// 	// 		"https://proxy.tonana.org/https://eth-mainnet.rpcfast.com/?api_key=yOCgA3ku0DbciIQ1Qj2BTpeHJ46sFpMWOfqHuvfZV541l8N7K9DCnMu62Uw5X3jX"
// 	// 	).then((e) => e.json())
// 	// );
// 	// const aurora = await call(() =>
// 	// 	fetch(
// 	// 		"https://proxy.tonana.org/https://mainnet.aurora.dev/7CgURzoyu4Ewczvs18zmkSPfDDSBoNVDsNDvcPbePdz"
// 	// 	).then((e) => e.json())
// 	// );
// 	// const ton = await call(() =>
// 	// 	fetch("https://proxy.tonana.org/https://toncenter.com/api/v2/jsonRPC").then(
// 	// 		(e) => e.json()
// 	// 	)
// 	// );
// 	// const cosmos = await call(() =>
// 	// 	fetch("https://proxy.tonana.org/https://api.cosmos.network").then((e) =>
// 	// 		e.json()
// 	// 	)
// 	// );
// 	// const sol = await call(() =>
// 	// 	fetch("https://proxy.tonana.org/https://api.mainnet-beta.solana.com/").then(
// 	// 		(e) => e.json()
// 	// 	)
// 	// );
// 	// const rpcsa = [
// 	// 	{
// 	// 		title: "Solana RPC",
// 	// 		key: "sol",
// 	// 		status: sol.message !== "Failed to fetch",
// 	// 	},
// 	// 	{
// 	// 		title: "Near RPC",
// 	// 		key: "near",
// 	// 		status: near.message !== "Failed to fetch",
// 	// 	},
// 	// 	{
// 	// 		title: "Ethereum RPC",
// 	// 		key: "eth",
// 	// 		status: eth.message !== "Failed to fetch",
// 	// 	},
// 	// 	{
// 	// 		title: "Aurora RPC",
// 	// 		key: "aurora",
// 	// 		status: aurora.message !== "Failed to fetch",
// 	// 	},
// 	// 	{
// 	// 		title: "Ton RPC",
// 	// 		key: "ton",
// 	// 		status: ton.message !== "Failed to fetch",
// 	// 	},
// 	// 	{
// 	// 		title: "Cosmos RPC",
// 	// 		key: "atom",
// 	// 		status: cosmos.message !== "Failed to fetch",
// 	// 	},
// 	// ];
// 	// const rpcsa = [
// 	// 	{
// 	// 		title: "Solana RPC",
// 	// 		key: "sol",
// 	// 		status: true,
// 	// 	},
// 	// 	{
// 	// 		title: "Near RPC",
// 	// 		key: "near",
// 	// 		status: true,
// 	// 	},
// 	// 	{
// 	// 		title: "Ethereum RPC",
// 	// 		key: "eth",
// 	// 		status: true,
// 	// 	},
// 	// 	{
// 	// 		title: "Aurora RPC",
// 	// 		key: "aurora",
// 	// 		status: true,
// 	// 	},
// 	// 	{
// 	// 		title: "Ton RPC",
// 	// 		key: "ton",
// 	// 		status: true,
// 	// 	},
// 	// 	{
// 	// 		title: "Cosmos RPC",
// 	// 		key: "atom",
// 	// 		status: true,
// 	// 	},
// 	// ];
// 	// return rpcs;
// };

// export default rpcsStatus;

import * as nearAPI from "near-api-js";
import Web3 from "web3";
import TonWeb from "tonweb";
// import { Cosmos } from "@cosmostation/cosmosjs/src/index.js";

const rpcsStatus = async () => {
	console.log("test");

	const solres = await fetch(
		`https://solana-mainnet.g.alchemy.com/v2/B9sqdnSJnFWSdKlCTFqEQjMr8pnj7RAb`,
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

	// const solresa = await fetch(
	// 	`https://sepezho.com:5555/https://api.mainnet-beta.solana.com`,
	// 	{
	// 		method: "POST",
	// 		headers: {
	// 			Accept: "application/json, text/plain, */*",
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			jsonrpc: "2.0",
	// 			id: 1,
	// 			method: "getBlockHeight",
	// 		}),
	// 	}
	// ).then((res) => res.json());

	// console.log(!!solres.result);
	const networkId = "mainnet";

	const { connect, keyStores } = nearAPI;

	const connectionConfig = {
		networkId: "mainnet",
		keyStore: new keyStores.BrowserLocalStorageKeyStore(),
		nodeUrl: "https://rpc.mainnet.near.org",
		walletUrl: "https://wallet.mainnet.near.org",
		helperUrl: "https://helper.mainnet.near.org",
		explorerUrl: "https://explorer.mainnet.near.org",
	};

	//
	// connect to NEAR
	const nearConnection = await connect(connectionConfig);

	// const nearProvider = new nearAPI().providers.JsonRpcProvider({
	// 	url: `https://rpc.${networkId}.near.org`,
	// });
	// await near.connection.provider.status();
	// console.log("near", nearConnection);
	console.log(
		"near",
		!!(await nearConnection.connection.provider.status()).uptime_sec
	);
	// console.log("near", nearConnection.provider.status());
	const ethWeb3js = new Web3(
		new Web3.providers.HttpProvider(
			"https://eth-mainnet.rpcfast.com/?api_key=yOCgA3ku0DbciIQ1Qj2BTpeHJ46sFpMWOfqHuvfZV541l8N7K9DCnMu62Uw5X3jX"
		)
	);
	const ethd = await ethWeb3js.eth.getBlockNumber();
	// console.log("eth", );

	const aurWeb3js = new Web3(
		new Web3.providers.HttpProvider(
			"https://mainnet.aurora.dev/7CgURzoyu4Ewczvs18zmkSPfDDSBoNVDsNDvcPbePdz"
		)
	);
	const aurd = await aurWeb3js.eth.getBlockNumber();
	console.log("a", aurd);
	// console.log("eth", aurWeb3js.givenProvider);

	const ton = new TonWeb.HttpProvider("https://toncenter.com/api/v2/jsonRPC", {
		apiKey: "0e864b650c2d3fed65729622d72fc8b40686f38242e0c187bf2aafe7a028ac59",
	});
	console.log("ton", !!(await ton.getMasterchainInfo()).last.seqno);
	// const chainId = "cosmoshub-4";
	// const cosmos = new Cosmos("https://api.cosmos.network", chainId);

	// "https://api.cosmos.network"
	// var url = "https://api.cosmoscan.net/transaction/" + hash;

	// console.log(
	// 	await fetch("https://proxy.tonana.org/https://api.cosmos.network").then(
	// 		(e) => e.json()
	// 	)
	// );
	const csm = (
		await fetch(
			"https://proxy.tonana.org/https://rpc.cosmos.network/abci_info?"
		).then((e) => e.json())
	).result.response.last_block_height;
	console.log(csm);

	const rpcsa = [
		{
			title: "Solana RPC",
			key: "sol",
			status: !!solres.result,
		},
		{
			title: "Near RPC",
			key: "near",
			status: !!(await nearConnection.connection.provider.status()).uptime_sec,
		},
		{
			title: "Ethereum RPC",
			key: "eth",
			status: !!ethd,
		},
		{
			title: "Aurora RPC",
			key: "aurora",
			status: !!aurd,
		},
		{
			title: "Ton RPC",
			key: "ton",
			status: !!(await ton.getMasterchainInfo()).last.seqno,
		},
		{
			title: "Cosmos RPC",
			key: "atom",
			status: !!csm,
		},
	];
	return rpcsa;
};

export default rpcsStatus;
