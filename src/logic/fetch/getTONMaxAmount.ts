import TonWeb from "tonweb"


const getTONMaxAmount = (setTONMaxAmount: any) => {
  fetch(
    `https://toncenter.com/api/v2/getAddressInformation?address=${process.env.REACT_APP_BACK_TON_WALLET}`,
    { method: "GET" }
  ).then((e) => e.json())
    .then((e: any) => {
      setTONMaxAmount(Number(TonWeb.utils.fromNano(Number(e.result.balance))));
    });
}

export default getTONMaxAmount