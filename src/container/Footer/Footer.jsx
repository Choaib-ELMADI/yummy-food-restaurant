import React, { useState } from 'react';

import './Footer.css';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';



const Footer = () => {
  const [sub, setSub] = useState(false);

  return (
    <div className='app__footer'>
      <div className="app__footer-content">
        <div className="app__footer-subscribe">
          <p className='logo'>YummyFood</p>
          <h4>
            Join our newsletter for free guides, checklists & 
            templates.
          </h4>
          { !sub &&
          <form 
            onSubmit={ (e) => {
              e.preventDefault();
              setSub(true);
           } } 
          >
            <input type="email" placeholder='Enter your email' required />
            <button type="submit">Subscribe</button>
          </form>
          }
          { sub &&
            <h1 className='did-Sub'><span>Thanks</span> For Subscribing !!</h1>
          }
          <p>
              By subscribing you agree to our Privacy Policy and
              provide consent to receive updates from our company.
          </p>
        </div>
        <div className="app__footer-links">
            <div className="useful-links">
              <h2 className="title">Useful Links</h2>
              <div className="useful">
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Menu">Menu</a>
                <a href="#Gallery">Gallery</a>
                <a href="#Contact">Contact Us</a>
              </div>
            </div>
            <div className="social-media">
              <h2 className="title">Social Media</h2>
              <div className="social">
                <a href="https://www.linkedin.com/in/choaib-elmadi">
                  <AiFillLinkedin className='icon' /> 
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Choaib-ELMADI">
                  <AiFillGithub className='icon' /> 
                  <span>Github</span>
                </a>
                <a href="https://instagram.com/choaib_elmadi?igshid=YmMyMTA2M2Y">
                  <AiFillInstagram className='icon' /> 
                  <span>Instagram</span>
                </a>
                <a href="https://tiktok.com/git_code">
                  <FaTiktok className='icon' /> 
                  <span>TikTok</span>
                </a>
                <a href="https://www.facebook.com/choaib.elmadi.94">
                  <AiFillFacebook className='icon' /> 
                  <span>Facebook</span>
                </a>
              </div>
            </div>
        </div>
      </div>
      <div className="app__footer-rights">
          <div className='line' />
          <div className="rights">
            <p>2023 Choaib-ELMADI. All right reserved.</p>
            <a href="/">Privacy Policy</a>
            <a href="/">Cookie Policy</a>
            <a href="/">Cookie Settings</a>
          </div>
      </div>
    </div>
  );
}

export default Footer;