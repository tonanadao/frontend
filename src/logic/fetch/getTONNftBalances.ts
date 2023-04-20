import { TonClient, Address, Cell } from "ton";
// import { Cell as toncorecell } from "ton-core";
import { flattenSnakeCell, decodeOffChainContent } from "./boc";

const endpoint = 'https://toncenter.com/api/v2/jsonRPC'
const apiKey = '0e864b650c2d3fed65729622d72fc8b40686f38242e0c187bf2aafe7a028ac59'
const rpcClient = new TonClient({
	endpoint,
	apiKey
});

const get_nft_data = async (address: string) => {
	return await new Promise(async (respon) => {
		try {

			const newValue = await rpcClient.callGetMethod(Address.parseFriendly(address).address, 'get_nft_data') // works only for this case
			const nameOfItemRaw = Cell
				.fromBoc(Buffer.from(newValue.stack[4][1].bytes, 'base64'))[0]
				.beginParse()
			const nameOfItem = flattenSnakeCell(nameOfItemRaw.toCell()).toString('utf8')
			console.log(nameOfItem)
			const addresOfNftCollMaster = Cell
				.fromBoc(Buffer.from(newValue.stack[2][1].bytes, 'base64'))[0]
				.beginParse()
			const owner = Cell
				.fromBoc(Buffer.from(newValue.stack[3][1].bytes, 'base64'))[0]
				.beginParse()
			const collectionAddress = addresOfNftCollMaster.readAddress()

			// //@ts-ignore
			// const baseInfo = await rpcClient.callGetMethod(collectionAddress, 'get_nft_content', [
			// 	{
			// 		type: 'int',
			// 		value: 0,
			// 	},
			// 	{
			// 		type: 'cell', cell: new toncorecell()
			// 	},
			// ]) // works only for this case
			//
			// const cell = (baseInfo.stack.pop()).cell
			// const baseContent = decodeOffChainContent(cell)
			// console.log(baseContent)
			//@ts-ignore
			const newValueColl = await rpcClient.callGetMethod(collectionAddress, 'get_collection_data') // works only for this case

			const adfsfcooll = Cell
				.fromBoc(Buffer.from(newValueColl.stack[1][1].bytes, 'base64'))[0]
				.beginParse()
			adfsfcooll.skip(8)
			fetch("https://proxy.tonana.org/" + flattenSnakeCell(adfsfcooll.toCell()).toString('utf8'), {
				headers: {
					Accept: "application/json"
				}
			}).then((e) => e.json()).then((e: any) => {
				console.log(flattenSnakeCell(adfsfcooll.toCell()).toString('utf8'))
				console.log(nameOfItem)
				console.log(e)
				respon({
					nft_address: address,
					name: e.name,
					image: e.image,
					description: e.description,
					url: flattenSnakeCell(adfsfcooll.toCell()).toString('utf8'),
					//@ts-ignore
					address: owner.readAddress().toFriendly(),
				});
			}).catch((e: any) => {
				respon(null)
			})
		} catch (e) {
			respon(null)
		}
	});
}
const getTONNftBalances = (userWallet: string, setNfts: any) => {
	fetch(`https://proxy.tonana.org/https://anton.tools/api/v0/accounts?interface=nft_item&owner_address=${userWallet}&order=DESC&limit=9999`, {
		headers: {
			Accept: "application/json"
		}
	})
		.then((e) => e.json())
		.then(async (e: any) => {
			const res = await Promise.all(e.results.map(async (e: any) => await get_nft_data(e.address.base64)))
			setNfts(res.filter(e => e))
		})
		.catch((e: any) => { setNfts([]) })
};

// new TonWeb.HttpProvider("https://toncenter.com/api/v2/jsonRPC", {
// 	apiKey: "3cb4d4625d129371c869ab603a3523e22c6a7507307380bf1de59b32be2630ec",
// });

export default getTONNftBalances;
