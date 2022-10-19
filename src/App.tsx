import { useEffect, useState, useCallback } from "react";
import { Button, message, Dropdown } from "antd";
import { DownOutlined, SwapOutlined } from "@ant-design/icons";
import { useSearchParams } from "react-router-dom";
import { Connection, clusterApiUrl } from "@solana/web3.js";

import SwapForm from "./components/SwapForm";
import getTONMaxAmount from "./logic/fetch/getTONMaxAmount";
import getATOMMaxAmount from "./logic/fetch/getATOMMaxAmount";
import getSOLMaxAmount from "./logic/fetch/getSOLMaxAmount";
// import getUSNMaxAmount from "./logic/fetch/getUSNMaxAmount";
// import getUSNMaxAmount from "./logic/fetch/getUSNMaxAmount";
import fetchMarkets from "./logic/fetch/fetchMarkets";
import connectWalletSOL from "./logic/wallet/connectWalletSOL";
import connectWalletATOM from "./logic/wallet/connectWalletATOM";
import connectWalletAUR from "./logic/wallet/connectWalletAUR";
import connectWalletTON from "./logic/wallet/connectWalletTON";
import connectWalletNEAR from "./logic/wallet/connectWalletNEAR";
import { menuBuilder } from "./components/MenuBuilder";
import { generateBtn } from "./components/BtnBuilder";
import { icoBuilder } from "./components/IcoBuilder";
import { initializeWalletNEAR } from "./logic/wallet/initializeWalletNEAR";
import { makeNEARTrxAfterLoad } from "./logic/transaction/MakeNEARTrx";
import { makeUSNTrxAfterLoad } from "./logic/transaction/MakeUSNTrx";

import getAURMaxAmount from "./logic/fetch/getAURMaxAmount";
// import getAURMaxAmount from "./logic/fetch/getAURMaxAmount";



import { Loader } from "./styles/style";
import "antd/dist/antd.css";

import bnn from "./static/img/logo.svg";
const getUSNMaxAmount = getAURMaxAmount;

