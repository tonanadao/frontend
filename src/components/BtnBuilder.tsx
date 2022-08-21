import phantom from "../static/img/phantom.png";
import near from "../static/img/near.png";
import tonIco from "../static/img/ton.png";
import keplr from "../static/img/keplr.png";
import { Button } from "antd";

const zipName = (name: string) => `${name.slice(0, 5)}...${name.slice(-3)}`;

export const generateBtn = (currencyName: string, btnProps: any) => (
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
		currencyName === "wSOL (TON)" ||
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
		{currencyName === "NEAR" ? (
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
	</>
);
