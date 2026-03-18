import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BudgetTracker from './components/BudgetTracker';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BudgetTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;