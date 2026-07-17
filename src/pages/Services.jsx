import React, { useEffect } from 'react';
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import NavLink from "../components/NavLink.jsx";
import '../css/Services.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faDisplay, 
    faUserAstronaut, 
    faLaptopCode, 
    faCheck, 
    faArrowsRotate, 
    faSatellite, 
    faCloudArrowUp,
    faCircleCheck,
    faShieldHalved,
    faHandshakeAngle,
    faFileSignature,
    faGlobe 
} from '@fortawesome/free-solid-svg-icons';

function Services() {
    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right, .zoom-animation");

    useEffect(() => {
        document.title = "WebUniv | Découvrez nos prestations";
    }, []);

    return (
        <div className="services-container">
            
            {/* SERVICES BANNER */}
            <div className="services-banner">
                <div className="services-banner-content">
                    
                    {/* LOGO SYSTÈME SOLAIRE DE PRESTATIONS */}
                    <div className="presta-solar-system zoom-animation">
                        <div className="solar-center">
                            <FontAwesomeIcon icon={faGlobe} className="center-planet" />
                        </div>

                        <div className="orbit orbit-internal">
                            <div className="orbit-node node-vitrine" title="Site Vitrine">
                                <FontAwesomeIcon icon={faDisplay} />
                            </div>
                            <div className="orbit-node node-portfolio" title="Portfolio">
                                <FontAwesomeIcon icon={faUserAstronaut} />
                            </div>
                            <div className="orbit-node node-app" title="Application Web">
                                <FontAwesomeIcon icon={faLaptopCode} />
                            </div>
                        </div>

                        <div className="orbit orbit-external">
                            <div className="orbit-node node-refonte" title="Refonte & Modernisation">
                                <FontAwesomeIcon icon={faArrowsRotate} />
                            </div>
                            <div className="orbit-node node-seo" title="SEO & Visibilité">
                                <FontAwesomeIcon icon={faSatellite} />
                            </div>
                            <div className="orbit-node node-hosting" title="Mise en ligne & Domaines">
                                <FontAwesomeIcon icon={faCloudArrowUp} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="services-banner-texts fade-in-up">
                        <h2 className="services-banner-subtitle">Nos prestations</h2>
                        <h1>Explorez les Possibilités de votre Univers Digital</h1>
                        <p>Des solutions web sur-mesure, structurées with rigueur et à votre écoute pour propulser votre activité en ligne.</p>
                    </div>
                    
                </div>
            </div>

            {/* SECTION 1 : LES 3 PILIERS */}
            <div className="services-section pillars-section">
                <div className="services-section-header fade-in-up">
                    <h2>Les Piliers de votre Monde Digital</h2>
                    <p>Trois formules majeures sur-mesure adaptées à la complexité et aux besoins de votre projet web.</p>
                </div>

                <div className="pillars-grid">
                    <article className="pillar-card pillar-vitrine fade-in-up">
                        <div className="pillar-icon-header">
                            <FontAwesomeIcon icon={faDisplay} className="pillar-main-icon" />
                            <span className="pillar-badge">Populaire</span>
                        </div>
                        <h3>Site Vitrine</h3>
                        <p className="pillar-desc">La vitrine numérique idéale pour présenter votre activité, attirer des clients locaux et légitimer votre marque.</p>
                        
                        <div className="pillar-price">
                            <span className="price-label">À partir de</span>
                            <span className="price-value">1 200 €*</span>
                        </div>

                        <ul className="pillar-features">
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Design dynamique, unique & personnalisé</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Optimisé pour tous les écrans (Ordinateurs/Mobiles/Tablettes)</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Intégration de vos contenus (Logos, textes, images...)</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Formulaire de contact sécurisé & liens direct vers vos réseaux sociaux</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Mise en valeur de votre image de marque avec vos propres valeurs</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Optimisation de votre référencement sur le web</li>
                        </ul>
                        <NavLink to="/contact" id="pillar-btn">Lancer mon site vitrine</NavLink>
                    </article>

                    <article className="pillar-card pillar-portfolio fade-in-up">
                        <div className="pillar-icon-header">
                            <FontAwesomeIcon icon={faUserAstronaut} className="pillar-main-icon" />
                        </div>
                        <h3>Portfolio Professionnel</h3>
                        <p className="pillar-desc">Mettez en valeur vos créations, réalisations ou projets artistiques à travers une galerie interactive et moderne.</p>
                        
                        <div className="pillar-price">
                            <span className="price-label">À partir de</span>
                            <span className="price-value">950 €*</span>
                        </div>

                        <ul className="pillar-features">
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Présentation de projets dynamique</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Une galerie à votre image</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Page "À propos" personnalisée</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Optimisation de la vitesse d'affichage</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Possibilité de formulaire de contact & liens direct vers vos réseaux sociaux</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Possibilité d'autonomie d'ajout de nouveaux projets</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Optimisation de votre référencement sur le web</li>
                        </ul>
                        <NavLink to="/contact" id="pillar-btn">Exposer mon savoir-faire</NavLink>
                    </article>

                    <article className="pillar-card pillar-app fade-in-up">
                        <div className="pillar-icon-header">
                            <FontAwesomeIcon icon={faLaptopCode} className="pillar-main-icon" />
                        </div>
                        <h3>Application Web Sur-Mesure</h3>
                        <p className="pillar-desc">Conception et développement de plateformes spécifiques, d'espaces membres ou d'outils métiers pour automatiser vos processus et gérer efficacement vos données.</p>
                        
                        <div className="pillar-price">
                            <span className="price-label">À partir de</span>
                            <span className="price-value">1 400 €*</span>
                        </div>

                        <ul className="pillar-features">
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Développement technique sur-mesure</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Base de données sécurisée & performante</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Système d'authentification des utilisateurs sécurisé</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Intégration d'API tierces (paiements, outils...)</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Architecture robuste et évolutive</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Interfaces intuitives & simples d'utilisation pour une prise en main immédiate</li>
                        </ul>
                        <NavLink to="/contact" id="pillar-btn">Concevoir mon application</NavLink>
                    </article>
                </div>

                <p className="pillars-footnote fade-in-up">
                    * Les tarifs sont fournis à titre indicatif et peuvent varier selon la nature, l'ampleur et les fonctionnalités de votre projet lors de l'établissement du devis final. Chez WebUniv, nous plaçons l'honnêteté et l'écoute au cœur de nos échanges pour vous proposer la solution la plus adaptée et la plus juste pour votre budget.
                </p>
            </div>

            {/* PREMIER SÉPARATEUR COSMIQUE */}
            <div className="cosmic-divider zoom-animation" />

            {/* SECTION 2 : LES SATELLITES (SERVICES SECONDAIRES) */}
            <div className="services-section services-secondary-section">
                <div className="services-section-header fade-in-up">
                    <h2>Modules de Propulsion & Optimisation</h2>
                    <p>Des interventions ciblées et percutantes pour booster, sécuriser ou moderniser votre écosystème web existant.</p>
                </div>

                <div className="services-secondary-grid">
                    <div className="services-secondary-card fade-in-up">
                        <div className="secondary-card-header">
                            <FontAwesomeIcon icon={faArrowsRotate} className="services-secondary-icon" />
                            <h4>Modernisation, Refonte & Maintenance ponctuelle</h4>
                        </div>
                        <p className="secondary-desc">Votre site a besoin d'ajustements ou d'un coup de jeune ? Nous corrigeons vos bugs techniques et adaptons votre outil à vos nouveaux besoins.</p>
                        <ul className="secondary-features">
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon-mini" /> Résolution de bugs & corrections techniques rapides</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon-mini" /> Modifications techniques ou visuelles</li>
                             <li><FontAwesomeIcon icon={faCheck} className="check-icon-mini" /> Ajouts de contenus à la demande</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon-mini" /> Refonte & Modernisation de votre outil existant</li>
                        </ul>
                        <NavLink to="/contact" id="services-secondary-btn">Faire évoluer mon site actuel</NavLink>
                    </div>

                    <div className="services-secondary-card fade-in-up">
                        <div className="secondary-card-header">
                            <FontAwesomeIcon icon={faSatellite} className="services-secondary-icon" />
                            <h4>Optimisation SEO & Visibilité</h4>
                        </div>
                        <p className="secondary-desc">Positionnez durablement votre marque au premier plan sur le web pour capter naturellement un flux régulier de clients ciblés et locaux.</p>
                        <ul className="secondary-features">
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon-mini" /> Ciblage stratégique des mots-clés & Optimisation technique</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon-mini" /> Optimisation du référencement local (Fiche Google My Business)</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon-mini" /> Configuration des outils Google (Analytics & Search Console) pour piloter votre trafic et mesurer votre croissance en temps réel</li>
                        </ul>
                        <NavLink to="/contact" id="services-secondary-btn">Booster ma visibilité</NavLink>
                    </div>

                    <div className="services-secondary-card fade-in-up">

                        <div className="secondary-card-header">
                            <FontAwesomeIcon icon={faCloudArrowUp} className="services-secondary-icon" />
                            <h4>Mise en ligne & Domaines</h4>
                        </div>
                        <p className="secondary-desc">Prise en charge intégrale du déploiement technique et de l'hébergement de votre site. Configurations des serveurs et de vos noms de domaine pour garantir une accessibilité continue et sécurisée.</p>
                        <ul className="secondary-features">
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon-mini" /> Sélection & configuration de l'hébergement adéquat à votre projet</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon-mini" /> Achat, gestion et routage personnalisé de vos noms de domaine</li>
                            <li><FontAwesomeIcon icon={faCheck} className="check-icon-mini" /> Sécurisation totale HTTPS (Certificat SSL) & protocoles de sécurité</li>
                        </ul>
                            

                        <NavLink to="/contact" id="services-secondary-btn">Propulser mon site</NavLink>
                    </div>

                </div>
            </div>

            

        </div>
    );
}

export default Services;