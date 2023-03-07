import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

import "./CityProperties.css";
import PropertyCard from "../CityCard/PropertyCard";

export default function CityProperties({properties}) {
 
return (
    <div className="city-container">
        {properties?.map(item=> <PropertyCard city={item}/>)}
    </div>
  )
}