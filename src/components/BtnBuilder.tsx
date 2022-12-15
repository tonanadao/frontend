import phantom from "../static/img/phantom.png";
import near from "../static/img/near.png";
import tonIco from "../static/img/ton.png";
import keplr from "../static/img/keplr.png";
import metamask from "../static/img/metamask.png";

import { Button } from "antd";

import React, { Fragment, useCallback, useEffect, useState } from "react";
import { providers, utils } from "near-api-js";
import type {
	AccountView,
	CodeResult,
} from "near-api-js/lib/providers/provider";
import type { Transaction } from "@near-wallet-selector/core";

import { useWalletSelector } from "../contexts/WalletSelectorContext";

type Submitted = SubmitEvent & {
	target: { elements: { [key: string]: HTMLInputElement } };
};

const SUGGESTED_DONATION = "0";
const BOATLOAD_OF_GAS = utils.format.parseNearAmount("0.00000000003")!;

// const Content: React.FC = () => {

// if (loading) {
//   return null;
// }

//   if (!account) {
//     return (
//       <Fragment>
//         <div>
//           <button onClick={handleSignIn}>Log in</button>
//         </div>
//         <SignIn />
//       </Fragment>
//     );
//   }

//   return (
//     <Fragment>
//       <div>
//         <button onClick={handleSignOut}>Log out</button>
//         <button onClick={handleSwitchWallet}>Switch Wallet</button>
//         <button onClick={handleVerifyOwner}>Verify Owner</button>
//         {accounts.length > 1 && (
//           <button onClick={handleSwitchAccount}>Switch Account</button>
//         )}
//       </div>
//       <Form
//         account={account}
//         onSubmit={(e) => handleSubmit(e as unknown as Submitted)}
//       />
//       <Messages messages={messages} />
//     </Fragment>
//   );
// };

const zipName = (name: string) => `${name.slice(0, 5)}...${name.slice(-3)}`;

