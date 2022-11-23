import { useEffect, useState } from "react";
import { Form, Input, message, Button } from "antd";
import makeTrx from "../logic/trxBuilder";

const SwapForm = (props: any) => {
	const [addVal, setAddVal] = useState("");
	const [params, setParams] = useState("");
	const [addMessage, setAddMessage] = useState(false);
	const [openData, setOpenData] = useState(false);

	const isDirAtom = props.directionNetwork === "atom";
	const isDirNear = props.directionNetwork === "near";
	const isDirSol = props.directionNetwork === "sol";
	const isDirTon = props.directionNetwork === "ton";
	const isDirAur = props.directionNetwork === "aurora";
	const isDirUsn = props.directionNetwork === "usn";
	const isDirEth = props.directionNetwork === "eth";
	const isDirwSOLTON = props.directionNetwork === "wsol (ton)";
	const isDirwETHTON = props.directionNetwork === "weth (ton)";
	const isDirwAURTON = props.directionNetwork === "waurora (ton)";
	const isDirwNEARTON = props.directionNetwork === "wnear (ton)";
	const isDirwATOMTON = props.directionNetwork === "watom (ton)";
	const isDirwUSNTON = props.directionNetwork === "wusn (ton)";

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

	const isTargetWrapp =
		isDirwSOLTON ||
		isDirwETHTON ||
		isDirwAURTON ||
		isDirwNEARTON ||
		isDirwATOMTON ||
		isDirwUSNTON;

	useEffect(() => {
		setParams("");
		setAddVal("");
		setAddMessage(false);
		if (isSouNear && isDirTon) setAddMessage(true);
		if (isSouTon && isDirNear) setAddMessage(true);
		if (isSouTon && isDirUsn) setAddMessage(true);
		if (isSouUsn && isDirTon) setAddMessage(true);
	}, [props.networkSource, props.directionNetwork]);

	const walletDirKey = isDirAtom
		? props.ATOMwalletKey
		: isDirNear || isDirUsn
		? props.NEARwalletKey
		: isDirTon ||
		  isDirwSOLTON ||
		  isDirwNEARTON ||
		  isDirwATOMTON ||
		  isDirwAURTON ||
		  isDirwETHTON ||
		  isDirwUSNTON
		? props.TONwalletKey
		: isDirSol
		? props.SOLwalletKey
		: isDirEth
		? props.ETHwalletKey
		: isDirAur
		? props.AURwalletKey
		: null;

	const walletSouKey = isSouAtom
		? props.ATOMwalletKey
		: isSouNear || isSouUsn
		? props.NEARwalletKey
		: isSouTon ||
		  isSouwATOMTON ||
		  isSouwNEARTON ||
		  isSouwSOLTON ||
		  isSouwAURTON ||
		  isSouwETHTON ||
		  isSouwUSNTON
		? props.TONwalletKey
		: isSouSol
		? props.SOLwalletKey
		: isSouAur
		? props.AURwalletKey
		: isSouEth
		? props.ETHwalletKey
		: null;

	const secCurrency =
		isDirAtom || isDirwATOMTON
			? props.au
			: isDirNear || isDirwNEARTON
			? props.nu
			: isDirTon
			? props.tu
			: isDirAur || isDirwAURTON
			? props.auru
			: isDirSol || isDirwSOLTON
			? props.su
			: isDirUsn || isDirwUSNTON
			? props.usnu
			: isDirEth || isDirwETHTON
			? props.ethu
			: null;

	const currency =
		isSouAtom || isSouwATOMTON
			? props.au
			: isSouNear || isSouwNEARTON
			? props.nu
			: isSouEth || isSouwETHTON
			? props.ethu
			: isSouTon
			? props.tu
			: isSouSol || isSouwSOLTON
			? props.su
			: isSouAur || isSouwAURTON
			? props.auru
			: isSouUsn || isSouwUSNTON
			? props.usnu
			: null;

	const MaxDirAmount = Number(
		isDirAtom || isDirwATOMTON
			? props.ATOMMaxAmount
			: isDirNear || isDirwNEARTON
			? props.NEARMaxAmount
			: isDirTon
			? props.TONMaxAmount
			: isDirSol || isDirwSOLTON
			? props.SOLMaxAmount
			: isDirEth || isDirwETHTON
			? props.ETHMaxAmount
			: isDirAur || isDirwAURTON
			? props.AURMaxAmount
			: isDirUsn || isDirwUSNTON
			? props.USNMaxAmount
			: null
	);

	const sourceCurrencyName = isSouAtom
		? "ATOM"
		: isSouNear
		? "NEAR"
		: isSouTon
		? "TON"
		: isSouUsn
		? "USN"
		: isSouAur
		? "AURORA"
		: isSouSol
		? "SOL"
		: isSouEth
		? "ETH"
		: isSouwNEARTON
		? "wNEAR"
		: isSouwSOLTON
		? "wSOL"
		: isSouwATOMTON
		? "wATOM"
		: isSouwUSNTON
		? "wUSN"
		: isSouwETHTON
		? "wETH"
		: isSouwAURTON
		? "wAURORA"
		: null;

	const directionCurrencyName = isDirAtom
		? "ATOM"
		: isDirNear
		? "NEAR"
		: isDirTon
		? "TON"
		: isDirSol
		? "SOL"
		: isDirUsn
		? "USN"
		: isDirEth
		? "ETH"
		: isDirAur
		? "AURORA"
		: isDirwNEARTON
		? "wNEAR"
		: isDirwATOMTON
		? "wATOM"
		: isDirwAURTON
		? "wAURORA"
		: isDirwSOLTON
		? "wSOL"
		: isDirwETHTON
		? "wETH"
		: isDirwUSNTON
		? "wUSN"
		: null;

	const activeBtn =
		(openData ? true : !!walletDirKey) &&
		!!props.firstCurrAmount &&
		!props.isload &&
		walletSouKey &&
		(openData ? !!params : true) &&
		(openData ? !!addVal : true);

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
						if (
							isTargetWrapp ||
							(Number(e.target.value) * currency) / secCurrency <
								0.8 * MaxDirAmount
						) {
							props.setFirstCurrAmount(e.target.value);
							props.setSecCurrAmount(
								((Number(e.target.value) * currency) / secCurrency) * 0.975 + ""
							);
						} else {
							message.error(
								`Set less, than ${
									(0.8 * MaxDirAmount * secCurrency) / currency
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
						if (isTargetWrapp || Number(e.target.value) < 0.8 * MaxDirAmount) {
							props.setFirstCurrAmount(
								((Number(e.target.value) * secCurrency) / currency) * 1.025 + ""
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
							<Form.Item label={`Reciver ${props.directionNetwork} address`}>
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
			<br />
			Tonana reserve: {MaxDirAmount.toFixed(3)} {directionCurrencyName}
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
						)
					}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SwapForm;
