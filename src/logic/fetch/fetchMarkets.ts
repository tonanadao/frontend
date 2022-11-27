import CoinGecko from "coingecko-api";

type Setter<T> = (payload: T) => void;

const fetchMarkets = async (stu: Setter<number>, ssu: Setter<number>, sau: Setter<number>, snu: Setter<number>, sauruu: Setter<number>, susn: Setter<number>, sethu: Setter<number>) => {
	const CoinGeckoClient = new CoinGecko();

	const tonUsdPrice = (await CoinGeckoClient.coins.fetch("the-open-network", {})).data.market_data.current_price.usd;
	stu(tonUsdPrice);

	const solanaUsdPrice = (await CoinGeckoClient.coins.fetch("solana", {})).data.market_data.current_price.usd;
	ssu(solanaUsdPrice);


	const atomUsdPrice = (await CoinGeckoClient.coins.fetch("cosmos", {})).data.market_data.current_price.usd;
	sau(atomUsdPrice);

	const nearUsdPrice = (await CoinGeckoClient.coins.fetch("near", {})).data.market_data.current_price.usd;
	snu(nearUsdPrice);

	const auroraNearUsdPrice = (await CoinGeckoClient.coins.fetch("aurora-near", {})).data.market_data.current_price.usd;
	sauruu(auroraNearUsdPrice);

	const usnUsdPrice = (await CoinGeckoClient.coins.fetch("aurora-near", {})).data.market_data.current_price.usd;
	susn(usnUsdPrice);
	
	const ethereumNearUsdPrice = (await CoinGeckoClient.coins.fetch("aurora-near", {})).data.market_data.current_price.usd;
	sethu(ethereumNearUsdPrice);
};

export default fetchMarkets;
