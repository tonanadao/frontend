import { Menu } from "antd";

export const menuBuilder = (net: string, set: any) => (
	<Menu
		items={[
			net !== "SOL"
				? {
						key: "SOL",
						label: (
							<div
								className={
									net === "wNEAR (TON)" ||
									net === "wATOM (TON)" ||
									net === "wUSN (TON)" ||
									net === "wETH (TON)" ||
									net === "wAURORA (TON)"
										? "cantSelect"
										: ""
								}
								onClick={() =>
									net !== "wNEAR (TON)" &&
									net !== "wATOM (TON)" &&
									net !== "wUSN (TON)" &&
									net !== "wETH (TON)" &&
									net !== "wAURORA (TON)"
										? set("SOL")
										: null
								}>
								SOL
							</div>
						),
				  }
				: null,
			net !== "ETH"
				? {
						key: "ETH",
						label: (
							<div
								className={
									net === "wNEAR (TON)" ||
									net === "wATOM (TON)" ||
									net === "wUSN (TON)" ||
									net === "wSOL (TON)" ||
									net === "wAURORA (TON)"
										? "cantSelect"
										: ""
								}
								onClick={() =>
									net !== "wNEAR (TON)" &&
									net !== "wATOM (TON)" &&
									net !== "wUSN (TON)" &&
									net !== "wSOL (TON)" &&
									net !== "wAURORA (TON)"
										? set("ETH")
										: null
								}>
								ETH
							</div>
						),
				  }
				: null,
			net !== "USN"
				? {
						key: "USN",
						label: (
							<div
								className={
									net === "wNEAR (TON)" ||
									net === "wATOM (TON)" ||
									net === "wSOL (TON)" ||
									net === "wETH (TON)" ||
									net === "wAURORA (TON)"
										? "cantSelect"
										: ""
								}
								onClick={() =>
									net !== "wNEAR (TON)" &&
									net !== "wATOM (TON)" &&
									net !== "wSOL (TON)" &&
									net !== "wETH (TON)" &&
									net !== "wAURORA (TON)"
										? set("USN")
										: null
								}>
								USN
							</div>
						),
				  }
				: null,
			net !== "AURORA"
				? {
						key: "AURORA",
						label: (
							<div
								className={
									net === "wNEAR (TON)" ||
									net === "wATOM (TON)" ||
									net === "wUSN (TON)" ||
									net === "wETH (TON)" ||
									net === "wSOL (TON)"
										? "cantSelect"
										: ""
								}
								onClick={() =>
									net !== "wNEAR (TON)" &&
									net !== "wUSN (TON)" &&
									net !== "wATOM (TON)" &&
									net !== "wETH (TON)" &&
									net !== "wSOL (TON)"
										? set("AURORA")
										: null
								}>
								AURORA
							</div>
						),
				  }
				: null,
			net !== "ATOM"
				? {
						key: "ATOM",
						label: (
							<div
								className={
									net === "wNEAR (TON)" ||
									net === "wSOL (TON)" ||
									net === "wETH (TON)" ||
									net === "wUSN (TON)" ||
									net === "wAURORA (TON)"
										? "cantSelect"
										: ""
								}
								onClick={() =>
									net !== "wNEAR (TON)" &&
									net !== "wSOL (TON)" &&
									net !== "wUSN (TON)" &&
									net !== "wETH (TON)" &&
									net !== "wAURORA (TON)"
										? set("ATOM")
										: null
								}>
								ATOM
							</div>
						),
				  }
				: null,

			net !== "NEAR"
				? {
						key: "NEAR",
						label: (
							<div
								className={
									net === "wSOL (TON)" ||
									net === "wATOM (TON)" ||
									net === "wUSN (TON)" ||
									net === "wETH (TON)" ||
									net === "wAURORA (TON)"
										? "cantSelect"
										: ""
								}
								onClick={() =>
									net !== "wSOL (TON)" &&
									net !== "wUSN (TON)" &&
									net !== "wATOM (TON)" &&
									net !== "wETH (TON)" &&
									net !== "wAURORA (TON)"
										? set("NEAR")
										: null
								}>
								NEAR
							</div>
						),
				  }
				: null,
			net !== "TON"
				? {
						key: "TON",
						label: (
							<div
								className={
									net === "wNEAR (TON)" ||
									net === "wATOM (TON)" ||
									net === "wUSN (TON)" ||
									net === "wETH (TON)" ||
									net === "wAURORA (TON)" ||
									net === "wSOL (TON)"
										? "cantSelect"
										: ""
								}
								onClick={() =>
									net !== "wNEAR (TON)" &&
									net !== "wATOM (TON)" &&
									net !== "wUSN (TON)" &&
									net !== "wAURORA (TON)" &&
									net !== "wETH (TON)" &&
									net !== "wSOL (TON)"
										? set("TON")
										: null
								}>
								TON
							</div>
						),
				  }
				: null,
			net !== "wNEAR (TON)"
				? {
						key: "wNEAR (TON)",
						label: (
							<div
								className={net !== "NEAR" ? "cantSelect" : ""}
								onClick={() => (net === "NEAR" ? set("wNEAR (TON)") : null)}>
								wNEAR (TON)
							</div>
						),
				  }
				: null,
			net !== "wETH (TON)"
				? {
						key: "wETH (TON)",
						label: (
							<div
								className={net !== "ETH" ? "cantSelect" : ""}
								onClick={() => (net === "ETH" ? set("wETH (TON)") : null)}>
								wETH (TON)
							</div>
						),
				  }
				: null,

			net !== "wUSN (TON)"
				? {
						key: "wUSN (TON)",
						label: (
							<div
								className={net !== "USN" ? "cantSelect" : ""}
								onClick={() => (net === "USN" ? set("wUSN (TON)") : null)}>
								wUSN (TON)
							</div>
						),
				  }
				: null,
			net !== "wATOM (TON)"
				? {
						key: "wATOM (TON)",
						label: (
							<div
								className={net !== "ATOM" ? "cantSelect" : ""}
								onClick={() => (net === "ATOM" ? set("wATOM (TON)") : null)}>
								wATOM (TON)
							</div>
						),
				  }
				: null,
			net !== "wSOL (TON)"
				? {
						key: "wSOL (TON)",
						label: (
							<div
								className={net !== "SOL" ? "cantSelect" : ""}
								onClick={() => (net === "SOL" ? set("wSOL (TON)") : null)}>
								wSOL (TON)
							</div>
						),
				  }
				: null,
			net !== "wAURORA (TON)"
				? {
						key: "wAURORA (TON)",
						label: (
							<div
								className={net !== "AURORA" ? "cantSelect" : ""}
								onClick={() =>
									net === "AURORA" ? set("wAURORA (TON)") : null
								}>
								wAURORA (TON)
							</div>
						),
				  }
				: null,
		]}
	/>
);