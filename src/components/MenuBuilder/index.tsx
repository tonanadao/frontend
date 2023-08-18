import { Menu } from "antd";
import arrOfChains from "../../configs/configMenu"
import { Div } from "./styles"

export const menuBuilder = (net: string, set: any, formType: string, isDestination: boolean) => (
	<Menu
		items={arrOfChains.map((item: string) => {
			if (formType === 'swap' && item !== net && !item.includes('(') && !item.includes(')') ||
				formType === 'bridge' && !isDestination && item !== 'TON') {
				return (
					{
						key: item,
						label: (
							<Div
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
							</Div>
						),
					}
					
				)
			} else { return null }
		})

		}
	/>
);
