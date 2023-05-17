import { useEffect, useMemo, useState } from "react";
import { Form, Input, message, Button } from "antd";
import makeTrx from "../../logic/trxBuilder";
import { useStores } from "../../stores";
import { SubmitBtn, NonactiveSubmitBtn } from "./styles";
import { useStore as useStoreNanoStores } from '@nanostores/react'

const SwapForm = (props: any) => {
	const { storeMain } = useStores();
	const storeMainRepository = useStoreNanoStores(storeMain.repository);
	const [addVal, setAddVal] = useState("");
	const [params, setParams] = useState("");
	const [addMessage, setAddMessage] = useState(false);
	const [openData, setOpenData] = useState(false);
	

	let isTargetWrapp = false;

	let dirKey: string = props.directionNetwork;
	if (dirKey.includes('(') && dirKey.includes(')')) {
		dirKey = dirKey.split(' ')[0]; // Reduced to the form: wsol, weth  etc.
		isTargetWrapp = true;
	}

	let souKey: string = props.networkSource;
	if (souKey.includes('(') && souKey.includes(')')) {
		souKey = souKey.split(' ')[0];
	}

	const swapConfig: any = {
		atom: {
			walletKey: storeMainRepository.ATOMwalletKey,
			currency: storeMainRepository.au,
			maxAmount: storeMainRepository.ATOMMaxAmount,
			currencyName: "ATOM"
		},
		near: {
			walletKey: storeMainRepository.NEARwalletKey,
			currency: storeMainRepository.nu,
			maxAmount: storeMainRepository.NEARMaxAmount,
			currencyName: "NEAR"
		},
		sol: {
			walletKey: storeMainRepository.SOLwalletKey,
			currency: storeMainRepository.su,
			maxAmount: storeMainRepository.SOLMaxAmount,
			currencyName: "SOL"
		},
		ton: {
			walletKey: storeMainRepository.TONwalletKey,
			currency: storeMainRepository.tu,
			maxAmount: storeMainRepository.TONMaxAmount,
			currencyName: "TON"
		},
		aurora: {
			walletKey: storeMainRepository.AURwalletKey,
			currency: storeMainRepository.auru,
			maxAmount: storeMainRepository.AURMaxAmount,
			currencyName: "AURORA"
		},
		usn: {
			walletKey: storeMainRepository.NEARwalletKey,
			currency: storeMainRepository.usnu,
			maxAmount: storeMainRepository.USNMaxAmount,
			currencyName: "USN"
		},
		eth: {
			walletKey: storeMainRepository.ETHwalletKey,
			currency: storeMainRepository.ethu,
			maxAmount: storeMainRepository.ETHMaxAmount,
			currencyName: "ETH"
		},
		wsol: {
			walletKey: storeMainRepository.TONwalletKey,
			currency: storeMainRepository.su,
			maxAmount: storeMainRepository.SOLMaxAmount,
			currencyName: "wSOL"
		},
		weth: {
			walletKey: storeMainRepository.TONwalletKey,
			currency: storeMainRepository.ethu,
			maxAmount: storeMainRepository.ETHMaxAmount,
			currencyName: "wETH"
		},
		watom: {
			walletKey: storeMainRepository.TONwalletKey,
			currency: storeMainRepository.au,
			maxAmount: storeMainRepository.ATOMMaxAmount,
			currencyName: "wATOM"
		},
		wnear: {
			walletKey: storeMainRepository.TONwalletKey,
			currency: storeMainRepository.nu,
			maxAmount: storeMainRepository.NEARMaxAmount,
			currencyName: "wNEAR"
		},
		waurora: {
			walletKey: storeMainRepository.TONwalletKey,
			currency: storeMainRepository.auru,
			maxAmount: storeMainRepository.AURMaxAmount,
			currencyName: "wAURORA"
		},
		wusn: {
			walletKey: storeMainRepository.TONwalletKey,
			currency: storeMainRepository.usnu,
			maxAmount: storeMainRepository.USNMaxAmount,
			currencyName: "wUSN"
		}
	}

	if (!(dirKey in swapConfig)) {
		if (props.formType === 'bridge') {
			dirKey = 'wnear'
		} else {
			dirKey = 'ton'
		}
	  }

	  if (!(souKey in swapConfig)) {
		if (props.formType === 'bridge') {
			souKey = 'near'
		} else {
			souKey = 'near'
		}
	  }
	
	useEffect(() => {
		setParams("");
		setAddVal("");
		setAddMessage(false);
		if (props.networkSource === "near" && props.directionNetwork === "ton") setAddMessage(true);
		if (props.networkSource === "ton" && props.directionNetwork === "near") setAddMessage(true);
		if (props.networkSource === "ton" && props.directionNetwork === "usn") setAddMessage(true);
		if (props.networkSource === "usn" && props.directionNetwork === "ton") setAddMessage(true);
	}, [props.networkSource, props.directionNetwork]);

	const walletSouKey = swapConfig[souKey].walletKey;
	const walletDirKey = swapConfig[dirKey].walletKey;
	const secCurrency = swapConfig[dirKey].currency; //for Dir
	const currency = swapConfig[souKey].currency; // for Sou
	const MaxDirAmount = Number(swapConfig[dirKey].maxAmount); // only for Dir 
	const sourceCurrencyName = swapConfig[souKey].currencyName;
	const directionCurrencyName = swapConfig[dirKey].currencyName;

	const activeBtn: boolean =
		(openData ? true : !!walletDirKey) &&
		!!props.firstCurrAmount &&
		!props.isload &&
		walletSouKey &&
		(openData ? !!params : true) &&
		(openData ? !!addVal : true);

	const currenciesSelected = useMemo(() => {
		return currency !== null && secCurrency !== null;
	}, [currency, secCurrency]);

	useEffect(() => {
		if (openData) setAddVal(walletDirKey);
	}, [openData, walletDirKey]);

	useEffect(() => {
		props.setFirstCurrAmount("");
		props.setSecCurrAmount("");
	}, [props.directionNetwork, props.networkSource]);

	const StyledBtn = activeBtn ? SubmitBtn : NonactiveSubmitBtn;

	return (
		<Form name="control-hooks" layout="vertical">
			{props.btn}
			<Form.Item label={`FROM`}>
				{props.btnSelectSource}
				{props.btnSource}
				<Input
					onChange={(e) => {
						if (currenciesSelected)
						if (
							isTargetWrapp ||
							(Number(e.target.value) * currency) / secCurrency <
							0.8 * MaxDirAmount
						) {
							props.setFirstCurrAmount(e.target.value);
							props.setSecCurrAmount(
								((Number(e.target.value) * currency!) / secCurrency!) * 0.975 + ""
							);
						} else {
							message.error(
								`Set less, than ${(0.8 * MaxDirAmount * secCurrency) / currency
								} ${sourceCurrencyName}`,
								3
							);
						}
					}}
					value={
						!isNaN(Number(props.firstCurrAmount))
							? props.secCurrAmount === ""
								? ""
								: props.firstCurrAmount
							: ""
					}
					placeholder={"0.000"}
				/>
			</Form.Item>
			{props.changeDirection}
			<Form.Item label={`TO`}>
				{props.btnSelectDirection}
				{props.btnDest}
				<Input
					value={
						!isNaN(Number(props.secCurrAmount))
							? props.firstCurrAmount === ""
								? ""
								: props.secCurrAmount
							: ""
					}
					onChange={(e) => {
						if (currenciesSelected)
						if (isTargetWrapp || Number(e.target.value) < 0.8 * MaxDirAmount) {
							props.setFirstCurrAmount(
								((Number(e.target.value) * secCurrency!) / currency!) * 1.025 + ""
							);
							props.setSecCurrAmount(e.target.value);
						} else {
							message.error(
								`Set less, than ${0.8 * MaxDirAmount} ${directionCurrencyName}`,
								3
							);
						}
					}}
					placeholder={"0.000"}
				/>
			</Form.Item>
			{addMessage ? (
				<>
					<Form.Item
						style={{
							margin: "0px 0 24px 0",
						}}>
						<SubmitBtn
							type="primary"
							onClick={() => setOpenData(!openData)}>
							{!openData ? "Add more data" : "Discard trx data"}
						</SubmitBtn>
					</Form.Item>
					{openData ? (
						<>
							<Form.Item label={`Receiver ${props.directionNetwork} address`}>
								<Input
									value={addVal}
									onChange={(e) => setAddVal(e.target.value)}
									placeholder={"Address"}
								/>
							</Form.Item>
							<Form.Item label={`Message in ${props.directionNetwork} trx`}>
								<Input
									value={params}
									onChange={(e) => {
										if (String(e.target.value).length <= 5000) {
											setParams(e.target.value);
										} else {
											message.error(
												`The message should be less than 5000 characters`,
												3
											);
										}
									}}
									placeholder={"Type text here"}
								/>
							</Form.Item>
						</>
					) : null}
				</>
			) : null}
			Exchange rate: 1 {sourceCurrencyName} ≈{" "}
			{((currency / secCurrency) * 0.975).toFixed(3)} {directionCurrencyName}
			<br />{" "}
			{directionCurrencyName.slice(0, 1) !== "w"
				? `Tonana reserve: ${MaxDirAmount.toFixed(3)} ${directionCurrencyName}`
				: `Tonana reserve: unlimited ${directionCurrencyName}`}
			<Form.Item
				style={{
					margin: "24px 0 0 0",
				}}>
				<StyledBtn
					type="primary"
					onClick={() =>
						makeTrx(
							activeBtn,
							props,
							walletSouKey,
							walletDirKey,
							openData,
							addVal,
							params,
						)()
					}>
					Submit
				</StyledBtn>
			</Form.Item>
		</Form>
	);
};

export default SwapForm;