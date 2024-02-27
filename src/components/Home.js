

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
    width: 50%;
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

const Home = ({ transform, title, paragraph, imgurl }) => {
  return (
    <Wrapper>
      <Container>
        <FrameText>
          <h1> {title} </h1>
          <p>{paragraph}</p>
        </FrameText>
        <FrameImage>
          <ResponsiveFolhaMeio src={folhameio} style={{ transform: transform }}/>
          <ResponsiveImage src={imgurl} alt="kitten" />
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
  const title = "Title";
  const paragraph = "paragraph"
  const imgurl = homeSection;

  return (
    <SliderContainer>
      <ParallaxFolhaCima ref={folhaCimaRef} src={folhaesquerdacima} />
      <Slider {...settings}>
        <HomeSection123>
          <Home transform={`translateX(${parallaxOffset}%)`} title={title} paragraph={paragraph} imgurl={imgurl}  />
        </HomeSection123>
        <HomeSection123>
          <Home transform={`translateX(${parallaxOffset}%)`} title={title} paragraph={paragraph} imgurl={imgurl} />
        </HomeSection123>
        <HomeSection123>
          <Home transform={`translateX(${parallaxOffset}%)`} title={title} paragraph={paragraph} imgurl={imgurl}  />
        </HomeSection123>
      </Slider>
      <ParallaxFolha ref={folhaRef} src={folhaesquerda} alt="folha" />
    </SliderContainer>
  );
};
export default HomeCarousel;

