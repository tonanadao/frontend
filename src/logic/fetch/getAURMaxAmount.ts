var func = async (setAURMaxAmount: any) => {
  fetch('https://proxy.tonana.org/https://api.covalenthq.com/v1/1313161555/address/0x7858011704161f41880e7f7EaF1d4E3525094576/balances_v2/?key=ckey_a4c7d840a7774fea9b5d2d9198f',{
    method:"get",
  }).then(e=>e.json()).then((res)=>{
    // console.log(res.data.items[0].balance);
    console.log(Number(res.data.items[0].balance)/1000000000000000000);
    setAURMaxAmount(Number(res.data.items[0].balance)/1000000000000000000)
      })
	// console.log(data.data.market_data.current_price.usd);
};
// func()
export default func

