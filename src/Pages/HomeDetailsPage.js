import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



import './HomeDetailsPage.css';
import BedIcon from '../asset/BedIcon.svg';
import BathIcon from '../asset/BathIcon.svg';

import Heart2 from '../asset/Heart2.svg';

export default function HomeDetailsPage() {
  const [property, setProperty] = useState();  
  const {propertyid} = useParams();
   
  
  useEffect (()=>{
    axios.get(`https://unilife-server.herokuapp.com/properties/${propertyid}`).then(res=>{setProperty(res.data);console.log(res.data)}).catch((err)=> console.log(err));
    
},[])
  return (
    <div className='home-details-container'>
      <div className='Top-Box'>
      <div className='home-images' style={{}}>
        <div className='big-image-box'>
          <img src={property?.images[0]} alt="images" />
        </div> 
        <div className='small-image-boxes' style={{display:"flex" }}>
          {property?.images.map(item=><div style={{width: "25%"}}><img src={item} alt="property" style={{maxWidth:"100%"}}/></div>)}
        </div>  
      </div>
       <div className='Stats-Buttons'>
       <div className='stat-block'>
         <div className='address-box'>  
           {property?.address?.street}{property?.address?.city}{property?.address?.postcode} 
         </div>
         <div className='stat-box'>
           <div className='bedroom-count-box'>
             <p>Bedrooms</p>
             <img src={BedIcon} alt="bed" />
             {property?.bedroom_count}
           </div>
           <div className='bathroom-count-box'>
            <p>Bathrooms</p>
            <img src={BathIcon} alt="bath" />
            {property?.bathroom_count}
           </div>
           <div className='property-type-box'>
            {property?.property_type}
          </div>
          <div className='rent-box'>
            {property?.rent}
          </div>
          <div className='furnished-box'>
            {property?.furnished}
          </div>
          <div className='availability-box'>
            {property?.availability}
          </div>  
        </div>
       </div>       
        <div className='favs-button'>
          <button>
            <img src={Heart2} alt="heart" />
            <p>Shortlist</p>
          </button>
        </div>
        <div className='Booking-modal-button'>
           <button>
            <p>Book Viewing</p>
           </button>
        </div>
        </div>
        </div>
        <div className='description-box'>
          <h2>Description</h2>
          {property?.property_description}
        </div>
        <div className='room-prices-box'>
            <h2>Bedroom Prices</h2>
            {/* {property?.bedroom_prices} */}
        </div>
      <div className='features-box'>  
       <h2>Key Features</h2>
       {property?.key_features}
      </div>
       
       
       

    </div>
   
  )
}
