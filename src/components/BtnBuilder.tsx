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

export const generateBtn = (props: any, currencyName: string) => {
	const { connectWalletSOL,
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
	    selector,
		modal, 
		accounts, 
		accountId } = props;

	const sortedBtnProps: any = {
		sol: {
			connect: connectWalletSOL,
			set: setSOLWalletKey,
			walletKey: SOLwalletKey,
		},
		ton: {
			connect: connectWalletTON,
			set: setTONwalletKey,
			walletKey: TONwalletKey,
		},
		atom: {
			connect: connectWalletATOM,
			set: setATOMwalletKey,
			walletKey: ATOMwalletKey,
		},
		aurora: {
			connect: connectWalletAUR,
			set: setAURwalletKey,
			walletKey: AURwalletKey,
		},
		eth: {
			connect: connectWalletETH,
			set: setETHWalletKey,
			walletKey: ETHwalletKey,
		},
		near: {
			connect: connectWalletNEAR,
			set: setNEARwalletKey,
			walletKey: NEARwalletKey,
		},
	};

	let key: string = currencyName.toLocaleLowerCase();
	if (key.includes('ton')) { key = "ton" }
	if (key.includes('usn')) {key = "near"}

	return (
		<>
				<Button
					type="primary"
					id={"connectWalletBtn"}
					onClick={() => sortedBtnProps[key].connect(sortedBtnProps[key].set)}>
					{sortedBtnProps[key].walletKey ? (
						<>
							<img src={phantom} alt={"#"} />
							{zipName(sortedBtnProps[key].walletKey)}
						</>
					) : (
						"Connect wallet"
					)}
				</Button>
		</>
	);
};
