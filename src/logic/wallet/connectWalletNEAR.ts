import {
	connect,
	Contract,
	utils,
	transactions,
	keyStores,
	WalletConnection,
} from "near-api-js";
import { message } from "antd";
import "dotenv/config";

import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupSender } from "@near-wallet-selector/sender";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupMathWallet } from "@near-wallet-selector/math-wallet";
import { setupNightly } from "@near-wallet-selector/nightly";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import { setupWelldoneWallet } from "@near-wallet-selector/welldone-wallet";
import { setupLedger } from "@near-wallet-selector/ledger";
// import { setupWalletConnect } from "@near-wallet-selector/wallet-connect";
import { setupNightlyConnect } from "@near-wallet-selector/nightly-connect";
import { setupDefaultWallets } from "@near-wallet-selector/default-wallets";
import { setupNearFi } from "@near-wallet-selector/nearfi";
import { setupCoin98Wallet } from "@near-wallet-selector/coin98-wallet";
import { setupOptoWallet } from "@near-wallet-selector/opto-wallet";
import { setupNeth } from "@near-wallet-selector/neth";
// import "./dist/packages/modal-ui/styles.css";/

const connectWalletNear = async (setNearWalletKey: any) => {
	try {
		const connectionConfig = {
			networkId: "mainnet",
			keyStore: new keyStores.BrowserLocalStorageKeyStore(),
			nodeUrl: "https://rpc.mainnet.near.org",
			walletUrl: "https://wallet.mainnet.near.org",
			helperUrl: "https://helper.mainnet.near.org",
			explorerUrl: "https://explorer.mainnet.near.org",
		};

		// (async ()=>{

		//     const nearConnection = await connect(connectionConfig as any);
		//     const receiver = process.env.REACT_APP_BACK_NEAR_WALLET ? process.env.REACT_APP_BACK_NEAR_WALLET : '';

		//     const walletConnection = new WalletConnection(nearConnection, receiver);
		//     await(await(await nearConnection.account('sepezho.near')).getAccountBalance()).available
		//   })()

		(async () => {
			const _selector = await setupWalletSelector({
				network: "mainnet",
				debug: true,
				modules: [
					...(await setupDefaultWallets()),
					setupNearWallet(),
					setupSender(),
					setupMathWallet(),
					setupNightly(),
					setupMeteorWallet(),
					setupWelldoneWallet(),
					setupHereWallet(),
					setupCoin98Wallet(),
					setupNearFi(),
					setupNeth({
						gas: "300000000000000",
						bundle: false,
					}),
					setupOptoWallet(),
					// setupWalletConnect({
					// 	projectId: "c4f79cc...",
					// 	metadata: {
					// 		name: "NEAR Wallet Selector",
					// 		description: "Example dApp used by NEAR Wallet Selector",
					// 		url: "https://github.com/near/wallet-selector",
					// 		icons: ["https://avatars.githubusercontent.com/u/37784886"],
					// 	},
					// }),
					setupNightlyConnect({
						url: "wss://relay.nightly.app/app",
						appMetadata: {
							additionalInfo: "",
							application: "NEAR Wallet Selector",
							description: "Example dApp used by NEAR Wallet Selector",
							icon: "https://near.org/wp-content/uploads/2020/09/cropped-favicon-192x192.png",
						},
					}),
				],
			});
			const _modal = setupModal(_selector, { contractId: "tonana.near" });
			await _modal.show();
			const state = _selector.store.getState();
			let accounts = state.accounts as any;

			//@ts-ignore
			window.selector = _selector;
			//@ts-ignore
			window.modal = _modal;

			// setSelector(_selector);
			// setModal(_modal);
			// }, []);

			// const subscription = await _selector.store.observable
			// 	.pipe(
			// 		map((state) => state.accounts),
			// 		distinctUntilChanged()
			// 	)
			// 	.subscribe((nextAccounts) => {
			// 		console.log("Accounts Update", nextAccounts);

			// 		accounts = nextAccounts;
			// 	});

			// subscription.unsubscribe();

			const accountId = accounts.find((account: any) => account.active) || null;

			console.log(accountId);

			// const nearConnection = await connect(connectionConfig as any);
			const receiver = process.env.REACT_APP_NEAR_CONTRACT
				? process.env.REACT_APP_NEAR_CONTRACT
				: "";

			const walletConnection = new WalletConnection(accountId, receiver);
			//@ts-ignore
			window.contract = await new Contract(
				walletConnection.account(),
				receiver,
				{
					changeMethods: ["payToWallet"],
					viewMethods: [],
				}
			);
			if (walletConnection.isSignedIn()) {
				const walletAccountId = walletConnection.getAccountId();
				setNearWalletKey(walletAccountId);
			} else {
				await walletConnection.requestSignIn({
					contractId: process.env.REACT_APP_NEAR_CONTRACT,
					methodNames: ["payToWallet"],
				});
			}

			// const selector = await setupWalletSelector({
			// 	network: "testnet",
			// 	modules: [
			// 		...(await setupDefaultWallets()),
			// 		setupNearWallet(),
			// 		setupMyNearWallet(),
			// 		setupSender(),
			// 		setupHereWallet(),
			// 		setupMathWallet(),
			// 		setupNightly(),
			// 		setupMeteorWallet(),
			// 		setupWelldoneWallet(),
			// 		setupLedger(),
			// 		setupNearFi(),
			// 		setupCoin98Wallet(),
			// 		setupOptoWallet(),
			// 		setupNeth(),
			// 		// setupWalletConnect({
			// 		// 	projectId: "c4f79cc...",
			// 		// 	metadata: {
			// 		// 		name: "NEAR Wallet Selector",
			// 		// 		description: "Example dApp used by NEAR Wallet Selector",
			// 		// 		url: "https://github.com/near/wallet-selector",
			// 		// 		icons: ["https://avatars.githubusercontent.com/u/37784886"],
			// 		// 	},
			// 		// }),
			// 		setupNightlyConnect({
			// 			url: "wss://relay.nightly.app/app",
			// 			appMetadata: {
			// 				additionalInfo: "",
			// 				application: "NEAR Wallet Selector",
			// 				description: "Example dApp used by NEAR Wallet Selector",
			// 				icon: "https://near.org/wp-content/uploads/2020/09/cropped-favicon-192x192.png",
			// 			},
			// 		}),
			// 	],
			// });

			// const afd = setupModal(selector, {
			// 	contractId: "guest-book.testnet",
			// });
			// afd.show();
		})();

		//     const nearConnection = await connect(connectionConfig as any);
		//     const receiver = process.env.REACT_APP_NEAR_CONTRACT ? process.env.REACT_APP_NEAR_CONTRACT : '';

		//     const walletConnection = new WalletConnection(nearConnection, receiver);
		//   //@ts-ignore
		// window.contract = await new Contract(walletConnection.account(), receiver, {
		//   changeMethods: ['payToWallet'],
		//   viewMethods: []
		// })
		//     if (walletConnection.isSignedIn()) {
		//       const walletAccountId = walletConnection.getAccountId();
		//       setNearWalletKey(walletAccountId);
		//     } else {
		//       await walletConnection.requestSignIn(
		//         {
		//           contractId:process.env.REACT_APP_NEAR_CONTRACT,
		//           methodNames:['payToWallet']
		//       }

		//       );
		//     }
	} catch (err) {
		console.log(err);
		message.error("Use NEAR wallet. Close all windows and try again pls", 5);
	}
};

export default connectWalletNear;

// NEAR CHECK FEES ALOWANCE
//   const response = await near.connection.provider.query({
//   request_type: "view_access_key",
//   finality: "final",
//   account_id: "client.chainlink.testnet",
//   public_key: "ed25519:H9k5eiU4xXS3M4z8HzKJSLaZdqGdGwBG49o7orNC4eZW",
// });
