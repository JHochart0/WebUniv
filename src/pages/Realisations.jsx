import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { realisationsData } from '../data/realisationsData.js';
import NavLink from "../components/NavLink.jsx";
import '../css/Realisations.css';

function Realisations() {

    useEffect(() => {
        document.title = "WebUniv | Découvrez nos différentes réalisations";
    }, []);
    
    return (
        <div className="realisations-container">
            
            {/* Header / Hero section */}
            <header className="realisations-hero">
                <div className="realisations-animation">
                    <div className="orbit-ring primary"></div>
                    <div className="orbit-ring secondary"></div>
                    <div className="core-icon">
                        <span className="code-symbol">&lt;/&gt;</span>
                    </div>
                </div>

                <h1>Notre Univers de <span className="highlight-text">Projets</span></h1>

                <p className="realisations-subtitle">
                    Découvrez nos créations web sur-mesure et nos études de cas. 
                    Chaque projet reflète notre engagement en matière de performance, de design et de visibilité.
                </p>
            </header>

            {/* Grille des cartes projets */}
            <main className="realisations-grid">
                {realisationsData.map((project) => (
                    <NavLink to={`/realisations/${project.id}`} id="realisation-card-link" key={project.id}>
                        <article key={project.id} className="project-card">
                            <div className="card-image-wrapper">
                                <span className="card-badge">{project.badge}</span>
                                <img src={project.image} alt={project.title} className="card-image" />
                            </div>

                            <div className="card-content">
                                <span className="card-category">{project.category}</span>
                                <h2>{project.title}</h2>
                                <p className="card-description">{project.shortDescription}</p>

                                <div className="card-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="tag">{tag}</span>
                                    ))}
                                </div>

                            </div>
                        </article>
                    </NavLink>
                ))}
            </main>

            {/* Section CTA bas de page */}
            <section className="realisations-cta-box">
                <h2>Un projet en tête ?</h2>
                <p>Donnons vie ensemble à votre future plateforme sur-mesure.</p>
                <NavLink to="/contact" content="Discuter de mon projet" id="btn-realisations-secondary" />
            </section>

        </div>
    );
}

export default Realisations;