const App = () => {
	const [ex, sex] = useState(true);
	const [tu, stu] = useState(0);
	const [su, ssu] = useState(0);
	const [au, sau] = useState(0);
	const [nu, snu] = useState(0);
	const [usnu, susn] = useState(0);
	const [auru, sauruu] = useState(0);
	const [SOLwalletKey, setSOLWalletKey] = useState("");
	const [TONwalletKey, setTONwalletKey] = useState("");
	const [NEARwalletKey, setNEARwalletKey] = useState("");
	const [ATOMwalletKey, setATOMwalletKey] = useState("");
	const [AURwalletKey, setAURwalletKey] = useState("");
	const [AURMaxAmount, setAURMaxAmount] = useState(0);
	const [SOLMaxAmount, setSOLMaxAmount] = useState(0);
	const [TONMaxAmount, setTONMaxAmount] = useState(0);
	const [ATOMMaxAmount, setATOMMaxAmount] = useState(0);
	const [NEARMaxAmount, setNEARMaxAmount] = useState(0);
	const [USNMaxAmount, setUSNMaxAmount] = useState(0);

	const [firstCurrAmount, setFirstCurrAmount] = useState<string>("");
	const [secCurrAmount, setSecCurrAmount] = useState<string>("");

	const [isload, setIsload] = useState(false);
	const [hexString, sHexString] = useState("");
	const [networkSource, setNetworkSource] = useState("SOL");
	const [networkDestination, setNetworkDestination] = useState("TON");

	const [searchParams, setSearchParams] = useSearchParams();
	const transactionHashes = searchParams.get("transactionHashes");
	const nearAccountId = searchParams.get("account_id");

	var connection = new Connection(
		clusterApiUrl(
			process.env.REACT_APP_SOL_NET as "devnet" | "testnet" | "mainnet-beta"
		)
	);

	useEffect(() => {
		getTONMaxAmount(setTONMaxAmount);
		getSOLMaxAmount(setSOLMaxAmount);
		getATOMMaxAmount(setATOMMaxAmount);
		getAURMaxAmount(setAURMaxAmount);
		// getUSNMaxAmount(setUSNMaxAmount);

		fetchMarkets(stu, ssu, sau, snu, sauruu, susn);
		setInterval(() => {
			fetchMarkets(stu, ssu, sau, snu, sauruu, susn);
		}, 15000);

		sHexString(
			Array(16)
				.fill("")
				.map(() => Math.round(Math.random() * 0xf).toString(16))
				.join("")
		);

		if (localStorage.getItem("tonana_data") && nearAccountId) {
			//@ts-ignore
			const storedData = JSON.parse(localStorage.getItem("tonana_data"));
			sex(storedData.ex);
			setSOLWalletKey(storedData.SOLwalletKey);
			setTONwalletKey(storedData.TONwalletKey);
			setAURwalletKey(storedData.AURwalletKey);
			setNEARwalletKey(storedData.NEARwalletKey);
			setATOMwalletKey(storedData.ATOMwalletKey);
			sHexString(storedData.hexString);
			setNetworkSource(storedData.networkSource);
			setNetworkDestination(storedData.networkDestination);
		}

		initializeWalletNEAR(setNEARMaxAmount, setNEARwalletKey, setUSNMaxAmount);
		makeNEARTrxAfterLoad(transactionHashes, setSearchParams, searchParams);
		makeUSNTrxAfterLoad(transactionHashes, setSearchParams, searchParams);
		message.success("Use Chrome with TonWallet & Phantom extensions", 10);
		message.success("Connect both and make trx, then wait a little bit", 11);
	}, []);



	useEffect(() => {
		localStorage.setItem(
			"tonana_data",
			JSON.stringify({
				ex,
				SOLwalletKey,
				TONwalletKey,
				AURwalletKey,
				NEARwalletKey,
				ATOMwalletKey,
				hexString,
				networkSource,
				networkDestination,
			})
		);
	}, [
		ex,
		SOLwalletKey,
		TONwalletKey,
		AURwalletKey,
		NEARwalletKey,
		ATOMwalletKey,
		hexString,
		networkSource,
		networkDestination,
	]);

	const btnProps = {
		connectWalletSOL,
		setSOLWalletKey,
		connectWalletTON,
		setTONwalletKey,
		setAURwalletKey,
		connectWalletNEAR,
		setNEARwalletKey,
		connectWalletATOM,
		connectWalletAUR,
		setATOMwalletKey,
		TONwalletKey,
		AURwalletKey,
		SOLwalletKey,
		NEARwalletKey,
		ATOMwalletKey,
	};

	const menuSource = menuBuilder(networkDestination, setNetworkSource);
	const menuDestination = menuBuilder(networkSource, setNetworkDestination);
	const coinIco = icoBuilder(networkSource);
	const coinIcoDest = icoBuilder(networkDestination);
	const btnDest = generateBtn(networkDestination, btnProps);
	const btnSource = generateBtn(networkSource, btnProps);

	const swap = () => {
		setNetworkDestination(networkSource);
		setNetworkSource(networkDestination);
		setFirstCurrAmount(secCurrAmount);
		setSecCurrAmount(firstCurrAmount);
		sex(!ex);
	};

	const btnSelectSource = (
		<>
			<Dropdown overlay={menuSource} placement="bottom">
				<Button id={"selectCoin"}>
					<img src={coinIco} alt={"#"} />
					{networkSource}
					<DownOutlined />
				</Button>
			</Dropdown>
		</>
	);

	const btnSelectDirection = (
		<>
			<Dropdown overlay={menuDestination} placement="bottom">
				<Button id={"selectCoin"}>
					<img src={coinIcoDest} alt={"#"} />
					{networkDestination}
					<DownOutlined />
				</Button>
			</Dropdown>
		</>
	);

	const changeDirection = (
		<div id={"directionBtn"}>
			<SwapOutlined onClick={swap} />
		</div>
	);

	// console.log("----------------------");
	// console.log("$ SOL: ", SOLMaxAmount * su);
	// console.log("$ TON: ", TONMaxAmount * tu);
	// console.log("$ ATOM: ", ATOMMaxAmount * au);
	// console.log("$ NEAR: ", NEARMaxAmount * nu);
	// console.log(
	// 	"$ TVL: ",
	// 	SOLMaxAmount * su +
	// 		TONMaxAmount * tu +
	// 		ATOMMaxAmount * au +
	// 		NEARMaxAmount * nu
	// );
	// console.log("----------------------");

	const fromProps = {
		au,
		su,
		tu,
		nu,
		usnu,
		auru,
		ATOMwalletKey,
		SOLwalletKey,
		TONwalletKey,
		AURwalletKey,
		NEARwalletKey,
		ATOMMaxAmount,
		SOLMaxAmount,
		AURMaxAmount,
		TONMaxAmount,
		USNMaxAmount,
		NEARMaxAmount,
		btnSelectSource,
		btnSelectDirection,
		btnDest,
		btnSource,
		setIsload,
		isload,
		hexString,
		changeDirection,
		connection,
		directionNetwork: networkDestination.toLowerCase(),
		networkSource: networkSource.toLowerCase(),
		setFirstCurrAmount,
		setSecCurrAmount,
		firstCurrAmount,
		secCurrAmount,
	};

	return (
		<div className="App">
			<SwapForm {...fromProps} />
	
			{isload ? <Loader src={bnn} /> : null}
		</div>
	);
};

export default App;
