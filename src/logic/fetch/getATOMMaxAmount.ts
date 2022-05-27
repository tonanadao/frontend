const getATOMMaxAmount = (setATOMMaxAmount: any) => {
  fetch(`https://sepezho.com:5555/https://api.cosmoscan.net/account/${process.env.REACT_APP_BACK_ATOM_WALLET}`, {
    method: "GET",
  }).then((res) => res.json())
    .then((res) => {
      setATOMMaxAmount(Number(res.balance) / 1000000);
    });
}

export default getATOMMaxAmount