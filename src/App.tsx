import { useEffect, useState } from "react";
import { Button } from "antd";
import Ton from "./Ton";
import Sol from "./Sol";
import bnn from "./static/img/bnn.png";
import web3, {
	SystemProgram,
	PublicKey,
	Transaction,
	LAMPORTS_PER_SOL,
	Connection,
	clusterApiUrl,
} from "@solana/web3.js";
import { Loader } from "./style";

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

function App() {
	const [tu, stu] = useState(0);
	const [su, ssu] = useState(0);
	const [ex, sex] = useState(true);
	const [isload, sisload] = useState(false);

	const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(
		undefined
	);
	const [provider, setProvider] = useState<PhantomProvider | undefined>(
		undefined
	);

	useEffect(() => {
		fetch("https://sepezho.com:5555/https://ftx.com/api/markets")
			.then((e) => e.json())
			.then((e) => {
				stu(
					e.result.filter((item: any) => item.name === "TONCOIN/USD")[0].price
				);
				ssu(e.result.filter((item: any) => item.name === "SOL/USD")[0].price);
			});
		setTimeout(() => {
			const provider = getProvider();
			if (provider) setProvider(provider);
			else setProvider(undefined);
		}, 1000);
	}, []);

	var connection = new Connection(clusterApiUrl("devnet"));

	const getProvider = (): PhantomProvider | undefined => {
		if ("solana" in window) {
			// @ts-ignore
			const provider = window.solana as any;
			if (provider.isPhantom) return provider as PhantomProvider;
		}
	};

	const connectWallet = async () => {
		// @ts-ignore
		const { solana } = window;

		if (solana) {
			try {
				const response = await solana.connect();
				console.log(response.publicKey.toString());
				setWalletKey(response.publicKey.toString());
			} catch (err) {
				// { code: 4001, message: 'User rejected the request.' }
			}
		}
	};

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
					getProvider={getProvider}
					walletKey={walletKey}
					provider={provider}
					sisload={sisload}
					btn={
						<Button
							type="primary"
							onClick={connectWallet}
							style={{ margin: "0 0 24px 0" }}>
							{walletKey ? "Connected!" : "Connect"}
						</Button>
					}
				/>
			) : (
				<Ton
					tu={tu}
					su={su}
					walletKey={walletKey}
					sisload={sisload}
					btn={
						<Button
							type="primary"
							onClick={connectWallet}
							style={{ margin: "0 0 24px 0" }}>
							{walletKey ? "Connected!" : "Connect"}
						</Button>
					}
				/>
			)}
			{isload ? <Loader src={bnn} /> : null}
		</div>
	);
}

export default App;
