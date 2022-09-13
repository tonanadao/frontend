const fetchMarkets = (stu: any, ssu: any, sau: any, snu:any) => {
	fetch("https://proxy.tonana.org/https://ftx.com/api/markets")
		.then((e) => e.json())
		.then((e) => {
			stu(e.result.filter((item: any) => item.name === "TONCOIN/USD")[0].price);
			ssu(e.result.filter((item: any) => item.name === "SOL/USD")[0].price);
			sau(e.result.filter((item: any) => item.name === "ATOM/USD")[0].price);
			snu(e.result.filter((item: any) => item.name === "NEAR/USD")[0].price);
		});
};

export default fetchMarkets;
