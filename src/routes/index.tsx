import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Country, Favourites } from '../pages';

import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Index = () => {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/country/:countryName" element={<Country />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default Index;
