import { TonClient, Address, Cell, beginCell } from "ton";
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
			let nameOfItem = flattenSnakeCell(nameOfItemRaw.toCell()).toString('utf8')
			console.log(nameOfItem)
			const addresOfNftCollMaster = Cell
				.fromBoc(Buffer.from(newValue.stack[2][1].bytes, 'base64'))[0]
				.beginParse()
			const owner = Cell
				.fromBoc(Buffer.from(newValue.stack[3][1].bytes, 'base64'))[0]
				.beginParse()
			const collectionAddress = addresOfNftCollMaster.readAddress()

			//@ts-ignore
			const baseInfo = await rpcClient.callGetMethod(collectionAddress, 'get_nft_content', [
				['num', '0'],
				['tvm.Cell', "te6cckEBAQEAAgAAAEysuc0="],
			]) // works only for this case
			// console.log(baseInfo.stack[0][1].bytes)
			// const cell = (baseInfo.stack.pop()).cell
			// console.log(cell)
			let baseContent = ''
			if (!nameOfItem.includes('http')) baseContent = decodeOffChainContent(Cell.fromBoc(Buffer.from(baseInfo.stack[0][1].bytes, 'base64'))[0])
			if (nameOfItem.includes('http')) nameOfItem = 'http' + nameOfItem.split('http')[1]

			// console.log(baseContent + nameOfItem)
			// console.log(beginCell().endCell().toString())
			//@ts-ignore
			// const newValueColl = await rpcClient.callGetMethod(collectionAddress, 'get_collection_data') // works only for this case
			// const adfsfcooll = Cell
			// 	.fromBoc(Buffer.from(newValueColl.stack[1][1].bytes, 'base64'))[0]
			// 	.beginParse()
			// adfsfcooll.skip(8)
			//
			// fetch("https://proxy.tonana.org/" + flattenSnakeCell(adfsfcooll.toCell()).toString('utf8'), {
			// 	headers: {
			// 		Accept: "application/json"
			// 	}
			// }).then((e) => e.json()).then((e: any) => {
			// 	console.log(flattenSnakeCell(adfsfcooll.toCell()).toString('utf8'))
			// 	console.log(nameOfItem)
			// 	console.log(e)
			// 	respon({
			// 		nft_address: address,
			// 		name: e.name,
			// 		image: e.image,
			// 		description: e.description,
			// 		url: flattenSnakeCell(adfsfcooll.toCell()).toString('utf8'),
			// 		//@ts-ignore
			// 		address: owner.readAddress().toFriendly(),
			// 	});
			// }).catch((e: any) => {
			// 	respon(null)
			// })
			fetch("https://proxy.tonana.org/" + (nameOfItem.includes('http') ? nameOfItem : baseContent + nameOfItem), {
				headers: {
					Accept: "application/json"
				}
			}).then((e) => e.json()).then((e: any) => {
				console.log(e)
				respon({
					nft_address: address,
					name: e.name,
					image: e.image,
					description: e.description,
					// url: flattenSnakeCell(adfsfcooll.toCell()).toString('utf8'),
					//@ts-ignore
					address: owner.readAddress().toFriendly(),
				});
			})
				.catch((e: any) => {
					console.log(e)
					respon(null)
				})
		} catch (e) {
			console.log(e)
			respon(null)
		}
	});
}
const getTONNftBalances = (userWallet: string, setNfts: any) => {
	fetch(`https://proxy.tonana.org/https://anton.tools/api/v0/accounts?interface=nft_item&owner_address=${userWallet}&order=DESC&limit=9999&latest=true`, {
		headers: {
			Accept: "application/json"
		}
	})
		.then((e) => e.json())
		.then(async (e: any) => {
			console.log(e)
			const res = await Promise.all(e.results.map(async (e: any) => await get_nft_data(e.address.base64)))
			setNfts(res.filter(e => e))
		})
		.catch((e: any) => { setNfts([]) })
};

// new TonWeb.HttpProvider("https://toncenter.com/api/v2/jsonRPC", {
// 	apiKey: "3cb4d4625d129371c869ab603a3523e22c6a7507307380bf1de59b32be2630ec",
// });

const func = (userWallet: string, setNfts: any) => {
	let headers = new Headers();
	fetch(`https://api.covalenthq.com/v1/80001/address/${userWallet}/balances_v2/?key=cqt_rQqKrqDJwdXcvcqCFwQGB3Pf8Hpv&nft=true`, {
		headers: {
			Accept: "application/json"
		}
	})
		.then((e) => e.json())
		.then(async (e: any) => {
			console.log('123')
			console.log(e)

			const res = e.data.items.filter((e: any) => e.contract_address === "0x94176c0c183e69ba7bbdc2f79b83ca4817d7e554").map((e: any) => e.nft_data)
			// console.log(e.data.items.filter((e: any) => e.type === "nft").map((e: any) => e.nft_data))
			// console.log(res[0].map((e: any) => ({
			// 	nft_address: e.token_id,
			// 	name: e.external_data.name,
			// 	image: e.external_data.image,
			// 	description: e.external_data.description,
			// 	address: e.owner,
			// })))
			setNfts(res.flat().map((e: any) => ({
				nft_address: e.token_id,
				name: e.external_data.name,
				image: e.external_data.image,
				description: e.external_data.description,
				address: e.owner,

			})))
		})
		.catch((e: any) => { setNfts([]) })
};
export default func
