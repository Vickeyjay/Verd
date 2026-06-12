import React, { useState } from 'react';
import './hero.css';
import PingBadge from './PingBadge';
import useEmailInput from '../../hooks/useEmailInput';

const Hero = () => {
  const email = useEmailInput();
  const [toast, setToast] = useState({ show: false, type: '', msg: '' });

  const showToast = (type, msg) => {
    setToast({ show: true, type, msg });
    setTimeout(() => setToast({ show: false, type: '', msg: '' }), 4000);
  };

  const handleJoinWaitlist = async () => {
    if (!email.validate()) return;

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.value }),
      });

      const result = await res.json();

      if (res.status === 409) {
        // Already subscribed
        showToast('error', <><strong>Already subscribed!</strong><br />This email is already on the waitlist.</>);
        return;
      }

      if (!res.ok) throw new Error(result.error);

      email.reset();
      showToast('success', <><strong>Congratulations!!!</strong><br />You're on the list! Check your inbox.</>);
    } catch (err) {
      showToast('error', <><strong>Uh oh!</strong><br />Something went wrong. Try again.</>);
    }
  };

  return (
    <>
      <div className="hero-bg" id='home'>
        <div className="hero-container">
          <div data-aos="fade-up" data-aos-delay="50" className="coming-soon">
            <PingBadge label="Launching Soon" speed={0.6} />
          </div>
          <div data-aos="fade-up" data-aos-delay="50" className="hero-text">
            <div data-aos="fade-up" data-aos-delay="50" className="large-text">
              <span>Where Your Money Does More</span>
            </div>
            <div data-aos="fade-up" data-aos-delay="50" className="small-text">
              <span>A DeFi-powered system that helps your money grow and compound.</span>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="50" className="input-container">
            <input
              type="email"
              placeholder='Enter email address'
              value={email.value}
              onChange={email.handleChange}
              onBlur={email.handleBlur}
              className={email.error ? 'input-error' : ''}
            />
            <span>
              <button className="cta-btn" onClick={handleJoinWaitlist}>
                Get Early Access
              </button>
            </span>
          </div>
          {email.error && (
            <p className="email-error">{email.error}</p>
          )}
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`toast ${toast.type} ${toast.show ? 'show' : ''}`}>
        <span>{toast.msg}</span>
      </div>
    </>
  );
};

export default Hero;