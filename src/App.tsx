import { useEffect, useState } from "react";
import { Button, message } from "antd";
import { connect, Contract, keyStores, WalletConnection } from "near-api-js";
import { Dropdown, Menu } from "antd";
import { DownOutlined, SwapOutlined } from "@ant-design/icons";
import { useSearchParams } from "react-router-dom";

import SwapForm from "./components/SwapForm";
import Social from "./components/Social";
import getTONMaxAmount from "./logic/fetch/getTONMaxAmount";
import getATOMMaxAmount from "./logic/fetch/getATOMMaxAmount";
import getSOLMaxAmount from "./logic/fetch/getSOLMaxAmount";
import fetchMarkets from "./logic/fetch/fetchMarkets";
import connectWalletSOL from "./logic/wallet/connectWalletSOL";
import connectWalletATOM from "./logic/wallet/connectWalletATOM";
import connectWalletTON from "./logic/wallet/connectWalletTON";
import connectWalletNEAR from "./logic/wallet/connectWalletNEAR";
import { Connection, clusterApiUrl } from "@solana/web3.js";

import { Loader } from "./styles/style";
import "antd/dist/antd.css";

import phantom from "./static/img/phantom.png";
import near from "./static/img/near.png";
import keplr from "./static/img/keplr.png";
import tonwallet from "./static/img/tonwallet.png";
import atomIco from "./static/img/atom.png";
import nearIco from "./static/img/nearcoin.png";
import tonIco from "./static/img/ton.png";
import solIco from "./static/img/solana.png";
import bnn from "./static/img/logo.svg";

const zipName = (name: string) => `${name.slice(0, 5)}...${name.slice(-3)}`;

