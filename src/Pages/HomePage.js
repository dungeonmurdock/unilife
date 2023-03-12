import  { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import './HomePage.css';

import Banner from '../Banner/Banner';
import FeatureCities from "../FeatureCities/FeatureCities";

import SearchIcon from '../asset/SearchIcon.svg';
import CompareIcon from '../asset/CompareIcon.svg';
import BillIcon from '../asset/BillIcon.svg';
import cellperson from '../asset/cellperson.svg';
import RealEstate from '../asset/RealEstate.svg';
import Heart2 from '../asset/Heart2.svg';

export default function HomePage () {
  const [cities, setCities] = useState([]);
  const [cityid, setCityId] = useState('');
  const [number, setNumber] = useState();
  const numbers = [1,2,3,4,5,6,7,8,];
  const navigate = useNavigate();

  useEffect(()=>{
      axios.get("https://unilife-server.herokuapp.com/cities?limit=20").then(res=>{setCities(res.data.response);console.log(res.data.response)}).catch((err)=> console.log(err));
  },[])
  function sendUser () {
    if (!cityid) {
      alert("Please Pick City")
      return
    }
    let hyperRef = `/citydetails/${cityid}`; 
    if (number) {hyperRef+=`/${number}`}
    navigate(hyperRef)
  }
    return (
        <div className="homepage-container">
            <header className="page-header">
               <Banner 
               headingText={"Find student homes with bills included"} 
               detailsText={"A simple and faster way to search for student accommodation"}
               />
            </header>
            <div className="search-container">
              <select onChange={(e)=> setCityId(e.target.value)}>
                <option value='' disabled selected>Select City</option>
                {cities?.map(item=><option value={item._id}>{item.name}</option>)}
              </select>
              <select onChange={(e)=> setNumber(e.target.value)}>
              <option value='' disabled selected>Any Bedrooms</option>
                {numbers?.map(item=><option value={item}>{item}</option>)}
              </select>
              <button onClick={sendUser}>Find Homes</button>
            </div>
            <h2 className="feature-title">Search accommodations in our top cities</h2>
            <FeatureCities />
            <button className="all-cities-button" onClick={()=> navigate('/allcities')}>See all cities</button>
            <div className="marketing-container">
                <div className="hype-container">
                  <h2>Compare all inclusive students homes.</h2>
                  <div className="hype-box" style={{textAlign:"center"}}>
                    <div className="search-box" >
                    <img src={SearchIcon} alt="search-icon"/>
                    <h3>Search</h3>
                    <p>Find your dream home in the perfect area near your university.</p>  
                    </div>
                    <div className="compare-box">
                    <img src={CompareIcon} alt="compare-icon"/>
                    <h3>Compare</h3>
                    <p>Compare student accommodation to find the right home for you.</p>   
                    </div> 
                    <div className="bills-box">
                    <img src={BillIcon} alt="bills-icon"/>
                    <h3>Bills Included</h3>
                    <p>Bills are included in all rent prices. No hidden fees.</p>  
                    </div>
                  </div>
                </div>
                <div className="hype-image-container">
                   <div className="search-compare-box">
                      <div className="selection-container">
                        <img src={RealEstate} alt="house" />
                        <div className="selection-box">
                          <h2>Best Selection</h2>
                          <p>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
                        </div>
                      </div>
                      <div className="favourites-container">
                        <img src={Heart2} alt="heart"/>
                        <div className="fav-box">
                          <h2>Your Favourite</h2>
                          <p>Shortlist your favourite properties and send enquiries in one click.</p>
                        </div>                         
                      </div>
                      <button className="compare-button" onClick={''}>Search & Compare</button>
                   </div>
                   <div className="image-box">
                   <img src={cellperson} alt="person"/>
                   </div>
                </div>
            </div>
        </div>
    );
}
