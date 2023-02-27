import React from 'react'

import Banner from '../Banner/Banner';

export default function CityDetailsPage() {
  return (
    <div className="city-details-container">
            <header className="page-header">
               <Banner 
               headingText={"Search Accomodations"} 
               detailsText={"Whatever you’re after, we can help you find the right student accommodation for you. "}
               />
            </header>
    </div>
  )
}
