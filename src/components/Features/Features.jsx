import React from 'react';
import './features.css';
import option from '../../assets/images/option.png'
import graph from '../../assets/images/graph.png'
import crypto from '../../assets/images/crypto.png'
import balance from '../../assets/images/balance.png'

const Features = () => {
  return (
    <>
        <div className="features-container" id='features'>
            <div className="features-text-container">
                <div className="features-main-text">
                    <span>A Better Way to Grow Your Money</span>
                </div>
                <div className="features-sub-text">
                    <span>A simpler way to save and grow your money using DeFi, without the complexity.</span>
                </div>
            </div>

            <div className="features-bento-container">
                <div className="cards-align">
                    <div className="features-cards cards-one">
                    <div className="features-card-img card-img-one">
                        <img src={option} alt="image 0ne" />
                    </div>
                    <div className="features-text">
                        <div className="card-main-txt">
                        <span>Save In Stable Assets</span>
                    </div>
                    <div className="card-sub-txt txt-one">
                        <span>Deposit in fiat or crypto, your funds are secured on-chain in USDC and USDT on Solana, designed for stable and consistent growth.</span>
                    </div>
                    </div>
                    
                </div>

                <div className="features-cards cards-two">
                    <div className="features-card-img card-img-two">
                        <img src={crypto} alt="image 0ne" />
                    </div>
                    <div className="features-text">
                        <div className="card-main-txt">
                        <span>Built For everyone</span>
                    </div>
                    <div className="card-sub-txt txt-two">
                        <span>Designed to make on-chain saving simple and accessible, whether you're new to DeFi or already familiar with it.</span>
                    </div>
                    </div>
                    
                </div>
                </div>

                <div className="cards-align">
                    <div className="features-cards cards-three">
                    <div className="features-card-img card-img-three">
                        <img src={graph} alt="image 0ne" />
                    </div>
                    <div className="features-text">
                        <div className="card-main-txt">
                        <span>Grow Passively</span>
                    </div>
                    <div className="card-sub-txt txt-three">
                        <span>Your money is put to work through structured DeFi systems, so it grows in the background.</span>
                    </div>
                    </div>
                    
                </div>

                <div className="features-cards cards-four">
                    <div className="features-card-img card-img-four">
                        <img src={balance} alt="image 0ne" />
                    </div>
                    <div className="features-text">
                        <div className="card-main-txt">
                        <span>Access Anytime</span>
                    </div>
                    <div className="card-sub-txt txt-four">
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