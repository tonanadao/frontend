/// <reference types="node" />
import { Cell } from "../boc/Cell";
export declare function safeSign(cell: Cell, secretKey: Buffer, seed?: string): Buffer;
export declare function safeSignVerify(cell: Cell, signature: Buffer, publicKey: Buffer, seed?: string): boolean;
