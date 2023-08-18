var func = async (setAURMaxAmount: any, isTestNet: boolean) => {
  const chainID: string = isTestNet ? "1313161555" : "1313161554";
  fetch(`https://api.covalenthq.com/v1/${chainID}/address/0x7858011704161f41880e7f7EaF1d4E3525094576/balances_v2/?key=ckey_a4c7d840a7774fea9b5d2d9198f`,{
    method:"get",
  }).then(e=>e.json()).then((res)=>{
    // console.log(res.data.items[0].balance);
    // console.log(Number(res.data.items[1].balance)/1000000000000000000);
    setAURMaxAmount(Number(res.data.items.filter((e:any)=>e.contract_ticker_symbol === 'AURORA')[0].balance)/1000000000000000000)
      })
	// console.log(data.data.market_data.current_price.usd);
};
// func()
export default func

