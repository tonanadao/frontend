import CoinGecko from "coingecko-api";

type RetryableFunction<T> = (...args: any[]) => Promise<T>;

async function withRetry<T>(
	fn: RetryableFunction<T>,
	retries: number = 5,
	retryDelay: number = 5000,
): Promise<T> {
	try {
		return await fn();
	} catch (error) {
		if (retries > 0 && error instanceof TypeError) {
			await new Promise(resolve => setTimeout(resolve, retryDelay));
			return withRetry(fn, retries - 1, retryDelay);
		} else {
			throw error;
		}
	}
}

const fetchMarkets = async (stu: any, ssu: any, sau: any, snu: any, sauruu: any, susn: any, sethu: any) => {
	const CoinGeckoClient = new CoinGecko();
	try {
		stu((await withRetry(() => CoinGeckoClient.coins.fetch("the-open-network", {}))).data
			.market_data.current_price.usd);
		ssu((await withRetry(() => CoinGeckoClient.coins.fetch("solana", {}))).data
			.market_data.current_price.usd);
		sau((await withRetry(() => CoinGeckoClient.coins.fetch("cosmos", {}))).data
			.market_data.current_price.usd);
		snu((await withRetry(() => CoinGeckoClient.coins.fetch("near", {}))).data.market_data
			.current_price.usd);
		sauruu((await withRetry(() => CoinGeckoClient.coins.fetch("aurora-near", {}))).data
			.market_data.current_price.usd)
		sethu((await withRetry(() => CoinGeckoClient.coins.fetch("ethereum", {}))).data.market_data
			.current_price.usd)
		susn((await withRetry(() => CoinGeckoClient.coins.fetch("usn", {}))).data.market_data
			.current_price.usd)
	} catch (e) { console.log(e) }
};

export default fetchMarkets;
