import React from 'react';
import OqueFazemos from 'components/OqueFazemos';
import SelosSection from 'components/Selos';
import ESG from 'components/ESG';
import Parceiros from 'components/Parceiros';
import FAQ from 'components/FAQ';
import Blog from 'components/Blog';
import Rodape from 'components/Rodape';
import HomeCarousel from 'components/Home';

import { MarkerProvider } from 'components/earth/MarkerContext';


const HomePage = () => {
    return (
        <div>
        
        <HomeCarousel />
        <OqueFazemos />
        <SelosSection />
        <ESG />
        <Parceiros />
        <FAQ />
        <Rodape />
        
        </div>
    )
}
export default HomePage;