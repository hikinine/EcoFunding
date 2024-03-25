
import { Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import './App.css';
import HomePage from './assets/pages/HomePage';
import Page1 from './assets/pages/Page1';
import Page2 from './assets/pages/Page2';
import Login from './components/Login';
import { MarkerProvider } from './components/earth/MarkerContext';

import { createGlobalStyle } from 'styled-components';

   export const GlobalStyle = createGlobalStyle`
     @import url('https://fonts.googleapis.com/css2?family=Lexend+Tera:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

     body {
       margin: 0;
       padding: 0;
       font-family: 'Lexend Tera', sans-serif;
     }
   `;


function App() {
  return (
    <MarkerProvider>
    <div>
      <GlobalStyle />
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
    </MarkerProvider>
    
  );
}

export default App;