import React from 'react';
import styled from 'styled-components';
import Image1 from '../assets/selo1.png';

const ESGContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f8f8f8;
    padding: 0;
`
const ButtonDiv = styled.div`
    display: grid;
    `
const ImageTextContainer = styled.div`
    display: grid;  
`;
const Button = styled.button`
    background-color: #7ac26a;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
`;
const ESGImage = styled.img`

`;  

const ESGSection = () => {
    return (
        <ESGContainer>
            <ButtonDiv>
            <Button>Conheça nossos selos</Button>
            <Button>Conheça nossos selos</Button>
            <Button>Conheça nossos selos</Button>
            <Button>Conheça nossos selos</Button>
            <Button>Conheça nossos selos</Button>
            </ButtonDiv>
            <ImageTextContainer>
            <ESGImage src={Image1} alt="EcoFundingGiant" />
            </ImageTextContainer>
        </ESGContainer>
    )
}
export default ESGSection;