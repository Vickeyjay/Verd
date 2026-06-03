import React from 'react';
import './features.css';
import option from '../../assets/images/option.png'
import graph from '../../assets/images/graph.png'
import crypto from '../../assets/images/crypto.png'
import balance from '../../assets/images/balance.png'

const Features = () => {
  return (
    <>
        <div data-aos="fade-up" data-aos-delay="50" className="features-container" id='features'>
            <div data-aos="fade-up" data-aos-delay="50" className="features-text-container">
                <div data-aos="fade-up" data-aos-delay="50" className="features-main-text">
                    <span>A Better Way to Grow Your Money</span>
                </div>
                <div data-aos="fade-up" data-aos-delay="50" className="features-sub-text">
                    <span>A simpler way to save and grow your money using DeFi, without the complexity.</span>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="50" className="features-bento-container">
                <div data-aos="fade-up" data-aos-delay="50" className="cards-align">
                    <div data-aos="fade-up" data-aos-delay="50" className="features-cards cards-one">
                    <div data-aos="fade-up" data-aos-delay="50" className="features-card-img card-img-one">
                        <img src={option} alt="image 0ne" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="50" className="features-text">
                        <div data-aos="fade-up" data-aos-delay="50" className="card-main-txt">
                        <span>Save In Stable Assets</span>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="50" className="card-sub-txt txt-one">
                        <span>Deposit in fiat or crypto, your funds are secured on-chain in USDC and USDT on Solana, designed for stable and consistent growth.</span>
                    </div>
                    </div>
                    
                </div>

                <div data-aos="fade-up" data-aos-delay="50" className="features-cards cards-two">
                    <div data-aos="fade-up" data-aos-delay="50" className="features-card-img card-img-two">
                        <img src={crypto} alt="image 0ne" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="50" className="features-text">
                        <div data-aos="fade-up" data-aos-delay="50" className="card-main-txt">
                        <span>Built For everyone</span>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="50" className="card-sub-txt txt-two">
                        <span>Designed to make on-chain saving simple and accessible, whether you're new to DeFi or already familiar with it.</span>
                    </div>
                    </div>
                    
                </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="50" className="cards-align">
                    <div data-aos="fade-up" data-aos-delay="50" className="features-cards cards-three">
                    {/* <div data-aos="fade-up" data-aos-delay="50" className="features-card-img card-img-three">
                        <img src={graph} alt="image 0ne" />
                    </div> */}




                    <div data-aos="fade-up" data-aos-delay="50" className="features-card-img card-img-three">

                    {/* OLD GRAPH IMAGE */}
                    {/*
                    <img src={graph} alt="image one" />
                    */}

                    <svg
                        className="graph"
                        viewBox="0 0 400 250"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#C7EA66" stopOpacity="0.5" />
                                <stop offset="70%" stopColor="#C7EA66" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#C7EA66" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Filled Area */}
                        <path
                            className="graph-fill"
                            fill="url(#graphGradient)"
                            d="
                                M0 250
                                L0 200
                                L50 150
                                L100 150
                                L150 100
                                L200 100
                                L250 50
                                L300 50
                                L350 10
                                L400 10
                                L400 250
                                Z
                            "
                        />

                        {/* Line */}
                        <path
                            className="graph-line"
                            fill="none"
                            strokeWidth="2"
                            d="
                                M0 200
                                L50 150
                                L100 150
                                L150 100
                                L200 100
                                L250 50
                                L300 50
                                L350 10
                                L400 10
                            "
                        />

                        {/* Dot */}
                        <circle
                            className="graph-dot"
                            cx="400"
                            cy="10"
                            r="5"
                            fill="#fff"
                            stroke="#C7EA66"
                            strokeWidth="2"
                        />
                    </svg>

                </div>





                    <div data-aos="fade-up" data-aos-delay="50" className="features-text main-three">
                        <div data-aos="fade-up" data-aos-delay="50" className="card-main-txt">
                        <span>Grow Passively</span>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="50" className="card-sub-txt txt-three">
                        <span>Your money is put to work through structured DeFi systems, so it grows in the background.</span>
                    </div>
                    </div>
                    
                </div>

                <div data-aos="fade-up" data-aos-delay="50" className="features-cards cards-four">
                    <div data-aos="fade-up" data-aos-delay="50" className="features-card-img card-img-four">
                        <img src={balance} alt="image 0ne" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="50" className="features-text">
                        <div data-aos="fade-up" data-aos-delay="50" className="card-main-txt">
                        <span>Access Anytime</span>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="50" className="card-sub-txt txt-four">
                        <span>Withdraw your funds whenever you want, in fiat or crypto.</span>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Features