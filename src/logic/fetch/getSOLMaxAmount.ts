const getSOLMaxAmount = (setSOLMaxAmount: any) => {
  fetch(`https://api.${process.env.REACT_APP_SOL_NET}.solana.com/`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "getAccountInfo",
      params: [
        process.env.REACT_APP_BACK_SOL_WALLET,
        {
          encoding: "base58",
        },
      ],
    }),
  }).then((res) => res.json())
    .then((res) => {
      setSOLMaxAmount(res.result.value.lamports / 1000000000);
    });
}

export default getSOLMaxAmount