import { useStores } from "../../stores";
import { WhiteSpan } from "./styles"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStore as useStoreNanoStores } from '@nanostores/react'
import { message } from "antd";

const NftLink = (props: any) => {
  const { storeSwitch } = useStores();
  const storeSwitchRepository = useStoreNanoStores(storeSwitch.repository);
  const location = useLocation();

  const active : boolean = location.pathname === "/nft";
  const activeClass = active ? "activeLinkBtn" : "";

  

    return storeSwitchRepository.isTestNet ? (
        <Link to="/nft"><div className={activeClass} onClick={() => props.setFormType('nft')}>NFT<WhiteSpan>testnet</WhiteSpan></div></Link>
      ) : (
        <Link to="/nft">
          <div className={activeClass} 
            onClick={(e)=> {
            message.error("The NFT can only be used with TestNet", 2);
            e.preventDefault(); 
          }}
            >NFT<span>testnet</span></div>
        </Link>
      );
};

export default NftLink;