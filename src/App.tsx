import { useEffect, useState } from "react";
import { Button, message, Divider } from "antd";
import Ton from "./components/Ton";
import Atom from "./components/Atom";
import Sol from "./components/Sol";
import Footer from "./components/Footer";
import bnn from "./static/img/bnn.png";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { Loader } from "./styles/style";
import getTONMaxAmount from "./logic/fetch/getTONMaxAmount";
import getATOMMaxAmount from "./logic/fetch/getATOMMaxAmount";
import getSOLMaxAmount from "./logic/fetch/getSOLMaxAmount";
import fetchMarkets from "./logic/fetch/fetchMarkets";
import connectWalletSOL from "./logic/wallet/connectWalletSOL";
import connectWalletATOM from "./logic/wallet/connectWalletATOM";
import connectWalletTON from "./logic/wallet/connectWalletTON";
import { Tabs, Dropdown, Menu, Space } from "antd";
import "antd/dist/antd.css";

const { TabPane } = Tabs;

const App = () => {
	const [tu, stu] = useState(0);
	const [su, ssu] = useState(0);
	const [au, sau] = useState(0);
	const [ex, sex] = useState(true);
	const [isload, setIsload] = useState(false);
	const [SOLwalletKey, setSOLWalletKey] = useState("");
	const [TONwalletKey, setTONwalletKey] = useState("");
	const [ATOMwalletKey, setATOMwalletKey] = useState("");
	const [SOLMaxAmount, setSOLMaxAmount] = useState();
	const [TONMaxAmount, setTONMaxAmount] = useState();
	const [ATOMMaxAmount, setATOMMaxAmount] = useState();
	const [hexString, sHexString] = useState("");

	const [networkSource, setNetworkSource] = useState("SOL");
	const [networkDestination, setNetworkDestination] = useState("TON");

	var connection = new Connection(
		clusterApiUrl(
			process.env.REACT_APP_SOL_NET as "devnet" | "testnet" | "mainnet-beta"
		)
	);

	if (document.getElementsByTagName("iframe")[0])
		document.getElementsByTagName("iframe")[0].style.display =
			"none !important";

	console.log(ATOMMaxAmount);
	useEffect(() => {
		getTONMaxAmount(setTONMaxAmount);
		getSOLMaxAmount(setSOLMaxAmount);
		getATOMMaxAmount(setATOMMaxAmount);

		fetchMarkets(stu, ssu, sau);
		setInterval(() => {
			fetchMarkets(stu, ssu, sau);
		}, 15000);
		sHexString(
			Array(16)
				.fill("")
				.map(() => Math.round(Math.random() * 0xf).toString(16))
				.join("")
		);
		message.success("Use Chrome with TonWallet & Phantom extensions", 10);
		message.success("Connect both and make trx, then wait a little bit", 11);
	}, []);

	const menuSource = (
		<Menu
			items={[
				networkDestination !== "SOL"
					? {
							key: "SOL",
							label: <div onClick={() => setNetworkSource("SOL")}>SOL</div>,
					  }
					: null,
				networkDestination !== "COSMOS"
					? {
							key: "COSMOS",
							label: (
								<div onClick={() => setNetworkSource("COSMOS")}>COSMOS</div>
							),
					  }
					: null,

				networkDestination !== "TON"
					? {
							key: "TON",
							label: <div onClick={() => setNetworkSource("TON")}>TON</div>,
					  }
					: null,
			]}
		/>
	);

	const menuDestination = (
		<Menu
			items={[
				networkSource !== "SOL"
					? {
							key: "SOL",
							label: (
								<div onClick={() => setNetworkDestination("SOL")}>SOL</div>
							),
					  }
					: null,

				networkSource !== "COSMOS"
					? {
							key: "COSMOS",
							label: (
								<div onClick={() => setNetworkDestination("COSMOS")}>
									COSMOS
								</div>
							),
					  }
					: null,

				networkSource !== "TON"
					? {
							key: "TON",
							label: (
								<div onClick={() => setNetworkDestination("TON")}>TON</div>
							),
					  }
					: null,
			]}
		/>
	);

	const swap = () => {
		setNetworkDestination(networkSource);
		setNetworkSource(networkDestination);
		sex(!ex);
	};

	const btn = (
		<>
			<Dropdown overlay={menuSource} placement="bottom">
				<Button style={{ margin: "0 0 24px 0" }}>
					Select source ({networkSource})
				</Button>
			</Dropdown>
			<Dropdown overlay={menuDestination} placement="bottom">
				<Button style={{ margin: "0 0 24px 0" }}>
					Select direction ({networkDestination})
				</Button>
			</Dropdown>
			{networkSource === "SOL" || networkDestination === "SOL" ? (
				<Button
					type="primary"
					onClick={() => connectWalletSOL(setSOLWalletKey)}
					style={{ margin: "0 0 24px 0" }}>
					{SOLwalletKey ? "SOL wallet connected!" : "Connect SOL wallet"}
				</Button>
			) : null}
			{networkSource === "TON" || networkDestination === "TON" ? (
				<Button
					type="primary"
					onClick={() => connectWalletTON(setTONwalletKey)}
					style={{ margin: "0 0 24px 0" }}>
					{TONwalletKey ? "TON wallet connected!" : "Connect TON wallet"}
				</Button>
			) : null}
			{networkSource === "COSMOS" || networkDestination === "COSMOS" ? (
				<Button
					type="primary"
					onClick={() => connectWalletATOM(setATOMwalletKey)}
					style={{ margin: "0 0 24px 0" }}>
					{ATOMwalletKey ? "ATOM wallet connected!" : "Connect ATOM wallet"}
				</Button>
			) : null}
			<Divider dashed />
		</>
	);

	return (
		<div className="App">
			<h1>TONANA bridge</h1>

			<img
				src={bnn}
				onClick={swap}
				alt="banana"
				style={{
					transform: ex ? "rotate3d(0, 1, 0, 180deg)" : "rotate3d(0, 1, 0, 0)",
				}}
			/>

			{networkSource === "SOL" ? (
				<Sol
					tu={tu}
					su={su}
					au={au}
					connection={connection}
					SOLwalletKey={SOLwalletKey}
					ATOMMaxAmount={ATOMMaxAmount}
					ATOMwalletKey={ATOMwalletKey}
					TONwalletKey={TONwalletKey}
					directionNetwork={networkDestination.toLowerCase()}
					setIsload={setIsload}
					btn={btn}
					TONMaxAmount={TONMaxAmount}
					hexString={hexString}
					SOLMaxAmount={SOLMaxAmount}
					isload={isload}
				/>
			) : networkSource === "COSMOS" ? (
				<Atom
					tu={tu}
					su={su}
					au={au}
					connection={connection}
					SOLwalletKey={SOLwalletKey}
					TONwalletKey={TONwalletKey}
					setIsload={setIsload}
					btn={btn}
					ATOMwalletKey={ATOMwalletKey}
					ATOMMaxAmount={ATOMMaxAmount}
					TONMaxAmount={TONMaxAmount}
					hexString={hexString}
					SOLMaxAmount={SOLMaxAmount}
					directionNetwork={networkDestination.toLowerCase()}
					isload={isload}
				/>
			) : networkSource === "TON" ? (
				<Ton
					tu={tu}
					su={su}
					au={au}
					ATOMwalletKey={ATOMwalletKey}
					SOLwalletKey={SOLwalletKey}
					TONwalletKey={TONwalletKey}
					setIsload={setIsload}
					btn={btn}
					ATOMMaxAmount={ATOMMaxAmount}
					SOLMaxAmount={SOLMaxAmount}
					hexString={hexString}
					isload={isload}
					directionNetwork={networkDestination.toLowerCase()}
				/>
			) : null}

			<Footer />
			{isload ? <Loader src={bnn} /> : null}
		</div>
	);
};

export default App;
