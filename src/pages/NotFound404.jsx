import React, { useEffect } from 'react';

function NotFound404() {
    // Changement du titre de la page au montage du composant
    useEffect(() => {
        document.title = "WebUniv - Page non trouvée";
    }, []);
    return (
        <div className="notFound404-container">
            <p>Erreur 404 / Work In Progress...</p>
        </div>
    )
}

export default NotFound404;
