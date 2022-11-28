import { useEffect, useMemo, useState } from "react";
import { Button, message, Dropdown } from "antd";
import { DownOutlined, SwapOutlined } from "@ant-design/icons";
import { useSearchParams } from "react-router-dom";
import { Connection, clusterApiUrl } from "@solana/web3.js";

import SwapForm from "./components/SwapForm";
import getTONMaxAmount from "./logic/fetch/getTONMaxAmount";
import getATOMMaxAmount from "./logic/fetch/getATOMMaxAmount";
import getSOLMaxAmount from "./logic/fetch/getSOLMaxAmount";
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
import connectWalletETH from "./logic/wallet/connectWalletETH";
import getAURMaxAmount from "./logic/fetch/getAURMaxAmount";
import getETHMaxAmount from "./logic/fetch/getETHMaxAmount";
import Social from "./components/Social";
import Header from "./components/Header";
import Rpcs from "./components/Rpcs";
import Gstyles from "./styles/gstyles";
import rpcsStatus from "./logic/rpcsStatus";

import { Loader } from "./styles/style";
import "antd/dist/antd.css";

import bnn from "./static/img/logo.svg";
import { RootStore, StoreProvider, useStores } from "./stores";

const AppWrapper = () => {
	const { storeMain } = useStores();
	const [ex, sex] = useState(true);

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
	const [ETHMaxAmount, setETHMaxAmount] = useState(0);
	const [USNMaxAmount, setUSNMaxAmount] = useState(0);
	const [firstCurrAmount, setFirstCurrAmount] = useState<string>("");
	const [secCurrAmount, setSecCurrAmount] = useState<string>("");
	const [ETHwalletKey, setETHWalletKey] = useState("");

	const [isload, setIsload] = useState(false);
	const [hexString, sHexString] = useState("");
	const [networkSource, setNetworkSource] = useState("ETH");
	const [networkDestination, setNetworkDestination] = useState("TON");
	const [rpcsStatuses, setRpcsStatuses] = useState<
		Array<{ key: string; title: string; status: boolean }>
	>([
		{
			title: "Solana RPC",
			key: "sol",
			status: false,
		},

		{
			title: "Near RPC",
			key: "near",
			status: false,
		},

		{
			title: "Ethereum RPC",
			key: "eth",
			status: false,
		},

		{
			title: "Aurora RPC",
			key: "aurora",
			status: false,
		},

		{
			title: "Ton RPC",
			key: "ton",
			status: false,
		},

		{
			title: "Cosmos RPC",
			key: "atom",
			status: false,
		},
	]);

	const [searchParams, setSearchParams] = useSearchParams();
	const transactionHashes = searchParams.get("transactionHashes");
	const nearAccountId = searchParams.get("account_id");
	const isusn = searchParams.get("isusn");
	const isnear = searchParams.get("isnear");

	const tvl = useMemo(() => {
		return AURMaxAmount * storeMain.repository.get().auru +
		USNMaxAmount * storeMain.repository.get().usnu +
		ETHMaxAmount * storeMain.repository.get().ethu +
		NEARMaxAmount * storeMain.repository.get().nu +
		ATOMMaxAmount * storeMain.repository.get().au +
		TONMaxAmount * storeMain.repository.get().tu +
		SOLMaxAmount * storeMain.repository.get().su;
	}, [ATOMMaxAmount, AURMaxAmount, ETHMaxAmount, NEARMaxAmount, SOLMaxAmount, TONMaxAmount, USNMaxAmount, storeMain.repository]);

	var connection = new Connection(
		"https://solana-mainnet.g.alchemy.com/v2/B9sqdnSJnFWSdKlCTFqEQjMr8pnj7RAb"
	);

	useEffect(() => {
		(async () => {
			setRpcsStatuses(await rpcsStatus());
		})();
		getTONMaxAmount(setTONMaxAmount);
		getSOLMaxAmount(setSOLMaxAmount);
		getATOMMaxAmount(setATOMMaxAmount);
		getAURMaxAmount(setAURMaxAmount);
		getETHMaxAmount(setETHMaxAmount);

		fetchMarkets(storeMain.setTu, storeMain.setSu, storeMain.setAu, storeMain.setNu, storeMain.setAuru, storeMain.setUsnu, storeMain.setEthu);
		setInterval(() => {
			fetchMarkets(storeMain.setTu, storeMain.setSu, storeMain.setAu, storeMain.setNu, storeMain.setAuru, storeMain.setUsnu, storeMain.setEthu);
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
			setETHWalletKey(storedData.ETHwalletKey);
			sHexString(storedData.hexString);
			setNetworkSource(storedData.networkSource);
			setNetworkDestination(storedData.networkDestination);
		}

		initializeWalletNEAR(setNEARMaxAmount, setNEARwalletKey, setUSNMaxAmount);
		if (isnear)
			makeNEARTrxAfterLoad(transactionHashes, setSearchParams, searchParams);
		if (isusn)
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
				ETHwalletKey,
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
		ETHwalletKey,
		NEARwalletKey,
		ATOMwalletKey,
		hexString,
		networkSource,
		networkDestination,
	]);

	const btnProps = {
		connectWalletSOL,
		connectWalletETH,
		setSOLWalletKey,
		setETHWalletKey,
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
		ETHwalletKey,
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

	const fromProps = {
		ATOMwalletKey,
		ETHwalletKey,
		SOLwalletKey,
		TONwalletKey,
		AURwalletKey,
		NEARwalletKey,
		ATOMMaxAmount,
		SOLMaxAmount,
		ETHMaxAmount,
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
		rpcsStatuses,
	};

	return (
		<>
			<Header />
			<div className="App">
				<SwapForm {...fromProps} />
				{isload ? <Loader src={bnn} /> : null}
			</div>
			<Rpcs rpcsStatuses={rpcsStatuses} />
			<Social />
			<div className="version">
				Tonana TVL: ${tvl.toFixed(2)}
				<br />
				v1.0.84 (alpha)
			</div>
			<Gstyles />
		</>
	);
};

const App = () => {
	const rootStore = new RootStore();
	return (
		<StoreProvider store={rootStore}>
			<AppWrapper />
		</StoreProvider>
	);
};

export default App;
