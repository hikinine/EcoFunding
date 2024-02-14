import React from "react";
import p1 from "../assets/ESG2.png";
import p2 from "../assets/ESG2.png";
import p3 from '../assets/ESG2.png';
import p4 from '../assets/ESG2.png'
import { useRef } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import Image1 from '../assets/ESG2.png';
import Image2 from '../assets/ESG1.png';
import './styleESG.css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Options } from '@splidejs/splide';

const ESGContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f8f8;
  padding: 0;
  background-image: url(${Image2});
  height: 100vh;
  overflow-y: hidden;
  background-size: cover;
  background-position: center;
`;

const ButtonContainer = styled.div`
  display: grid;
  height: 300px;
  overflow-block: hidden;
`;

const ImageTextContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;  
`;

const Button = styled.button`
  background: linear-gradient(#c5c5c5, #ffffff);
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;  
  direction: ltr;
`;

const ButtonDiv = styled.div`
  height: 200px;
  margin-right: 100px;
  display: grid;
  height: 300px;
  width: 400px;
  overflow-y: scroll;
  margin: 20px;
  text-align: justify;
  padding: 20px;
  
  &::-webkit-scrollbar {
    width: 23px;
    height: 23px;
  }
  &::-webkit-scrollbar-button {
    width: 9px;
    height: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 23px none #ffffff;
    border-radius: 64px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #8bc06d;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
    border: 0px none #ffffff;
    border-radius: 39px;
  }
  &::-webkit-scrollbar-track:hover {
    background: #8bc06d;
  }
  &::-webkit-scrollbar-track:active {
    background: #ffffff;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
  direction: rtl;
`;

const ESGImage = styled.img``;  

const EsgText = styled.p`
  color: white;
  font-size: 20px;
  width: 50vw;
  text-align: center;
  word-break: break-word;
`;


const ESG = () => {
  const mainRef = useRef(null);

  const handleThumbs = (index) => {
    if (mainRef.current) {
      mainRef.current.go(index);
    }
  };
  const thumbsImages = [p1, p2, p3, p4];

  const mainOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "2rem",
    pagination: false,
    height: "27.8125rem",
  };

  const style = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
  };

  const generalStyle = {
    margin: '0 auto',
    width: '50%'
  }

  const btn_img = {
      width: "70px",
      height: "70px",
      overflow: "hidden",
      listStyle: "none",
      margin: "0 0.2rem",
      cursor: "pointer"
  }

const thumbnailsstyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  listStyle: "none"
}

  return (
    <ESGContainer>
      <ButtonContainer>
        <ButtonDiv>
          <Button>ESG</Button>
          <Button>ESG</Button>
          <Button>ESG</Button>
          <Button>ESG</Button>
          <Button>ESG</Button>
          <Button>ESG</Button>
          <Button>ESG</Button>
          <Button>ESG</Button>
          <Button>ESG</Button>
        </ButtonDiv>
      </ButtonContainer>
      <Splide   
               hasTrack={false}
                ref={mainRef} 
                options={{
                mainOptions
              }}
      >
        <SplideTrack>
          <SplideSlide>
            <ImageTextContainer>
              <ESGImage src={p1} alt="EcoFundingGiant" />
              <EsgText>Este é um texto ESG Este é um texto ESG Este é um texto ESG Este é um texto ESG Este é um texto ESG Este é um texto ESG Este é um texto ESG</EsgText>
            </ImageTextContainer>
          </SplideSlide>
        </SplideTrack>
        <SplideTrack>
          <SplideSlide>
            <ImageTextContainer>
              <ESGImage src={p2} alt="EcoFundingGiant" />
              <EsgText>Este é um texto ESG 2 Este é um texto ESG 2 Este é um texto ESG 2 Este é um texto ESG 2 Este é um texto ESG 2 Este é um texto ESG 2 Este é um texto ESG 2</EsgText>
            </ImageTextContainer>
          </SplideSlide>
        </SplideTrack>
        <SplideTrack>
          <SplideSlide>
            <ImageTextContainer>
              <ESGImage src={p3} alt="EcoFundingGiant" />
              <EsgText>Este é um texto ESG 3 Este é um texto ESG 3 Este é um texto ESG 3 Este é um texto ESG 3Este é um texto ESG 3 Este é um texto ESG 3 Este é um texto ESG 3</EsgText>
            </ImageTextContainer>
          </SplideSlide>
        </SplideTrack>
      </Splide>
      
    </ESGContainer>
  );
};

export default ESG;