import React, { useEffect } from 'react';
import { realisationsData } from '../data/realisationsData.js';
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import NavLink from "../components/NavLink.jsx";
import '../css/Realisations.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faDisplay,
    faGlobe 

} from '@fortawesome/free-solid-svg-icons';


function Realisations() {
    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right, .zoom-animation");

    useEffect(() => {
        document.title = "WebUniv | Découvrez nos différentes réalisations";
    }, []);

    return (
        <div className="realisations-container">
            <div className="realisations-banner">

                {/* REALISATIONS BANNER */}
                <div className="realisations-banner-content">

                    {/* Animation propre à Réalisations */}
                    <div className="realisations-animation zoom-animation">

                        {/* Halo sombre derrière le système */}
                        <div className="realisations-system-glow"></div>

                        {/* Aperçu projet gauche */}
                        <div className="realisation-preview realisation-preview-left">
                            <div className="realisation-preview-top">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="realisation-preview-body">
                                <div className="realisation-preview-visual">
                                    <FontAwesomeIcon icon={faDisplay} />
                                </div>

                                <div className="realisation-preview-text">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>

                        {/* Aperçu projet droit */}
                        <div className="realisation-preview realisation-preview-right">
                            <div className="realisation-preview-top">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="realisation-preview-body">
                                <div className="realisation-preview-visual">
                                    <FontAwesomeIcon icon={faDisplay} />
                                </div>

                                <div className="realisation-preview-text">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>

                        {/* Aperçu projet inférieur */}
                        <div className="realisation-preview realisation-preview-bottom">
                            <div className="realisation-preview-top">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="realisation-preview-body">
                                <div className="realisation-preview-visual">
                                    <FontAwesomeIcon icon={faDisplay} />
                                </div>

                                <div className="realisation-preview-text">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>

                        {/* Étoiles */}
                        <span className="realisation-spark realisation-spark-left">✦</span>
                        <span className="realisation-spark realisation-spark-right">✦</span>

                        {/* Orbites */}
                        <div className="orbit-ring primary"></div>
                        <div className="orbit-ring secondary"></div>

                        {/* Cœur développement */}
                        <div className="core-icon">
                            <span className="code-symbol">&lt;/&gt;</span>
                        </div>

                    </div>

                    {/* Titres et présentation */}
                    <div className="realisations-banner-texts fade-in-up">
                        <h2 className="realisations-banner-subtitle">Nos réalisations</h2>
                        <h1>Découvrez notre vitrine des Réalisations</h1>
                        <p>
                            Plongez au cœur des Univers Digitaux créés sur-mesure et des différents projets façonnés avec un accompagnement complet et personnalisé pour nos clients.
                        </p>
                    </div>

                </div>

            </div>

            {/* MAIN CONTENT : GRILLE DES PROJETS */}
            <main className="realisations-section">
                <div className="realisations-grid">

                    {realisationsData.map((project) => (
                        <NavLink
                            to={`/realisations/${project.id}`}
                            id="realisation-card-link"
                            key={project.id}
                        >
                            <article className="project-card fade-in-up">

                                <div className="card-image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="card-image"
                                    />
                                </div>

                                <div className="card-content">
                                    <span className="card-category">{project.category}</span>
                                    <h2>{project.title}</h2>
                                    <p className="card-description">{project.shortDescription}</p>

                                    <div className="card-tags">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </article>
                        </NavLink>
                    ))}

                </div>
            </main>

            {/* CTA */}
            <div className="realisations-cta-section">
                <div className="realisations-cta-box fade-in-up">
                    <div className="cta-icon-wrapper">
                        <div className="bg-orbit-system">
                            <div className="bg-orbit-ring zoom-animation">
                                <div className="realisations-star-decoration ost-1"></div>
                                <div className="realisations-star-decoration ost-2"></div>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faGlobe} className="cta-globe-icon zoom-animation" />
                    </div>
                    <h2>Un projet web en tête ?</h2>
                    <p>Discutons-en lors d'un premier échange gratuit pour définir la meilleure trajectoire pour votre projet.</p>
                    <NavLink to="/contact" id="realisations-cta-btn">Prendre rendez-vous</NavLink>
                </div>
            </div>

        </div>
    );
}

export default Realisations;