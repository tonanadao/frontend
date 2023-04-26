import * as nearAPI from "near-api-js";

const rpcsStatus = async () => {
	const { connect, keyStores } = nearAPI;

	const connectionConfig = {
		networkId: "mainnet",
		keyStore: new keyStores.BrowserLocalStorageKeyStore(),
		nodeUrl: "https://rpc.mainnet.near.org",
		walletUrl: "https://wallet.mainnet.near.org",
		helperUrl: "https://helper.mainnet.near.org",
		explorerUrl: "https://explorer.mainnet.near.org",
	};
	const nearConnection = await connect(connectionConfig);

	const rpcsa = {
		title: "Near RPC",
		key: "near",
		status: !!(await nearConnection.connection.provider.status()).uptime_sec,
	};
	return rpcsa;
};

export default rpcsStatus;
