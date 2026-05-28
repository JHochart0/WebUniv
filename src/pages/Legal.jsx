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

            {/* Part 1: Legal section and CAPE contract */}
            <div className="legal-section">
                <h2>Mentions légales</h2>
                <div className="legal-section-text">
                    <p><strong>Nom commercial : </strong>WebUniv</p>
                    <p><strong>Représentant légal et Directeur de la publication : </strong>Jovany Hochart</p>
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
                    
                    <p className="CAPE">
                        Bénéficiaire d’un CAPE jusqu’au 4 mai 2027 maximum - Espace des Entrepreneurs - 4 rue des buisses 59800 Lille - Siret 418 541 553 000 32
                    </p>
                </div>
            </div>

            {/* Part 2: privacy section (Texte officiel Incubatest adapté) */}
            <div className="privacy-section">
                <h2>Politique de confidentialité</h2>
                <div className="privacy-section-text">
                    <p>
                        En conformité avec le règlement n°2016/679, dit Règlement général pour la protection des données (RGPD) et la loi
                        n°78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés, les données à caractère
                        personnel recueillies sur le site de l’entreprise font l’objet d’une déclaration auprès du Délégué à la Protection des
                        données (DPO) de l’entreprise. Elles sont exclusivement à usage interne de l’entreprise.
                    </p>
                    <p>
                        Les données personnelles collectées par l’entreprise peuvent l’être pour différentes finalités, selon les pages du site et
                        les formulaires de recueil concernés.
                    </p>
                    <p>
                        Principalement, il s’agit de la gestion des demandes d’information. Les données sont conservées pendant toute la durée
                        de la relation établie, et jusqu’à 3 ans maximum après, selon la nature de la relation concernée.
                    </p>
                    <p>
                        Les données ainsi collectées ne seront ni cédées, ni échangées ou louées. Conformément aux textes susvisés, vous
                        disposez d'un droit d’opposition, d'accès, de rectification, de suppression, de limitation ou de portabilité portant sur les
                        données vous concernant.
                    </p>
                    <p>
                        Ces droits peuvent être exercés en vous adressant à : <strong>Jovany Hochart</strong>, Correspondant Informatique et libertés, WebUniv, 102 rue Neuve, 62100 Calais, France en précisant dans l’objet du courrier « Droit des personnes » et en joignant la copie de votre
                        justificatif d’identité :
                    </p>
                    <ul>
                        {/* Ajustement ici : Intégration du composant NavLink pour rendre l'exercice du droit effectif sur le site */}
                        <li>soit directement sur le site, via la page de <NavLink to="/contact" content="Contact" id=""/></li>
                        <li>soit par courriel : <strong>webuniv.pro@gmail.com</strong></li>
                        <li>soit en écrivant à : <strong>WebUniv - Jovany Hochart, 102 rue Neuve, 62100 Calais, France</strong></li>
                    </ul>
                </div>   
            </div>

            {/* Part 3: Tarification, Host et credits */}
            <div className="hosting-section">
                <h2>Hébergement, Tarification et crédits</h2>
                <div className="hosting-section-text">

                    <h3>Tarification des prestations :</h3>
                    <p>
                        Conformément à la réglementation en vigueur, les tarifs des prestations de services proposées par WebUniv sont fournis à titre indicatif et <strong>sur devis personnalisé</strong>. Le prix de base peut être ajusté selon la complexité du cahier des charges.
                    </p>

                    <h3>Centre serveur et nom de domaine :</h3>
                    <p>
                        Le site et son centre serveur sont hébergés par <strong>GitHub Pages</strong> (<a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>, Inc.), 
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