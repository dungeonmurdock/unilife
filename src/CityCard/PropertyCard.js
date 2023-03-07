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
        height: 200,
        objectFit: "cover",
    };

   return (
    <Link to={`/citydetails/${city?._id}`} style={{display: "inline-block", width: "28%", marginRight: 20, marginBottom: 20, textDecoration: "none", textAlign:"center"}}>
    <div className='property-card' style={imageStyle}>
      
        
            <p>{city?.name}</p>
            <p>{city?.property_type}</p>
            <p>{city?.bedroom_count}</p>
            <p>{city?.bathroom_count}</p>
            <p>{city?.furnished}</p>
            <p>{city?.address?.street}</p>
            
        
     
    </div>
    </Link>  
  )
}
