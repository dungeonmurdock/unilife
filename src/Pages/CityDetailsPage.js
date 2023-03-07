import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Banner from '../Banner/Banner';
import CityProperties from '../CityProperties/CityProperties';

import './CityDetailsPage.css';

import SocialGroup from '../asset/SocialGroup.svg';

export default function CityDetailsPage() {
  const [city, setCity] = useState();
  const [properties, setProperties] = useState ([]);
  const {cityid} = useParams();
  const query = {query: {city_id: cityid}};
console.log(cityid);
  useEffect(()=>{
    axios.get(`https://unilife-server.herokuapp.com/cities/${cityid}`).then(res=>{setCity(res.data.data[0]);console.log(res)}).catch((err)=> console.log(err));
    axios.post(`https://unilife-server.herokuapp.com/properties/filter/`,query).then(res=>{setProperties(res.data.response)}).catch((err)=> console.log(err));
    
},[])
  return (
    <div className="city-details-container">
            <header className="page-header">
               <Banner 
               headingText={"Search Accomodations"} 
               detailsText={"Whatever you`re after, we can help you find the right student accommodation for you. "}
               />
            </header>
            <CityProperties properties={properties}/>
            <div className='city-hype-card'>
            <div className="card mb-3" style={{maxWidth: "80%", borderRadius:24, backgroundColor:"#F6FAFD"}}>
               <div className="row g-0">                 
                <div className="col-md-4">
                  <div className="card-body">
                    <h5 className="card-title">{city?.name}</h5>
                    <p className="card-text">{city?.student_life}</p>
                   </div>                  
                </div>
                <div className="col-md-8">
                   <img src={SocialGroup} className="img-fluid rounded-start" alt="group"/>
                 </div>
              </div>
           </div>
           </div> 
    </div>
  )
}
