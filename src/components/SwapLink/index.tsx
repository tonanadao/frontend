import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const SwapLink = (props: any) => {
  const location = useLocation();

  const active : boolean = location.pathname === "/swap";
  const activeClass = active ? "activeLinkBtn" : "";

  

    return (
        <Link to="/swap"><div className={activeClass} onClick={() => props.setFormType('swap')}>Swap</div></Link>
    );
};

export default SwapLink;