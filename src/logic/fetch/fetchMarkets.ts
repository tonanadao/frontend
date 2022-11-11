import CoinGecko from "coingecko-api";

const fetchMarkets = async (stu: any, ssu: any, sau: any, snu:any,sauruu:any, susn: any) => {
	const CoinGeckoClient = new CoinGecko();
	stu((await CoinGeckoClient.coins.fetch("the-open-network", {})).data
	.market_data.current_price.usd);
	ssu((await CoinGeckoClient.coins.fetch("solana", {})).data
	.market_data.current_price.usd);
	sau((await CoinGeckoClient.coins.fetch("cosmos", {})).data
	.market_data.current_price.usd);
	snu((await CoinGeckoClient.coins.fetch("near", {})).data.market_data
	.current_price.usd);
	sauruu((await CoinGeckoClient.coins.fetch("aurora-near", {})).data
	.market_data.current_price.usd)
	susn((await CoinGeckoClient.coins.fetch("usn", {})).data.market_data
	.current_price.usd)
};

export default fetchMarkets;
