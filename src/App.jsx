import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './css/App.css'

import ScrollToTop from "./components/ScrollToTop.jsx";

import Header from './components/Header.jsx';
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import Footer from './components/Footer.jsx';


import Home from './pages/Home.jsx';
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Legal from "./pages/Legal.jsx";
import NotFound404 from "./pages/NotFound404.jsx";
import GTC from "./pages/GTC.jsx";

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
                        <Route path="/" element={<Home/>} />
                        <Route path="/services" element={<Services/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/legal" element={<Legal/>} />
                        <Route path="/gtc" element={<GTC/>} />
                        <Route path="*" element={<NotFound404/>} />
                    </Routes>
                </div>
                <ScrollToTopButton />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
