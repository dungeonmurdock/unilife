import React from 'react'
import { Link } from "react-router-dom";

import "./CityButton.css";

export default function CityButton({
    city,
       
}) {
    const buttonStyle = {
        width: "100%",
        height: 200,
        objectFit: "cover",
    };

   return (
    <Link to={`/citydetails/${city?._id}`} style={{color:"black", display: "inline-block", width: "16%", marginRight: 20, marginBottom: 20, textDecoration: "none", textAlign:"center"}}>
    <div className='city-button' style={buttonStyle}>
      
        
            <p>{city?.name}</p>
            
        
     
    </div>
    </Link>  
  )
}
