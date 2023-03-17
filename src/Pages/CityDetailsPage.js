import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Banner from '../Banner/Banner';
import CityProperties from '../CityProperties/CityProperties';

import './CityDetailsPage.css';

import SocialGroup from '../asset/SocialGroup.svg';

export default function CityDetailsPage() {
  const [city, setCity] = useState();
  const [properties, setProperties] = useState ([]);  
  const [filterProperty, setFilterProperty] = useState ([]);  
  const priceValue = [500,2500];
  const propertyTypes = ["Detached", "Semi-Detached", "Apartment"];
  const numbers = [1,2,3,4,5,6,];
  const {cityid} = useParams();
  const query = {query: {city_id: cityid}};
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`https://unilife-server.herokuapp.com/cities/${cityid}`).then(res=>{setCity(res.data.data[0])}).catch((err)=> console.log(err));
    axios.post(`https://unilife-server.herokuapp.com/properties/filter/`,query).then(res=>{setProperties(res.data.response);setFilterProperty(res.data.response)}).catch((err)=> console.log(err));
    
},[])
function filterBedroom (e) { 
  const numBedrooms = e.target.value;
  const filterBedrooms = properties.filter((property)=>property.bedroom_count >= numBedrooms);
  setFilterProperty(filterBedrooms);
  return
}

function filterBathrooms (e) {
  
  const numBathrooms = e.target.value;
  const filterBathrooms = properties.filter((property)=>property.bathroom_count >= numBathrooms); 
  setFilterProperty(filterBathrooms);
  return
}

function filterPrice (e) {
  
  const numPrice = e.target.value;
  const filterPrice = properties.filter((property)=>property.rent >= numPrice);  
  setFilterProperty(filterPrice);
  return
}

function filterType (e) {
  
  const type = e.target.value;
  const filterType = properties.filter((property)=>property.property_type >= type);  
  setFilterProperty(filterType);
  return
}

  return (
    <div className="city-details-container">
            <header className="page-header">
               <Banner 
               headingText={"Search Accomodations"} 
               detailsText={"Whatever you`re after, we can help you find the right student accommodation for you. "}
               />
            </header>
            <div className="filter-container">
              <div className='bedrooms-box'>
                <h5>Min Bedrooms</h5>
              <select onChange={filterBedroom}>
                <option value='' disabled selected>Any bedrooms</option>
                {numbers?.map(item=><option value={item}>{item}</option>)}
              </select>
              </div>
              <div className='bathrooms-box'>
                <h5>Min Bathrooms</h5>
              <select onChange={filterBathrooms}>
              <option value='' disabled selected>Any bathrooms</option>
                {numbers?.map(item=><option value={item}>{item}</option>)}
              </select>
              </div>
              <div className='price-box'>
                <h5>Max Price</h5>
              <select onChange={filterPrice}>
              <option value='' disabled selected>Any price</option>
                {priceValue?.map(item=><option value={item}>${item}</option>)}
              </select>
              </div>
              <div className='type-box'>
                <h5>Home Type</h5>
              <select onChange={filterType}>
              <option value='' disabled selected>Any type</option>
                {propertyTypes?.map(item=><option value={item}>{item}</option>)}
              </select>
              </div>              
            </div>
            <h2 className='City-count-title'>{city?.property_count} homes in {city?.name}</h2>
            <CityProperties properties={filterProperty}/>
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
