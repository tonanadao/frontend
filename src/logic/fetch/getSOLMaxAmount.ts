const getSOLMaxAmount = (setSOLMaxAmount: any) =>
	fetch(
		"https://sol.getblock.io/4ac0dba3-02ef-4876-9a42-b24581cf18b8/mainnet/",
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
	)
		.then((res) => res.json())
		.then((res) => {
			console.log(res.result);
			setSOLMaxAmount(
				res.result?.value ? res.result?.value.lamports / 1000000000 : 0
			);
		});

export default getSOLMaxAmount;
