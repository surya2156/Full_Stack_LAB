import React from "react";
import { Link as RouterLink } from "react-router-dom";
import './navigation.css';

function Navigation() {
    return (
        <header>
            <nav className="navigation">
                <div className="nav-brand">
                    <RouterLink to="/" className="brand-link">BookStore</RouterLink>
                </div>
                <div className="nav-links">
                    <RouterLink to="/" className="nav-link">Home</RouterLink>
                    <RouterLink to="/books" className="nav-link">Books</RouterLink>
                    <RouterLink to="/login" className="nav-link">Login</RouterLink>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
