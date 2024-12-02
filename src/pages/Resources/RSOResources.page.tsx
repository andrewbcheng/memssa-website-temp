import React from 'react';
import './RSOResources.css';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import fullGroup from './1A4A3358.jpg'
import halfGroup from './1A4A3559.jpg'

function RSOResources() {
    return (
        // Header here
        // Page div
        <>
          <Navbar />
          <div>
            <header>
                <h1 className="header">RSO Leader Resources</h1>
            </header>
=            <div id="resource-container">
=                <div id="FundingR" className="resource-section" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="graphics-container" style={{ flex: '1' }}>
                        <img src={fullGroup} alt="Funding Resources Graphic" className="graphics" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="resource-box" style={{ flex: '0.5', padding: '20px' }}>
                        <h3>Funding Resources</h3>
                        <p>ASUC provides funding opportunities for student programs and events. Learn how to apply and get support for your initiatives below.</p>
                        <a href='https://callink.berkeley.edu/organization/asucsenateonly/'>ASUC Senate</a>
                        <a href="https://asuc.org/student-orgs/">ASUC Funding Page</a>
                        <a href="https://asuc.org/public-notice/">Sign Up for ASUC Meetings</a>
                        <a href="mailto:senate@asuc.org">Contact ASUC for Funding Queries</a>
                    </div>
                </div>
                <div id="BookingR" className="resource-section" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="resource-box" style={{ flex: '0.5', padding: '20px' }}>
                        <h3>Booking Resources</h3>
                        <a href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2uuFG3En3ObBPHnw_LENfm84iv16edU_6PhsJkCdIAx8SSf3vDVIzGYzTieUOyYKqYDUzM8Z7Q'>Book a Meeting With Us </a>
                        <a href='https://25live.collegenet.com/pro/berkeley#!/home/dash'>Book a Classroom </a>
                    </div>
                    <div className="graphics-container" style={{ flex: '1' }}>
                        <img src={halfGroup} alt="Booking Resources Graphic" className="graphics" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>
          </div>  
          <Footer />
        </>
    );
}

export default RSOResources;
