import React from 'react'
import logo from '../../assets/images/favicon.png';
import linkedin from '../../assets/images/linkedin.png';
import x from '../../assets/images/x.png';
import insta from '../../assets/images/insta.png';
import facebook from '../../assets/images/facebook.png';
import footer from '../../assets/images/footer.png';

import './footer.css';
import '../HeroSection/hero.css'

const Footer = () => {
  return (
    <>
        <div className="footer-container">
            <div className="footer-top-container">
                <div className="footer-text-container">
                <div className="footer-main-text">
                    <span>Join the Waitlist</span>
                </div>
                <div className="footer-sub-text">
                    <span>Be first to access a simpler way to grow your money with stable, on-chain savings.</span>
                </div>
            </div>

            <div className="footer-input-container">
                <input type="email" placeholder='Enter email address'/><span><button className="foot-cta-btn">Get Early Access</button></span>
            </div>
            </div>
            
            <div className="footer-contents">
                <div className="logo-text-container">
                    <div className="footer-logo-container">
                        <a href="#home">
                            <img src={logo} alt="logo" />
                            <span className='copy'> &copy; </span>
                            <span>verd</span>
                        </a>
                    </div>

                    <div className="text-container">
                        <span>Verd is a DeFi-powered platform helping you save and grow your money with ease.</span>
                    </div>
                </div>

                <div className="explore-container">
                    <div className="explore-main">
                        <span>Explore</span>
                    </div>
                    <div className="explore-sub">
                        <a href="#why-verd">Why Verd</a>
                        <a href="#features">Features</a>
                        <a href="#faqs">FAQs</a>
                    </div>
                </div>

                <div className="socials-container">
                    <div className="socials-main">
                        <span>Socials</span>
                    </div>
                    <div className="socials-links">
                        <span>
                            <img src={linkedin} alt="image" />
                            <a href="#">LinkedIn</a>    
                        </span>
                        <span>
                            <img src={x} alt="image" />
                            <a href="#">Twitter</a>    
                        </span>
                        <span>
                            <img src={insta} alt="image" />
                            <a href="#">Instagram</a>    
                        </span>
                        <span>
                            <img src={facebook} alt="image" />
                            <a href="#">Facebook</a>    
                        </span>
                    </div>
                </div>
            </div>

            <div className="copyright-container">
                <span> &copy; 2026 VerdFinance. All rights reserved.</span>
            </div>

            <div className="large-footer">
                <span className="large-text">
                    <img src={footer} alt="" />
                </span>
            </div>

            <div className="gradient"></div>
        </div>

        
    </>
  )
}

export default Footer