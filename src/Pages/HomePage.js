import  { React } from "react";

import './HomePage.css';

import Banner from '../Banner/Banner';
import FeatureCities from "../FeatureCities/FeatureCities";

import SearchIcon from '../asset/SearchIcon.svg';
import CompareIcon from '../asset/CompareIcon.svg';
import BillIcon from '../asset/BillIcon.svg';
import cellperson from '../asset/cellperson.svg';

export default function HomePage () {
    return (
        <div className="homepage-container">
            <header className="page-header">
               <Banner 
               headingText={"Find student homes with bills included"} 
               detailsText={"A simple and faster way to search for student accommodation"}
               />
            </header>
            <FeatureCities />
            <div className="marketing-container">
                <div className="hype-container">
                  <h2>Compare all inclusive students homes.</h2>
                  <div className="hype-box">
                    <div className="search-box">
                    <img src={SearchIcon} alt="search-icon" style={{}}/>
                    <h3>Search</h3>
                    <p>Find your dream home in the perfect area near your university.</p>  
                    </div>
                    <div className="compare-box">
                    <img src={CompareIcon} alt="compare-icon" style={{}}/>
                    <h3>Compare</h3>
                    <p>Compare student accommodation to find the right home for you.</p>   
                    </div> 
                    <div className="bills-box">
                    <img src={BillIcon} alt="bills-icon" style={{}}/>
                    <h3>Bills Included</h3>
                    <p>Bills are included in all rent prices. No hidden fees.</p>  
                    </div>
                  </div>
                </div>
                <div className="hype-image-container">
                   <div className="search-compare-box">
                      
                   </div>
                   <div className="image-box">
                   <img src={cellperson} alt="person" style={{}}/>
                   </div>
                </div>
            </div>
        </div>
    );
}


{/* <div className="hype-box">
  <div class="card">
   <img src={SearchIcon} class="card-img-top" alt="search-icon" style={{}}/>
    <div class="card-body">
      <h5 class="card-title">Search</h5>
      <p class="card-text">Find your dream home in the perfect area near your university.</p>
    </div>
  </div>
  <div class="card">
   <img src={CompareIcon} class="card-img-top" alt="compare-icon" style={{}}/>
    <div class="card-body">
      <h5 class="card-title">Compare</h5>
      <p class="card-text">Compare student accommodation to find the right home for you.</p>
    </div>
  </div>
  <div class="card">
   <img src={BillIcon} class="card-img-top" alt="bills-icon" style={{}}/>
    <div class="card-body">
      <h5 class="card-title">Bills Included</h5>
      <p class="card-text">Bills are included in all rent prices. No hidden fees.</p>
    </div>
  </div>
</div> */}