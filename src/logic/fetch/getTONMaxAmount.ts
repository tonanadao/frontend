import TonWeb from "tonweb";

const getTONMaxAmount = (setTONMaxAmount: any) => {
	fetch(
		`https://toncenter.com/api/v2/getAddressInformation?address=${process.env.REACT_APP_BACK_TON_WALLET}`,
		{ method: "GET" }
	)
		.then((e) => e.json())
		.then((e: any) => {
			setTONMaxAmount(Number(TonWeb.utils.fromNano(Number(e.result.balance))));
		});
};

// new TonWeb.HttpProvider("https://toncenter.com/api/v2/jsonRPC", {
// 	apiKey: "3cb4d4625d129371c869ab603a3523e22c6a7507307380bf1de59b32be2630ec",
// });

export default getTONMaxAmount;
