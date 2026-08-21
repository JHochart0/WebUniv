import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { realisationsData } from '../data/realisationsData.js';
import NavLink from '../components/NavLink.jsx';
import '../css/ProjectDetails.css';

function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Recherche du projet selon l'ID
    const project = realisationsData.find((item) => item.id === id);

    useEffect(() => {
        if (project) {
            document.title = `WebUniv | ${project.title}`;
            window.scrollTo(0, 0);
        }
    }, [project]);

    // Écran de secours si projet inexistant
    if (!project) {
        return (
            <div className="projet-detail-container">
                <div className="detail-card-box not-found">
                    <h2>Projet introuvable</h2>
                    <p>Le projet demandé n'existe pas ou a été déplacé.</p>
                    <Link to="/realisations" className="btn-back">
                        &larr; Retour aux réalisations
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="projet-detail-container">
            
            {/* Bouton Retour */}
            <div className="detail-nav">
                <button onClick={() => navigate('/realisations')} className="btn-back-action">
                    &#8592; Retour à toutes les réalisations
                </button>
            </div>

            {/* Header du projet */}
            <header className="detail-header-card">
                <span className="badge-badge">{project.category}</span>
                <h1>{project.title}</h1>
                <p className="detail-subtitle">{project.shortDescription}</p>

                <div className="detail-tags-list">
                    {project.tags.map((tag, idx) => (
                        <span key={idx} className="tag-pill">{tag}</span>
                    ))}
                </div>
            </header>

            {/* Image d'aperçu */}
            <div className="detail-banner-wrapper">
                <img src={project.image} alt={project.title} className="detail-banner-img" />
            </div>

            {/* Sections d'explication */}
            <section className="detail-info-grid">
                
                <div className="detail-card-box full-width">
                    <h3>Présentation du projet</h3>
                    <p>{project.overview}</p>
                </div>

                <div className="detail-card-box full-width">
                    <h3>Points clés de la réalisation</h3>
                    <ul className="detail-features-list">
                        {project.features.map((feature, idx) => (
                            <li key={idx}>✓ {feature}</li>
                        ))}
                    </ul>
                </div>

            </section>

            {/* Bouton vers le site réel */}
            {project.liveUrl && (
                <div className="detail-live-wrapper">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-live-link">
                        Visiter le site en ligne &#8599;
                    </a>
                </div>
            )}

            {/* CTA Bas de page */}
            <section className="detail-cta-box">
                <h2>Inspiré par ce projet ?</h2>
                <p>Créons ensemble une solution moderne et efficace adaptée à votre activité.</p>
                <NavLink to="/contact" content="Demander un devis gratuit" id="btn-realisations-secondary" />
            </section>

        </div>
    );
}

export default ProjectDetails;