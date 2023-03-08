import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



import './HomeDetailsPage.css';


export default function HomeDetailsPage() {
  const [property, setProperty] = useState();
  const {propertyid} = useParams();
  
  useEffect(()=>{
    axios.get(`https://unilife-server.herokuapp.com/properties/${propertyid}`).then(res=>{setProperty(res.data);console.log(res.data)}).catch((err)=> console.log(err));
    
},[])
  return (
    <div className='home-details-container'>
    <div>
       {property?.availability}
    </div>
    </div>
  )
}
