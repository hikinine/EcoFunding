
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import './App.css'
import HomePage from 'assets/pages/HomePage';
import { AuthProvider } from "./contexts/AuthContext"
import Login from './components/Login'
import Page1 from 'assets/pages/Page1';
import Page2 from 'assets/pages/Page2';
import Page3 from 'assets/pages/Page3';
import Page4 from 'assets/pages/Page4';
import Page5 from 'assets/pages/Page5';


function App() {
  return (
    <div>
      <Routes> 
        <Route path="/" element={<HomePage />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2/>} />
        <Route path="/page3" element={<Page2 />} />
        <Route path="/page4" element={<Page2 />} />
        <Route path="/page5" element={<Page2 />} />

      </Routes>
    </div>
  );
}

export default App;