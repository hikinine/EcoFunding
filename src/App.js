import React from 'react';
import './App.css';
import CarouselHome from './components/CarouselHome';
import OqueFazemos from 'components/OqueFazemos';
import Mapa from 'components/Mapa';
import SelosSection from 'components/Selos';
import ESG from 'components/ESG';
import Parceiros from 'components/Parceiros';
import FAQ from 'components/FAQ';
import Blog from 'components/Blog';
import Rodape from 'components/Rodape';

function App() {
  return (
    <div>

      <CarouselHome />
      <OqueFazemos/>
      <SelosSection />
      <ESG />
      <Parceiros />
      <FAQ />
      <Blog />
      <Rodape />
    </div>
  )
}
export default App;