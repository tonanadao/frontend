import { useEffect, useState } from "react";
import { Button, Layout, Divider } from "antd";
import Ton from "./components/Ton";
import Sol from "./components/Sol";
import bnn from "./static/img/bnn.png";
import {
	PublicKey,
	Transaction,
	Connection,
	clusterApiUrl,
} from "@solana/web3.js";
import { DevLinks, Loader, Links } from "./style";
const { Buffer } = require("buffer");
const bs58 = require("bs58");

type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
	| "connect"
	| "disconnect"
	| "signTransaction"
	| "signAllTransactions"
	| "signMessage";
interface ConnectOpts {
	onlyIfTrusted: boolean;
}
interface PhantomProvider {
	publicKey: PublicKey | null;
	isConnected: boolean | null;
	signTransaction: (transaction: Transaction) => Promise<Transaction>;
	signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
	signMessage: (
		message: Uint8Array | string,
		display?: DisplayEncoding
	) => Promise<any>;
	connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
	disconnect: () => Promise<void>;
	on: (event: PhantomEvent, handler: (args: any) => void) => void;
	request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}

const App = () => {
	const [tu, stu] = useState(0);
	const [su, ssu] = useState(0);
	const [ex, sex] = useState(true);
	const [isload, sisload] = useState(false);
	const [SOLwalletKey, setSOLWalletKey] = useState("");
	const [TONwalletKey, setTONwalletKey] = useState("");
	const [SOLMaxAmount, setSOLMaxAmount] = useState();
	const [TONMaxAmount, setTONMaxAmount] = useState();
	var connection = new Connection(clusterApiUrl("devnet"));

	useEffect(() => {
		fetch("https://ftx.com/api/markets")
			.then((e) => e.json())
			.then((e) => {
				stu(
					e.result.filter((item: any) => item.name === "TONCOIN/USD")[0].price
				);
				ssu(e.result.filter((item: any) => item.name === "SOL/USD")[0].price);
			});
	}, []);

	const connectWalletTON = async () => {
		//@ts-ignore
		const ton = window.ton;
		if (ton) {
			try {
				const accounts = await ton.send("ton_requestWallets");
				setTONwalletKey(accounts[0].address);
			} catch (err) {
				console.log(err);
			}
		}
	};

	const connectWalletSOL = async () => {
		// @ts-ignore
		const solana = window.solana;
		if (solana) {
			try {
				const response = await solana.connect();
				setSOLWalletKey(response.publicKey.toString());
			} catch (err) {
				console.log(err);
			}
		}
	};

	useEffect(() => {
		fetch(
			`https://toncenter.com/api/v2/getAddressInformation?address=${process.env.REACT_APP_BACK_TON_WALLET}`,
			{ method: "GET" }
		)
			.then((e) => e.json())
			.then((e: any) => {
				setTONMaxAmount(e.result.balance);
			});

		fetch("https://api.devnet.solana.com/", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				jsonrpc: "2.0",
				id: 1,
				method: "getAccountInfo",
				params: [
					process.env.REACT_APP_BACK_SOL_WALLET,
					{
						encoding: "base58",
					},
				],
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				setSOLMaxAmount(res.result.value.lamports);
			});
	}, []);

	console.log(TONMaxAmount);
	console.log(SOLMaxAmount);

	const btn = (
		<>
			<Button
				type="primary"
				onClick={connectWalletSOL}
				style={{ margin: "0 0 24px 0" }}>
				{SOLwalletKey ? "SOL wallet connected!" : "Connect SOL wallet"}
			</Button>
			<Button
				type="primary"
				onClick={connectWalletTON}
				style={{ margin: "0 0 24px 0" }}>
				{TONwalletKey ? "TON wallet connected!" : "Connect TON wallet"}
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
				style={{
					transform: ex ? "rotate3d(0, 1, 0, 180deg)" : "rotate3d(0, 1, 0, 0)",
				}}
			/>
			{ex ? (
				<Sol
					tu={tu}
					su={su}
					connection={connection}
					SOLwalletKey={SOLwalletKey}
					TONwalletKey={TONwalletKey}
					sisload={sisload}
					btn={btn}
					TONMaxAmount={TONMaxAmount}
				/>
			) : (
				<Ton
					tu={tu}
					su={su}
					SOLwalletKey={SOLwalletKey}
					TONwalletKey={TONwalletKey}
					sisload={sisload}
					btn={btn}
					SOLMaxAmount={SOLMaxAmount}
				/>
			)}
			<Divider dashed />
			<h2>Stay connected!</h2>
			<Links>
				<a href={"https://twitter.com/TonanaBridge"}>Twitter</a>
				<a href={"https://t.me/tonanadao"}>Telegram</a>
				<a
					href={
						"https://www.linkedin.com/company/tonana/?trk=companies_directory&originalSubdomain=cz"
					}>
					LinkedIn
				</a>
				<a href={"https://github.com/tonanabridge"}>GitHub</a>
			</Links>
			<Divider dashed />
			<h2>Devs:</h2>
			<DevLinks>
				<a href={"t.me/sepezho"}>Sepezho</a>
				<a href={"t.me/gthlp_coordinator"}>Gthlp_coordinator</a>
				<a href={"t.me/cybergangsta"}>Cybergangsta</a>
			</DevLinks>
			{isload ? <Loader src={bnn} /> : null}
		</div>
	);
};

export default App;
