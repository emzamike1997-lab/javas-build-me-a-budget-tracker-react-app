import React, { useState, useEffect } from 'react';
import BudgetTracker from './components/BudgetTracker';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <h1>Build Me A Budget Tracker React App</h1>
      <BudgetTracker />
    </div>
  );
}

export default App;