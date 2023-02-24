import  { React } from "react";

import Banner from '../Banner/Banner';

export default function HomePage () {
    return (
        <div className="homepage-container">
            <header>
               <Banner headingText={"Find student homes with bills included"} detailsText={"A simple and faster way to search for student accommodation"}/>
            </header>
        </div>
    );
}