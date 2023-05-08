import { Button } from "antd";
import sortedBtnProps from "../configs/configBtnBuilder"

const zipName = (name: string) => `${name.slice(0, 5)}...${name.slice(-3)}`;

export const generateBtn = (currencyName: string) => {

	let key: string = currencyName.toLocaleLowerCase();
	if (key.includes('ton')) { key = "ton" }
	if (key.includes('usn')) { key = "near" }

	return (
		<>
			<Button
				type="primary"
				id={"connectWalletBtn"}
				onClick={() => sortedBtnProps[key].connect(sortedBtnProps[key].set)}>
				{sortedBtnProps[key].walletKey ? (
					<>
						<img src={sortedBtnProps[key].img} alt={"Wallet picture"} />
						{zipName(sortedBtnProps[key].walletKey)}
					</>
				) : (
					"Connect wallet"
				)}
			</Button>
		</>
	);
};
