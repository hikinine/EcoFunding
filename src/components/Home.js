

import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import folhaesquerda from '../assets/FolhaEsquerda.png';
import folhaesquerdacima from '../assets/FolhaEsquerdaCima.png';
import folhameio from '../assets/FolhaMeio.png';
import folhadireitabaixo from '../assets/FolhaDireitaBaixo.png';
import homeSection from '../assets/HomeSection.png';

const Wrapper = styled.section`
  background: white;
  text-align: center;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  margin-top: 8em;
  gap: 4em;
  * {
    font-family: 'Montserrat', sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const FrameText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2em;
  width: 500px;
`;

const FrameImage = styled.div`
  position: relative;
  margin-left: 2em;
  width: 450px;
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: 400px;
  
  @media (max-width: 768px) {
    max-width: 75%;
    max-height: 300px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 85%;
    max-height: 340px;
  }
  @media (min-width: 1025px) {
    max-width: 95%;
    max-height: 380px;
  }
`;

const ResponsiveFolhaMeio = styled.img`
  position: absolute;
  z-index: 1000;
  left: -100px;
  height: auto;
  transition: transform 0.5s ease-out;
`;

const ResponsiveFolhaDireita = styled.img`
  position: absolute;
  width: 50%;
  z-index: 1000;
  left: 250px;
  top: 300px;
  transition: transform 0.5s ease-out;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: white;
`;

const ParallaxFolha = styled.img`
  width: 25%;
  height: auto;
  position: sticky;
  z-index: 1000;
  bottom: 200px;
  transition: transform 0.5s ease-out;
  
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 5%;
  }
  @media (min-width: 1025px) {
    max-width: 20%;
  }
`;

const ParallaxFolhaCima = styled.img`
  width: 5%;
  height: auto;
  position: sticky;
  z-index: 1000;
  left: 400px;
  bottom: 200px;
  transition: transform 0.5s ease-out;
`;

const HomeSection123 = styled.div`
  justify-content: center;
  align-items: center;
  height: 150vh;
`;

const Home = ({ transform }) => {
  return (
    <Wrapper>
      <Container>
        <FrameText>
          <h1> Transforme Seu Carbono em Impacto: Invista Sustentável com a Ecofunding</h1>
          <p>A primeira plataforma do Brasil que converte dívidas de carbono em oportunidades de investimento verde, credenciada pela CVM</p>
        </FrameText>
        <FrameImage>
          <ResponsiveFolhaMeio src={folhameio} style={{ transform: transform }}/>
          <ResponsiveImage src={homeSection} alt="kitten" />
          <ResponsiveFolhaDireita src={folhadireitabaixo} style={{ transform: transform }}/>
        </FrameImage>
      </Container>
    </Wrapper>
  );
};

const HomeCarousel = () => {
  const folhaCimaRef = useRef(null);
  const folhaRef = useRef(null);

  const initialTransform = 'translateY(0%)';
  const [parallaxOffset, setParallaxOffset] = useState(0);

  const calculateParallaxOffset = (next) => {
    const baseOffset = 10;
    const parallaxStrength = 10;
    return baseOffset + (next * parallaxStrength);
  };
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => {
      const offset = calculateParallaxOffset(current);
      setParallaxOffset(offset);
      if (folhaCimaRef.current) folhaCimaRef.current.style.transform = `translateY(${offset}%)`;
      if (folhaRef.current) folhaRef.current.style.transform = `translateY(${offset}%)`;

      setTimeout(() => {
        setParallaxOffset(0);
        if (folhaCimaRef.current) folhaCimaRef.current.style.transform = initialTransform;
        if (folhaRef.current) folhaRef.current.style.transform = initialTransform;
      }, 500);
    },
  };
  

  return (
    <SliderContainer>
      <ParallaxFolhaCima ref={folhaCimaRef} src={folhaesquerdacima} />
      <Slider {...settings}>
        <HomeSection123>
          <Home transform={`translateX(${parallaxOffset}%)`} />
        </HomeSection123>
        <HomeSection123>
          <Home transform={`translateX(${parallaxOffset}%)`}/>
        </HomeSection123>
        <HomeSection123>
          <Home transform={`translateX(${parallaxOffset}%)`} />
        </HomeSection123>
      </Slider>
      <ParallaxFolha ref={folhaRef} src={folhaesquerda} alt="folha" />
    </SliderContainer>
  );
};
export default HomeCarousel;

