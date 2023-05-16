import { useEffect, useMemo, useState } from "react";
import { Button, message, Dropdown, Switch, Form } from "antd";
// import { useLocation } from 'react-router-dom'
import { DownOutlined, SwapOutlined } from "@ant-design/icons";
import { Routes, Route, useSearchParams, Link, useNavigation, Router } from "react-router-dom";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { useNavigate, useLocation } from "react-router-dom";
import SwapForm from "./components/SwapForm/";
import NftForm from "./components/NftForm/";
import getTONMaxAmount from "./logic/fetch/getTONMaxAmount";
import getATOMMaxAmount from "./logic/fetch/getATOMMaxAmount";
import getSOLMaxAmount from "./logic/fetch/getSOLMaxAmount";
import fetchMarkets from "./logic/fetch/fetchMarkets";

import { menuBuilder } from "./components/MenuBuilder/";
import { GenerateBtn } from "./components/BtnBuilder/";
import { icoBuilder } from "./components/IcoBuilder";
import { initializeWalletNEAR } from "./logic/wallet/initializeWalletNEAR";
import { makeNEARTrxAfterLoad } from "./logic/transaction/MakeNEARTrx";
import { makeUSNTrxAfterLoad } from "./logic/transaction/MakeUSNTrx";
import getAURMaxAmount from "./logic/fetch/getAURMaxAmount";
import getETHMaxAmount from "./logic/fetch/getETHMaxAmount";
import Social from "./components/Social/";
import Header from "./components/Header/";
import Rpcs from "./components/Rpcs/";
import Gstyles from "./styles/gstyles";
import tonRpcStatus from "./logic/rpcsStatus/ton";
import solRpcStatus from "./logic/rpcsStatus/solana";
import auroraRpcStatus from "./logic/rpcsStatus/aurora";
import cosmosRpcStatus from "./logic/rpcsStatus/cosmos";
import nearRpcStatus from "./logic/rpcsStatus/near";
import ethRpcStatus from "./logic/rpcsStatus/eth";
import callBackStatus from "./logic/rpcsStatus/back";

import "@near-wallet-selector/modal-ui/styles.css";
import { Loader, Version, SelectCoin, AppDiv, Selector, DirectionBtn, } from "./styles/style";
import "antd/dist/antd.css";
import { useWalletSelector } from "./contexts/WalletSelectorContext";

import bnn from "./static/img/logo.svg";
import { RootStore, StoreProvider, useStores } from "./stores";
import NetSwitch from "./components/NetSwitch";
import NftLink from "./components/NftLink";


