import React from 'react'

import NavLink from './NavLink';

function Footer() {
  return (
    <footer className="footer-container">
        <div className="footer-bottom">
            <p className="footer-copyright">© {new Date().getFullYear()} Tous droits réservés | WebUniv</p>
            <NavLink to="/legal" content="Mentions légales et politique de confidentialité" id="footer-legalLink" />
        </div>
    </footer>
  )
}

export default Footer;
