import CoinGecko from "coingecko-api";

type Setter<T> = (payload: T) => void;

const fetchMarkets = async (stu: Setter<number>, ssu: any, sau: any, snu:any,sauruu:any, susn: any, sethu: any) => {
	const CoinGeckoClient = new CoinGecko();

	const tonUsdPrice = (await CoinGeckoClient.coins.fetch("the-open-network", {})).data
	.market_data.current_price.usd;
	stu(tonUsdPrice);

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
	sethu((await CoinGeckoClient.coins.fetch("ethereum", {})).data.market_data
	.current_price.usd)
};

export default fetchMarkets;
