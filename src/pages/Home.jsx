import React, { useEffect } from 'react';
import useRevealOnScroll from "../hooks/useRevealOnScroll";

import NavLink from "../components/NavLink.jsx";
import '../css/Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
    faRocket,
    faPalette,
    faComments,
    faShieldHalved,
    faGem,
    faGlobe,
    faDisplay,
    faUserAstronaut,
    faLaptopCode,
    faCloudArrowUp,
    faArrowsRotate,
    faSatellite
} from '@fortawesome/free-solid-svg-icons';

import logoBright from '../assets/img/WebUniv_logo_simple_bright.png';
import logoNameBright from '../assets/img/WebUniv_logo_name_only_bright.png';

// home page
function Home() {
    useRevealOnScroll(".horizon-rise-animation, .reveal-section-animation");

    // change the title
    useEffect(() => {
        document.title = "WebUniv - Votre Univers Digital";
    }, []);

    return (
        <div className="home-container">
            
            {/* HOME BANNER */}
            <div className="home-banner horizon-rise-animation">
                <div className="home-banner-logo">
                    <img src={logoBright} alt="Logo WebUniv Simple Brillant" className="home-banner-logo-simple" />
                    <img src={logoNameBright} alt="Logo WebUniv Nom Brillant" className="home-banner-logo-name" />
                </div>
                <div className="home-banner-texts">
                    <h1>Votre propre Univers Digital créé sur-mesure</h1>
                    <h2>De la création de votre vitrine numérique à l'application web complexe, WebUniv vous accompagne de bout en bout pour concevoir et structurer votre propre monde digital personnalisé.</h2>
                    <h3>Propulsez votre présence en ligne grâce à notre expertise en conception et développement web !</h3>
                </div>
            </div>

            {/* Call to action contact section */}
            <div className="home-section reveal-section-animation cta-section">
                <div className="cta-box">

                    <div className="cta-icon-wrapper">
                        <div className="bg-orbit-system">
                            <div className="bg-orbit-ring">
                                <div className="home-star-decoration ost-1"></div>
                                <div className="home-star-decoration ost-2"></div>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faGlobe} className="cta-globe-icon" />
                    </div>

                    <h2>Prêt à créer votre Univers Digital ?</h2>
                    <p>Qu'il s'agisse d'un projet immédiat ou d'une vision à explorer, nous vous invitons à planifier une première consultation afin de plannifier la naissance de votre monde digital !</p>
                    <NavLink to="/cta">Prendre rendez-vous</NavLink>
                </div>
            </div>

            {/*Services section */}
            <div className="home-section reveal-section-animation home-services-preview">
                <div className="section-content-wrapper">

                    <div className="bg-orbit-system">
                        <div className="bg-orbit-ring">
                            <div className="home-star-decoration ost-1"></div>
                            <div className="home-star-decoration ost-2"></div>
                        </div>
                    </div>

                    <div className="section-header">
                        <span className="section-subtitle">Nos Services</span>
                        <h2 className="section-title">Des solutions web adaptées à vos ambitions</h2>
                    </div>
                    
                    <div className="home-services-grid">
                        <div className="home-service-card">
                            <FontAwesomeIcon icon={faDisplay} className="home-service-icon" />
                            <h3>Sites Vitrines</h3>
                            <p>Déployez une vitrine numérique percutante pour captiver votre audience et ancrer solidement votre marque dans l'univers du numérique.</p>
                        </div>
                        <div className="home-service-card">
                            <FontAwesomeIcon icon={faUserAstronaut} className="home-service-icon" />
                            <h3>Portfolios Professionnels</h3>
                            <p>Mettez en lumière vos plus belles réalisations à travers un univers visuel unique, interactif et mémorable.</p>
                        </div>
                        <div className="home-service-card">
                            <FontAwesomeIcon icon={faLaptopCode} className="home-service-icon" />
                            <h3>Applications Web Sur-Mesure</h3>
                            <p>Des outils avancés et des interfaces dynamiques développés spécifiquement pour étendre les frontières de votre monde digital.</p>
                        </div>
                        <div className="home-service-card">
                            <FontAwesomeIcon icon={faCloudArrowUp} className="home-service-icon" />
                            <h3>Mise en ligne & Domaines</h3>
                            <p>Mise en ligne protégée de votre monde numérique et attribution de son nom de domaine sur-mesure.</p>
                        </div>
                        <div className="home-service-card">
                            <FontAwesomeIcon icon={faArrowsRotate} className="home-service-icon" />
                            <h3>Modernisation, Refonte & Maintenance ponctuelle</h3>
                            <p>Transformez votre site existant en un univers moderne et performant. Optimisation visuelle complète, passage à la vitesse supérieure et maintenance ponctuelle pour garantir la stabilité de votre plateforme numérique ou corriger les failles.</p>
                        </div>
                        <div className="home-service-card">
                            <FontAwesomeIcon icon={faSatellite} className="home-service-icon" />
                            <h3>Visibilité & Référencement (SEO)</h3>
                            <p>Devenez l'étoile la plus brillante de votre secteur. Nous alignons votre contenu sur les requêtes des utilisateurs pour attirer naturellement la bonne audience dans votre orbite.</p>
                        </div>
                    </div>

                    <div className="section-actions">
                        <NavLink to="/services">Découvrir le catalogue complet</NavLink>
                    </div>
                </div>
            </div>

            {/* Strengths section */}
            <div className="home-section reveal-section-animation strengths-section">
                <div className="section-content-wrapper">

                    <div className="bg-orbit-system">
                        <div className="bg-orbit-ring">
                            <div className="home-star-decoration ost-1"></div>
                            <div className="home-star-decoration ost-2"></div>
                        </div>
                    </div>

                    <div className="section-header">
                        <span className="section-subtitle">Pourquoi choisir WebUniv ?</span>
                        <h2 className="section-title">Une approche centrée sur votre réussite</h2>
                    </div>

                    <div className="strengths-grid">
                        <div className="strength-item">
                            <div className="strength-icon">
                                <FontAwesomeIcon icon={faRocket} />
                            </div>
                            <h3>Accompagnement de A à Z</h3>
                            <p>Vous n'êtes jamais seul. De la simple imagination jusqu'au déploiement final, nous pilotons chaque étape technique pour guider votre projet vers sa réussite.</p>
                        </div>
                        <div className="strength-item">
                            <div className="strength-icon">
                                <FontAwesomeIcon icon={faPalette} />
                            </div>
                            <h3>100% Personnalisé</h3>
                            <p>Aucun modèle préconçu ou impersonnel. Votre Univers Digital est entièrement modélisé selon votre identité et vos exigences uniques.</p>
                        </div>
                        <div className="strength-item">
                            <div className="strength-icon">
                                <FontAwesomeIcon icon={faComments} />
                            </div>
                            <h3>À votre écoute</h3>
                            <p>Une collaboration transparente, réactive et adaptative. Nous co-construisons une architecture web qui s'adapte parfaitement à vos objectifs et à vos ambitions.</p>
                        </div>
                        <div className="strength-item">
                            <div className="strength-icon">
                                <FontAwesomeIcon icon={faShieldHalved} />
                            </div>
                            <h3>Suivi Post-Projet</h3>
                            <p>Le voyage ne s'arrête pas au lancement. Nous assurons une maintenance rigoureuse et un suivi évolutif pendant <strong>un mois gratuitement</strong> à la suite de votre réalisation pour assurer la pérennité de votre projet web.</p>
                        </div>
                        <div className="strength-item">
                            <div className="strength-icon">
                                <FontAwesomeIcon icon={faGem} />
                            </div>
                            <h3>Propriété Intégrale</h3>
                            <p>Aucun abonnement captif. Après la mise en orbite, vous détenez l'entière propriété de votre code et de vos infrastructures numériques.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Geography section */}
            <div className="home-section reveal-section-animation geo-section">
                <div className="geo-content">
                    <div className="geo-text-side">
                        <span className="section-subtitle">Zone d'intervention</span>
                        <h2>Un ancrage local, une portée nationale</h2>
                        <p>Disposés à <strong>Calais</strong>, nous intervenons directement dans l’ensemble de la région des <strong>Hauts-de-France</strong> pour structurer votre architecture numérique lors de réunions de cadrage physiques.</p>
                        <p>Afin d'étendre notre expertise à l'échelle nationale, nous gérons également vos projets intégralement à distance grâce à des méthodes collaboratives éprouvées, garantissant la même rigueur dans le déploiement de votre monde digital.</p>
                    </div>
                    <div className="geo-badge-side">
                        <div className="cosmic-badge">
                            <span className="badge-main">Calais</span>
                            <span className="badge-sub">Hauts-de-France & Distanciel</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;