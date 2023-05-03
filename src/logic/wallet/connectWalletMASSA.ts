import { deduce_private_base58check, parse_textprivkey, generate_random_privkey } from "../browserify_xbcrypto.js";

const connectWalletMASSA = async (setATOMWalletKey: any) => {
  const massakeylocal = localStorage.getItem('massakey')
  if (JSON.parse(massakeylocal ?? "{}")?.address) {
    setATOMWalletKey(JSON.parse(massakeylocal ?? '{}').address)
  } else {
    const walletpk = deduce_private_base58check(generate_random_privkey())
    const reskey = await parse_textprivkey(walletpk)
    console.log(reskey)
    setATOMWalletKey(reskey.address)
    localStorage.setItem('massakey', JSON.stringify(reskey))
  }
};

export default connectWalletMASSA 
