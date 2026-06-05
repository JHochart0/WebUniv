import React, { useEffect } from 'react';
import '../css/GTC.css';
import NavLink from "../components/NavLink.jsx";

// General Terms and Conditions page (CGV)
function GTC() {

    // Change the tab title
    useEffect(() => {
        document.title = "WebUniv - Conditions générales de prestation de service";
    }, []);
    
    return (
        <div className="GTC-container">
            <h1>Conditions Générales de Prestations de Services</h1>

            {/* Part 1: Contract Framework & Preparation */}
            <div className="gtc-section">
                <h2>Cadre Contractuel & Préparation du Projet</h2>
                <div className="gtc-section-text">
                    <p>
                        Les présentes conditions générales présentent les droits et obligations de <strong>M. Jovany Hochart - WebUniv</strong>, 
                        spécialisé dans le développement web, la conception et la mise en ligne de sites internet et d'applications web, 
                        bénéficiaire d'un Contrat d'Appui au Projet d'Entreprise (CAPE) jusqu'au 4 mai 2027 au sein d'<strong>Espace des Entrepreneurs</strong>, 
                        4 rue des Buisses, 59000 LILLE - SIRET 418 541 553 000 32, ci-après désigne par le terme « Nous » ou « Le Prestataire » d'une part, 
                        et toute personne physique ou morale, agissant dans le cadre d'une activité professionnelle, ci-après désignée par le terme « Le Client » d'autre part.
                    </p>

                    <h3>Article 1 - Objet</h3>
                    <p>
                        Les présentes conditions visent à définir les modalités dans lesquelles Nous accomplirons nos prestations de développement web, 
                        de création de sites internet (vitrines, portfolios, outils sur-mesure) et de maintenance, suite à la demande expresse du Client. 
                        Les présentes conditions générales pourront être complétées, si besoin est, par des conditions particulières, qui dans ce cas seront annexées. 
                        Les présentes conditions générales de vente priment sur toutes conditions générales d'achat du Client.
                    </p>

                    <h3>Article 2 - L'acceptation</h3>
                    <p>
                        Les présentes conditions s'appliquent dès l'acceptation et la signature par le Client du devis, que celui-ci soit gratuit ou payant. 
                        Elles seront mises à disposition du Client au dos du devis ou en annexe jointe.
                    </p>

                    <h3>Article 3 - Nature des prestations, date et lieu de la prestation</h3>
                    <p>
                        Les prestations que Nous fournissons ont pour but de répondre aux besoins de transition digitale, de visibilité en ligne et d'optimisation technique du Client. 
                        Nous assurons entre autres:
                    </p>
                    <ul>
                        <li>La création de sites web vitrines et institutionnels,</li>
                        <li>Le développement d'applications web et d'outils numériques sur-mesure,</li>
                        <li>La réalisation de portfolios et de CV en ligne,</li>
                        <li>La refonte, la modernisation ou l'amélioration de sites existants (sous réserve de compatibilité technique),</li>
                        <li>La mise en ligne et la configuration d'hébergement de projet digital,</li>
                        <li>Des missions de conseil, d'audit technique et de maintenance ponctuelle.</li>
                    </ul>
                    <p>
                        Cette liste n'est pas exhaustive et Nous nous réservons le droit d'ajouter, de supprimer ou de modifier tout service, si Nous le jugeons nécessaire. 
                        Le Client sera informé de ces modifications si elles ont un impact sur son projet.
                    </p>
                    <p>
                        Nous intervenons uniquement suite à une demande du Client. Les prestations peuvent être réalisées à distance ou directement à l'adresse du Client. 
                        La date, le calendrier d'exécution et le lieu des prestations sont convenus au préalable d'un commun accord entre Nous et le Client.
                    </p>

                    <h3>Article 4 - Devis préalable</h3>
                    <p>
                        Pour toute intervention, un devis écrit sera établi. Ce devis précisera les coordonnées du Client, le détail précis des prestations, 
                        les technologies ou outils nécessaires ainsi que le coût total de l'intervention exprimé hors taxes (HT) et toutes taxes comprises (TTC).
                    </p>
                    <p>
                        Le premier devis établi pour un projet est gratuit. En cas de sollicitations répétées sans suite ou de demandes multiples de modifications de devis pour un même projet, 
                        Nous nous réservons le droit de facturer les devis suivants, après information préalable du Client. 
                        Si une modification de la commande doit avoir lieu après la signature du devis, un nouveau devis complémentaire sera édité et Nous ne serons plus tenus des délais initialement convenus.
                    </p>

                    <h3>Article 5 - Acceptation du devis</h3>
                    <p>
                        Suite à sa réalisation, le Client devra, s'il accepte la mise en œuvre de la prestation, renvoyer le devis dûment signé avec la mention manuscrite "Bon pour accord". 
                        Ce devis fixera les modalités, la durée indicative, le matériel ou les ressources requises et le prix de la prestation à réaliser.
                    </p>
                </div>
            </div>

            {/* Part 2: Pricing & Payment Financials */}
            <div className="gtc-section">
                <h2>Tarifs & Conditions Financières</h2>
                <div className="gtc-section-text">
                    <h3>Article 6 - Tarifs applicables et Déplacements</h3>
                    <p>
                        Les tarifs applicables aux prestations de WebUniv seront portés à la connaissance du Client avant toute intervention via le devis préalablement rempli et signé. 
                        Tout devis préalablement établi sera valable pour une durée de 30 jours (un mois). 
                        Les prix s'entendent hors taxes, ils seront majorés du taux de TVA applicable au jour de la commande.
                    </p>
                    <p>
                        Les prestations étant par nature entièrement réalisées à distance depuis les locaux du Prestataire, aucun frais de déplacement n'est facturé pour la réalisation technique du projet. 
                        Les déplacements ponctuels nécessaires aux rendez-vous physiques de cadrage, de présentation ou de suivi de projet (limités à la région Hauts-de-France, notamment autour de Calais) 
                        sont inclus dans le prix total du devis. 
                        Pour tout déplacement exceptionnel demandé par le Client en dehors de cette zone géographique, les modalités et d'éventuels frais de transport seront convenus d'un commun accord et spécifiés à l'avance sur le devis.
                    </p>

                    <h3>Article 7 - Paiement et pénalités de retard</h3>
                    <p>Sauf mention contraire spécifiée sur le devis, les modalités de paiement sont les suivantes:</p>
                    <ul>
                        <li>Un acompte correspondant à 20% du montant global de la prestation est exigé dès la signature du devis,</li>
                        <li>Le solde restant de 80% est exigible à la livraison de la prestation ou à la mise en ligne définitive.</li>
                    </ul>
                    <p>
                        Le règlement s'effectue par virement bancaire ou par chèque à l'ordre exclusif de : <strong>"Espace des entrepreneurs - 01417"</strong>.
                    </p>
                    <p>
                        En cas de retard de paiement et de versement des sommes dues par le Client au-delà du délai fixé, et après la date de paiement figurant sur la facture adressée à celui-ci, 
                        des pénalités de retard calculées au taux de 15,00% par an du montant TTC du prix figureront automatiquement et de plein droit, appliquées sans formalité aucune ni mise en demeure préalable. 
                        Le Prestataire se réserve en outre le droit de suspendre l'exécution des prestations en cours ou l'accès au site internet développé.
                    </p>
                    <p>
                        Conformément aux articles L. 441-10 et D. 441-5 du Code de commerce, tout retard de paiement entraîne de plein droit, outre les pénalités de retard, une obligation pour le débiteur professionnel de payer une indemnité forfaitaire de 40 € pour frais de recouvrement. 
                        Une indemnité complémentaire pourra être réclamée, sur justificatifs, lorsque les frais de recouvrement exposés sont supérieurs au montant de l'indemnité forfaitaire.
                    </p>

                    <h3>Article 8 - Escompte</h3>
                    <p>Aucun escompte ne sera consenti en cas de paiement anticipé.</p>
                </div>
            </div>

            {/* Part 3: Commitments & Liabilities */}
            <div className="gtc-section">
                <h2>Exécution & Responsabilités Mutuelles</h2>
                <div className="gtc-section-text">
                    <h3>Article 9 - Annulation et rétractation</h3>
                    <p>
                        S'agissant de services hautement personnalisés, exécutés et développés en fonction des spécifications techniques et graphiques formulées par le Client professionnel, 
                        aucun droit de rétractation n'est possible à compter de la signature du devis. 
                        L'intégralité du paiement reste due, sans préjudice du droit pour Nous de réclamer l'attribution de dommages et intérêts.
                    </p>

                    <h3>Article 10 - Réclamations et conformité</h3>
                    <p>
                        Les réclamations sur la non-conformité des prestations effectuées par rapport au devis initial doivent être formulées par lettre recommandée avec accusé de réception (LRAR) 
                        dans les 8 jours suivant la livraison de la prestation (recette du site ou de l'application). 
                        Passé ce délai, la prestation est réputée acceptée sans réserve et aucune réclamation ne sera acceptée.
                    </p>

                    <h3>Article 11 - Limites d'intervention</h3>
                    <p>Nous nous réservons le droit de refuser et/ou de cesser immédiatement l'exécution de toute prestation convenue si:</p>
                    <ul>
                        <li>Nous jugeons que les conditions de travail ou l'infrastructure technique fournie risquent de mettre en danger notre sécurité ou celle d'autrui,</li>
                        <li>La demande du Client, les contenus transmis ou les logiciels employés ne sont pas légaux ou conformes à la législation en vigueur (ex : utilisation de scripts piratés, de contenus contrefaits, absence de licences valides).</li>
                    </ul>
                    <p>
                        Dans le cas d'un tel refus d'intervention ou d'une cessation de la prestation de Notre part pour ces motifs, aucun dommage et intérêt ne pourra être réclamé par le Client. 
                        Seules les sommes correspondant aux tâches déjà exécutées seront dues.
                    </p>

                    <h3>Article 12 - Obligations du Client et collaboration</h3>
                    <p>
                        Le Client s'engage à mettre à disposition du Prestataire tous les moyens, accès serveurs, codes et documentations nécessaires pour la réalisation des prestations dans le délai convenu. 
                        Le Client s'engage notamment à fournir les contenus textuels, logos et images définitifs dans les délais fixés d'un commun accord. 
                        Tout retard dans la transmission de ces éléments de la part du Client décalera d'autant le calendrier de livraison finale, sans que la responsabilité du Prestataire ne puisse être recherchée.
                    </p>
                    <p>
                        Le Client est également tenu de s'assurer de la sécurité de ses propres équipements informatiques et s'engage à maintenir des protections et antivirus à jour pour éviter toute transmission de fichiers corrompus.
                    </p>

                    <h3>Article 13 - Réserve de propriété</h3>
                    <p>
                        Le Prestataire se réserve la propriété exclusive des travaux, codes sources, bases de données et livrables vendus jusqu'au paiement intégral de leur prix en principal et en intérêts. 
                        À défaut de paiement du prix à l'échéance convenue, la vente sera résolue de plein droit si bon semble au Prestataire, et les acomptes déjà versés nous resteront acquis à titre d'indemnité.
                    </p>
                    <p>
                        Si l'acheteur fait l'objet d'un redressement ou d'une liquidation judiciaire, Nous nous réservons le droit de revendiquer les éléments impayés dans le cadre de la procédure collective.
                    </p>

                    <h3>Article 14 - Force majeure</h3>
                    <p>
                        La survenance d'un cas de force majeure a pour effet de suspendre l'exécution des obligations contractuelles. 
                        Est un cas de force majeure tout événement indépendant de notre volonté et faisant obstacle au fonctionnement normal du développement ou du déploiement des travaux 
                        (pannes généralisées de réseaux électriques ou de télécommunications majeures, cyberattaques d'ampleur systémique, blocages des voies de transport) . 
                        Dans de telles circonstances, Nous préviendrons le Client par écrit dans les 24 heures. 
                        Si l'événement venait à durer plus de 30 jours, le contrat pourrait être résilié par la partie la plus diligente par lettre recommandée avec accusé de réception, sans qu'aucune indemnité ne soit due.
                    </p>

                    <h3>Article 15 - Incapacité de travail</h3>
                    <p>
                        En cas d'incapacité de travail par suite de maladie ou d'accident, M. Jovany Hochart se réserve le droit de modifier le calendrier de livraison en cours sans qu'il ne puisse être exigé par le Client le versement d'indemnités. 
                        Le Prestataire s'engage à avertir le Client dès le premier jour ouvrable de son incapacité.
                    </p>

                    <h3>Article 16 - Responsabilité</h3>
                    <p>
                        Les prestations que Nous réalisons ne sont soumises qu'à une obligation de moyens et non à une obligation de résultat. 
                        Le Client utilise les outils, sites internet, codes, conseils ou services développés sous sa seule et unique responsabilité. 
                        Le Client renonce à rechercher notre responsabilité en cas de dommages survenus aux fichiers, bases de données ou documents qu'il nous aurait confiés (il lui appartient d'effectuer des sauvegardes préalables).
                    </p>
                    <p>
                        Le Prestataire n'encourra aucune responsabilité à raison de toute perte de bénéfices, perte de chiffre d'affaires, trouble commercial, ou de réclamations formulées contre le Client par un tiers (ex : panne d'hébergeur externe, attaque de piratage extérieure). 
                        En tout état de cause, si notre responsabilité devait être retenue, l'indemnisation serait strictement limitée à un montant n'excédant pas la somme totale effectivement payée par le Client pour le service ou la tâche concernée.
                    </p>
                </div>
            </div>

            {/* Part 4: Legalities, Privacy & Disputes */}
            <div className="gtc-section">
                <h2>Réglementations & Litiges</h2>
                <div className="gtc-section-text">
                    <h3>Article 17 - Confidentialité et Données Personnelles (RGPD)</h3>
                    <p>
                        Les parties s'engagent réciproquement à une obligation générale de confidentialité portant sur toute information orale ou écrite échangée dans le cadre de la prestation, pendant toute sa durée et après son échéance.
                    </p>
                    <p>
                        En conformité avec le Règlement Général sur la Protection des Données (RGPD) et la loi n°78-17 du 6 janvier 1978 modifiée, les données à caractère personnel recueillies sur le Client font l'objet d'un traitement informatique et sont exclusivement destinées à l'usage interne de WebUniv pour la gestion des projets et de la facturation. 
                        Elles sont conservées pendant toute la durée de la relation contractuelle et jusqu'à 3 ans après son terme. Elles ne seront ni cédées, ni louées à des tiers. 
                        Le Client dispose d'un droit d'accès, de rectification, de suppression ou de limitation qu'il peut exercer en écrivant à <strong>webuniv.pro@gmail.com</strong> ou par courrier à l'adresse de l'entrepreneur. 
                        Le Client peut également introduire une réclamation auprès de la CNIL (cnil.fr).
                    </p>

                    <h3>Article 18 - Propriété intellectuelle et Droits d'auteur</h3>
                    <p>
                        Le Client garantit que l'ensemble des éléments transmis (images, textes, logos, maquettes) pour la réalisation du site ne constitue pas une contrefaçon et qu'il en détient les droits d'exploitation.
                    </p>
                    <p>
                        En tant qu'auteur du code informatique personnalisé et des créations graphiques originales, le Prestataire bénéficie de la législation sur les droits d'auteur. 
                        L'exploitation, la reproduction ou la modification du code source par le Client ou un tiers en dehors du cadre strict du site livré nécessite notre accord exprès écrit. 
                        La cession des droits d'exploitation sur le site internet finalisé au profit du Client n'intervient qu'au jour du paiement intégral et effectif du solde de la facture, 96.
                    </p>

                    <h3>Article 19 - Référencement</h3>
                    <p>
                        Le Client accepte que WebUniv puisse faire figurer parmi ses références professionnelles le nom du Client, son logo ainsi que les captures d'écran des travaux accomplis dans le cadre du présent contrat, sauf refus explicite notifié par écrit.
                    </p>

                    <h3>Article 20 - Compétence et droit applicable</h3>
                    <p>
                        Les présentes conditions sont soumises à la loi française0. Pour toutes les contestations ou litiges relatifs aux prestations et contrats de WebUniv entre professionnels, 
                        et à défaut d'accord amiable préalable, seul sera compétent le <strong>Tribunal de Commerce de Lille</strong>, nonobstant pluralité de défendeurs ou appel en garantie0.
                    </p>
                    <p className="gtc-consumer-note">
                        <strong>Note pour les cas d'exceptions de clients consommateurs (le cas échéant) :</strong> Conformément à l'article L. 612-1 du Code de la consommation, le consommateur a la faculté d'introduire une demande de résolution amiable par voie de médiation1. 
                        Le prestataire a désigné la <strong>SAS Médiation Solution</strong> comme entité de médiation (adhésion n° 70293/RV/2306)2. Saisine par écrit à : SAS Médiation Solution - 222 chemin de la bergerie - 01800 Saint Jean de Niost, ou en ligne sur leur site internet dédié3.
                    </p>
                </div>
            </div>

            <div className="gtc-link">
                <p>Besoin d'éclaircissements ? <NavLink to="/contact" content="Contactez WebUniv" id=""/></p>
            </div>
        </div>
    );
}

export default GTC;