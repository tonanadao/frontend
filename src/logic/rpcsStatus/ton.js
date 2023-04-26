import TonWeb from "tonweb";

const rpcsStatus = async () => {
	const ton = new TonWeb.HttpProvider("https://toncenter.com/api/v2/jsonRPC", {
		apiKey: "0e864b650c2d3fed65729622d72fc8b40686f38242e0c187bf2aafe7a028ac59",
	});

	const rpcsa = {
		title: "Ton RPC",
		key: "ton",
		status: !!(await ton.getMasterchainInfo()).last.seqno,
	};
	return rpcsa;
};

export default rpcsStatus;
