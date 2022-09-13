import atomIco from "../static/img/atom.png";
import nearIco from "../static/img/nearcoin.png";
import tonIco from "../static/img/ton.png";
import solIco from "../static/img/solana.png";

export const icoBuilder = (chain: string) =>
	chain === "SOL" || chain === "wSOL (TON)"
		? solIco
		: chain === "NEAR" || chain === "wNEAR (TON)"
		? nearIco
		: chain === "TON"
		? tonIco
		: chain === "ATOM" || chain === "wATOM (TON)"
		? atomIco
		: "";
