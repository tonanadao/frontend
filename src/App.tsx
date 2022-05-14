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
import { Tabs } from 'antd';
import 'antd/dist/antd.css'; 


const { TabPane } = Tabs;


  
const App = () => {
	const [tu, stu] = useState(0);
	const [su, ssu] = useState(0);
	const [ex, sex] = useState(true);
	const [isload, setIsload] = useState(false);
	const [SOLwalletKey, setSOLWalletKey] = useState("");
	const [TONwalletKey, setTONwalletKey] = useState("");
	const [ATOMwalletKey, setATOMwalletKey] = useState("");
	const [SOLMaxAmount, setSOLMaxAmount] = useState();
	const [TONMaxAmount, setTONMaxAmount] = useState();
	const [ATOMMaxAmount, setATOMMaxAmount] = useState();
	const [hexString, sHexString] = useState("");
	var connection = new Connection(
		clusterApiUrl(
			process.env.REACT_APP_SOL_NET as "devnet" | "testnet" | "mainnet-beta"
		)
	);

	useEffect(() => {
		getTONMaxAmount(setTONMaxAmount);
		getSOLMaxAmount(setSOLMaxAmount);
		getATOMMaxAmount(setATOMMaxAmount);

		fetchMarkets(stu, ssu);
		setInterval(() => {
			fetchMarkets(stu, ssu);
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

	const btn = (
		<>
			<Button
				type="primary"
				onClick={() => connectWalletSOL(setSOLWalletKey)}
				style={{ margin: "0 0 24px 0" }}>
				{SOLwalletKey ? "SOL wallet connected!" : "Connect SOL wallet"}
			</Button>
			<Button
				type="primary"
				onClick={() => connectWalletTON(setTONwalletKey)}
				style={{ margin: "0 0 24px 0" }}>
				{TONwalletKey ? "TON wallet connected!" : "Connect TON wallet"}
			</Button>
			<Button
				type="primary"
				onClick={() => connectWalletATOM(setATOMwalletKey)}
				style={{ margin: "0 0 24px 0" }}>
				{ATOMwalletKey ? "Atom wallet connected!" : "Connect Atom wallet"}
			</Button>
			<Divider dashed />
		</>
	);

	return (
		
		<div className="App">
			<h1>TONANA bridge</h1>
			<img
				src={bnn}
				onClick={() => sex(!ex)}
				alt="banana"
				style={{
					transform: ex ? "rotate3d(0, 1, 0, 180deg)" : "rotate3d(0, 1, 0, 0)",
				}}
			/>
				<Tabs defaultActiveKey="1">
					<TabPane tab="Sol / Ton" key="1">
					{ex ? (
				<Sol
					tu={tu}
					su={su}
					connection={connection}
					SOLwalletKey={SOLwalletKey}
					TONwalletKey={TONwalletKey}
					setIsload={setIsload}
					btn={btn}
					TONMaxAmount={TONMaxAmount}
					hexString={hexString}
					isload={isload}
				/>
			) : (
				<Ton
					tu={tu}
					su={su}
					SOLwalletKey={SOLwalletKey}
					TONwalletKey={TONwalletKey}
					setIsload={setIsload}
					btn={btn}
					SOLMaxAmount={SOLMaxAmount}
					hexString={hexString}
					isload={isload}
				/>
			)}
					</TabPane>
					<TabPane tab="Cosmos / Ton" key="2">
					{ex ? (
				<Atom
					tu={tu}
					su={su}
					connection={connection}
					ATOMwalletKey={ATOMwalletKey}
					TONwalletKey={TONwalletKey}
					setIsload={setIsload}
					btn={btn}
					TONMaxAmount={TONMaxAmount}
					hexString={hexString}
					isload={isload}
				/>
			) : (
				<Ton
					tu={tu}
					su={su}
					ATOMwalletKey={ATOMwalletKey}
					TONwalletKey={TONwalletKey}
					setIsload={setIsload}
					btn={btn}
					ATOMMaxAmount={ATOMMaxAmount}
					hexString={hexString}
					isload={isload}
				/>
			)}
					</TabPane>
					<TabPane tab="Sol / Cosmos" key="3">
					{ex ? (
				<Atom
					tu={tu}
					su={su}
					connection={connection}
					SOLwalletKey={SOLwalletKey}
					TONwalletKey={TONwalletKey}
					setIsload={setIsload}
					btn={btn}
					TONMaxAmount={TONMaxAmount}
					hexString={hexString}
					isload={isload}
				/>
			) : (
				<Ton
					tu={tu}
					su={su}
					SOLwalletKey={SOLwalletKey}
					TONwalletKey={TONwalletKey}
					setIsload={setIsload}
					btn={btn}
					SOLMaxAmount={SOLMaxAmount}
					hexString={hexString}
					isload={isload}
				/>
			)}
					</TabPane>
				</Tabs>

	




			<Footer />
			{isload ? <Loader src={bnn} /> : null}
		</div>
	);
};

export default App;
