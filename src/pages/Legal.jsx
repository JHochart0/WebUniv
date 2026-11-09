
import React from 'react';

import '../css/Legal.css';
import usePageMetadata from '../hooks/usePageMetaData';

import NavLink from "../components/NavLink.jsx";


// Legal & privacy policy page
function Legal() {
    usePageMetadata(
        "WebUniv | Mentions légales et politique de confidentialité",
        "Consultez les mentions légales et la politique de confidentialité de WebUniv : collecte, utilisation, conservation et protection de vos données personnelles."
    );

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

                    <div className="legal-section-CAPE">
                        <h3>Cadre juridique (Contrat CAPE)</h3>

                        <div className="legal-section-CAPE-text">
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
                </div>
            </div>


            {/* Part 2: Privacy section */}
            <div className="privacy-section">
                <h2>Politique de confidentialité</h2>

                <div className="privacy-section-text">

                    <h3>Collecte et utilisation des données personnelles</h3>

                    <p>
                        Dans le cadre de l'utilisation du site WebUniv, certaines données à caractère personnel peuvent être collectées,
                        notamment lorsque vous utilisez le formulaire de contact.
                        Leur traitement est effectué conformément au règlement (UE) 2016/679 du 27 avril 2016,
                        dit Règlement général sur la protection des données (RGPD), ainsi qu'à la loi
                        n° 78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés.
                    </p>

                    <p>
                        Les informations collectées via le formulaire de contact sont les suivantes :
                    </p>

                    <ul>
                        <li>Nom / Entreprise ;</li>
                        <li>Adresse e-mail ;</li>
                        <li>Sujet du message ;</li>
                        <li>Contenu du message.</li>
                    </ul>

                    <p>
                        Ces informations sont nécessaires pour permettre à WebUniv de prendre connaissance de votre demande,
                        d'y répondre et, le cas échéant, de préparer une proposition commerciale ou un devis adapté à votre projet.
                    </p>

                    <h3>Base légale du traitement</h3>

                    <p>
                        Le traitement de ces données repose, selon la nature de votre demande,
                        sur les mesures précontractuelles prises à votre demande ou sur l'intérêt légitime de WebUniv
                        à assurer la gestion et le suivi des demandes de contact reçues.
                    </p>


                    <h3>Transmission et traitement des données - RG Forms et services Google</h3>

                    <p>
                        Le formulaire de contact utilise <a href="https://rgforms.com/" target="_blank" rel="noopener noreferrer">RG Forms</a>,
                        un outil permettant de configurer un système de réception de formulaires à partir des services Google.
                    </p>

                    <p>
                        Lors de l'envoi du formulaire, les données saisies sont transmises directement depuis votre navigateur
                        vers un point de réception Google Apps Script, déployé dans le compte Google utilisé par WebUniv.
                        Elles sont ensuite enregistrées dans une feuille de calcul Google Sheets, stockée dans un espace
                        Google Drive associé à ce compte. Une notification contenant les informations de votre demande
                        est également envoyée à l'adresse e-mail configurée par WebUniv.
                    </p>

                    <p>
                        Selon la documentation de son éditeur, RG Forms ne dispose pas de serveur intermédiaire
                        recevant ou stockant les soumissions des formulaires. L'outil sert à créer et configurer
                        les ressources Google nécessaires au fonctionnement du formulaire.
                        Les données des visiteurs ne transitent donc pas par une base de données exploitée par RG Forms.
                        Vous pouvez consulter sa{' '}
                        <a href="https://rgforms.com/privacy/" target="_blank" rel="noopener noreferrer">
                            politique de confidentialité
                        </a>.
                    </p>

                    <p>
                        Le traitement technique des soumissions repose ainsi sur les services Google utilisés par WebUniv,
                        notamment Google Apps Script, Google Sheets, Google Drive et le service d'envoi de notifications par e-mail.
                        Les conditions de traitement des données par Google sont consultables dans sa{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                            politique de confidentialité
                        </a>.
                    </p>

                    <h3>Destinataires des données</h3>

                    <p>
                        Les données recueillies sont destinées à WebUniv et sont accessibles à Jovany Hochart
                        dans le cadre du traitement des demandes de contact.
                        Elles sont également traitées techniquement par les services Google nécessaires
                        à leur transmission, leur enregistrement et l'envoi des notifications.
                    </p>

                    <p>
                        Les données personnelles ne sont ni vendues, ni louées, ni utilisées par WebUniv
                        à des fins commerciales pour le compte de tiers.
                    </p>


                    <h3>Durée de conservation</h3>

                    <p>
                        Les données sont conservées pendant le temps nécessaire au traitement de votre demande
                        et au suivi des échanges.
                        Lorsqu'une demande ne donne pas lieu à une relation commerciale,
                        les données relatives au prospect sont conservées pendant une durée maximale de trois ans
                        à compter de leur collecte ou du dernier contact émanant de celui-ci.
                    </p>

                    <p>
                        Lorsqu'une relation commerciale est établie, les informations nécessaires à son suivi
                        sont conservées pendant la durée de cette relation, puis, le cas échéant,
                        archivées conformément aux obligations légales applicables.
                    </p>

                    <h3>Vos droits concernant vos données personnelles</h3>

                    <p>
                        Conformément à la réglementation applicable, vous disposez, selon les conditions prévues par le RGPD,
                        d'un droit d'accès, de rectification, d'effacement et de limitation du traitement de vos données.
                        Vous pouvez également vous opposer à certains traitements et demander la portabilité
                        de vos données lorsque ce droit est applicable.
                    </p>

                    <p>
                        Pour exercer vos droits ou obtenir des renseignements concernant le traitement
                        de vos données personnelles, vous pouvez contacter :
                    </p>

                    <p>
                        <strong>Jovany Hochart - WebUniv</strong>
                        <br />
                        102 rue Neuve, 62100 Calais, France
                        <br />
                        Adresse e-mail : <strong>webuniv.pro@gmail.com</strong>
                    </p>

                    <p>
                        Vous pouvez effectuer votre demande :
                    </p>

                    <ul>
                        <li>
                            soit directement sur le site, via la page de{' '}
                            <NavLink to="/contact" content="Contact" />;
                        </li>

                        <li>
                            soit par courriel : <strong>webuniv.pro@gmail.com</strong> ;
                        </li>

                        <li>
                            soit par courrier postal : <strong>WebUniv - Jovany Hochart,
                            102 rue Neuve, 62100 Calais, France</strong>.
                        </li>
                    </ul>

                    <p>
                        Un justificatif d'identité pourra être demandé uniquement en cas de doute raisonnable
                        sur l'identité du demandeur.
                    </p>

                    <p>
                        Si vous estimez, après avoir contacté WebUniv, que vos droits ne sont pas respectés,
                        vous pouvez adresser une réclamation à la{' '}
                        <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer">
                            Commission nationale de l'informatique et des libertés (CNIL)
                        </a>.
                    </p>

                </div>
            </div>


            {/* Part 3: Hosting, pricing and credits */}
            <div className="hosting-section">
                <h2>Hébergement, Tarification et crédits</h2>

                <div className="hosting-section-text">

                    <h3>Tarification des prestations :</h3>

                    <p>
                        Conformément à la réglementation en vigueur, les tarifs des prestations de services proposées
                        par WebUniv sont fournis à titre indicatif et <strong>sur devis personnalisé</strong>.
                        Le prix de base peut être ajusté selon la complexité du cahier des charges.
                    </p>

                    <h3>Centre serveur et nom de domaine :</h3>

                    <p>
                        Le site et son centre serveur sont hébergés par <strong>Cloudflare Pages</strong> (
                        <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">
                            Cloudflare
                        </a>, Inc.),
                        dont le siège social est situé : <strong>101 Townsend St, San Francisco, CA 94107, États-Unis.</strong>
                    </p>

                    <p>
                        Le nom de domaine <a href="https://www.webuniv.fr">www.webuniv.fr</a> est enregistré et géré par{' '}
                        <a href="https://www.ovhcloud.com/fr/" target="_blank" rel="noopener noreferrer">
                            OVHcloud
                        </a>,
                        dont le siège social est établi : <strong>2 rue Kellermann, 59100 Roubaix, France.</strong>
                    </p>

                    <h3>Conception et développement du site :</h3>

                    <p><strong>WebUniv</strong> - Jovany Hochart</p>

                    <p><strong>Liens de contact :</strong></p>

                    <p>
                        <a href="mailto:webuniv.pro@gmail.com">Envoyer un mail</a> |{' '}
                        <NavLink to="/contact" content="Autre contact" />
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Legal;
