import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Projects</h1>
          <div className='pricing__container'>
            <Link to='//www.github.com/SDPepe/AppArt' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='pricing__img-wrapper'>
                    <img src='images/sdp.png' className='pricing__img'/>
                </div>
                <h3>Java</h3>
                <h4>AppArt</h4>
                <p>A softwer devlopment project</p>
                <ul className='pricing__container-features'>
                  <li>Renting apartments</li>
                  <li>Marketplace for university</li>
                  <li>Provides a friendly and trusted place</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                    View
                </Button>
              </div>
            </Link>
            <Link to='//www.github.com/dedis/popstellar' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='pricing__img-wrapper'>
                    <img src='images/dedis.png' className='pricing__img'/>
                </div>
                <h3>Java</h3>
                <h4>Proof-of-Personhood System</h4>
                <p>Android native front-end implementation</p>
                <ul className='pricing__container-features'>
                  <li>No privacy-invasive</li>
                  <li>Accountability</li>
                  <li>Sybil attack protection</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                    View
                </Button>
              </div>
            </Link>
            <Link to='//www.github.com/epfl-ada/ada-2021-project-adamandeve' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='pricing__img-wrapper'>
                    <img src='images/ada.png' className='pricing__img'/>
                </div>
                <h3>Python</h3>
                <h4>Quotbank dataset</h4>
                <p>A communication crisis?</p>
                <ul className='pricing__container-features'>
                  <li>Training machine learning model</li>
                  <li>Categorization of the speakers</li>
                  <li>Prediction for two main news sources</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  View
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}
export default Pricing;