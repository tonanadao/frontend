const getSOLMaxAmount = async (setSOLMaxAmount: any) => {
	try {
		console.log(1);
		(async () => {
			const rs = await fetch(
				"https://solana-mainnet.g.alchemy.com/v2/B9sqdnSJnFWSdKlCTFqEQjMr8pnj7RAb",
				{
					method: "POST",
					headers: {
						Accept: "application/json, text/plain, */*",
						"Content-Type": "application/json",
						// 'x-api-key':
					},
					body: JSON.stringify({
						jsonrpc: "2.0",
						id: 1,
						method: "getAccountInfo",
						params: [
							process.env.REACT_APP_BACK_SOL_WALLET,
							{
								encoding: "base58",
							},
						],
					}),
				}
			);
			rs.json().then((res) => {
				try {
					console.log(2);

					console.log(res.result);
					setSOLMaxAmount(
						res.result?.value ? res.result?.value.lamports / 1000000000 : 0
					);
				} catch (e) {
					console.log(e);
				}
			});
		})();
	} catch (e) {
		console.log(e);
	}
};
export default getSOLMaxAmount;
