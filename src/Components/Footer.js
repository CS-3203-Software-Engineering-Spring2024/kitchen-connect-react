import React from 'react';
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container">
            <p1 style={{ color: '#fe9e0d', fontSize: '16px', }}>KitchenConnect</p1>
          </div>
          <div className="footer-icons">
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>Help</span>
            <span>Share</span>
            <span>Careers</span>
            <span>Testimonials</span>
            <span>Work</span>
          </div>
          <div className="footer-section-columns">
            <span>kc@gmail.com</span>
          </div>
          <div className="footer-section-columns">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    );
  };

export default Footer
