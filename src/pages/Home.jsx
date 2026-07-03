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
    faSatellite,
    faFileContract,
    faListCheck,
    faSliders,
    faHandshakeAngle
} from '@fortawesome/free-solid-svg-icons';

import logoBright from '../assets/img/WebUniv_logo_simple_bright.webp';
import logoNameBright from '../assets/img/WebUniv_logo_name_only_bright.webp';

// home page
function Home() {
    useRevealOnScroll(".horizon-rise-animation, .reveal-section-animation");

    // change the title
    useEffect(() => {
        document.title = "WebUniv | Votre Univers Digital";
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
                        <h2>De la création de votre site web vitrine à l'application web complexe, WebUniv vous accompagne de bout en bout pour concevoir et structurer votre propre monde digital personnalisé.</h2>
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
                    <p>Contactez-nous pour analyser vos besoins lors d’un premier rendez-vous et concevoir votre <strong>devis gratuit sur-mesure</strong> !</p>
                    <NavLink to="/contact">Prendre rendez-vous</NavLink>
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
                            <p>Création d’une vitrine numérique percutante pour captiver votre audience et ancrer solidement votre marque dans l’univers du numérique.</p>
                        </div>
                        <div className="home-service-card">
                            <FontAwesomeIcon icon={faUserAstronaut} className="home-service-icon" />
                            <h3>Portfolios Professionnels</h3>
                            <p>Mise en lumière de vos plus belles réalisations à travers un univers visuel unique, interactif et mémorable.</p>
                        </div>
                        <div className="home-service-card">
                            <FontAwesomeIcon icon={faLaptopCode} className="home-service-icon" />
                            <h3>Applications Web Sur-Mesure</h3>
                            <p>Des outils avancés et des interfaces dynamiques développés spécifiquement pour étendre les frontières de votre monde digital.</p>
                        </div>
                        <div className="home-service-card">
                            <FontAwesomeIcon icon={faCloudArrowUp} className="home-service-icon" />
                            <h3>Mise en ligne & Domaines</h3>
                            <p>Mise en ligne protégée et sécurisée de votre projet numérique et attribution de son nom de domaine sur-mesure.</p>
                        </div>
                        <div className="home-service-card">
                            <FontAwesomeIcon icon={faArrowsRotate} className="home-service-icon" />
                            <h3>Modernisation, Refonte & Maintenance ponctuelle</h3>
                            <p>Transformez votre site web actuel en un univers moderne et performant. Refonte visuelle, passage à la vitesse supérieure et maintenance ponctuelle pour garantir sa stabilité et corriger les failles.</p>
                        </div>
                        <div className="home-service-card">
                            <FontAwesomeIcon icon={faSatellite} className="home-service-icon" />
                            <h3>Visibilité & Référencement (SEO)</h3>
                            <p>Devenez l’étoile la plus brillante de votre secteur et attirez naturellement la bonne audience dans votre orbite grâce à un contenu aligné sur leurs requêtes.</p>
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
                            <p>Le voyage ne s'arrête pas au lancement. WebyUniv assure un suivi rigoureux pour garantir la pérennité de votre projet web.</p>
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
                        <h2 className="section-title">Un ancrage local, une portée nationale</h2>
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

            {/* PROCESS SECTION */}
            <div className="home-section reveal-section-animation process-section">
                <div className="section-content-wrapper">
                    
                    <div className="bg-orbit-system">
                        <div className="bg-orbit-ring">
                            <div className="home-star-decoration ost-1"></div>
                            <div className="home-star-decoration ost-2"></div>
                        </div>
                    </div>

                    <div className="section-header">
                        <span className="section-subtitle">Notre processus de réalisation</span>
                        <h2 className="section-title">La trajectoire de votre projet étape par étape</h2>
                    </div>

                    <div className="process-grid">
                        <div className="process-card">
                            <div className="process-step-badge">Étape 1</div>
                            <FontAwesomeIcon icon={faComments} className="process-icon" />
                            <h3>Analyse du besoin</h3>
                            <p>Lors d'un premier rendez-vous (physique ou distanciel), nous cadrons vos objectifs pour définir précisément le cahier des charges.</p>
                        </div>

                        <div className="process-card">
                            <div className="process-step-badge">Étape 2</div>
                            <FontAwesomeIcon icon={faFileContract} className="process-icon" />
                            <h3>Signature du devis</h3>
                            <p>Validation de notre proposition sur-mesure. Les fondations juridiques et tarifaires sont posées en toute transparence.</p>
                        </div>

                        <div className="process-card">
                            <div className="process-step-badge">Étape 3</div>
                            <FontAwesomeIcon icon={faPalette} className="process-icon" />
                            <h3>Conception graphique</h3>
                            <p>Création et ajustement de maquettes adaptées pour chaque type d'écran. Nous validons ensemble le visuel et l'organisation des contenus avant le code.</p>
                        </div>

                        <div className="process-card">
                            <div className="process-step-badge">Étape 4</div>
                            <FontAwesomeIcon icon={faLaptopCode} className="process-icon" />
                            <h3>Développement Web</h3>
                            <p>Écriture d'un code propre et performant, structuré sur-mesure pour donner vie aux maquettes validées, en assurant l'expertise technique.</p>
                        </div>

                        <div className="process-card">
                            <div className="process-step-badge">Étape 5</div>
                            <FontAwesomeIcon icon={faListCheck} className="process-icon" />
                            <h3>Référencement (SEO), Tests & Debug</h3>
                            <p>Optimisation des structures techniques pour le référencement naturel et exécution de tests internes rigoureux afin de garantir un écosystème stable, fluide et performant.</p>
                        </div>

                        <div className="process-card">
                            <div className="process-step-badge">Étape 6</div>
                            <FontAwesomeIcon icon={faRocket} className="process-icon" />
                            <h3>Déploiement & Livraison</h3>
                            <p>Mise en ligne sécurisée de votre nouvel écosystème sur son serveur et configuration de votre nom de domaine.</p>
                        </div>
                    </div>

                    {/* Flexible Agile approach & Post-delivery support callout box */}
                    <div className="process-reassurance-banner">
                        <div className="reassurance-block">
                            <h4>
                                <FontAwesomeIcon icon={faSliders} className="reassurance-icon"/>
                                Une méthodologie Agile & Réactive
                            </h4>
                            <p>Tout au long de ce voyage digital, nous restons en écoute active et continue. Notre approche flexible nous permet d'adapter la trajectoire du projet à vos retours et ajustements de façon itérative, assurant un produit fini en parfaite adéquation avec vos besoins réels.</p>
                        </div>
                        <div className="reassurance-block" >
                            <h4>
                                <FontAwesomeIcon icon={faHandshakeAngle} className="reassurance-icon"/>
                                Garantie & Suivi Post-Livraison
                            </h4>
                            <p>La livraison ne rompt pas le contact ! Afin d'assurer la correction d'éventuels bugs résiduels passés entre les mailles du filet, vous bénéficiez d'un suivi de maintenance gratuit post-livraison. Sa durée, flexible selon la complexité technique du projet, sera explicitement stipulée sur votre devis.</p>
                        </div>
                    </div>

                    <div className="section-actions">
                        <NavLink to="/contact">Propulser mon projet web</NavLink>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Home;