"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateInitToBuffer = void 0;
const ton_1 = require("ton");
function stateInitToBuffer(s) {
    const INIT_CELL = new ton_1.Cell();
    s.writeTo(INIT_CELL);
    return INIT_CELL.toBoc();
}
exports.stateInitToBuffer = stateInitToBuffer;
