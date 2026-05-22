import React from 'react';
import './whyverd.css';
import download from '../../assets/images/download.png'
import grow from '../../assets/images/grow.png'
import wallet from '../../assets/images/wallet.png'
import currency from '../../assets/images/currency.png'
import check from '../../assets/images/check.png'
import chart from '../../assets/images/chart.png'
import DashedArrow from './DashedArrows'

const WhyVerd = () => {
  return (
    <div className="why-container" id='why-verd'>
            <div className="why-text-container">
                <div className="why-main-text">
                    <span>Why Verd Exists</span>
                </div>
                <div className="why-sub-text">
                    <span>Your money should be doing more, Verd bridges traditional finance and DeFi, giving you a simple system to save, grow and access your money.</span>
                </div>
            </div>

            <div className="why-bentos">
                <div className="why-cards-container">

                    {/* DESKTOP SVG ARROWS - untouched */}
                    <svg className="arrows-svg" viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M 0 0 L 6 3 L 0 6 Z" fill="#000" />
                            </marker>
                        </defs>
                        <path
                            className='path-1'
                           d="M 220 150 C 220 220, 120 320, 328 260"
                            fill="none"
                            stroke="#144027"
                            strokeWidth="1.8"
                            strokeDasharray="6 4"
                            markerEnd="url(#arrowhead)"
                        />
                        <path
                            className='path-2'
                            d="M 500 240 C 470 180, 650 430, 660 170"
                            fill="none"
                            stroke="#144027"
                            strokeWidth="1.8"
                            strokeDasharray="6 4"
                            markerEnd="url(#arrowhead)"
                        />
                    </svg>

                    <div className="why-cards card-1">
                        <div className="icon-text-content">
                            <div className="why-icon">
                            <img src={download} alt="" />
                        </div>
                        <div className="why-card-texts">
                            <div className="cards-main-text">
                                <span>Deposit</span>
                            </div>
                            <div className="cards-sub-text">
                                <span>Deposit in fiat or crypto with ease</span>
                            </div>
                        </div>
                        </div>
                        <div className="why-cards-img img-left">
                            <img src={currency} alt="" />
                        </div>
                    </div>
                    
                    <DashedArrow className="mobile-arrow" height={130}/>

                    <div className="why-cards card-2">
                        <div className="icon-text-content">
                            <div className="why-icon">
                            <img src={grow} alt="" />
                        </div>
                        <div className="why-card-texts">
                            <div className="cards-main-text">
                                <span>Grow</span>
                            </div>
                            <div className="cards-sub-text">
                                <span>Structured DeFi systems for steady growth.</span>
                            </div>
                        </div>
                        </div>
                        <div className="why-cards-img img-center">
                            <img src={chart} alt="" />
                        </div>
                    </div>

                    <DashedArrow className="mobile-arrow" height={130}/>

                    <div className="why-cards card-3">
                        <div className="icon-text-content">
                            <div className="why-icon">
                            <img src={wallet} alt="" />
                        </div>
                        <div className="why-card-texts">
                            <div className="cards-main-text">
                                <span>Access</span>
                            </div>
                            <div className="cards-sub-text">
                                <span>Withdraw anytime, your way</span>
                            </div>
                        </div>
                        </div>
                        <div className="why-cards-img img-right">
                            <img src={check} alt="" />
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default WhyVerd  