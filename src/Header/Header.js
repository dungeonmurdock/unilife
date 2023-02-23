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
          <img src= {UniLifeLogo} />
          <img src= {UniLife} />
        </div>
        <div className='links-container'>
          <img src= {Heart} />
          <h6>Shortlist</h6>
          <img src= {EmailIcon} />
          <h6>Contact Us</h6>
        </div>
    </div>
  )
}
