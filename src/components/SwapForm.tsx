import { useEffect, useMemo, useState } from "react";
import { Form, Input, message, Button } from "antd";
import makeTrx from "../logic/trxBuilder";
import { useStores } from "../stores";
import styled from "styled-components";
const MassaKeys = styled.div`
color: white;
	margin: 6px 0 0 0;
span { 
	text-decoration: underline;
	cursor: pointer;
	margin: 0 0 0 6px;
}
`
const MassaKeysDir = styled.div`
color: white;
	margin: -12px 0 12px  0;
span { 
	text-decoration: underline;
	cursor: pointer;
	margin: 0 0 0 6px;
}
`

const zipName = (name: string) => `${name.slice(0, 5)}...${name.slice(-3)}`;
const SwapForm = (props: any) => {
	const { storeMain } = useStores();
	const [addVal, setAddVal] = useState("");
	const [params, setParams] = useState("");
	const [addMessage, setAddMessage] = useState(false);
	const [openData, setOpenData] = useState(false);
	const [massaParams, setMassaParams] = useState<any>(null);

	const isDirAtom = props.directionNetwork === "atom";
	const isDirNear = props.directionNetwork === "near";
	const isDirSol = props.directionNetwork === "sol";
	const isDirTon = props.directionNetwork === "ton";
	const isDirAur = props.directionNetwork === "aurora";
	const isDirUsn = props.directionNetwork === "usn";
	const isDirEth = props.directionNetwork === "eth";
	const isDirMassa = props.directionNetwork === "massa";
	const isDirwMASSATON = props.directionNetwork === "wmassa (ton)";
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
	const isSouMassa = props.networkSource === "massa";
	const isSouwMASSATON = props.networkSource === "wmassa (ton)";
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
		isDirwMASSATON ||
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
						: isDirMassa
							? props.MASSAwalletKey
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
					: isSouMassa
						? props.MASSAwalletKey
						: isSouAur
							? props.AURwalletKey
							: isSouEth
								? props.ETHwalletKey
								: null;

	const secCurrency =
		isDirAtom || isDirwATOMTON
			? storeMain.repository.get().au
			: isDirNear || isDirwNEARTON
				? storeMain.repository.get().nu
				: isDirTon
					? storeMain.repository.get().tu
					: isDirAur || isDirwAURTON
						? storeMain.repository.get().auru
						: isDirSol || isDirwSOLTON
							? storeMain.repository.get().su
							: isDirUsn || isDirwUSNTON
								? storeMain.repository.get().usnu
								: isDirEth || isDirwETHTON
									? storeMain.repository.get().ethu
									: isDirMassa || isDirwMASSATON
										? storeMain.repository.get().massau
										: null;

	const currency =
		isSouAtom || isSouwATOMTON
			? storeMain.repository.get().au
			: isSouNear || isSouwNEARTON
				? storeMain.repository.get().nu
				: isSouEth || isSouwETHTON
					? storeMain.repository.get().ethu
					: isSouTon
						? storeMain.repository.get().tu
						: isSouSol || isSouwSOLTON
							? storeMain.repository.get().su
							: isSouAur || isSouwAURTON
								? storeMain.repository.get().auru
								: isSouUsn || isSouwUSNTON
									? storeMain.repository.get().usnu
									: isSouMassa || isSouwMASSATON
										? storeMain.repository.get().massau
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
									: isDirMassa || isDirwMASSATON
										? props.MASSAMaxAmount
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
						: isSouMassa
							? "MASSA"
							: isSouwMASSATON
								? "wMASSA"
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
							: isDirMassa
								? "MASSA"
								: isDirwMASSATON
									? "wMASSA"
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
																: "";

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

	useEffect(() => {
		if (isSouMassa && walletSouKey) {
			const massalocalst = JSON.parse(localStorage.getItem("massakey") ?? '{}');
			console.log(massalocalst)
			setMassaParams(massalocalst)
		} else {
			if (isDirMassa && walletDirKey) {
				const massalocalst = JSON.parse(localStorage.getItem("massakey") ?? '{}');
				console.log(massalocalst)
				setMassaParams(massalocalst)
			} else {
				setMassaParams(null)
			}
		}
	}, [walletSouKey])

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
				{massaParams && isSouMassa ? <MassaKeys>
					generated address: <span onClick={() => navigator.clipboard.writeText(massaParams.address)}>{zipName(massaParams.address)}</span >
					<br />
					generated private key: <span onClick={() => navigator.clipboard.writeText(massaParams.b58cprivkey)}>{zipName(massaParams.b58cprivkey)}</span >
				</MassaKeys> : null}
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
			{massaParams && isDirMassa ? <MassaKeysDir>
				generated address: <span onClick={() => navigator.clipboard.writeText(massaParams.address)}>{zipName(massaParams.address)}</span >
				<br />
				generated private key: <span onClick={() => navigator.clipboard.writeText(massaParams.b58cprivkey)}>{zipName(massaParams.b58cprivkey)}</span >
			</MassaKeysDir> : null}
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
							isSouMassa,
							isSouwNEARTON,
							isSouwSOLTON,
							isSouwATOMTON,
							isSouwAURTON,
							isSouwETHTON,
							isSouwMASSATON,
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
