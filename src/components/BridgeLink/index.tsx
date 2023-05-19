import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const BridgeLink = (props: any) => {
  const location = useLocation();

  const active : boolean = location.pathname === "/bridge";
  const activeClass = active ? "activeLinkBtn" : "";

  

    return (
        <Link to="/bridge"><div className={activeClass} onClick={() => props.setFormType('bridge')}>Bridge</div></Link>
    );
};

export default BridgeLink;