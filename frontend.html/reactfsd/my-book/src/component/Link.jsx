import React from "react";
import { Link as RouterLink, Routes, Route } from "react-router-dom";
import './navigation.css';

// Home component
function Home() {
    return (
        <div className="page">
            <h1>Welcome to my Home page</h1>
        </div>
    );
}

// About component
function About() {
    return (
        <div className="page">
            <h1>This is my About page</h1>
        </div>
    );
}

// Navigation component
function Navigation() {
    return (
        <div>
            <nav className="navigation">
                <RouterLink to="/" className="nav-link">Home</RouterLink>
                <RouterLink to="/about" className="nav-link">About</RouterLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default Navigation;
