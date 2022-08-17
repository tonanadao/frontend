const getATOMMaxAmount = (setATOMMaxAmount: any) => {
  fetch(`https://proxy.tonana.org/https://api.cosmoscan.net/account/${process.env.REACT_APP_BACK_COSMOS_WALLET}`, {
    method: "GET",
  }).then((res) => res.json())
    .then((res) => {
      setATOMMaxAmount(Number(res.balance) );
    });
}

export default getATOMMaxAmount