import Logo from "../static/img/logo.svg";
import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import ScrollspyNav from './scrollSpy';

// import Logo from '../../assets/images/tonana.png';

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
