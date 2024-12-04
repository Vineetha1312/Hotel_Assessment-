import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HotelList from './components/HotelList';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HotelList />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
