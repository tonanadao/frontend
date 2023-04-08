import { Cosmos } from "@cosmostation/cosmosjs/src/index.js";

const rpcsStatus = async () => {
	const chainId = "cosmoshub-4"; //theta-testnet-001
	const cosmos = new Cosmos("https://atom.getblock.io/4ac0dba3-02ef-4876-9a42-b24581cf18b8/mainnet/", chainId);
	const csm = await cosmos.getLatestBlock()
	cosmos.getLatestBlock().then((e) => console.log(e));
	// const offlineSigner =
	// 	window.getOfflineSigner != null
	// 		? window.getOfflineSigner(chainId)
	// 		: null;
	//
	// const client = await SigningStargateClient.connectWithSigner(
	// 	"https://atom.getblock.io/4ac0dba3-02ef-4876-9a42-b24581cf18b8/mainnet/",
	// 	// "https://rpc.sentry-01.theta-testnet.polypore.xyz/",
	// 	offlineSigner
	// );
	//
	// client.getHeight().then((e) => console.log(e));
	// const csm = (
	// 	await fetch(
	// 		"https://atom.getblock.io/4ac0dba3-02ef-4876-9a42-b24581cf18b8/mainnet/"
	// 	).then((e) => e.json())
	// ).result.sync_info.latest_block_height;
	//
	const rpcsa = {
		title: "Cosmos RPC",
		key: "atom",
		status: !!csm,
	};

	return rpcsa;
};

export default rpcsStatus;
