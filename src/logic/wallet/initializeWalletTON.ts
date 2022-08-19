
const initializeWalletTON = async (
	tonWalletParam: string,
	setSearchParams: any,
	setTONwalletKey: any,
	searchParams: any,
) => {
	if (tonWalletParam) {
		setTONwalletKey(tonWalletParam)
		searchParams.delete("tonwallet");
		setSearchParams(searchParams);
}
};

export default initializeWalletTON;
