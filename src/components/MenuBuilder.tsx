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
									net === "wAURORA (TON)"
										? "cantSelect"
										: ""
								}
								onClick={() =>
									net !== "wNEAR (TON)" &&
									net !== "wATOM (TON)" &&
									net !== "wAURORA (TON)"
										? set("SOL")
										: null
								}>
								SOL
							</div>
						),
				  }
				: null,
			// net !== "AURORA"
			// 	? {
			// 			key: "AURORA",
			// 			label: (
			// 				<div
			// 					className={
			// 						net === "wNEAR (TON)" ||
			// 						net === "wATOM (TON)" ||
			// 						net === "wSOL (TON)"
			// 							? "cantSelect"
			// 							: ""
			// 					}
			// 					onClick={() =>
			// 						net !== "wNEAR (TON)" &&
			// 						net !== "wATOM (TON)" &&
			// 						net !== "wSOL (TON)"
			// 							? set("AURORA")
			// 							: null
			// 					}>
			// 					AURORA
			// 				</div>
			// 			),
			// 	  }
			// 	: null,
			net !== "ATOM"
				? {
						key: "ATOM",
						label: (
							<div
								className={
									net === "wNEAR (TON)" ||
									net === "wSOL (TON)" ||
									net === "wAURORA (TON)"
										? "cantSelect"
										: ""
								}
								onClick={() =>
									net !== "wNEAR (TON)" &&
									net !== "wSOL (TON)" &&
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
									net === "wAURORA (TON)"
										? "cantSelect"
										: ""
								}
								onClick={() =>
									net !== "wSOL (TON)" &&
									net !== "wATOM (TON)" &&
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
									net === "wAURORA (TON)" ||
									net === "wSOL (TON)"
										? "cantSelect"
										: ""
								}
								onClick={() =>
									net !== "wNEAR (TON)" &&
									net !== "wATOM (TON)" &&
									net !== "wAURORA(TON)" &&
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
		// 	net !== "wAURORA (TON)"
		// 		? {
		// 				key: "wAURORA (TON)",
		// 				label: (
		// 					<div
		// 						className={net !== "AURORA" ? "cantSelect" : ""}
		// 						onClick={() =>
		// 							net === "AURORA" ? set("wAURORA (TON)") : null
		// 						}>
		// 						wAURORA (TON)
		// 					</div>
		// 				),
		// 		  }
		// 		: null,
		// ]}
	/>
);
