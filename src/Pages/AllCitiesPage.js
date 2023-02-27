import React from 'react'

import Banner from '../Banner/Banner';
import AllCities from '../AllCities/AllCities';

export default function AllCitiesPage() {
  return (
    <div className="all-city-container">
            <header className="page-header">
               <Banner 
               headingText={"Student Accomodations"} 
               detailsText={"UniLife have student accommodation available across the UK. Whatever you’re after, we can help you find the right student accommodation for you. "}
               />
            </header>
              <AllCities />
    </div>
  )
}
