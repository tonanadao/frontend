import CoinGecko from "coingecko-api";


const fetchMarkets = (stu: any, ssu: any, sau: any, snu:any,sauruu:any, susn: any) => {
	fetch("https://proxy.tonana.org/https://ftx.com/api/markets")
		.then((e) => e.json())
		.then(async (e) => {
			stu(e.result.filter((item: any) => item.name === "TONCOIN/USD")[0].price);
			ssu(e.result.filter((item: any) => item.name === "SOL/USD")[0].price);
			sau(e.result.filter((item: any) => item.name === "ATOM/USD")[0].price);
			snu(e.result.filter((item: any) => item.name === "NEAR/USD")[0].price);
			await func(sauruu)
			await funac(susn)
			
		});
};



//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var func = async (sauruu:any) => {
	// console.log( await CoinGeckoClient.coins.all());

	let data = await CoinGeckoClient.coins.fetch("aurora-near", {});
	sauruu(data.data.market_data.current_price.usd);
};
var funac = async (sauruu:any) => {
	let data = await CoinGeckoClient.coins.fetch("usn", {});
	console.log(data);
	sauruu(data.data.market_data.current_price.usd);
};



export default fetchMarkets;
