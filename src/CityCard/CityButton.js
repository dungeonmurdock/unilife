import React from 'react'
import { Link } from "react-router-dom";

import "./CityButton.css";

export default function CityButton({
    city,
       
}) {
    const buttonStyle = {
        width: "100%",
        height: 55,
        objectFit: "cover",
        border: "1px solid #CED3D8",
        alignItem: "center",
        borderRadius: 12,
        fontSize: 24,
        fontWeight: 600,
    };

   return (
    <Link to={`/citydetails/${city?._id}`} style={{color:"black", display: "inline-block", width: "22%", marginBottom: 20, textDecoration: "none", textAlign:"center"}}>
    <div className='city-button' style={buttonStyle}>
      
        
            <p style={{marginTop:"9px"}}>{city?.name}</p>
            
        
     
    </div>
    </Link>  
  )
}
