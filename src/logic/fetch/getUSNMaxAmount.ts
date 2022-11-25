const getNEARMaxAmount = (setNEARMaxAmount: any) => {
	fetch(
		`https://toncenter.com/api/v2/getAddressInformation?address=${process.env.REACT_APP_BACK_TON_WALLET}`,
		{ method: "GET" }
	)
		.then((e) => e.json())
		.then((e: any) => {
			setNEARMaxAmount(e.result.balance);
		});
};

export default getNEARMaxAmount;
