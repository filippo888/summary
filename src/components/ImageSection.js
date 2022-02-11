import React from 'react';
import './ImageSection.css';

function ImageSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                {description.map((d) => <p className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }>{d}</p>)}
  
              
              </div>
            </div>
            <div className='col'>
              <div className={ img ? 'home__hero-img-wrapper': 'home__hero-img-wrapper-false'} >
                <img src={img} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageSection;