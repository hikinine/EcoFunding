import React from 'react';
import './App.css';
import CarouselHome from './components/CarouselHome';
import OqueFazemos from 'components/OqueFazemos';
import Mapa from 'components/Mapa';
import SelosSection from 'components/Selos';
import ESG from 'components/ESG';


function App() {
  return (
    <div>

      <CarouselHome />
      <OqueFazemos/>
      <SelosSection />
      <ESG />
    </div>
  )
}
export default App;