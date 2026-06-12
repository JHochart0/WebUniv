import React, { useEffect } from 'react';

import '../css/Services.css';

function Services() {
    // Change the tab title
    useEffect(() => {
        document.title = "WebUniv - Découvrez nos prestations";
    }, []);

    return (
        <div className="services-container">
            <p>Prestations / Work In Progress...</p>
        </div>
    )
}

export default Services;
