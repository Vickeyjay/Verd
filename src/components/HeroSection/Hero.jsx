import React, { useState } from 'react';
import './hero.css';
import logo from '../../assets/images/logo.png';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'loading' | 'success' | 'error'

  const handleJoinWaitlist = async () => {
    if (!email) return;

    setStatus('loading');

    try {
      const res = await fetch('http://localhost:3001/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error);

      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error(err);
      setStatus('error');
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
              <button
                className="cta-btn"
                onClick={handleJoinWaitlist}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Get Early Access'}
              </button>
            </span>
          </div>

          {/* Feedback messages */}
          {status === 'success' && (
            <p style={{ color: 'green', marginTop: '10px' }}>
              🎉 You're on the list! Check your email.
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: 'red', marginTop: '10px' }}>
              Something went wrong. Try again.
            </p>
          )}

        </div>
      </div>
    </>
  );
};

export default Hero;