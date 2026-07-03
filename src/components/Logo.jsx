import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../assets/img/WebUniv_logo_full_circle.webp';

//this component is the logo of the website that brings to the homepage when clicked on
function Logo() {
    return (
        <NavLink to="/" content="" className="logo">
            <img src={logo} alt="Logo WebUniv" className="header-logo-img"></img>
        </NavLink>
    );
}

export default Logo;