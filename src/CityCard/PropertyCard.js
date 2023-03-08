import React from 'react'
import { Link } from "react-router-dom";

import "./PropertyCard.css";

export default function PropertyCard({
    city,
       
}) {
    const imageStyle = {
        backgroundImage: `url(${city?.images[0]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: 350,
        objectFit: "cover",
        
    };

   return (
    <Link to={`/homedetails/${city?._id}`} style={{display: "inline-block", marginRight: 20, marginBottom: 20, textDecoration: "none", textAlign:"center", width:"28%"}}>
    <div className='property-card'>
        <div className='img-box' style={imageStyle}></div>
        <div className='stats-box'>  
            <p>{city?.rent}</p>                     
            <p>{city?.bedroom_count}</p>
            <p>{city?.bathroom_count}</p>                 
        </div>
        <div className='info-box'>
            <p>{city?.property_type}</p>
            <p>{city?.furnished}</p>
            <p>{city?.address?.street}</p>  
        </div>
        </div>
    </Link>  
  )
}
