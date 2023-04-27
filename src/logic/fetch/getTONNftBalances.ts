import { TonClient, Address, Cell, beginCell } from "ton";
const getTONNftBalances = (userWallet: string, setNfts: any) => {
	fetch("https://proxy.tonana.org/" + `https://testnet.tonapi.io/v2/accounts/${userWallet}/nfts?limit=1000&offset=0&indirect_ownership=false`, {
		headers: {
			Accept: "application/json"
		}
	})
		.then((e) => e.json())
		.then(async (e: any) => {
			const res = e.nft_items.map((e: any) => ({
				nft_address: Address.parseRaw(e.address).toFriendly(),
				name: e.metadata.name,
				image: e.metadata.image,
				description: e.metadata.description,
				//@ts-ignore
				address: Address.parseRaw(e.owner.address).toFriendly(),
			}))
			setNfts(res.filter((e: any) => e))
		})
		.catch((e: any) => { setNfts([]) })
};

export default getTONNftBalances;