const AppWrapper = () => {
	const { storeMain, storeSwitch } = useStores();
	const [ex, sex] = useState(true);
	const [firstCurrAmount, setFirstCurrAmount] = useState<string>("");
	const [secCurrAmount, setSecCurrAmount] = useState<string>("");
	const [formType, setFormType] = useState<string>("swap");
	const navigate = useNavigate();
	const location = useLocation();
	// const navigation = useNavigation();

	const [isload, setIsload] = useState(false);
	const [hexString, sHexString] = useState("");
	const [networkSource, setNetworkSource] = useState("NEAR");
	const [networkDestination, setNetworkDestination] = useState("TON");

	useEffect(() => {
	 storeMain.setRpcsStatuses([
			storeMain.repository.get().backStatus,
			storeMain.repository.get().rpcTonStatus,
			storeMain.repository.get().rpcEthStatus,
			storeMain.repository.get().rpcNearStatus,
			storeMain.repository.get().rpcSolStatus,
			storeMain.repository.get().rpcCosmosStatus,
			storeMain.repository.get().rpcAuroraStatus,
		]);
	}, [
		storeMain.repository.get().rpcAuroraStatus,
		storeMain.repository.get().rpcNearStatus,
		storeMain.repository.get().rpcSolStatus,
		storeMain.repository.get().rpcTonStatus,
		storeMain.repository.get().rpcCosmosStatus,
		storeMain.repository.get().rpcEthStatus,
		storeMain.repository.get().backStatus,
	]);

	const [searchParams, setSearchParams] = useSearchParams();
	const transactionHashes = searchParams.get("transactionHashes");
	const nearAccountId = searchParams.get("account_id");
	const isusn = searchParams.get("isusn");
	const isnear = searchParams.get("isnear");

	const tvl = useMemo(() => {
		return storeMain.repository.get().AURMaxAmount * storeMain.repository.get().auru +
		storeMain.repository.get().USNMaxAmount * storeMain.repository.get().usnu +
		storeMain.repository.get().ETHMaxAmount * storeMain.repository.get().ethu +
		storeMain.repository.get().NEARMaxAmount * storeMain.repository.get().nu +
		storeMain.repository.get().ATOMMaxAmount * storeMain.repository.get().au +
		storeMain.repository.get().TONMaxAmount * storeMain.repository.get().tu +
		storeMain.repository.get().SOLMaxAmount * storeMain.repository.get().su;
	}, [storeMain.repository.get().ATOMMaxAmount, storeMain.repository.get().AURMaxAmount, storeMain.repository.get().ETHMaxAmount, storeMain.repository.get().NEARMaxAmount, storeMain.repository.get().SOLMaxAmount, storeMain.repository.get().TONMaxAmount, storeMain.repository.get().USNMaxAmount, storeMain.repository]);

	var connection = new Connection(
		"https://solana-mainnet.g.alchemy.com/v2/B9sqdnSJnFWSdKlCTFqEQjMr8pnj7RAb"
	);
	console.log(location.pathname);

	useEffect(() => {
		const getStatuses = () => {
			(async () => {
				storeMain.setRpcTonStatus(await tonRpcStatus());
			})();
			(async () => {
				storeMain.setRpcSolStatus(await solRpcStatus());
			})();
			(async () => {
				storeMain.setRpcNearStatus(await nearRpcStatus());
			})();
			(async () => {
				storeMain.setRpcAuroraStatus(await auroraRpcStatus());
			})();
			(async () => {
				storeMain.setRpcEthStatus(await ethRpcStatus());
			})();
			(async () => {
				storeMain.setRpcCosmosStatus(await cosmosRpcStatus());
			})();
			(async () => {
				storeMain.setBackStatus(await callBackStatus());
			})();
		};
		getStatuses();
		setInterval(() => {
			getStatuses();
		}, 30000);

		getTONMaxAmount(storeMain.setTONMaxAmount);
		getSOLMaxAmount(storeMain.setSOLMaxAmount);
		getATOMMaxAmount(storeMain.setATOMMaxAmount);
		getAURMaxAmount(storeMain.setAURMaxAmount);
		getETHMaxAmount(storeMain.setETHMaxAmount);

		fetchMarkets(storeMain.setTu, storeMain.setSu, storeMain.setAu, storeMain.setNu, storeMain.setAuru, storeMain.setUsnu, storeMain.setEthu, storeMain.smaticu);
		setInterval(() => {
			fetchMarkets(storeMain.setTu, storeMain.setSu, storeMain.setAu, storeMain.setNu, storeMain.setAuru, storeMain.setUsnu, storeMain.setEthu, storeMain.smaticu);
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
			storeMain.setSOLwalletKey(storedData.SOLwalletKey);
			storeMain.setTONwalletKey(storedData.TONwalletKey);
			storeMain.setAURwalletKey(storedData.AURwalletKey);
			storeMain.setNEARwalletKey(storedData.NEARwalletKey);
			storeMain.setATOMwalletKey(storedData.ATOMwalletKey);
			storeMain.setETHwalletKey(storedData.ETHwalletKey);
			sHexString(storedData.hexString);
			setNetworkSource(storedData.networkSource);
			setNetworkDestination(storedData.networkDestination);
		}

		initializeWalletNEAR(storeMain.setNEARMaxAmount, storeMain.setNEARwalletKey, storeMain.setUSNMaxAmount);
		if (isnear)
			makeNEARTrxAfterLoad(transactionHashes, setSearchParams, searchParams);
		if (isusn)
			makeUSNTrxAfterLoad(transactionHashes, setSearchParams, searchParams);
		message.success("Use Chrome with TonWallet & Phantom extensions", 5);
		message.success("Connect both and make trx, then wait a little bit", 6);
	}, []);

	useEffect(() => {
		const SOLwalletKey = storeMain.repository.get().SOLwalletKey;
		const TONwalletKey = storeMain.repository.get().TONwalletKey;
		const ETHwalletKey = storeMain.repository.get().ETHwalletKey;
		const AURwalletKey = storeMain.repository.get().AURwalletKey;
		const NEARwalletKey = storeMain.repository.get().NEARwalletKey;
		const ATOMwalletKey = storeMain.repository.get().ATOMwalletKey;
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
		storeMain.repository.get().SOLwalletKey,
		storeMain.repository.get().TONwalletKey,
		storeMain.repository.get().AURwalletKey,
		storeMain.repository.get().ETHwalletKey,
		storeMain.repository.get().NEARwalletKey,
		storeMain.repository.get().ATOMwalletKey,
		hexString,
		networkSource,
		networkDestination,
	]);


	const menuSource = menuBuilder(networkDestination, setNetworkSource, formType, false);
	const menuDestination = menuBuilder(networkSource, setNetworkDestination, formType, true);

	const coinIco = icoBuilder(networkSource);
	const coinIcoDest = icoBuilder(networkDestination);

	const btnDest = GenerateBtn(networkDestination);
	const btnSource = GenerateBtn(networkSource);

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
				<SelectCoin>
				<img src={coinIco} alt={"#"} />
					{networkSource}
					<DownOutlined />
				</SelectCoin>
			</Dropdown>
		</>
	);

	const btnSelectDirection = (
		<>
			<Dropdown overlay={menuDestination} placement="bottom">
				<SelectCoin>
					<img src={coinIcoDest} alt={"#"} />
					{networkDestination}
					<DownOutlined />
				</SelectCoin>
			</Dropdown>
		</>
	);

	const changeDirection = (
		<DirectionBtn>
			<SwapOutlined onClick={swap} />
		</DirectionBtn>
	);

	const fromProps = {
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
		formType
	};


	// const tvl =
	// 	AURMaxAmount * auru +
	// 	USNMaxAmount * usnu +
	// 	ETHMaxAmount * ethu +
	// 	NEARMaxAmount * nu +
	// 	ATOMMaxAmount * au +
	// 	TONMaxAmount * tu +
	// 	SOLMaxAmount * su;
	// console.log("aur", AURMaxAmount * auru);
	// console.log("sol", SOLMaxAmount * su);
	// console.log("ton", TONMaxAmount * tu);
	// console.log("atom", ATOMMaxAmount * au);
	// console.log("near", NEARMaxAmount * nu);
	// console.log("eth", ETHMaxAmount * ethu);
	// console.log("usn", USNMaxAmount * usnu);
	// console.log("total", tvl);

	useEffect(() => {
		console.log(formType)
		setNetworkSource('NEAR')
		if (formType === 'bridge') {
			setNetworkDestination('wNEAR (TON)')
		} else if (formType === 'swap') {
			setNetworkDestination("TON")
		} else {
			setNetworkDestination("MUMBAI")
			setNetworkSource('TON')
		}
		// wrap
		// COIN -> XCOIN
		// XCOIN -> COIN
		//
		// swap
		// COIN -> COIN
		// XCOIN none 
	}, [formType])

	useEffect(() => {
		// TODO
		// To()
		// const { History } = Route;

		console.log(location.pathname)
		if (location.pathname !== '/swap' && location.pathname !== '/bridge' && location.pathname !== '/nft') {
			navigate("/swap");
			setFormType('swap')
		}
		if (location.pathname === '/swap') {
			navigate("/swap");
			setFormType('swap')
		}
		if (location.pathname === '/bridge') {
			navigate("/bridge");
			setFormType('bridge')
		}

		if (location.pathname === '/nft') {
			navigate("/nft");
			setFormType('nft')
		}
	}, [location.pathname])
	// console.log(navigation.location)
	//
	useEffect(() => {
		if (formType === 'bridge') {
			if (networkSource.includes('(') && networkSource.includes(')')) {
				console.log(networkSource.split(' ')[0].slice(1))
				setNetworkDestination(networkSource.split(' ')[0].slice(1))
			} else {
				setNetworkDestination(`w${networkSource} (TON)`)
			}
		}
	}, [networkSource])
	// useEffect(() => {
	// 	if (storeSwitch.repository.get().isTestNet || formType === 'nft') {
	// 		navigate("/swap");
	// 	}
	// }, [storeSwitch.repository.get().isTestNet])


	const linkProps = {
		formType,
		setFormType
	};

	

	return (
		<>
			<Header />

			<NetSwitch/>

			<Selector>
				<Link to="/swap"><div onClick={() => setFormType('swap')}>Swap</div></Link>
				<Link to="/bridge"><div onClick={() => setFormType('bridge')}>Bridge</div></Link>
				<NftLink {...linkProps} />				 
			</Selector>
			<AppDiv>
				{/*<Route path="/swap" element={<SwapForm {...fromProps} />} />*/}
				{location.pathname !== '/nft' ? <SwapForm {...fromProps} /> : <NftForm {...fromProps} />}
				{isload ? <Loader src={bnn} /> : null}
			</AppDiv>
			<Rpcs rpcsStatuses={storeMain.repository.get().rpcsStatuses} />
			<Social />
			<Version>
				Tonana TVL: ${tvl.toFixed(2)}
				<br />
				v1.1.01 (alpha)
			</Version>
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
