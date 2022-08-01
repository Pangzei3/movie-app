import React from 'react'
import {Facebook, Instagram, Twitter, Pinterest} from '@material-ui/icons';
import Logo from './images/logo.png';
import './footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="social_icon">
          <Facebook style={{fontSize: 35}}/>
        </div>
        <div className="social_icon">
          <Instagram style={{fontSize: 35}}/>
        </div>
        <div className="social_icon">
          <Twitter style={{fontSize: 35}}/>
        </div>
        <div className="social_icon">
          <Pinterest style={{fontSize: 35}}/>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <img src={Logo} alt=''/>
          <h3>Hi Bobby!</h3>
        </div>
        <div className="footer-right">
          <h3>MORE ABOUT US</h3>
          <ul>
            <li>FAQ</li>
            <li>Ways to Use</li>
            <li>Corporate Information</li>
            <li>Account</li>
            <li>Media Center</li>
            <li>Help Center</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer