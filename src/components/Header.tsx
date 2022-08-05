import { Link } from "react-router-dom";
import Logo from '../static/img/logo.svg';


const Header = () => {

    return (
        <header id="topnav" className="defaultscroll sticky">
            <Link to="https://tonana.org"> <img src={Logo} className="logo" /></Link>
        </header>
    );
}

export default Header

