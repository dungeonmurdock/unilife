import React from 'react'
import { Link } from "react-router-dom";

import "./CityCard.css";

export default function CityCard({
    city,
       
}) {
    const imageStyle = {
        backgroundImage: `url(${city?.image_url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: 200,
        objectFit: "cover",
        borderRadius:24,
    };

   return (
    <Link to={`/citydetails/${city?._id}`} style={{display: "inline-block", width: "28%", marginRight: 20, marginBottom: 20, textDecoration: "none", textAlign:"center"}}>
    <div className='city-card' style={imageStyle}>        
            <p className='p1'>{city?.name}</p>
            <p className='p2'>{city?.property_count} properties</p>    
    </div>
    </Link>  
  )
}
