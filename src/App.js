import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from "./Pages/HomePage";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CityDetailsPage from './Pages/CityDetailsPage';

function App() {
  return (
   <BrowserRouter>
   <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/CityDetails' element={<CityDetailsPage />} />
    </Routes>
    <Footer />
   </BrowserRouter>
  );
}

export default App;
