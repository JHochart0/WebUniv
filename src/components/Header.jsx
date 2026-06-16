import React, { useState, useEffect, useRef } from 'react';
import '../css/Header.css';
import Navbar from './Navbar';
import Logo from './Logo';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // Gère la visibilité du header
    
    const headerRef = useRef(null);
    const lastScrollY = useRef(0); // Stocke la dernière position du scroll sans déclencher de re-render

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Effet pour bloquer le scroll quand le menu mobile est ouvert
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    // Effet pour masquer/afficher le header au scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Si le menu mobile est ouvert, on ne cache pas le header
            if (isMenuOpen) return;

            // Si on scrolle vers le bas de plus de 10px (petite tolérance)
            if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
                setIsVisible(false); // Cache le header
            } else {
                setIsVisible(true); // Montre le header (scroll vers le haut)
            }

            // Met à jour la position du dernier scroll
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);

    // Effet pour fermer le menu si on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && headerRef.current && !headerRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('click', handleClickOutside);
        
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        /* Ajout dynamique de la classe 'header-hidden' si isVisible est faux */
        <header className={`header-container ${!isVisible ? 'header-hidden' : ''}`} ref={headerRef}>
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