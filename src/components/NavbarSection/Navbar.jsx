import React from 'react';
import logo from '../../assets/images/logo-img.png';
import './navbar.css';

const Navbar = ({ activeSection }) =>  {
  return (
    <>
            <div className="general-container">
            <div className="nav-container">
                <div className="nav-logo-container">
                    <a href="#home">
                        <img src={logo} alt="logo" />
                    </a>
                    
                </div>

                <div className="nav-link-container">
                    <a
                        href="#why-verd"
                        className={activeSection === 'why-verd' ? 'active' : ''}
                    >
                        Why Verd
                    </a>

                    <a
                        href="#features"
                        className={activeSection === 'features' ? 'active' : ''}
                    >
                        Features
                    </a>

                    <a
                        href="#faqs"
                        className={activeSection === 'faqs' ? 'active' : ''}
                    >
                        FAQs
                    </a>

                    <a
                        href="#home"
                        className={`cta-btn`}
                    >
                        Join Waitlist
                    </a>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Navbar