import { Cell } from "ton";

const OFF_CHAIN_CONTENT_PREFIX = 0x01;

export function flattenSnakeCell(cell: Cell) {
	try {
		let c: Cell | null = cell;

		let res = Buffer.alloc(0);

		while (c) {
			let cs = c.beginParse();
			console.log(cs);
			let data = cs.readRemainingBytes();
			res = Buffer.concat([res, data]);
			c = c.refs[0];
		}

		return res;
	} catch (e) {
		console.log(e);
		return null;
	}
}

function bufferToChunks(buff: Buffer, chunkSize: number) {
	let chunks: Buffer[] = [];
	while (buff.byteLength > 0) {
		chunks.push(buff.slice(0, chunkSize));
		buff = buff.slice(chunkSize);
	}
	return chunks;
}

export function makeSnakeCell(data: Buffer) {
	let chunks = bufferToChunks(data, 127);
	let rootCell = new Cell();
	let curCell = rootCell;

	for (let i = 0; i < chunks.length; i++) {
		let chunk = chunks[i];

		curCell.bits.writeBuffer(chunk);

		if (chunks[i + 1]) {
			let nextCell = new Cell();
			curCell.refs.push(nextCell);
			curCell = nextCell;
		}
	}

	return rootCell;
}

export function encodeOffChainContent(content: string) {
	let data = Buffer.from(content);
	let offChainPrefix = Buffer.from([OFF_CHAIN_CONTENT_PREFIX]);
	data = Buffer.concat([offChainPrefix, data]);
	return makeSnakeCell(data);
}

export function decodeOffChainContent(content: Cell) {
	console.log(content);
	let data = flattenSnakeCell(content);

	if (data) {
		let prefix = data[0];
		if (prefix !== OFF_CHAIN_CONTENT_PREFIX) {
			console.log(`Unknown content prefix: ${prefix.toString(16)}`);
			return "";
		}
		return data.slice(1).toString();
	} else {
		return "";
	}
}
