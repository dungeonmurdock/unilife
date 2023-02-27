import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import "./FeatureCities.css";
import CityCard from "../CityCard/CityCard";

export default function FeatureCities() {
    const [cities, setCities] = useState([]);
    useEffect(()=>{
        axios.get("https://unilife-server.herokuapp.com/cities?limit=9").then(res=>{setCities(res.data.response)}).catch((err)=> console.log(err));
    },[])
  return (
    <div className="city-container">
        {cities?.map(item=> <CityCard city={item}/>)}
    </div>
  )
}
