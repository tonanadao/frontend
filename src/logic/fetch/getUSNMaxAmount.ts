const getNEARMaxAmount = (setNEARMaxAmount: any) => {
	fetch(
		`https://proxy.tonana.org/http://159.223.20.111:8885/getAddressInformation?address=${process.env.REACT_APP_BACK_TON_WALLET}`,
		{ method: "GET" }
	)
		.then((e) => e.json())
		.then((e: any) => {
			setNEARMaxAmount(e.result.balance);
		});
};

export default getNEARMaxAmount;
