import * as nearAPI from "near-api-js";

const rpcsStatus = async (isTestNet) => {
	const net = isTestNet ? 'testnet' : 'mainnet'
	const { connect, keyStores } = nearAPI;

	const connectionConfig = {
		networkId: "mainnet",
		keyStore: new keyStores.BrowserLocalStorageKeyStore(),
		nodeUrl: `https://rpc.${net}.near.org`,
		walletUrl: `https://wallet.${net}.near.org`,
		helperUrl: `https://helper.${net}.near.org`,
		explorerUrl: `https://explorer.${net}.near.org`,
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
