import React from 'react';
import { Link } from 'react-router-dom';
import NavLinksGroup from '../molecules/NavLinksGroup';
import './NavbarApp.css';

function NavbarApp() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    StageStyle
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <NavLinksGroup />
                </div>
            </div>
        </nav>
    );
}

export default NavbarApp;
