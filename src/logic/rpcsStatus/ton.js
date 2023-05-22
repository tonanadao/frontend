import TonWeb from "tonweb";

const rpcsStatus = async (isTestNet) => {
	const net = isTestNet ? "testnet.toncenter" : "toncenter"

	const ton = new TonWeb.HttpProvider(`https://${net}.com/api/v2/jsonRPC`, {
		apiKey: "0e864b650c2d3fed65729622d72fc8b40686f38242e0c187bf2aafe7a028ac59", //need replace apiKey for testnet
	});

	const rpcsa = {
		title: "Ton RPC",
		key: "ton",
		status: !!(await ton.getMasterchainInfo()).last.seqno,
	};
	return rpcsa;
};

export default rpcsStatus;
