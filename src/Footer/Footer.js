import React from 'react'

import './Footer.css';

import copyright from '../asset/copyright.svg';
import Facebook from '../asset/Facebook.svg';
import Instagram from '../asset/Instagram.svg';
import Twitter from '../asset/Twitter.svg';

export default function Footer() {
  return (
    <><div className='footer-top-container'>
      <div className='email-container'>
        <h2 className='invite-title'>Keep in touch</h2>
        <p className='invite-text'>
        Curious about new offerings? Sign up for our weekly newsletter and stay informed.
        </p>
        <form>
          <div class="mb-3">
            <input type="email" class="form-control" id="email" placeholder="Your Email" aria-describedby="emailHelp" />
          </div>
        </form>
      </div>
      <div className='social-container'>
        <h2 className='social-title'>Let's Socialize</h2>
        <div className='social-link-box'>
          <img src={Facebook} alt="facebook" style={{paddingRight:"10px"}}/>
          <h3>Facebook</h3>         
        </div>
        <div className='social-link-box'>
          <img src={Instagram} alt="instagram" style={{paddingRight:"10px"}}/>
          <h3>Instagram</h3> 
        </div>
        <div className='social-link-box'>
          <img src={Twitter} alt="twitter" style={{paddingRight:"10px"}}/>
          <h3>Twitter</h3>
        </div>
      </div>
    </div>
    <div className='footer-lower-container'>
        <div className='site-info'>
         <h3>About Us</h3>
         <h3>Terms & Conditions</h3>
         <h3>Privacy & Cookie Policies</h3>
        </div>
        <div className='copyright'>
           <h5>2023</h5>
           <img src={copyright} alt="copyright" style={{ width: "12%" }} />
           <h5>Unilife</h5>
        </div>
      </div></>
  )
}
