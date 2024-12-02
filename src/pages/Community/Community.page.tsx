import React from 'react';
import './Community.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import community1 from './community1.jpg';
import community2 from './community2.jpg';
import community3 from './community3.jpg';
import community4 from './community4.jpg';
import community5 from './community5.png';
import community6 from './community7.jpg';
import community8 from './community8.png'

import afgan from './afgan.png'
import asu from './ASU.png'
import amenianlogo from './amenianlogo.png'
import bsa from './bsa.png'
import bfp from './BFP.png'
import bsphat from './bspat.png'
import esa from './esa.png'
import fam from './fam.png'
import isc from './isc.png'

function CommunityPage() {
    return (
        <div className="community-page">
            <Navbar />
            <header>
                <h1 className="header">MEMSSA Community</h1>
            </header>
            <div className="carousel-container">
                {/* Carousel for community images */}
                <Carousel showThumbs={false} autoPlay interval={4000} infiniteLoop>
                    <div>
                        <img
                            src={community5}
                            alt="Community Event 1"
                        />
                        <p className="legend">Community Gathering</p>
                    </div>
                    <div>
                        <img
                            src={community1}
                            alt="Community Event 1"
                        />
                        <p className="legend">Community Gathering</p>
                    </div>
                    <div>
                        <img
                            src={community4}
                            alt="Community Event 3"
                        />
                        <p className="legend">Festival</p>
                    </div>
                    <div>
                        <img
                            src={community2}
                            alt="Community Event 2"
                        />
                        <p className="legend">Celebration Event</p>
                    </div>
                    <div>
                        <img
                            src={community3}
                            alt="Community Event 3"
                        />
                        <p className="legend">Festival</p>
                    </div>
                    <div>
                        <img
                            src={community6}
                            alt="Community Event 3"
                        />
                        <p className="legend">Festival</p>
                    </div>
                    <div>
                        <img
                            src={community8}
                            alt="Community Event 3"
                        />
                        <p className="legend">Festival</p>
                    </div>
                </Carousel>
            </div>
            <div className="rso-container">
                <h2>MEMSSA Voting RSOs</h2>
                <div className="rso-grid">
                    <div className="rso-item">
                        <div className="logo-placeholder">
                        <img
                            src={afgan}
                            alt="Community Event 3"
                        />
                        </div>
                        <p><a href="https://instagram.com/calasa_" target="_blank">Afghan Student Association (ASA)  @calasa_</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">
                        <img
                            src={asu}
                            alt="Community Event 3"
                        />
                        </div>
                        <p><a href="https://instagram.com/arabstudentunion_cal" target="_blank">Arab Student Union (ASU)  @arabstudentunion_cal</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">
                        <img
                            src={amenianlogo}
                            alt="Community Event 3"
                        />
                        </div>
                        <p><a href="https://instagram.com/cal_asa" target="_blank">Armenian Student Association (ASA)  @cal_asa</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">
                        <img
                            src={bsa}
                            alt="Community Event 3"
                        />
                        </div>
                        <p><a href="https://instagram.com/bsaberkeley" target="_blank">Bengali Student Association (BSA)  @bsaberkeley</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">
                        <img
                            src={bfp}
                            alt="Community Event 3"
                        />
                        </div>
                        <p><a href="https://instagram.com/bearsforpalestine" target="_blank">Bears For Palestine (BFP)  @bearsforpalestine</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">
                        <img
                            src={bsphat}
                            alt="Community Event 3"
                        />
                        </div>
                        <p><a href="https://instagram.com/berkeleybpshi" target="_blank">Bhagat Puran Singh Health Initiative (BPSHI)  @berkeleybpshi</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">
                        <img
                            src={esa}
                            alt="Community Event 3"
                        />
                        </div>
                        <p><a href="https://instagram.com/esaberkeley" target="_blank">Egyptian Student Association (ESA)  @esaberkeley</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">
                        <img
                            src={fam}
                            alt="Community Event 3"
                        />
                        </div>
                        <p><a href="https://instagram.com/ucb.fam" target="_blank">Faces of African American Muslims (FAM)  @ucb.fam</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">
                        <img
                            src={isc}
                            alt="Community Event 3"
                        />
                        </div>
                        <p><a href="https://instagram.com/iscoucb" target="_blank">Iranian Students’ Cultural Organization (ISCO)  @iscoucb</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p><a href="https://instagram.com/jakaramovement" target="_blank">Jakara Movement Chapter at UC Berkeley  @jakaramovement</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p><a href="https://instagram.com/calmenarrc" target="_blank">Middle Eastern - North African Recruitment & Retention Center @calmenarrc</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p><a href="https://instagram.com/calmsa" target="_blank">Muslim Student Association (MSA)  @calmsa</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p><a href="https://instagram.com/psaucberkeley" target="_blank">Pakistani Student Association (PSA)  @psaucberkeley</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p><a href="https://instagram.com/ucbssa" target="_blank">Sikh Student Association (SSA)  @ucbssa</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p><a href="https://instagram.com/cal.ysa" target="_blank">Yemeni Student Association (YSA)  @cal.ysa</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p><a href="https://instagram.com/isu.california" target="_blank">Iraqi Student Association (ISA)  @isu.california</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p><a href="https://instagram.com/berkeley.saab" target="_blank">Saudi Arabian Student Association  @berkeley.saab</a></p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p><a href="https://instagram.com/amsu_cal" target="_blank">African Maghreb Student Union (AMSU)  @amsu_cal</a></p>
                    </div>
                </div>

                <h2>MEMSSA Non-Voting RSOs</h2>
                <div className="rso-grid">
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p>Muslim Tech Collaborative (MTC)</p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p>Muslims of Haas</p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p>Ahlul Bayt Student Association</p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p>Threads Magazine</p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p>Palestinian Public Health</p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p>AMPD</p>
                    </div>
                    <div className="rso-item">
                        <div className="logo-placeholder">Logo</div>
                        <p>Punjabi Art Collective</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CommunityPage;
