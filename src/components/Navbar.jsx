import React from 'react';
import NavLink from "./NavLink.jsx";
import PhoneButton from './PhoneButton';

function Navbar(props) {
    const className = props.className;
    const onLinkClick = props.onLinkClick;

    return (
        <nav className={className}>
            <NavLink to="/" content="Accueil" id="navbar-homeLink" onClick={onLinkClick}/>
            <NavLink to="/services" content="Prestations" id="navbar-servicesLink" onClick={onLinkClick}/>
                <NavLink to="/contact" content="Contact" id="navbar-contactLink" onClick={onLinkClick}/>
            <PhoneButton className="header-phone-btn" />
        </nav>
    );
}

export default Navbar;