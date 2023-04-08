import CoinGecko from "coingecko-api";

const fetchMarkets = async (
	networkSource: string,
	networkDestination: string,
	ATOMMaxAmount: number,
	SOLMaxAmount: number,
	ETHMaxAmount: number,
	AURMaxAmount: number,
	TONMaxAmount: number,
	USNMaxAmount: number,
	NEARMaxAmount: number) => {

	if (networkSource === "TON" && networkDestination === "SOL") {
		return SOLMaxAmount / TONMaxAmount;
	} // todo


};

export default fetchMarkets;
