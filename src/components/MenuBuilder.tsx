import { Menu } from "antd";
import arrOfChains from "../config"
import { retry } from "rxjs";

// net - opposite network
// set - net setter
// formType - type of shape (bridge or swap)
// isDestination - an indicator of where we are (dest or source)


// For the swap form, we return to the menu all blockchains from the config,
// except for the wrappers and the blockchain that is currently set in the opposite menu. 
// One condition is valid for both "destination" and "source".

// When we are in bridge form and in "source",
// we return all the contents of the config except TON.
// When we are in bridge form in "destination", we only return the opposite chain's wrapper.



export const menuBuilder = (net: string, set: any, formType: string, isDestination: boolean) => (
	<Menu
		 items = { arrOfChains.map((item: string) => {
		
			if (formType === 'swap' && item !== net && !item.includes('(') && !item.includes(')') ||
			    formType === 'bridge' && !isDestination && item !== 'TON')  {
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
			} else {return null}
			
		})

		}
	/>
);
