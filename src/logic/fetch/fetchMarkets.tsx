const fetchMarkets = (stu: any, ssu: any) => {
	fetch("https://sepezho.com:5555/https://ftx.com/api/markets")
		.then((e) => e.json())
		.then((e) => {
			stu(e.result.filter((item: any) => item.name === "TONCOIN/USD")[0].price);
			ssu(e.result.filter((item: any) => item.name === "SOL/USD")[0].price);
		});
};

export default fetchMarkets;