export const generateBtn = (currencyName: string, btnProps: any) => {
	const { selector, modal, accounts, accountId } = useWalletSelector();
	const [account, setAccount] = useState<any>(null);
	const [messages, setMessages] = useState<Array<any>>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const getAccount = useCallback(async (): Promise<any> => {
		if (!accountId) {
			return null;
		}

		const { network } = selector.options;
		const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

		return provider
			.query<AccountView>({
				request_type: "view_account",
				finality: "final",
				account_id: accountId,
			})
			.then((data) => ({
				...data,
				account_id: accountId,
			}));
	}, [accountId, selector.options]);

	const getMessages = useCallback(() => {
		const { network } = selector.options;
		const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

		return provider
			.query<CodeResult>({
				request_type: "call_function",
				account_id: CONTRACT_ID,
				method_name: "getMessages",
				args_base64: "",
				finality: "optimistic",
			})
			.then((res) => JSON.parse(Buffer.from(res.result).toString()));
	}, [selector]);

	useEffect(() => {
		// TODO: don't just fetch once; subscribe!
		getMessages().then(setMessages);
	}, []);

	useEffect(() => {
		if (!accountId) {
			return setAccount(null);
		}

		setLoading(true);

		getAccount().then((nextAccount) => {
			setAccount(nextAccount);
			setLoading(false);
		});
	}, [accountId, getAccount]);

	const handleSignIn = () => {
		modal.show();
	};

	const handleSignOut = async () => {
		const wallet = await selector.wallet();

		wallet.signOut().catch((err) => {
			console.log("Failed to sign out");
			console.error(err);
		});
	};

	const handleSwitchWallet = () => {
		modal.show();
	};

	const handleSwitchAccount = () => {
		const currentIndex = accounts.findIndex((x) => x.accountId === accountId);
		const nextIndex = currentIndex < accounts.length - 1 ? currentIndex + 1 : 0;

		const nextAccountId = accounts[nextIndex].accountId;

		selector.setActiveAccount(nextAccountId);

		alert("Switched account to " + nextAccountId);
	};

	const addMessages = useCallback(
		async (message: string, donation: string, multiple: boolean) => {
			const { contract } = selector.store.getState();
			const wallet = await selector.wallet();

			if (!multiple) {
				return wallet
					.signAndSendTransaction({
						signerId: accountId!,
						actions: [
							{
								type: "FunctionCall",
								params: {
									methodName: "addMessage",
									args: { text: message },
									gas: BOATLOAD_OF_GAS,
									deposit: utils.format.parseNearAmount(donation)!,
								},
							},
						],
					})
					.catch((err) => {
						alert("Failed to add message");
						console.log("Failed to add message");

						throw err;
					});
			}

			const transactions: Array<Transaction> = [];

			for (let i = 0; i < 2; i += 1) {
				transactions.push({
					signerId: accountId!,
					receiverId: contract!.contractId,
					actions: [
						{
							type: "FunctionCall",
							params: {
								methodName: "addMessage",
								args: {
									text: `${message} (${i + 1}/2)`,
								},
								gas: BOATLOAD_OF_GAS,
								deposit: utils.format.parseNearAmount(donation)!,
							},
						},
					],
				});
			}

			return wallet.signAndSendTransactions({ transactions }).catch((err) => {
				alert("Failed to add messages exception " + err);
				console.log("Failed to add messages");

				throw err;
			});
		},
		[selector, accountId]
	);

	const handleVerifyOwner = async () => {
		const wallet = await selector.wallet();
		try {
			const owner = await wallet.verifyOwner({
				message: "test message for verification",
			});

			if (owner) {
				alert(`Signature for verification: ${JSON.stringify(owner)}`);
			}
		} catch (err) {
			const message =
				err instanceof Error ? err.message : "Something went wrong";
			alert(message);
		}
	};

	const handleSubmit = useCallback(
		async (e: Submitted) => {
			e.preventDefault();

			const { fieldset, message, donation, multiple } = e.target.elements;

			fieldset.disabled = true;

			return addMessages(message.value, donation.value || "0", multiple.checked)
				.then(() => {
					return getMessages()
						.then((nextMessages) => {
							setMessages(nextMessages);
							message.value = "";
							donation.value = SUGGESTED_DONATION;
							fieldset.disabled = false;
							multiple.checked = false;
							message.focus();
						})
						.catch((err) => {
							alert("Failed to refresh messages");
							console.log("Failed to refresh messages");

							throw err;
						});
				})
				.catch((err) => {
					console.error(err);

					fieldset.disabled = false;
				});
		},
		[addMessages, getMessages]
	);

	return (
		<>
			{currencyName === "SOL" ? (
				<Button
					type="primary"
					id={"connectWalletBtn"}
					onClick={() => btnProps.connectWalletSOL(btnProps.setSOLWalletKey)}>
					{btnProps.SOLwalletKey ? (
						<>
							<img src={phantom} alt={"#"} />
							{zipName(btnProps.SOLwalletKey)}
						</>
					) : (
						"Connect wallet"
					)}
				</Button>
			) : null}
			{currencyName === "TON" ||
			currencyName === "wNEAR (TON)" ||
			currencyName === "wETH (TON)" ||
			currencyName === "wSOL (TON)" ||
			currencyName === "wAURORA (TON)" ||
			currencyName === "wUSN (TON)" ||
			currencyName === "wATOM (TON)" ? (
				<Button
					type="primary"
					id={"connectWalletBtn"}
					onClick={() => btnProps.connectWalletTON(btnProps.setTONwalletKey)}>
					{btnProps.TONwalletKey ? (
						<>
							<img src={tonIco} alt={"#"} />
							{zipName(btnProps.TONwalletKey)}
						</>
					) : (
						"Connect wallet"
					)}
				</Button>
			) : null}
			{currencyName === "USN" || currencyName === "NEAR" ? (
				<Button
					type="primary"
					id={"connectWalletBtn"}
					onClick={() => btnProps.connectWalletNEAR(btnProps.setNEARwalletKey)}>
					{btnProps.NEARwalletKey ? (
						<>
							<img src={near} alt={"#"} />
							{zipName(btnProps.NEARwalletKey)}
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
					onClick={() => btnProps.connectWalletATOM(btnProps.setATOMwalletKey)}>
					{btnProps.ATOMwalletKey ? (
						<>
							<img src={keplr} alt={"#"} />
							{zipName(btnProps.ATOMwalletKey)}
						</>
					) : (
						"Connect wallet"
					)}
				</Button>
			) : null}
			{currencyName === "AURORA" ? (
				<Button
					type="primary"
					id={"connectWalletBtn"}
					onClick={() => btnProps.connectWalletAUR(btnProps.setAURwalletKey)}>
					{btnProps.AURwalletKey ? (
						<>
							<img src={metamask} alt={"#"} />
							{zipName(btnProps.AURwalletKey)}
						</>
					) : (
						"Connect wallet"
					)}
				</Button>
			) : null}
			{currencyName === "ETH" ? (
				<Button
					type="primary"
					id={"connectWalletBtn"}
					onClick={() => btnProps.connectWalletETH(btnProps.setETHWalletKey)}>
					{btnProps.ETHwalletKey ? (
						<>
							<img src={metamask} alt={"#"} />
							{zipName(btnProps.ETHwalletKey)}
						</>
					) : (
						"Connect wallet"
					)}
				</Button>
			) : null}
		</>
	);
};
