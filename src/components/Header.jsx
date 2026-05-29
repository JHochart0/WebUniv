import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import Navbar from './Navbar';
import Logo from './Logo';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    return (
        <header className="header-container">
            <div className="header-wrap">
                <div className="star-decoration star-left"></div>
                <Logo />
              
                <div className="burger-wrapper">
                    <button 
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
                        onClick={toggleMenu}
                        aria-label="Ouvrir le menu"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>

                <Navbar 
                    className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`} 
                    onLinkClick={closeMenu} 
                />
                <div className="star-decoration star-right"></div>
            </div>
        </header>
    );
}

export default Header;