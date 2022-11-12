var func = async (setETHMaxAmount: any) => {
  fetch('https://api.covalenthq.com/v1/1/address/0xCA01Fe7Dcc547bf75d41a2786c24B12AF10B6e4E/balances_v2/?key=ckey_a4c7d840a7774fea9b5d2d9198f',{
    method:"get",
  }).then(e=>e.json()).then((res)=>{
    setETHMaxAmount(Number(res.data.items.filter((e:any)=>e.contract_ticker_symbol === 'ETH')[0].balance)/1000000000000000000)
      })
};
export default func