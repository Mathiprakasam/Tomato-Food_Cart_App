import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""></img>
                <p>Deliciousness delivered to your doorstep - Thanks for visiting! We hope to serve you again soon! </p>
                <div className="social-media">
                    <a href='www.facebook.com' target="_blank" rel="noopener noreferrer"> <img className='facebook' src={assets.facebook_icon} alt=""></img> </a>
                    <a href="www.twitter.com" target="_blank" rel="noopener noreferrer"> <img className='twitter' src={assets.twitter_icon} alt="" /> </a>
                    <a href="www.linkedin.com" target="_blank" rel="noopener noreferrer"> <img className='linkedin' src={assets.linkedin_icon} alt="" /> </a>
                </div>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch With Us</h2>
                <ul>
                    <li>Contact: +91-9876543210</li>
                    <li>help@tomato.com</li>
                </ul>
            </div>
        </div>    
        <hr/>
        <p className="copy-rights">© 2025 Tomato | All Rights Reserved</p>
    </div>
  )
}

export default Footer;