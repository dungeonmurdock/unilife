import React from 'react'
import { Link } from "react-router-dom";

import "./PropertyCard.css";
import BedIcon from '../asset/BedIcon.svg';
import BathIcon from '../asset/BathIcon.svg';
import HomePin from '../asset/HomePin.svg';
import HomeIcon from '../asset/HomeIcon.svg';

export default function PropertyCard({
    city,
       
}) {
    const imageStyle = {
        backgroundImage: `url(${city?.images[0]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: 260,
        objectFit: "cover",
        
    };

    

   return (
    <Link to={`/homedetails/${city?._id}`} style={{display: "inline-block", marginRight: 20, marginBottom: 20, textDecoration: "none", textAlign:"center", width:480}}>
    <div className='property-card'>
        <div className='img-box' style={imageStyle}></div>
        <div className='stats-box'>
            <div className='rent-box'>  
            <p style={{fontSize:24, margin:0}}>£{city?.rent}</p>
            <p style={{fontSize:12, margin:0}}>pppw including bills</p> 
            </div>
            <div className='bed-bath-box'>
            <div className='bedroom-box'>
            <img src={BedIcon} alt="bed" style={{width:"27%"}}/>                        
            <p style={{width:"50%", margin:"auto"}}>{city?.bedroom_count}</p>
            </div>
            <div className='bathroom-box'>
            <img src={BathIcon} alt="bed" style={{width:"27%"}}/>    
            <p style={{width:"50%", margin:"auto"}}>{city?.bathroom_count}</p> 
            </div>  
            </div>              
        </div>
        <div className='info-box'>
            <p style={{fontSize:16, width:"50%"}}>{city?.property_type}</p>
            <p style={{fontSize:16, width:"50%"}}>{city?.furnished}</p>
            <img src={HomePin} alt="home pin" style={{marginLeft:75}}/>
            <p style={{fontSize:12}}>{city?.address?.street}{city?.address?.city}{city?.address?.postcode}</p>  
        </div>
        <div className='homeview-box'>
           <img src={HomeIcon} alt='home' />
           <h2 style={{fontSize:16, fontWeight:600, margin:"12px 0px 5px 15px"}}>View Home</h2>
        </div>
    </div>
    </Link>  
  )
}
