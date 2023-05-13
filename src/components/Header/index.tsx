import Logo from "../../static/img/logo.svg";
import { Topnav, LogoSC } from "./styles";

const Header = () => {
	return (
		<Topnav className="defaultscroll sticky">
			<a href="https://tonana.org/">
				{" "}
				<LogoSC src={Logo} className="logo" />{" "}
			</a>
		</Topnav>
	);
};

export default Header;
