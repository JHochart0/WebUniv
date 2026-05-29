import React, { useEffect } from 'react';

function Contact() {
    // Changement du titre de la page au montage du composant
    useEffect(() => {
        document.title = "WebUniv - Contactez-nous !";
    }, []);
    
  return (
    <div className="contact-container">
        <p>Contact / Work In Progress...</p>
    </div>
  )
}

export default Contact;
