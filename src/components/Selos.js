import React from 'react';
import styled from 'styled-components';
import Selo1 from '../assets/selo1.png';
import Selo2 from '../assets/selo2.png';
import Selo3 from '../assets/selo3.png';
import Selo4 from '../assets/selo4.png';

const SelosContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f8f8f8;
    padding: 0;
    width: 100%
`;    

const Selos = styled.img`
    
`;

const SelosSection = () => {
    return (
        <SelosContainer>
            <Selos src={Selo1} alt="EcoFundingGiant" />
            <Selos src={Selo2} alt="EcoFundingGiant" />
            <Selos src={Selo3} alt="EcoFundingGiant" />
            <Selos src={Selo4} alt="EcoFundingGiant" />
        </SelosContainer>
    )
}

export default SelosSection;
