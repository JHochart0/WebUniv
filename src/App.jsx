import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './css/App.css'

function App() {
    // check if sessionStorage "redirect" exists, then redirect correctly to the NotFound404 page
    if (sessionStorage.getItem("redirect")) {
        const redirect = sessionStorage.getItem("redirect");
        sessionStorage.removeItem("redirect");
        window.history.replaceState(null, "", redirect);
    }


    return (
        <Router basename="/">
            <ScrollToTop />
            <div className="App">
                <Header />
                <div className="content">
                    <Routes>
                        
                    </Routes>
                </div>
                <ScrollToTopButton />
                <Footer />
            </div>
        </Router>
    );
}

export default App
