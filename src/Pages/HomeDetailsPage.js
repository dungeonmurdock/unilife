import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



import './HomeDetailsPage.css';
import ChevronBack from '../asset/ChevronBack.svg';
import BedIcon2 from '../asset/BedIcon2.svg';
import BathIcon2 from '../asset/BathIcon2.svg';

import Heart2 from '../asset/Heart2.svg';

export default function HomeDetailsPage() {
  const [property, setProperty] = useState(); 
  const {propertyid} = useParams();
  
  
  useEffect (()=>{
    axios.get(`https://unilife-server.herokuapp.com/properties/${propertyid}`).then(res=>{setProperty(res.data);console.log(res.data)}).catch((err)=> console.log(err));
    
},[])
  const priceKeys = property?.bedroom_prices ? Object.keys(property?.bedroom_prices): []
  console.log(priceKeys)
  
  return (
    <div className='home-details-container'>
      <div className='return-button'>
        <img src={ChevronBack} alt="chevron" />
        <p>Back to search</p>
      </div>
      <div className='top-box'>
      <div className='home-images' style={{}}>
        <div className='big-image-box'>
          <img src={property?.images[0]} alt="images" style={{maxWidth:"100%",padding:2, borderRadius:12}}/>
        </div> 
        <div className='small-image-boxes' style={{display:"flex" }}>
          {property?.images.map(item=><div style={{width: "24%"}}><img src={item} alt="property" style={{maxWidth:"100%", padding:2, borderRadius:12}}/></div>)}
        </div>  
      </div>
       <div className='stats-buttons'>
       <div className='stat-block'>
         <div className='address-box'>  
           <p>{property?.address?.street}, {property?.address?.city}, {property?.address?.postcode}</p>
         </div>
         <div className='stat-box'>
           <div className='small-info-box'>
            <div className='title'>
             <p>Bedrooms</p>
             </div>
             <div className='icon-count'>
             <img src={BedIcon2} alt="bed" />
             <p style={{fontSize:40, color:"#3A5295"}}>{property?.bedroom_count}</p>
             </div>
           </div>
           <div className='small-info-box'>
            <div className='title'>
            <p>Bathrooms</p>
            </div>
            <div className='icon-count'>
            <img src={BathIcon2} alt="bath" />
            <p style={{fontSize:40, color:"#3A5295"}}>{property?.bathroom_count}</p>
            </div>
           </div>
           <div className='small-info-box'>
            <div className='title'>
            <p>Property Type</p>
            </div>
            <div className='icon-count'>
            <p style={{fontSize:24, color:"#3A5295"}}>{property?.property_type}</p>
            </div>
          </div>
          <div className='small-info-box'>
            <div className='title'>        
            <p>Price</p>
            </div>   
            <div className='icon-count'>
            <p style={{fontSize:40, color:"#3A5295"}}>£{property?.rent}</p>
            </div>
          </div>
          <div className='small-info-box'>
            <div className='title'>  
            <p>Furnished Type</p>
            </div>
            <div className='icon-count'>
            <p style={{fontSize:24, color:"#3A5295"}}>{property?.furnished}</p>
            </div>
          </div>
          <div className='small-info-box'>
            <div className='title'>
            <p>Available</p>
            </div>
            <div className='icon-count'>
            <p style={{fontSize:24, color:"#3A5295"}}>{property?.availability}</p>
            </div>
          </div>  
        </div>
       </div>
        <div className='home-buttons'>            
          <button className='fav-button'>
            <img src={Heart2} alt="heart" />
            <p>Shortlist</p>
          </button>               
           <button className='booking-modal-button'>
            <p>Book Viewing</p>
           </button>       
        </div>  
        </div>
        </div>
        <div className='middle-box'>
        <div className='description-box'>
          <h2>Description</h2>
          <p>{property?.property_description}</p>
        </div>
        <div className='room-prices-box'>
            <h2>Bedroom Prices</h2>
            <div className='bedroom-price-box'>
            {priceKeys.map((price, index)=><div className='bed-box'><span className='span1'>Bedroom {index + 1}</span> <span className='span2'>£{property?.bedroom_prices[price]}</span></div>)}
            </div>
        </div>
        </div>
      <div className='features-box'>  
       <h2>Key Features</h2>
       <ul>{property?.key_features?.map(item=><li value={item}>{item}</li>)}</ul>
      </div>
    </div>
   
  )
}
