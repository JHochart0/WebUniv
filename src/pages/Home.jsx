import React, { useEffect } from 'react';

import useRevealOnScroll from "../hooks/useRevealOnScroll";

import '../css/Home.css';

import logoBright from '../assets/img/WebUniv_logo_simple_bright.png';
import logoNameBright from '../assets/img/WebUniv_logo_name_only_bright.png';



function Home() {
    useRevealOnScroll(".horizon-rise");

    // Change the tab title
    useEffect(() => {
        document.title = "WebUniv - Votre Univers Digital";
    }, []);

    return (
        <div className="home-container">
            <div className="home-banner horizon-rise">
                <div className="home-banner-logo">
                    <img src={logoBright} alt="Logo WebUniv Simple Brillant" className="home-banner-logo-simple"></img>
                     <img src={logoNameBright} alt="Logo WebUniv Nom Brillant" className="home-banner-logo-name"></img>
                </div>
                <div className="home-banner-texts">
                    <h1>Votre propre Univers Digital créé sur-mesure</h1>
                    <h2>De la création de sites vitrines à l'application web, WebUniv vous accompagne du début à la fin d'un projet pour élaborer votre propre monde digital personnalisé.</h2>
                    <h3>Propulsez votre présence en ligne grâce à notre expertise en conceptualisation et développement web.</h3>
                </div>
            </div>
            <p>Accueil / Work In Progress...</p>
        </div>
    )
}

export default Home;
