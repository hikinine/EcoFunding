

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
import '../components/home.css';
import { buttonBaseClasses } from '@mui/material';

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
  max-width: 100%; // Ensures the image is never larger than its container
  height: auto; // Maintains the aspect ratio of the image
  @media (max-width: 768px) {
    width: 80%; // Scales the image to 80% of its container's width on small devices
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%; // Scales the image to 90% of its container's width on medium devices
  }
  @media (min-width: 1025px) {
    width: 95%; // Scales the image to 95% of its container's width on large devices
  }
`;

const ResponsiveFolhaMeio = styled.img`
  position: absolute;
  z-index: 1000;
  left: -100px;
  height: auto;
  transition: transform 0.35s ease-out;
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }
`;

const ResponsiveFolhaDireita = styled.img`
  position: absolute;
  width: 50%;
  z-index: 1000;
  left: 250px;
  top: 300px;
  transition: transform 0.35s ease-out;
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
  margin-left: -100px;
  transition: transform 0.35s ease-out;
  

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
  transition: transform 0.35s ease-out;
`;

const HomeSection123 = styled.div`
  justify-content: center;
  align-items: center;
  height: 150vh;
`;
const slidesData = [
  {
    src: homeSection,
    alt: 'Image Description 1',
    title: 'Transforme Seu Carbono em Impacto: Invista Sustentável com a Ecofunding',
    paragraph: ' A primeira plataforma do Brasil que converte dívidas de carbono em oportunidades de investimento verde, credenciada pela CVM.',
    button: 'Saiba Mais',
  },
  {
    src: homeSection,
    alt: 'Image Description 2',
    title: 'Transforme Seu Investimento em Impacto com a ecoFunding',
    paragraph: 'Invista em um futuro sustentável e aproveite incentivos fiscais inéditos. Com a ecoFunding, seu capital promove mudanças reais e gera retorno financeiro com propósito.',
    button: 'Invista Sustentavel',
  },
  {
    src: homeSection,
    alt: 'Image Description 2',
    title: 'Slide Title 2',
    paragraph: 'This is the description for Slide 2.',
    button: 'Seja um parceiro EcoSustentavel',
  },
  // Add more objects for additional slides
];
const Home = ({ imgurl, altText, title, paragraph, transform, button }) => {
  return (
    <Wrapper>
      <Container>
        <FrameText>
          <h1>{title}</h1>
          <p>{paragraph}</p>
          <button>{button}</button>
        </FrameText>
        <FrameImage>
        <ResponsiveFolhaMeio src={folhameio} style={{ transform: transform }}/>
          <ResponsiveImage src={imgurl} alt={altText} />
        <ResponsiveFolhaDireita src={folhadireitabaixo} style={{ transform: transform }}/>
        </FrameImage>
      </Container>
    </Wrapper>
  );
};
const HomeCarousel = () => {
  const [mousePosition, setMousePosition] = useState({ mouseX: 0, mouseY: 0 });
  const folhaCimaRef = useRef(null);
  const folhaRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    const mouseX = (clientX - innerWidth / 2) / innerWidth * 100; // Percentage from the center
    const mouseY = (clientY - innerHeight / 2) / innerHeight * 100;

    setMousePosition({ mouseX, mouseY });

    if (folhaCimaRef.current) folhaCimaRef.current.style.transform = `translate(${mouseX * 0.3}%, ${mouseY * 0.3}%)`;
    if (folhaRef.current) folhaRef.current.style.transform = `translate(${mouseX * 0.3}%, ${mouseY * 0.3}%)`;
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    useTransform: true,
    cssEase: 'ease-in',
  };

  return (
    <SliderContainer onMouseMove={handleMouseMove}>
      <ParallaxFolhaCima ref={folhaCimaRef} src={folhaesquerdacima} />
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <HomeSection123 key={index}>
            <Home 
              imgurl={slide.src} 
              altText={slide.alt} 
              title={slide.title}
              paragraph={slide.paragraph}
              transform={`translate(${mousePosition.mouseX * 0.3}%, ${mousePosition.mouseY * 0.3}%)`}
            />
          </HomeSection123>
        ))}
      </Slider>
      <ParallaxFolha ref={folhaRef} src={folhaesquerda} alt="folha" />
    </SliderContainer>
  );
};
export default HomeCarousel;
