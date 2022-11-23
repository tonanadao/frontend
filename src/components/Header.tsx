import Logo from "../static/img/logo.svg";
import React, { Component } from "react";

const Header = () => {
	return (
		<header id="topnav" className="defaultscroll sticky">
			<a href="https://tonana.org/">
				{" "}
				<img src={Logo} className="logo" />{" "}
			</a>
		</header>
	);
};

export default Header;
