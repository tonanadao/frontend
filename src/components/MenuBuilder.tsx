import { Menu } from "antd";

export const menuBuilder = (net: string, set: any, formType: string, isDestination: boolean) => (
	<Menu
		items={[
			formType === 'bridge' && !isDestination || formType === 'bridge' && isDestination && net === 'wSOL (TON)' || formType === 'swap' && net !== 'SOL'
				? {
					key: "SOL",
					label: (
						<div
							className={
								(formType === 'swap' && net !== "wSOL (TON)") ||
									(formType === 'bridge' && !isDestination)
									? ""
									: "cantSelect"
							}
							onClick={() =>
								(formType === 'swap' && net !== "wSOL (TON)") ||
									(formType === 'bridge' && !isDestination)
									? set("SOL")
									: null
							}>
							SOL
						</div>
					),
				}
				: null,
			formType === 'bridge' && !isDestination || formType === 'bridge' && isDestination && net === 'wETH (TON)' || formType === 'swap' && net !== 'ETH'
				? {
					key: "ETH",
					label: (
						<div
							className={
								(formType === 'swap' && net !== "wETH (TON)") ||
									(formType === 'bridge' && !isDestination)
									? ""
									: "cantSelect"
							}
							onClick={() =>
								(formType === 'swap' && net !== "wETH (TON)") ||
									(formType === 'bridge' && !isDestination)
									? set("ETH")
									: null
							}>
							ETH
						</div>
					),
				}
				: null,
			formType === 'bridge' && !isDestination || formType === 'bridge' && isDestination && net === 'wUSN (TON)' || formType === 'swap' && net !== 'USN'
				? {
					key: "USN",
					label: (
						<div
							className={
								(formType === 'swap' && net !== "wUSN (TON)") ||
									(formType === 'bridge' && !isDestination)
									? ""
									: "cantSelect"
							}
							onClick={() =>
								(formType === 'swap' && net !== "wUSN (TON)") ||
									(formType === 'bridge' && !isDestination)
									? set("USN")
									: null
							}>
							USN
						</div>
					),
				}
				: null,
			formType === 'bridge' && !isDestination || formType === 'bridge' && isDestination && net === 'wAURORA (TON)' || formType === 'swap' && net !== 'AURORA'
				? {
					key: "AURORA",
					label: (
						<div
							className={
								(formType === 'swap' && net !== "wAURORA (TON)") ||
									(formType === 'bridge' && !isDestination)
									? ""
									: "cantSelect"
							}
							onClick={() =>
								(formType === 'swap' && net !== "wAURORA (TON)") ||
									(formType === 'bridge' && !isDestination)
									? set("AURORA")
									: null
							}>
							AURORA
						</div>
					),
				}
				: null,
			formType === 'bridge' && !isDestination || formType === 'bridge' && isDestination && net === 'wATOM (TON)' || formType === 'swap' && net !== 'ATOM'
				? {
					key: "ATOM",
					label: (
						<div
							className={
								(formType === 'swap' && net !== "wATOM (TON)") ||
									(formType === 'bridge' && !isDestination)
									? ""
									: "cantSelect"
							}
							onClick={() =>
								(formType === 'swap' && net !== "wATOM (TON)") ||
									(formType === 'bridge' && !isDestination)
									? set("ATOM")
									: null
							}>
							ATOM
						</div>
					),
				}
				: null,
			formType === 'bridge' && !isDestination || formType === 'bridge' && isDestination && net === 'wNEAR (TON)' || formType === 'swap' && net !== 'NEAR'
				? {
					key: "NEAR",
					label: (
						<div
							className={
								(formType === 'swap' && net !== "wNEAR (TON)") ||
									(formType === 'bridge' && !isDestination)
									? ""
									: "cantSelect"
							}
							onClick={() =>
								(formType === 'swap' && net !== "wNEAR (TON)") ||
									(formType === 'bridge' && !isDestination)
									? set("NEAR")
									: null
							}>
							NEAR
						</div>
					),
				}
				: null,
			formType === 'swap' && net !== 'TON'
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
			formType === 'bridge' && !isDestination || formType === 'bridge' && isDestination && net === 'NEAR'
				? {
					key: "wNEAR (TON)",
					label: (
						<div
							className={false ? "cantSelect" : ""}
							onClick={() => (net === "NEAR" ? set("wNEAR (TON)") : null)}>
							wNEAR (TON)
						</div>
					),
				}
				: null,
			formType === 'bridge' && !isDestination || formType === 'bridge' && isDestination && net === 'ETH'
				? {
					key: "wETH (TON)",
					label: (
						<div
							className={false ? "cantSelect" : ""}
							onClick={() => (true ? set("wETH (TON)") : null)}>
							wETH (TON)
						</div>
					),
				}
				: null,
			formType === 'bridge' && !isDestination || formType === 'bridge' && isDestination && net === 'USN'
				? {
					key: "wUSN (TON)",
					label: (
						<div
							className={false ? "cantSelect" : ""}
							onClick={() => (true ? set("wUSN (TON)") : null)}>
							wUSN (TON)
						</div>
					),
				}
				: null,
			formType === 'bridge' && !isDestination || formType === 'bridge' && isDestination && net === 'ATOM'
				? {
					key: "wATOM (TON)",
					label: (
						<div
							className={false ? "cantSelect" : ""}
							onClick={() => (true ? set("wATOM (TON)") : null)}>
							wATOM (TON)
						</div>
					),
				}
				: null,
			formType === 'bridge' && !isDestination || formType === 'bridge' && isDestination && net === 'SOL'
				? {
					key: "wSOL (TON)",
					label: (
						<div
							className={false ? "cantSelect" : ""}
							onClick={() => (true ? set("wSOL (TON)") : null)}>
							wSOL (TON)
						</div>
					),
				}
				: null,
			formType === 'bridge' && !isDestination || formType === 'bridge' && isDestination && net === 'AURORA'
				? {
					key: "wAURORA (TON)",
					label: (
						<div
							className={false ? "cantSelect" : ""}
							onClick={() =>
								true ? set("wAURORA (TON)") : null
							}>
							wAURORA (TON)
						</div>
					),
				}
				: null,
		]}
	/>
);
