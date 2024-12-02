import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>General</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#office">Our Office</a></li>
                        <li><a href="#resources">Resources</a></li>
                        <li><a href="#calendar">Calendar</a></li>
                        <li><a href="#community">Community</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Social Media</h4>
                    <ul>
                        <li><a href="https://www.instagram.com/memssasenator/">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2uuFG3En3ObBPHnw_LENfm84iv16edU_6PhsJkCdIAx8SSf3vDVIzGYzTieUOyYKqYDUzM8Z7Q">Schedule a Meeting</a></li>
                        <li><a href="mailto:contact@mdanish@asuc.org">Email Us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
