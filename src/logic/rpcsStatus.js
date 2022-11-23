import * as solweb3 from "@solana/web3.js";
import nearAPI from "near-api-js";
import Web3 from "web3";
import TonWeb from "tonweb";
import { Cosmos } from "@cosmostation/cosmosjs/src/index.js";

const rpcsStatus = async () => {
	console.log("test");
	const connection = new solweb3.Connection(
		solweb3.clusterApiUrl("mainnet-beta")
	);
	console.log("sol", await connection.rpcEndpoint());

	const networkId = "mainnet";

	const nearProvider = new nearAPI.providers.JsonRpcProvider({
		url: `https://rpc.${networkId}.near.org`,
	});
	console.log("near", await nearProvider.status());
	const ethWeb3js = new Web3(
		new Web3.providers.HttpProvider(
			"https://eth-mainnet.rpcfast.com/?api_key=yOCgA3ku0DbciIQ1Qj2BTpeHJ46sFpMWOfqHuvfZV541l8N7K9DCnMu62Uw5X3jX"
		)
	);
	console.log("eth", ethWeb3js.givenProvider);

	const aurWeb3js = new Web3(
		new Web3.providers.HttpProvider(
			"https://mainnet.aurora.dev/7CgURzoyu4Ewczvs18zmkSPfDDSBoNVDsNDvcPbePdz"
		)
	);
	console.log("eth", aurWeb3js.givenProvider);

	const ton = new TonWeb(
		new TonWeb.HttpProvider(
			"https://proxy.tonana.org/http://159.223.20.111:8885/jsonRPC",
			{
				apiKey:
					"0e864b650c2d3fed65729622d72fc8b40686f38242e0c187bf2aafe7a028ac59",
			}
		)
	);
	console.log("ton", await ton.HttpProvider.getMasterchainInfo());
	const chainId = "cosmoshub-4";
	const cosmos = new Cosmos("https://api.cosmos.network", chainId);
	fetch("https://api.cosmos.network")
		.then((e) => e.json())
		.then((e) => {
			console.log("cosmos", e);
		});
};

export default rpcsStatus;
