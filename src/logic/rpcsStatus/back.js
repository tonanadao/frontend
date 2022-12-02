const rpcsStatus = async () => {
	const tnn = await fetch(
		"https://proxy.tonana.org/https://api.tonana.org/ping",
		{
			method: "GET",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
		}
	).then((e) => e.json());
	console.log(tnn);

	const rpcsa = {
		title: "Tonana oracle",
		key: "tnn",
		status: tnn.status === "ok",
	};

	return rpcsa;
};

export default rpcsStatus;
