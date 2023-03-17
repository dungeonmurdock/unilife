import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

import './AllCities.css';
import CityButton from '../CityCard/CityButton';

export default function FeatureCities() {
    const [cities, setCities] = useState([]);
    useEffect(()=>{
        axios.get("https://unilife-server.herokuapp.com/cities?limit=20").then(res=>{setCities(res.data.response)}).catch((err)=> console.log(err));
    },[])
  return (
    <div className="all-city-buttons" style={{marginBottom:85}}>
        {cities?.map(item=> <CityButton city={item}/>)}
    </div>
  )
}
