import { Menu } from "antd";
import arrOfChains from "../config"

// net - opposite network
// set - net setter
// formType - type of shape (bridge or swap)
// isDestination - an indicator of where we are (dest or source)
export const menuBuilder = (net: string, set: any, formType: string, isDestination: boolean) => (
	<Menu
		 items =  
		{[ arrOfChains.map((item: any) => {

			let returnableItem: string = item;

			if (formType === 'swap' && item !== net && !item.includes('(') && !item.includes(')')) {
				returnableItem = item;
			} 
			
			else if (formType === 'bridge' && !isDestination && item !== 'TON') {
				returnableItem = item;
			} 
			
			else if (formType === 'bridge' && isDestination) {

				// for wraper opposite destination
				if (net.includes('(') && net.includes(')') && net.includes(item) && !item.includes('(') && !item.includes(')')) {
					returnableItem = item;
				}
				
				// for clear net opposite destination
				 else if (item.includes(net)) {returnableItem = item;}

			}



			return (
				{
					key: returnableItem,
					label: (
						<div
							className={
								(formType === 'swap' && net !== `w${returnableItem} (TON)`) ||
									(formType === 'bridge' && !isDestination)
									? ""
									: "cantSelect"
							}
							onClick={() =>
								(formType === 'swap' && net !== `w${returnableItem} (TON)`) ||
									(formType === 'bridge' && !isDestination)
									? set(returnableItem)
									: null
							}>
							{returnableItem}
						</div>
					),
				}
				
			);
		})

		]}
	/>
);
