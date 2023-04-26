import atomIco from "../static/img/atom.png";
import nearIco from "../static/img/nearcoin.png";
import tonIco from "../static/img/ton.png";
import solIco from "../static/img/solana.png";
import aurIco from "../static/img/aurora.png";
import usnIco from "../static/img/usn.png";
import ethIco from "../static/img/eth.png";
import polygonIco from "../static/img/polygon.png";

export const icoBuilder = (chain: string) =>
	chain === "SOL" || chain === "wSOL (TON)"
		? solIco
		: chain === "NEAR" || chain === "wNEAR (TON)"
			? nearIco
			: chain === "TON"
				? tonIco
				: chain === "ATOM" || chain === "wATOM (TON)"
					? atomIco
					: chain === "AURORA" || chain === "wAURORA (TON)"
						? aurIco
						: chain === "USN" || chain === "wUSN (TON)"
							? usnIco
							: chain === "ETH" || chain === "wETH (TON)"
								? ethIco
								: chain === "MUMBAI"
									? polygonIco
									: "";
