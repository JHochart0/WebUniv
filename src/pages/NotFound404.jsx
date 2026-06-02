import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/NotFound404.css';

function NotFound404() {
    useEffect(() => {
        document.title = "WebUniv - Page non trouvée";
    }, []);

    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <h1 className="notfound-code">404</h1>
                
                {/* Message thématique WebUniv */}
                <h2 className="notfound-title">Perdu dans l'univers ?</h2>
                <p className="notfound-text">
                    Oups ! La page que vous cherchez n'existe pas.
                </p>
                
                {/* Bouton de secours pour revenir à l'accueil */}
                <Link to="/" className="notfound-btn">
                    Revenir à l'accueil
                </Link>
            </div>

            {/* Arrière-plan plus sobre (juste des lueurs d'étoiles) */}
            <div className="cosmic-background">
                <div className="star-glow-1"></div>
                <div className="star-glow-2"></div>
            </div>
        </div>
    );
}

export default NotFound404;