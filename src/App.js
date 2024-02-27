
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import HomeCarousel from './components/Home';
import OqueFazemos from './components/OqueFazemos';
import SelosSection from './components/Selos';
import ESG from './components/ESG';
import Parceiros from './components/Parceiros';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Rodape from './components/Rodape';

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