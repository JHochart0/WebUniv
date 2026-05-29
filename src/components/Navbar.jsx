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
            
            {/* 3. Le lien Contact devient le repère "relatif" pour l'étoile bleue PC */}
            <div className="contact-wrapper">
                <NavLink to="/contact" content="Contact" id="navbar-contactLink" onClick={onLinkClick}/>
                {/* Cette étoile ne s'affichera que sur PC */}
                <div className="star-decoration star-blue star-desktop"></div>
            </div>
            
            <PhoneButton className="header-phone-btn" />
        </nav>
    );
}

export default Navbar;