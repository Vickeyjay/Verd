import React, { useState } from 'react'
import logo from '../../assets/images/logo-footer.png';
import linkedin from '../../assets/images/linkedin.png';
import x from '../../assets/images/x.png';
import insta from '../../assets/images/insta.png';
import facebook from '../../assets/images/facebook.png';
import footer from '../../assets/images/footer.png';

import './footer.css';
import '../HeroSection/hero.css'

const Footer = () => {
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState({ show: false, type: '', msg: '' });

  const showToast = (type, msg) => {
    setToast({ show: true, type, msg });
    setTimeout(() => setToast({ show: false, type: '', msg: '' }), 4000);
  };

  const handleJoinWaitlist = async () => {
    if (!email) return;

    try {
      const res = await fetch('http://localhost:3001/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error);

      setEmail('');
      showToast('success', <><strong>Congratulations!!! 🎉</strong><br/>You're on the list! Check your inbox.</>);
    } catch (err) {
      showToast('error', <><strong>Uh oh!</strong><br/>Something went wrong. Try again.</>);
    }
  };

  return (
    <>
        <div data-aos="fade-up" data-aos-delay="100" className="footer-container">
            <div data-aos="fade-up" data-aos-delay="100" className="footer-top-container">
                <div data-aos="fade-up" data-aos-delay="100" className="footer-text-container">
                <div data-aos="fade-up" data-aos-delay="100" className="footer-main-text">
                    <span>Join the Waitlist</span>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className="footer-sub-text">
                    <span>Be first to access a simpler way to grow your money with stable, on-chain savings.</span>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="footer-input-container">
                <input
                  type="email"
                  placeholder='Enter email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>
                  <button className="foot-cta-btn" onClick={handleJoinWaitlist}>
                    Get Early Access
                  </button>
                </span>
            </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="100" className="footer-contents">
                <div data-aos="fade-up" data-aos-delay="100" className="logo-text-container">
                    <div data-aos="fade-up" data-aos-delay="100" className="footer-logo-container">
                        <a href="#home">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="100" className="text-container">
                        <span>Verd is a DeFi-powered platform helping you save and grow your money with ease.</span>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="100" className="explore-container">
                    <div data-aos="fade-up" data-aos-delay="100" className="explore-main">
                        <span>Explore</span>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className="explore-sub">
                        <a href="#why-verd">Why Verd</a>
                        <a href="#features">Features</a>
                        <a href="#faqs">FAQs</a>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="100" className="socials-container">
                    <div data-aos="fade-up" data-aos-delay="100" className="socials-main">
                        <span>Socials</span>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className="socials-links">
                        <span>
                            <a href="https://www.linkedin.com/company/verd-finance/"><img src={linkedin} alt="image" /> LinkedIn</a>    
                        </span>
                        <span>
                            
                            <a href="https://x.com/verdfinance"><img src={x} alt="image" className='twitter'/>Twitter</a>    
                        </span>
                        <span>
                            
                            <a href="https://www.instagram.com/verdfinance?igsh=NmUzMDExZ2xzdHR4"><img src={insta} alt="image" />Instagram</a>    
                        </span>
                        <span>
                            
                            <a href="https://www.facebook.com/share/1Gfsy99SZP/"><img src={facebook} alt="image" />Facebook</a>    
                        </span>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="copyright-container">
                <span> &copy; 2026 VerdFinance. All rights reserved.</span>
            </div>

            <div className="large-footer">
                <span className="large-text">
                    <img src={footer} alt="" />
                </span>
            </div>
        </div>

        {/* Toast Notification */}
        <div className={`toast ${toast.type} ${toast.show ? 'show' : ''}`}>
          <span>{toast.msg}</span>
        </div>
    </>
  )
}

export default Footer