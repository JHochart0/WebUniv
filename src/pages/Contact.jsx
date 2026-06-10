import React, { useEffect, useState } from 'react';
import '../css/Contact.css';
import Schedules from '../components/Schedules';

// Importations FontAwesome identiques au Footer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    useEffect(() => {
        document.title = "WebUniv - Contactez-nous !";
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState({ loading: false, success: null });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null });

        // Envoi AJAX à FormSubmit pour éviter toute redirection externe
        fetch("https://formsubmit.co/ajax/webuniv.pro@gmail.com", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                ...formData,
                _subject: `🌌 Nouveau message WebUniv : ${formData.subject}`
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success === "true") {
                setStatus({ loading: false, success: true });
                setFormData({ name: '', email: '', subject: '', message: '' }); // Reset
            } else {
                setStatus({ loading: false, success: false });
            }
        })
        .catch(() => {
            setStatus({ loading: false, success: false });
        });
    };

    return (
        <div className="contact-container">
            <div className="contact-wrap">
                {/* Partie textuelle et informations */}
                <div className="contact-info-section">
                    <h1 className="contact-main-title">Un projet en vue ?</h1>
                    <h2 className="contact-subtitle">Mettons le cap sur votre Univers !</h2>
                    <p className="contact-text">
                        Besoin d'un site vitrine, d'un portfolio ou d'un outil web sur-mesure ? 
                        Remplissez le formulaire de contact ou utilisez les canaux directs ci-dessous pour lancer la discussion avec votre développeur web.
                    </p>

                    {/* Liens directs transformés en boutons arrondis style "Footer" */}
                    <div className="contact-direct-links">
                        <a href="tel:+33665150470" className="contact-direct-btn phone-btn">
                            <FontAwesomeIcon icon={faPhone} className="contact-btn-icon" /> +33 6 65 15 04 70
                        </a>
                        <a href="mailto:webuniv.pro@gmail.com" className="contact-direct-btn email-btn">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-btn-icon" /> webuniv.pro@gmail.com
                        </a>
                    </div>

                    <Schedules className="contact" />

                    {/* Section Réseaux Sociaux identique au style du Footer */}
                    <div className="contact-social-section">
                        <h3 className="contact-social-title">Rejoignez nos réseaux sociaux</h3>
                        <div className="contact-socials">
                            <a href="https://www.facebook.com/WebUniv.Dev/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.instagram.com/webuniv_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/company/webuniv/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Partie Formulaire de contact */}
                <div className="contact-form-section">
                    <form onSubmit={handleSubmit} className="contact-form-element">
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="contact-form-group">
                            <label htmlFor="name">Nom / Entreprise*</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder="Ex: Jean Dupont"
                                required 
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="email">Adresse E-mail*</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="Ex: jean.dupont@gmail.com"
                                required 
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="subject">Sujet du message*</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                value={formData.subject} 
                                onChange={handleChange} 
                                placeholder="Ex: Création de site internet"
                                required 
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="message">Votre Message*</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                value={formData.message} 
                                onChange={handleChange} 
                                placeholder="Décrivez brièvement vos besoins, vos idées..."
                                required
                            ></textarea>
                        </div>

                        <div className="contact-form-actions">
                            <button type="submit" className="contact-submit-btn" disabled={status.loading}>
                                {status.loading ? "Transmission en cours..." : "Envoyer le message"}
                            </button>

                            {status.success === true && (
                                <p className="contact-alert success">✨ Message envoyé avec succès ! Je reviens vers vous rapidement.</p>
                            )}
                            {status.success === false && (
                                <p className="contact-alert error">❌ Une erreur est survenue. Merci de réessayer ou d'utiliser le mail direct.</p>
                            )}
                        </div>
                    </form>
                </div>
                
            </div>
            <div className="contact-star-deco">
                <div className="contact-star-left"></div>
                <div className="contact-star-right"></div>
            </div>
        </div>
    );
}

export default Contact;