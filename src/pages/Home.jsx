import React, { useEffect } from 'react';

function Home() {
    // Changement du titre de la page au montage du composant
    useEffect(() => {
        document.title = "WebUniv - Votre Univers Digital";
    }, []);

    return (
        <div className="home-container">
            <p>Accueil / Work In Progress...</p>
        </div>
    )
}

export default Home;
