import React, { useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import NotFound404 from './NotFound404.jsx';

import '../css/ProjectDetails.css';

import { realisationsData } from '../data/realisationsData.js';

import useRevealOnScroll from "../hooks/useRevealOnScroll";

import NavLink from '../components/NavLink.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faArrowLeft,
    faCheck,
    faExternalLinkAlt,
    faGlobe,
    faBullseye
} from '@fortawesome/free-solid-svg-icons';

function ProjectDetails() {
    useRevealOnScroll(
        ".fade-in-up, .fade-in-side-left, .fade-in-side-right, .zoom-animation"
    );

    const { id } = useParams();
    const navigate = useNavigate();

    const project = realisationsData.find((item) => item.id === id);

    useEffect(() => {
        if (project) {
            document.title = `WebUniv | Découvrez l'Univers Digital de ${project.title}`;
            window.scrollTo(0, 0);
        }
    }, [project]);

    if (!project) {
        return <NotFound404 />;
    }

    return (
        <div className="projet-detail-container">

            {/* Nav button top */}
            <div className="detail-nav">
                <button type="button" onClick={() => navigate('/realisations')} className="btn-project-back">
                    <FontAwesomeIcon icon={faArrowLeft} className="icon-left"/>
                    Retour à toutes les réalisations
                </button>
            </div>

            {/* HERO SECTION */}
            <div className="project-detail-hero">
                {/* MAIN INFOS */}
                <div className="project-detail-hero-content fade-in-side-left">
                    <span className="project-category-badge">{project.category}</span>
                    <h1>{project.title}</h1>
                    <p className="project-detail-subtitle">{project.shortDescription}</p>

                    <div className="detail-tags-list">
                        {project.tags.map((tag, idx) => (
                            <span key={idx} className="tag-pill">{tag}</span>
                        ))}
                    </div>

                    {project.liveUrl && (
                        <div className="project-hero-actions">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-live-link">
                                Visiter le site
                                <FontAwesomeIcon icon={faExternalLinkAlt} className="icon-right"/>
                            </a>
                        </div>
                    )}
                </div>

                {/* SITE PREVIEW */}
                <div className="project-detail-hero-visual zoom-animation">
                    <div className="project-browser">
                        <div className="project-browser-header">
                            <div className="project-browser-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="project-browser-address">
                                {project.liveUrl
                                    ? project.liveUrl
                                        .replace(/^https?:\/\//, '')
                                        .replace(/\/$/, '')
                                    : project.title
                                }
                            </div>
                        </div>

                        <div className="project-browser-image-wrapper">
                            <img src={project.image} alt={`Aperçu du projet ${project.title}`} className="detail-banner-img"/>
                        </div>
                    </div>

                    <span className="project-visual-star star-top">✦</span>
                    <span className="project-visual-star star-bottom">✦</span>
                </div>
            </div>

            {/* PROJECT CONTENT */}
            <div className="project-case-study">
                {/* PRESENTATION */}
                <div className="detail-card-box project-overview-card fade-in-up">
                    <div className="project-section-heading">
                        <span className="project-section-number">01</span>
                        <div>
                            <span className="project-section-label">Le projet</span>
                            <h2>Présentation du projet</h2>
                        </div>
                    </div>
                    <p className="project-main-text">{project.overview}</p>

                </div>

                {/* OBJECTIVES + FEATURES */}
                <div className="project-information-grid">
                    {/* OBJECTIVES */}
                    {project.objectives && (
                        <div className="detail-card-box project-objectives-card fade-in-side-left">
                            <div className="project-card-title">
                                <div className="project-card-icon">
                                    <FontAwesomeIcon icon={faBullseye} />
                                </div>

                                <div>
                                    <span className="project-section-label">Objectifs</span>
                                    <h2>Les besoins du projet</h2>
                                </div>
                            </div>

                            <ul className="project-objectives-list">
                                {project.objectives.map((objective, idx) => (
                                    <li key={idx}>
                                        <span className="objective-number">{String(idx + 1).padStart(2, '0')}</span>
                                        <span className="objective-text">{objective}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* FEATURES */}
                    <div className="detail-card-box project-features-card fade-in-side-right">
                        <div className="project-card-title">
                            <div className="project-card-icon">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>

                            <div>
                                <span className="project-section-label">Fonctionnalités</span>
                                <h2>Points clés de la réalisation</h2>
                            </div>
                        </div>

                        <ul className="detail-features-list">
                            {project.features.map((feature, idx) => (
                                <li key={idx}>
                                    <FontAwesomeIcon icon={faCheck} className="icon-check"/>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* DESIGN PROCESS */}
                {project.process && (
                    <div className="detail-card-box project-process-card fade-in-up">

                        <div className="project-section-heading">
                            <span className="project-section-number">
                                02
                            </span>

                            <div>
                                <span className="project-section-label">Conception</span>
                                <h2>Du besoin à la mise en ligne</h2>
                            </div>
                        </div>

                        <div className="project-process-list">

                            {project.process.map((step, idx) => (
                                <div className="project-process-step" key={idx}>
                                    <div className="process-marker">
                                        <span>
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <div className="process-content">
                                        <p>{step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* RESULT */}
                {project.result && (
                    <div className="project-result-section fade-in-up">

                        <div className="project-result-decoration">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className="project-result-content">
                            <span className="project-section-label">Résultat</span>
                            <h2>Le projet final</h2>
                            <p>{project.result}</p>
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-result-link">
                                    Découvrir le projet en ligne
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="icon-right"/>
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* CTA */}
            <div className="project-detail-cta-section">
                <div className="project-detail-cta-box fade-in-up">
                    <div className="cta-icon-wrapper">
                        <div className="bg-orbit-system">
                            <div className="bg-orbit-ring zoom-animation">
                                <div className="project-detail-star-decoration ost-1"></div>
                                <div className="project-detail-star-decoration ost-2"></div>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faGlobe} className="cta-globe-icon zoom-animation" />
                    </div>

                    <h2>Inspiré par cette réalisation ?</h2>
                    <p>Créons ensemble un Univers Digital moderne, personnalisé et adapté à votre activité. </p>
                    <NavLink to="/contact" id="project-detail-cta-btn">Demander un devis gratuit</NavLink>
                </div>
            </div>

            {/* NAV BTN BOTTOM */}
            <div className="detail-bottom-nav">
                <button type="button" onClick={() => navigate('/realisations')} className="btn-project-back">
                    <FontAwesomeIcon icon={faArrowLeft} className="icon-left"/>
                    Retour à toutes les réalisations
                </button>
            </div>

        </div>
    );
}

export default ProjectDetails;