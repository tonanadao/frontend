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

const zipName = (name: string) => `${name.slice(0, 5)}...${name.slice(-3)}`;

export const generateBtn = (currencyName: string, btnProps: any, objForBtn: any, setObjForBtn: any) => {

	console.log("create btn")

	const keyForObj = currencyName.toLocaleLowerCase();

	const setFunc = (connect : any, set: any, walletKey: string) => {
		setObjForBtn(
			{
				[keyForObj]: {
					connect,
					set,
					walletKey
				}
			}
		)
	}


	
	useEffect(() => {

		if (currencyName === "SOL") {
					const connect = btnProps.connectWalletSOL;
					const set = btnProps.setSOLWalletKey;
					const walletKey = btnProps.SOLwalletKey;
					setFunc(connect, set, walletKey);
				} else if (currencyName.includes("TON") ) {
					const connect = btnProps.connectWalletTON;
					const set = btnProps.setTONwalletKey;
					const walletKey = btnProps.TONwalletKey;
				} else if (currencyName === "USN" || currencyName === "NEAR") {
					const connect = btnProps.connectWalletNear;
					const set = btnProps.setNEARwalletKey;
					const walletKey = btnProps.NEARwalletKey;
					setFunc(connect, set, walletKey);
				}
				else if (currencyName === "ATOM") {
					const connect = btnProps.connectWalletATOM;
					const set = btnProps.setATOMwalletKey;
					const walletKey = btnProps.ATOMwalletKey;
					setFunc(connect, set, walletKey);
				}
				else if (currencyName === "AURORA") {
					const connect = btnProps.connectWalletAUR;
					const set = btnProps.setAURwalletKey;
					const walletKey = btnProps.AURwalletKey;
					setFunc(connect, set, walletKey);
				}
				else if (currencyName === "ETH") {
					const connect = btnProps.connectWalletETH;
					const set = btnProps.setETHWalletKey;
					const walletKey = btnProps.ETHwalletKey;
					setFunc(connect, set, walletKey);			
				}
				
	}, [currencyName])



	return (
		<>
				<Button
					type="primary"
					id={"connectWalletBtn"}
					onClick={() => objForBtn[keyForObj].connect(objForBtn[keyForObj].set)}>
					{objForBtn[keyForObj].walletKey ? (
						<>
							<img src={phantom} alt={"#"} />
							{zipName(objForBtn[keyForObj].walletKey)}
						</>
					) : (
						"Connect wallet"
					)}
				</Button>
		</>
	);
};
