import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from "./Pages/HomePage";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AllCitiesPage from './Pages/AllCitiesPage';
import CityDetailsPage from './Pages/CityDetailsPage';
import HomeDetailsPage from './Pages/HomeDetailsPage';

function App() {
  return (
   <BrowserRouter>
   <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/allcities/' element={<AllCitiesPage />} />
      <Route path='/citydetails/:cityid/:bedrooms?' element={<CityDetailsPage />} />
      <Route path='/homedetails/:propertyid' element={<HomeDetailsPage />} />
    </Routes>
    <Footer />
   </BrowserRouter>
  );
}

export default App;
