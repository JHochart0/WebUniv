import React, { useEffect } from 'react';
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import NavLink from "../components/NavLink.jsx";
import '../css/Realisations.css';

function Realisations() {

    // Change the tab title
    useEffect(() => {
        document.title = "WebUniv | Découvrez nos différentes réalisations";
    }, []);
    
    return (
        <div className="realisations-container">
            <div className="realisations-card">
                
                {/* Visual Animated Orbit Core */}
                <div className="realisations-animation">
                    <div className="orbit-ring primary"></div>
                    <div className="orbit-ring secondary"></div>
                    <div className="core-icon">
                        <span className="code-symbol">&lt;/&gt;</span>
                    </div>
                </div>

                {/* Status Badge */}
                <div className="badge-status">
                    <span className="badge-dot"></span>
                    Page en cours de développement
                </div>

                {/* Titles & Texts */}
                <h1>Notre Univers de Projets prend forme !</h1>

                <p className="realisations-subtitle">
                    Nous préparons actuellement la vitrine de nos plus belles créations web et applications sur-mesure. 
                    Revenez très bientôt pour découvrir nos travaux !
                </p>

                {/* Call to Actions */}
                <div className="realisations-actions">
                    <NavLink to="/" content="Retour à l'accueil" id="btn-realisations-primary" />
                    <NavLink to="/contact" content="Un projet en tête ?" id="btn-realisations-secondary" />
                </div>
                
            </div>
        </div>
    );
}

export default Realisations;