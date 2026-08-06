import React from 'react';
import NavLink from "./NavLink.jsx";

function Navbar(props) {
    const className = props.className;
    const onLinkClick = props.onLinkClick;

    return (
        <nav className={className}>
            <NavLink to="/" content="Accueil" id="navbar-homeLink" onClick={onLinkClick}/>
            <NavLink to="/services" content="Nos offres" id="navbar-servicesLink" onClick={onLinkClick}/>
            <NavLink to="/realisations" content="Réalisations" id="navbar-servicesLink" onClick={onLinkClick}/>
            <NavLink to="/contact" content="Contact" id="navbar-contactLink" onClick={onLinkClick}/>
        </nav>
    );
}

export default Navbar;