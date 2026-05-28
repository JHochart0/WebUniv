import React, { useEffect } from 'react';

import '../css/Legal.css';

import NavLink from "../components/NavLink.jsx";

// Page des mentions légales et politique de confidentialité - WebUniv
function Legal() {
    // Changement du titre de la page au montage du composant
    useEffect(() => {
        document.title = "WebUniv - Mentions légales et politique de confidentialité";
    }, []);

    return (
        <div className="legal-container">
            <h1>Mentions légales et politique de confidentialité</h1>

            {/* Part 1: Mentions légales et statut CAPE */}
            <div className="legal-section">
                <h2>Mentions légales</h2>
                <div className="legal-section-text">
                    <p><strong>Nom commercial : </strong>WebUniv</p>
                    <p><strong>Dirigeant : </strong>Jovany Hochart</p>
                    <p><strong>Adresse : </strong>102 rue Neuve, 62100 Calais, France</p>
                    <p><strong>Numéro de téléphone : </strong>06 65 15 04 70</p> 
                    <p><strong>Adresse électronique : </strong>webuniv.pro@gmail.com</p>
                    <h3>Cadre juridique (Contrat CAPE)</h3>
                    <p>
                        L'activité commerciale de l'éditeur est couvée et encadrée juridiquement par un Contrat d'Appui au Projet d'Entreprise (CAPE)
                         auprès de l'<strong>Incubatest par BGE Hauts-de-France</strong>.
                    </p>
                    <p><strong>Structure accompagnatrice : </strong>Espace des Entrepreneurs</p>
                    <p><strong>Adresse du siège social : </strong>4 rue des buisses, 59800 Lille</p>
                    <p><strong>SIRET (Espace des Entrepreneurs) : </strong>418 541 553 000 32</p>
                    <p><strong>Numéro de TVA Intracommunautaire : </strong>FR 23 418 541 553</p>
                    <p><strong>Code NAF (APE) : </strong>8899B</p>
                    
                    {/* Mention obligatoire stricte en Arial demandée par l'incubateur */}
                    <p className="CAPE">
                        Bénéficiaire d’un CAPE <strong>jusqu’au 4 mai 2027 maximum</strong> - Espace des Entrepreneurs - 4 rue des buisses 59800 Lille - Siret 418 541 553 000 32
                    </p>
                </div>
            </div>

            {/* Part 2: Politique de confidentialité */}
            <div className="privacy-section">
                <h2>Politique de confidentialité</h2>
                <div className="privacy-section-text">
                    <p>
                        Chez <strong>WebUniv</strong>, la protection de vos données personnelles est une priorité absolue.
                    </p>

                    <h3>1. Données collectées</h3>
                    <ul>
                        <li>Nom complet</li>
                        <li>Adresse e-mail</li>
                        <li>Numéro de téléphone</li>
                        <li>Informations du message de contact</li>
                    </ul>

                    <h3>2. Finalités</h3>
                    <p>
                        Les informations transmises via le formulaire de contact sont utilisées uniquement 
                        dans le cadre interne de l'entreprise pour répondre à votre demande d'information, échanger sur votre projet et vous recontacter.
                    </p>

                    <h3>3. Transmission & sécurité</h3>
                    <p>
                        Le formulaire est géré par <a href="https://formsubmit.co/" target="_blank" rel="noopener noreferrer">Formsubmit.co</a>, qui envoie vos données directement par e-mail de manière sécurisée. 
                        Ce service utilise <a href="https://developers.google.com/recaptcha?hl=fr" target="_blank" rel="noopener noreferrer">Google reCAPTCHA</a> afin de protéger le site contre les spams et abus.
                        La <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">politique de confidentialité</a> ainsi que les <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">conditions de service</a> de Google s'appliquent donc également.
                    </p>

                    <h3>4. Conservation</h3>
                    <p>
                        Les données ne sont pas stockées sur la base de données de ce site : elles sont uniquement transmises 
                        par e-mail et sont conservées pendant toute la durée de la relation commerciale établie, et jusqu’à 3 ans maximum après la fin de celle-ci.
                    </p>

                    <h3>5. Partage</h3>
                    <p>
                        Vos données ne seront jamais cédées, échangées, vendues ou louées à des tiers, ni utilisées à des fins publicitaires.
                    </p>

                    <h3>6. Vos droits</h3>
                    <p>
                        Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, d’effacement, 
                        de limitation et d’opposition sur vos données. Pour exercer vos droits, vous pouvez contacter **Jovany Hochart** (Correspondant Informatique et libertés) via la page <NavLink to="/contact" content="Contact" id=""/>.
                    </p>
                </div>   
            </div>

            {/* Part 3: Tarification, Hébergement et crédits */}
            <div className="hosting-section">
                <h2>Hébergement, Tarification et crédits</h2>
                <div className="hosting-section-text">

                    <h3>Tarification des prestations :</h3>
                    <p>
                        Conformément à la réglementation en vigueur, les tarifs des prestations de services proposées par WebUniv sont fournis à titre indicatif et <strong>sur devis personnalisé</strong>. Le prix de base peut être ajusté selon la complexité du cahier des charges.
                    </p>

                    <h3>Hébergement du site :</h3>
                    <p>
                        Le site est hébergé par <strong>GitHub Pages</strong> (<a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>, Inc.), 
                        dont le siège social est établi : <strong>88 Colin P. Kelly Jr Street, San Francisco, CA 94107, États-Unis.</strong>
                    </p>

                    <p>
                        Le nom de domaine <a href="https://www.webuniv.fr">www.webuniv.fr</a> est enregistré et géré par <a href="https://www.ovhcloud.com/fr/" target="_blank" rel="noopener noreferrer">OVHcloud</a>, dont le siège social est établi : <strong>2 rue Kellermann, 59100 Roubaix, France.</strong>
                    </p>

                    <h3>Conception et développement du site :</h3>
                    <p><strong>WebUniv</strong> - Jovany Hochart</p>
                    <p><strong>Liens de contact :</strong></p>
                    <p>
                        <a href="mailto:webuniv.pro@gmail.com">Envoyer un mail</a> | <NavLink to="/contact" content="Autre contact" id=""/>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Legal;