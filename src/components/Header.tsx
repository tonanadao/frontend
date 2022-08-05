import React, { Component } from 'react';

import Logo from '../static/img/logo.svg';


const Header = () => {

    return (
        <header id="topnav" className="defaultscroll sticky">
            <img src={Logo} className="logo" />
        </header>
    );
}

export default Header

