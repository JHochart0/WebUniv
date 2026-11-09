
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import '../css/Contact.css';

import useRevealOnScroll from '../hooks/useRevealOnScroll';
import usePageMetadata from '../hooks/usePageMetaData';

import Schedules from '../components/Schedules';
import NavLink from '../components/NavLink';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import {
    faPhone,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';

function Contact() {
    // Retrieve URL search parameters
    const [searchParams] = useSearchParams();

    const requestedSubject = searchParams.get('sujet')?.trim() || '';

    // Reference to the contact form section
    const contactFormRef = useRef(null);

    // Scroll reveal animation initialization
    useRevealOnScroll(".stellar-orbit-left, .stellar-orbit-right");

    // Set page title + description on component mount
    usePageMetadata(
        "WebUniv | Contactez-nous !",
        "Un projet de site internet ou d'application web ? Contactez WebUniv pour échanger sur vos besoins et obtenir un premier devis."
    );

    // RG Forms endpoint from environment variables
    const FORM_SCRIPT_URL = import.meta.env.VITE_FORM_SCRIPT_URL;

    // Form input state management
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: requestedSubject,
        message: '',
        _hp: ''
    });

    // Update the subject when the URL parameter changes
    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            subject: requestedSubject
        }));
    }, [requestedSubject]);

    // Automatically scroll to the contact form when arriving from a service CTA
    useEffect(() => {
        if (!requestedSubject) return;

        const animationFrame = window.requestAnimationFrame(() => {
            contactFormRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });

        return () => window.cancelAnimationFrame(animationFrame);
    }, [requestedSubject]);

    // Form submission status
    const [status, setStatus] = useState({
        loading: false,
        success: null
    });

    // Handle input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission via RG Forms / Google Apps Script
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check that the RG Forms endpoint is configured
        if (!FORM_SCRIPT_URL) {
            console.error(
                "Erreur : la variable VITE_FORM_SCRIPT_URL est introuvable."
            );

            setStatus({ loading: false, success: false });
            return;
        }

        setStatus({ loading: true, success: null });

        try {
            // Prepare the fields using the exact RG Forms field keys
            const fields = {
                nom_entreprise: formData.name.trim(),
                adresse_email: formData.email.trim(),
                sujet_du_message: formData.subject.trim(),
                message: formData.message.trim(),

                // Anti-spam honeypot
                _hp: formData._hp
            };

            // Send the request to RG Forms
            const response = await fetch(FORM_SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: JSON.stringify({
                    tab: 'contact',
                    fields: fields
                })
            });

            // Parse the API response
            const result = await response.json();

            // Check the response returned by Google Apps Script
            if (response.ok && result.result === 'success') {
                setStatus({ loading: false, success: true });

                // Reset form input fields
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    _hp: ''
                });

            } else {
                console.error(
                    "Erreur RG Forms :",
                    result.error || `Erreur HTTP ${response.status}`,
                    result
                );

                setStatus({ loading: false, success: false });
            }

        } catch (error) {
            console.error(
                "Erreur lors de l'envoi du formulaire RG Forms :",
                error
            );

            setStatus({ loading: false, success: false });
        }
    };

    return (
        <div className="contact-container">

            <div className="contact-wrap">

                {/* Left Side: Information & Direct Contact Details */}
                <div className="contact-info-section stellar-orbit-left">

                    <h1 className="contact-main-title">
                        Un projet en vue ?
                    </h1>

                    <h2 className="contact-subtitle">
                        Mettons le cap sur votre Univers !
                    </h2>

                    <p className="contact-text">
                        Besoin d'un site vitrine, d'un outil web sur-mesure ou d'un simple renseignement ?
                        Remplissez le formulaire de contact ou utilisez les canaux directs ci-dessous
                        pour lancer la discussion avec votre développeur web.
                    </p>

                    {/* Direct Contact Buttons */}
                    <div className="contact-direct-links">

                        <a
                            href="tel:+33665150470"
                            className="contact-direct-btn phone-btn"
                        >
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="contact-btn-icon"
                            />
                            +33 6 65 15 04 70
                        </a>

                        <a
                            href="mailto:webuniv.pro@gmail.com"
                            className="contact-direct-btn email-btn"
                        >
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="contact-btn-icon"
                            />
                            webuniv.pro@gmail.com
                        </a>

                    </div>

                    {/* Opening Hours */}
                    <Schedules className="contact" />

                    {/* Social Media Links */}
                    <div className="contact-social-section">

                        <h3 className="contact-social-title">
                            Rejoignez nos réseaux sociaux
                        </h3>

                        <div className="contact-socials">

                            <a
                                href="https://www.facebook.com/WebUniv.Dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>

                            <a
                                href="https://www.instagram.com/webuniv_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/webuniv/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>

                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form Section */}
                <div
                    className="contact-form-section stellar-orbit-right"
                    ref={contactFormRef}
                >
                    <h1 className="contact-main-title">
                        Me contacter
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="contact-form-element"
                    >

                        {/* Anti-spam honeypot */}
                        <input
                            type="text"
                            name="_hp"
                            value={formData._hp}
                            onChange={handleChange}
                            autoComplete="off"
                            tabIndex={-1}
                            aria-hidden="true"
                            style={{ display: 'none' }}
                        />

                        <div className="contact-form-group">
                            <label htmlFor="name">
                                Nom / Entreprise*
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Saisissez votre nom..."
                                autoComplete="name"
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="email">
                                Adresse E-mail*
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Saisissez votre adresse e-mail..."
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="subject">
                                Sujet du message*
                            </label>

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Ex. : Création de site vitrine, application web, référencement..."
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="message">
                                Votre Message*
                            </label>

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

                        <p className="contact-form-note">
                            * Champs obligatoires
                        </p>

                        <p className="contact-privacy-text">
                            En soumettant ce formulaire, vous acceptez que les informations
                            saisies soient exploitées dans le cadre de la demande de contact
                            et de la relation professionnelle qui peut en découler.
                            Pour en savoir plus, consultez notre{' '}
                            <NavLink
                                to="/legal"
                                content="Politique de confidentialité"
                            />.
                        </p>

                        <div className="contact-form-actions">

                            <button
                                type="submit"
                                className="contact-submit-btn"
                                disabled={status.loading}
                            >
                                {status.loading
                                    ? "Transmission en cours..."
                                    : "Envoyer le message"
                                }
                            </button>

                            {status.success === true && (
                                <p className="contact-alert success" role="status">
                                    ✨ Message envoyé avec succès ! Nous revenons vers vous au plus vite.
                                </p>
                            )}

                            {status.success === false && (
                                <p className="contact-alert error" role="alert">
                                    ❌ Une erreur est survenue. Merci de réessayer ou d'utiliser le mail direct.
                                </p>
                            )}

                        </div>
                    </form>
                </div>
            </div>

            {/* Decorative stars */}
            <div className="contact-star-deco">
                <div className="contact-star-left"></div>
                <div className="contact-star-right"></div>
            </div>

        </div>
    );
}

export default Contact;
