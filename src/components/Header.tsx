import Logo from "../static/img/logo.svg";
import React, { Component } from "react";
import { Topnav, LogoSC } from "../styles/style";

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
