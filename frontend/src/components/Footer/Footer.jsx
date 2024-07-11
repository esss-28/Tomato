import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  const openSocialMediaLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className="footer-social-icons">
                <a href="https://www.instagram.com/lifeofseher/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.facebook_icon} alt="Instagram" onClick={() => openSocialMediaLink("https://www.instagram.com/lifeofseher/")} />
                </a>
                <a href="https://x.com/SimplySeher" target="_blank" rel="noopener noreferrer">
                    <img src={assets.twitter_icon} alt="Twitter" onClick={() => openSocialMediaLink("https://x.com/SimplySeher")} />
                </a>
                <a href="https://www.linkedin.com/in/seher-siddiqui-76041b234/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.linkedin_icon} alt="LinkedIn" onClick={() => openSocialMediaLink("https://www.linkedin.com/in/seher-siddiqui-76041b234/")} />
                </a>
            </div>
        </div>
        {/* <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div> */}
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
