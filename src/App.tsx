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
	const [networkDestination, setNetworkDestination] = useState("COSMOS");

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
				networkDestination !== "NEAR"
					? {
							key: "NEAR",
							label: <div onClick={() => setNetworkSource("NEAR")}>NEAR</div>,
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
				networkSource !== "NEAR"
					? {
							key: "NEAR",
							label: (
								<div onClick={() => setNetworkDestination("NEAR")}>NEAR</div>
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
		networkSource === "SOL"
			? solIco
			: networkSource === "NEAR"
			? nearIco
			: networkSource === "TON"
			? tonIco
			: atomIco;

	const coinIcoDest =
		networkDestination === "SOL"
			? solIco
			: networkDestination === "NEAR"
			? nearIco
			: networkDestination === "TON"
			? tonIco
			: atomIco;

	const btnSelectSource = (
		<>
			<Dropdown overlay={menuSource} placement="bottom">
				<Button
					style={{ margin: "-60px 0 0 0", border: "none" }}
					id={"selectCoin"}>
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
				<Button
					style={{ margin: "-60px 0 0 0", border: "none" }}
					id={"selectCoin"}>
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
			{currencyName === "TON" ? (
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
			{currencyName === "COSMOS" ? (
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
