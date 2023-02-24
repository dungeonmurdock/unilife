import React from 'react'

import "./Header.css";

import UniLifeLogo from '../asset/UniLifeLogo.svg';
import UniLife from '../asset/UniLife.svg';
import Heart from '../asset/Heart.svg';
import EmailIcon from '../asset/EmailIcon.svg';

export default function Header() {
  return (
    <div className='header-container'>
        <div className='logo-container'>
          <img src= {UniLifeLogo} alt="logo" style={{width: "15%"}}/>
          <img src= {UniLife} alt="title" style={{width: "42%", padding: "5px 5px 0px"}} />
        </div>
        <div className='links-container'>
          <img src= {Heart} alt="fav" style={{width: "8%"}}/>
          <h6>Shortlist</h6>
          <img src= {EmailIcon} alt="contact" style={{width: "8%"}}/>
          <h6>Contact Us</h6>
        </div>
    </div>

  )
}