const App = () => {
	const [ex, sex] = useState(true);
	const [tu, stu] = useState(0);
	const [su, ssu] = useState(0);
	const [au, sau] = useState(0);
	const [nu, snu] = useState(0);
	const [SOLwalletKey, setSOLWalletKey] = useState("");
	const [TONwalletKey, setTONwalletKey] = useState("");
	const [NEARwalletKey, setNEARwalletKey] = useState("");
	const [ATOMwalletKey, setATOMwalletKey] = useState("");
	const [SOLMaxAmount, setSOLMaxAmount] = useState(0);
	const [TONMaxAmount, setTONMaxAmount] = useState(0);
	const [ATOMMaxAmount, setATOMMaxAmount] = useState(0);
	const [NEARMaxAmount, setNEARMaxAmount] = useState(0);
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

		fetchMarkets(stu, ssu, sau, snu);
		setInterval(() => {
			fetchMarkets(stu, ssu, sau, snu);
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
			setNEARwalletKey(storedData.NEARwalletKey);
			setATOMwalletKey(storedData.ATOMwalletKey);
			sHexString(storedData.hexString);
			setNetworkSource(storedData.networkSource);
			setNetworkDestination(storedData.networkDestination);
		}

		const nearWallet = async () => {
			const connectionConfig = {
				networkId: "mainnet",
				keyStore: new keyStores.BrowserLocalStorageKeyStore(),
				nodeUrl: "https://rpc.mainnet.near.org",
				walletUrl: "https://wallet.mainnet.near.org",
				helperUrl: "https://helper.mainnet.near.org",
				explorerUrl: "https://explorer.mainnet.near.org",
			};

			const receiver = process.env.REACT_APP_NEAR_CONTRACT
				? process.env.REACT_APP_NEAR_CONTRACT
				: "";

			const nearConnection = await connect(connectionConfig as any);
			const walletConnection = new WalletConnection(nearConnection, receiver);

			const account = await nearConnection.account(
				process.env.REACT_APP_BACK_NEAR_WALLET
					? process.env.REACT_APP_BACK_NEAR_WALLET
					: ""
			);
			setNEARMaxAmount(
				Number((await account.state()).amount) / 1000000000000000000000000
			);

			console.log(walletConnection.isSignedIn());
			if (walletConnection.isSignedIn()) {
				const walletAccountId = walletConnection.getAccountId();
				console.log(walletAccountId);
				setNEARwalletKey(walletAccountId);

				//@ts-ignore
				window.contract = await new Contract(
					walletConnection.account(),
					receiver,
					{
						changeMethods: ["payToWallet"],
						viewMethods: [],
					}
				);
			}
		};
		nearWallet();

		if (transactionHashes) {
			console.log(transactionHashes);
			fetch("https://api.tonana.org/", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					hash: transactionHashes,
					sourceChain: "near",
				}),
			})
				.then((e) => e.text())
				.then((e) => {
					if (e === "Done!") {
						searchParams.delete("transactionHashes");
						setSearchParams(searchParams);
					}
				});
		}

		message.success("Use Chrome with TonWallet & Phantom extensions", 10);
		message.success("Connect both and make trx, then wait a little bit", 11);
	}, []);

	useEffect(() => {
		const dataToSave = {
			ex: ex,
			SOLwalletKey: SOLwalletKey,
			TONwalletKey: TONwalletKey,
			NEARwalletKey: NEARwalletKey,
			ATOMwalletKey: ATOMwalletKey,
			hexString: hexString,
			networkSource: networkSource,
			networkDestination: networkDestination,
		};

		localStorage.setItem("tonana_data", JSON.stringify(dataToSave));
	}, [
		ex,
		SOLwalletKey,
		TONwalletKey,
		NEARwalletKey,
		ATOMwalletKey,
		hexString,
		networkSource,
		networkDestination,
	]);

	const menuSource = (
		<Menu
			items={[
				networkDestination !== "SOL"
					? {
							key: "SOL",
							label: (
								<div
									className={
										networkDestination === "wNEAR (TON)" ||
										networkDestination === "wATOM (TON)"
											? "cantSelect"
											: ""
									}
									onClick={() =>
										networkDestination !== "wNEAR (TON)" &&
										networkDestination !== "wATOM (TON)"
											? setNetworkSource("SOL")
											: null
									}>
									SOL
								</div>
							),
					  }
					: null,
				networkDestination !== "ATOM"
					? {
							key: "ATOM",
							label: (
								<div
									className={
										networkDestination === "wNEAR (TON)" ||
										networkDestination === "wSOL (TON)"
											? "cantSelect"
											: ""
									}
									onClick={() =>
										networkDestination !== "wNEAR (TON)" &&
										networkDestination !== "wSOL (TON)"
											? setNetworkSource("ATOM")
											: null
									}>
									ATOM
								</div>
							),
					  }
					: null,

				networkDestination !== "TON"
					? {
							key: "TON",
							label: (
								<div
									className={
										networkDestination === "wNEAR (TON)" ||
										networkDestination === "wATOM (TON)" ||
										networkDestination === "wSOL (TON)"
											? "cantSelect"
											: ""
									}
									onClick={() =>
										networkDestination !== "wNEAR (TON)" &&
										networkDestination !== "wATOM (TON)" &&
										networkDestination !== "wSOL (TON)"
											? setNetworkSource("TON")
											: null
									}>
									TON
								</div>
							),
					  }
					: null,
				networkDestination !== "wNEAR (TON)"
					? {
							key: "wNEAR (TON)",
							label: (
								<div
									className={networkDestination !== "NEAR" ? "cantSelect" : ""}
									onClick={() =>
										networkDestination === "NEAR"
											? setNetworkSource("wNEAR (TON)")
											: null
									}>
									wNEAR (TON)
								</div>
							),
					  }
					: null,
				networkDestination !== "wATOM (TON)"
					? {
							key: "wATOM (TON)",
							label: (
								<div
									className={networkDestination !== "ATOM" ? "cantSelect" : ""}
									onClick={() =>
										networkDestination === "ATOM"
											? setNetworkSource("wATOM (TON)")
											: null
									}>
									wATOM (TON)
								</div>
							),
					  }
					: null,
				networkDestination !== "wSOL (TON)"
					? {
							key: "wSOL (TON)",
							label: (
								<div
									className={networkDestination !== "SOL" ? "cantSelect" : ""}
									onClick={() =>
										networkDestination === "SOL"
											? setNetworkSource("wSOL (TON)")
											: null
									}>
									wSOL (TON)
								</div>
							),
					  }
					: null,
				networkDestination !== "NEAR"
					? {
							key: "NEAR",
							label: (
								<div
									className={
										networkDestination === "wSOL (TON)" ||
										networkDestination === "wATOM (TON)"
											? "cantSelect"
											: ""
									}
									onClick={() =>
										networkDestination !== "wSOL (TON)" &&
										networkDestination !== "wATOM (TON)"
											? setNetworkSource("NEAR")
											: null
									}>
									NEAR
								</div>
							),
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
								<div
									className={
										networkSource === "wNEAR (TON)" ||
										networkSource === "wATOM (TON)"
											? "cantSelect"
											: ""
									}
									onClick={() =>
										networkSource !== "wNEAR (TON)" &&
										networkSource !== "wATOM (TON)"
											? setNetworkDestination("SOL")
											: null
									}>
									SOL
								</div>
							),
					  }
					: null,

				networkSource !== "ATOM"
					? {
							key: "ATOM",
							label: (
								<div
									className={
										networkSource === "wNEAR (TON)" ||
										networkSource === "wSOL (TON)"
											? "cantSelect"
											: ""
									}
									onClick={() =>
										networkSource !== "wNEAR (TON)" &&
										networkSource !== "wSOL (TON)"
											? setNetworkDestination("ATOM")
											: null
									}>
									ATOM
								</div>
							),
					  }
					: null,

				networkSource !== "TON"
					? {
							key: "TON",
							label: (
								<div
									className={
										networkSource === "wNEAR (TON)" ||
										networkSource === "wATOM (TON)" ||
										networkSource === "wSOL (TON)"
											? "cantSelect"
											: ""
									}
									onClick={() =>
										networkSource !== "wNEAR (TON)" &&
										networkSource !== "wATOM (TON)" &&
										networkSource !== "wSOL (TON)"
											? setNetworkDestination("TON")
											: null
									}>
									TON
								</div>
							),
					  }
					: null,

				networkSource !== "wNEAR (TON)"
					? {
							key: "wNEAR (TON)",
							label: (
								<div
									className={networkSource !== "NEAR" ? "cantSelect" : ""}
									onClick={() =>
										networkSource === "NEAR"
											? setNetworkDestination("wNEAR (TON)")
											: null
									}>
									wNEAR (TON)
								</div>
							),
					  }
					: null,
				networkSource !== "wATOM (TON)"
					? {
							key: "wATOM (TON)",
							label: (
								<div
									className={networkSource !== "ATOM" ? "cantSelect" : ""}
									onClick={() =>
										networkSource === "ATOM"
											? setNetworkDestination("wATOM (TON)")
											: null
									}>
									wATOM (TON)
								</div>
							),
					  }
					: null,
				networkSource !== "wSOL (TON)"
					? {
							key: "wSOL (TON)",
							label: (
								<div
									className={networkSource !== "SOL" ? "cantSelect" : ""}
									onClick={() =>
										networkSource === "SOL"
											? setNetworkDestination("wSOL (TON)")
											: null
									}>
									wSOL (TON)
								</div>
							),
					  }
					: null,
				networkSource !== "NEAR"
					? {
							key: "NEAR",
							label: (
								<div
									className={
										networkSource === "wATOM (TON)" ||
										networkSource === "wSOL (TON)"
											? "cantSelect"
											: ""
									}
									onClick={() =>
										networkSource !== "wATOM (TON)" &&
										networkSource !== "wSOL (TON)"
											? setNetworkDestination("NEAR")
											: null
									}>
									NEAR
								</div>
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

	const coinIco =
		networkSource === "SOL" || networkSource === "wSOL (TON)"
			? solIco
			: networkSource === "NEAR" || networkSource === "wNEAR (TON)"
			? nearIco
			: networkSource === "TON"
			? tonIco
			: networkSource === "ATOM" || networkSource === "wATOM (TON)"
			? atomIco
			: "";

	const coinIcoDest =
		networkDestination === "SOL" || networkDestination === "wSOL (TON)"
			? solIco
			: networkDestination === "NEAR" || networkDestination === "wNEAR (TON)"
			? nearIco
			: networkDestination === "TON"
			? tonIco
			: networkDestination === "ATOM" || networkDestination === "wATOM (TON)"
			? atomIco
			: "";

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

	const generateBtn = (currencyName: string) => (
		<>
			{currencyName === "SOL" ? (
				<Button
					type="primary"
					id={"connectWalletBtn"}
					onClick={() => connectWalletSOL(setSOLWalletKey)}>
					{SOLwalletKey ? (
						<>
							<img src={phantom} alt={"#"} />
							{zipName(SOLwalletKey)}
						</>
					) : (
						"Connect wallet"
					)}
				</Button>
			) : null}
			{currencyName === "TON" ||
			currencyName === "wNEAR (TON)" ||
			currencyName === "wSOL (TON)" ||
			currencyName === "wATOM (TON)" ? (
				<Button
					type="primary"
					id={"connectWalletBtn"}
					onClick={() => connectWalletTON(setTONwalletKey)}>
					{TONwalletKey ? (
						<>
							<img src={tonIco} alt={"#"} />
							{zipName(TONwalletKey)}
						</>
					) : (
						"Connect wallet"
					)}
				</Button>
			) : null}
			{currencyName === "NEAR" ? (
				<Button
					type="primary"
					id={"connectWalletBtn"}
					onClick={() => connectWalletNEAR(setNEARwalletKey)}>
					{NEARwalletKey ? (
						<>
							<img src={near} alt={"#"} />
							{zipName(NEARwalletKey)}
						</>
					) : (
						"Connect wallet"
					)}
				</Button>
			) : null}
			{currencyName === "ATOM" ? (
				<Button
					type="primary"
					id={"connectWalletBtn"}
					onClick={() => connectWalletATOM(setATOMwalletKey)}>
					{ATOMwalletKey ? (
						<>
							<img src={keplr} alt={"#"} />
							{zipName(ATOMwalletKey)}
						</>
					) : (
						"Connect wallet"
					)}
				</Button>
			) : null}
		</>
	);

	const btnDest = generateBtn(networkDestination);
	const btnSource = generateBtn(networkSource);

	const changeDirection = (
		<div id={"directionBtn"}>
			<SwapOutlined onClick={swap} />
		</div>
	);

	const fromProps = {
		au,
		su,
		tu,
		nu,
		ATOMwalletKey,
		SOLwalletKey,
		TONwalletKey,
		NEARwalletKey,
		ATOMMaxAmount,
		SOLMaxAmount,
		TONMaxAmount,
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
	};

	return (
		<div className="App">
			<SwapForm {...fromProps} />
			{isload ? <Loader src={bnn} /> : null}
		</div>
	);
};

export default App;
