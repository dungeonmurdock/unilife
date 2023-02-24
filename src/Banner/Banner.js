import React from 'react'

import bannerImg from '../asset/bannerImg.png';

export default function Banner({headingText, detailsText}) {
  return (
    <div className='banner-container' >
       {headingText}
       {detailsText}
    </div>
  )
}
