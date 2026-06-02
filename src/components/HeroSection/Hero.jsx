import React, { useState, useEffect } from 'react';
import './hero.css';
import logo from '../../assets/images/logo.png';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState({ show: false, type: '', msg: '' });

  const showToast = (type, msg) => {
    setToast({ show: true, type, msg });
    setTimeout(() => setToast({ show: false, type: '', msg: '' }), 4000);
  };

  const handleJoinWaitlist = async () => {
    if (!email) return;

    try {
      const res = await fetch('https://www.verdfinance.com//api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error);

      setEmail('');
          showToast('success', "Congratulations!!! \n You're on the list! Check your inbox. 🎉");

    } catch (err) {
            showToast('error', 'Uh oh! \n Something went wrong. Try again.');
;
    }
  };

  return (
    <>
      <div className="hero-bg" id='home'>
        <div className="hero-container">
          <div className="coming-soon">
            <img src={logo} alt="" /><span>Launching Soon</span>
          </div>
          <div className="hero-text">
            <div className="large-text">
              <span>Where Your Money Does More</span>
            </div>
            <div className="small-text">
              <span>A DeFi-powered system that helps your money grow and compound.</span>
            </div>
          </div>
          <div className="input-container">
            <input
              type="email"
              placeholder='Enter email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>
              <button className="cta-btn" onClick={handleJoinWaitlist}>
                Get Early Access
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`toast ${toast.type} ${toast.show ? 'show' : ''}`}>
        {toast.msg}
      </div>
    </>
  );
};

export default Hero;