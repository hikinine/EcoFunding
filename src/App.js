
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import './app.css'
import HomePage from 'assets/pages/HomePage';

function App() {
  return (
    <div>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomePage />} /> {/* Adjust Route usage to new syntax */}
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;