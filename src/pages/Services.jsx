import React, { useEffect } from 'react';

function Services() {
    // Changement du titre de la page au montage du composant
    useEffect(() => {
        document.title = "WebUniv - Nos prestations";
    }, []);
    return (
        <div className="services-container">
            <p>Prestations / Work In Progress...</p>
        </div>
    )
}

export default Services;
