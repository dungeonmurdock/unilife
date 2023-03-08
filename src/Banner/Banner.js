import React from 'react'

import "./Banner.css"

export default function Banner({headingText, detailsText}) {
  return (
    <div className="banner-container" >
       <h2 className="overlay-title">{headingText}</h2>
       <p className="overlay-text">{detailsText}</p>      
    </div>
  )
}
