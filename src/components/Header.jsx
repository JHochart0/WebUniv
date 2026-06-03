import React, { useState, useEffect, useRef } from 'react';
import '../css/Header.css';
import Navbar from './Navbar';
import Logo from './Logo';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const headerRef = useRef(null); // reference for header

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Effect to block the scrolling when the menu is opened
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    // Effect to close the menu when we click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // if the menu is opened AND if the click isn't in the header, we close the menu
            if (isMenuOpen && headerRef.current && !headerRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        // listening clicks on the document
        document.addEventListener('click', handleClickOutside);
        
        // cleansing the listener
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="header-container" ref={headerRef}>
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