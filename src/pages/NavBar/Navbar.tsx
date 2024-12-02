import React from 'react';
import './Navbar.css';
import memsaLogo from './memsa_logo.png'


function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={memsaLogo} alt="Logo" className="logo-image" />
                </div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#office">Our Office</a></li>
                    <li><a href="#resources">Resources</a></li>
                    <li><a href="#calendar">Calendar</a></li>
                    <li><a href="#community">Community</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
