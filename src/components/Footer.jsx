import React from 'react';
import NavLink from './NavLink';
import Logo from './Logo';
import PhoneButton from './PhoneButton';
import Schedules from './Schedules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// Import de l'étoile classique gratuite
import { faStar } from '@fortawesome/free-solid-svg-icons'; 

import '../css/Footer.css';

function Footer() {
  const googleReviewsUrl = "https://www.google.com/search?q=WebUniv+Reviews&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOfb6gVld59oFq2ZXV3iPlm2BFAQ0w-VJekKL2clXU-Ob1yeyd4ESJnAhcpqrTISOXdwmktchw61phh-a7b-1NkFsIyCw";

  return (
    <footer className="footer-container">
        <div className="footer-top">
            
            {/* Reviews section */}
            <div className="footer-reviews">
                <h3 className="footer-reviews-title">Avis Clients</h3>
                
                <div className="footer-stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>

                <a 
                    href={googleReviewsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="footer-reviews-btn"
                >
                    Voir les avis
                </a>
            </div>

            {/* Brand section*/}
            <div className="footer-brand">
                <Logo />
                <PhoneButton className="footer-phone-btn" />
                
                <div className="footer-socials">
                    <a href="https://www.facebook.com/WebUniv.Dev/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/webuniv_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/company/webuniv/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>

            {/* Schedules section */}
            <Schedules className="footer" />

        </div>

        {/*legal part of the footer*/}
        <div className="footer-bottom">
            <p className="footer-copyright">© {new Date().getFullYear()} Tous droits réservés | WebUniv</p>
            <NavLink to="/legal" content="Mentions légales et politique de confidentialité" id="footer-legalLink" />
        </div>
    </footer>
  );
}

export default Footer;