import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import BusList from './components/BusList';
import SeatSelection from './components/SeatSelection';
import BookingConfirmation from './components/BookingConfirmation';
import Payment from './components/Payment';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
          <Route path="/buses" element={isAuthenticated ? <BusList /> : <Navigate to="/" />} />
          <Route path="/seats/:busId" element={isAuthenticated ? <SeatSelection /> : <Navigate to="/" />} />
          <Route path="/payment" element={isAuthenticated ? <Payment /> : <Navigate to="/" />} />
          <Route path="/confirmation" element={isAuthenticated ? <BookingConfirmation /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
