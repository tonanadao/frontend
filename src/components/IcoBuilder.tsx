import icons from "../configs/configIco"

export const icoBuilder = (chain: string) => {
	let key: string = chain.toLocaleLowerCase();
	if ( key.includes('(') && key.includes(')') ) {
	   key = key.split(' ')[0].slice(1);
	}
	
	return (icons[key].img);
}