import styled from 'styled-components';
import FormContainer from '../../containers/FormContainer';
import ESG from './components/ESG';
import FAQ from './components/FAQ';
import HomeCarousel from './components/Home';
import OqueFazemos from './components/OqueFazemos';
import Rodape from './components/Rodape';
import SelosSection from './components/Selos';

const RodapeWrapper = styled.div`
@media (max-width: 768px) {
    display: none;
}
`;

const HomePage = () => {
    return (
        <div>
        
        <HomeCarousel />
        <OqueFazemos id="sobre"/>
        <SelosSection />
        <ESG />
        
        <FormContainer id="parceria"/>
        
        <FAQ id="faq"/>
        
        <Rodape />
        
        
        </div>
    )
}
export default HomePage;