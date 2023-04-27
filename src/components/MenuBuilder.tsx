import { Menu } from "antd";
import arrOfChains from "../configs/configMenu"

export const menuBuilder = (net: string, set: any, formType: string, isDestination: boolean) => (
	<Menu
		items={arrOfChains.map((item: string) => {
			if (formType === 'swap' && item !== net && !item.includes('(') && !item.includes(')') ||
				formType === 'bridge' && !isDestination && item !== 'TON') {
				return (
					{
						key: item,
						label: (
							<div
								className={
									(formType === 'swap' && net !== `w${item} (TON)`) ||
										(formType === 'bridge' && !isDestination)
										? ""
										: "cantSelect"
								}
								onClick={() =>
									(formType === 'swap' && net !== `w${item} (TON)`) ||
										(formType === 'bridge' && !isDestination)
										? set(item)
										: null
								}>
								{item}
							</div>
						),
					}
					
				)
			} else { return null }
		})

		}
	/>
);
