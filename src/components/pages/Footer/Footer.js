import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  AiFillGithub, 
  AiFillMail,
} from 'react-icons/ai';

import {FaMapMarkerAlt } from 'react-icons/fa'


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          I can't wait to continue developing my skills by getting involved in ambitious projects!</p>
        <p className='footer-subscription-text'>
          Here you can find my contact information.
        </p>
      </section>
      <div className='footer-links'>
        
        <div className='footer-link-items'>
            <h2 >Contact Me</h2>      
            <p className='footer-link-item'> <AiFillMail /> &nbsp; filippo.salmina.fiver@gmail.com</p>
            <p className='footer-link-item'> <FaMapMarkerAlt /> &nbsp; Lausanne, Switzerland</p>
        </div>

      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={'//www.github.com/filippo888'}
              target='_blank'
              aria-label='GitHub'
            >
              <AiFillGithub />
            </Link>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;