import { useEffect, useMemo, useState } from "react";
import { Form, Input, message, Button } from "antd";
import makeTrx from "../logic/trxBuilder";
import { useStores } from "../stores";

const SwapForm = (props: any) => {
	const { storeMain } = useStores();
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

	const isSouAtom = props.networkSource === "atom";
	const isSouNear = props.networkSource === "near";
	const isSouSol = props.networkSource === "sol";
	const isSouTon = props.networkSource === "ton";
	const isSouAur = props.networkSource === "aurora";
	const isSouUsn = props.networkSource === "usn";
	const isSouEth = props.networkSource === "eth";
	const isSouwSOLTON = props.networkSource === "wsol (ton)";
	const isSouwETHTON = props.networkSource === "weth (ton)";
	const isSouwATOMTON = props.networkSource === "watom (ton)";
	const isSouwNEARTON = props.networkSource === "wnear (ton)";
	const isSouwAURTON = props.networkSource === "waurora (ton)";
	const isSouwUSNTON = props.networkSource === "wusn (ton)";

	const swapConfig: any = {
		atom: {
			walletKey: props.ATOMwalletKey,
			currency: storeMain.repository.get().au,
			maxAmount: props.ATOMMaxAmount,
			currencyName: "ATOM"
		},
		near: {
			walletKey: props.NEARwalletKey,
			currency: storeMain.repository.get().nu,
			maxAmount: props.NEARMaxAmount,
			currencyName: "NEAR"
		},
		sol: {
			walletKey: props.SOLwalletKey,
			currency: storeMain.repository.get().su,
			maxAmount: props.SOLMaxAmount,
			currencyName: "SOL"
		},
		ton: {
			walletKey: props.TONwalletKey,
			currency: storeMain.repository.get().tu,
			maxAmount: props.TONMaxAmount,
			currencyName: "TON"
		},
		aurora: {
			walletKey: props.AURwalletKey,
			currency: storeMain.repository.get().auru,
			maxAmount: props.AURMaxAmount,
			currencyName: "AURORA"
		},
		usn: {
			walletKey: props.NEARwalletKey,
			currency: storeMain.repository.get().usnu,
			maxAmount: props.USNMaxAmount,
			currencyName: "USN"
		},
		eth: {
			walletKey: props.ETHwalletKey,
			currency: storeMain.repository.get().ethu,
			maxAmount: props.ETHMaxAmount,
			currencyName: "ETH"
		},
		wsol: {
			walletKey: props.TONwalletKey,
			currency: storeMain.repository.get().su,
			maxAmount: props.SOLMaxAmount,
			currencyName: "wSOL"
		},
		weth: {
			walletKey: props.TONwalletKey,
			currency: storeMain.repository.get().ethu,
			maxAmount: props.ETHMaxAmount,
			currencyName: "wETH"
		},
		watom: {
			walletKey: props.TONwalletKey,
			currency: storeMain.repository.get().au,
			maxAmount: props.ATOMMaxAmount,
			currencyName: "wATOM"
		},
		wnear: {
			walletKey: props.TONwalletKey,
			currency: storeMain.repository.get().nu,
			maxAmount: props.NEARMaxAmount,
			currencyName: "wNEAR"
		},
		waurora: {
			walletKey: props.TONwalletKey,
			currency: storeMain.repository.get().auru,
			maxAmount: props.AURMaxAmount,
			currencyName: "wAURORA"
		},
		wusn: {
			walletKey: props.TONwalletKey,
			currency: storeMain.repository.get().usnu,
			maxAmount: props.USNMaxAmount,
			currencyName: "wUSN"
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

	const walletDirKey = swapConfig[dirKey].walletKey;
	const walletSouKey = swapConfig[souKey].walletKey;
	const secCurrency = swapConfig[dirKey].currency; //for Dir
	const currency = swapConfig[souKey].currency; // for Sou
	const MaxDirAmount = Number(swapConfig[dirKey].maxAmount); // only for Dir 
	const sourceCurrencyName = swapConfig[souKey].currencyName;
	const directionCurrencyName = swapConfig[dirKey].currencyName;

	const activeBtn =
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
						<Button
							type="primary"
							id={"submitBtn"}
							onClick={() => setOpenData(!openData)}>
							{!openData ? "Add more data" : "Discard trx data"}
						</Button>
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
				<Button
					type="primary"
					id={activeBtn ? "submitBtn" : "nonactivesubmitBtn"}
					onClick={() =>
						makeTrx(
							activeBtn,
							props,
							walletSouKey,
							walletDirKey,
							openData,
							addVal,
							params,
							isSouAtom,
							isSouNear,
							isSouUsn,
							isSouTon,
							isSouSol,
							isSouAur,
							isSouEth,
							isSouwNEARTON,
							isSouwSOLTON,
							isSouwATOMTON,
							isSouwAURTON,
							isSouwETHTON,
							isSouwUSNTON
						)()
					}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SwapForm;