import { useEffect, useState } from "react";
import { useStores } from "../../stores";
import { Link } from "react-router-dom";
import { WhiteSpan } from "./styles"


const NftLink = (props: any) => {
    const { storeSwitch } = useStores();

    return storeSwitch.repository.get().isTestNet ? (
        <Link to="/nft"><div onClick={() => props.setFormType('nft')}>NFT<WhiteSpan>testnet</WhiteSpan></div></Link>
      ) : (
        <Link to="/nft"><div onClick={(e)=> e.preventDefault()}>NFT<span>testnet</span></div></Link>
      );
};

export default NftLink;