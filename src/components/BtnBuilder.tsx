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

export const generateBtn = (props: any) => {
	const set = props.set;
	const connect = props.connect;
	const walletKey = props.walletKey;


	return (
		<>
				<Button
					type="primary"
					id={"connectWalletBtn"}
					onClick={() => connect(set)}>
					{walletKey ? (
						<>
							<img src={phantom} alt={"#"} />
							{zipName(walletKey)}
						</>
					) : (
						"Connect wallet"
					)}
				</Button>
		</>
	);
};
