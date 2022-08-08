const getATOMMaxAmount = (setATOMMaxAmount: any) => {
  fetch(`https://tonana-proxy.herokuapp.com/https://api.cosmoscan.net/account/${process.env.REACT_APP_BACK_COSMOS_WALLET}`, {
    method: "GET",
  }).then((res) => res.json())
    .then((res) => {
      console.log(res.balance);
      setATOMMaxAmount(Number(res.balance) );
    });
}

export default getATOMMaxAmount