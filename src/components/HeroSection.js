import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css'

function HeroSection({
    topLine,
    headline,
    description,
    img,
  }) {
    return (
      <>
        <div
          className='home__hero-section' style={{background:"url(" + img + ")", backgroundSize:'cover'}}
        >
          <div className='container'>
            <div 
              className='row home__hero-row'
              style={{
                display: 'flex',
              }}
            >
              <div className='col'>
                <div className='home__hero-text-wrapper'>
                  <div className='top-line'>{topLine}</div>
                  <h1 className={'heading'}>
                    {headline}
                  </h1>
                  <p
                    className='home__hero-subtitle'
                  >
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default HeroSection;