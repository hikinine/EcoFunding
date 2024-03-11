

import React, { useState, useRef, useContext, Component } from 'react';
import styled from 'styled-components';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import folhaesquerda from '../assets/FolhaEsquerda.png';
import HomeSection1 from '../assets/HomeSection1.jpg';	
import HomeSection2 from '../assets/solarpanel.jpg';	
import HomeSection3 from '../assets/HomeSection3.jpg';	
import folhaesquerdacima from '../assets/FolhaEsquerdaCima.png';
import folhadireitabaixo from '../assets/FolhaDireitaBaixo.png';
import homeSection from '../assets/HomeSection.png';
import '../components/home.css';




const Wrapper = styled.section`
  background: white;
  text-align: center;
  width: 100%;
  height: 70vh;
  overflow: hidden;
  margin-top: 8em;
  gap: 8em;
  * {
    font-family: 'Montserrat', sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: white;
`;

const FrameText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 12em;
  width: 500px;
`;

const FrameImage = styled.div`
  position: relative;
  margin-left: 2em;
  width: 700px;
  height: 500px;`;


const ResponsiveImage = styled.img`
  max-width: 100%; // Ensures the image is never larger than its container
  height: auto; // Maintains the aspect ratio of the image
  border-top-left-radius: 90px;
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
  height: 100%;
  z-index: 1000;
  left: 250px;
  top: 300px;
  transition: transform 0.35s ease-out;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  background-color: white;
  


`;

const ParallaxFolha = styled.img`
  width: 25%;
  height: auto;
  position: sticky;
  z-index: 1000;
  bottom: 50px;
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
  
`;
const Wrapper2 = styled.div`
    .controls {
      display: flex;
      align-items: center;
      justify-content: center;
  
      .btn-arrow {
        border: none;
        background: none;
        padding: 11px 20px;
      }
  
      .reverse-arrow {
        transform: rotateY(180deg);
      }
  
      .dot-group {
        display: flex;
        align-items: center;
        justify-content: center;
  
        .carousel__dot {
          width: 8px;
          height: 8px;
          border: none;
          border-radius: 50%;
          margin: 0 4px;
          padding: 0;
          background-color: #c3c4ca;
        }
  
        /* This class is found in DotGroup from pure-react-carousel */
        /* We need to override it to add our styles */
        .carousel__dot--selected {
          width: 16px;
          height: 8px;
          border-radius: 10px;
          background-color: #6267a1;
          transition: background 0.4s ease;
        }
      }
    }
  `;

const Home = ({ imgurl, altText, title, paragraph, button }) => {
  return (
    <Wrapper>
      <Container>
      <FrameText>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <button style={{ padding: '10px 10px' }}>{button}</button>
      </FrameText>
      <FrameImage>
        <ResponsiveImage src={imgurl} alt={altText} />
      </FrameImage>
      </Container>
    </Wrapper>
  );
};
const slidesData = [
  {
    key: 'slide1',
    src: HomeSection1,
    alt: 'An image description',
    title: 'Parceria EcoSustentável: Torne-se um Parceiro',
    paragraph: ' A EcoFunding tem o prazer de convidar projetistas e empreendedores visionários para se juntarem à nossa rede de parceria ecoSustentável. Nossa missão é promover iniciativas que não só visam o progresso econômico mas que também se comprometem com a preservação ambiental e o bem-estar social. Acreditamos que, juntos, podemos construir um futuro mais verde e sustentável.',
    button: 'Learn More'
  },
  {
    key: 'slide2',
    src: HomeSection2,
    alt: 'Another image description',
    title: 'Parceiros em Energia Solar: Iluminando o Caminho para um Futuro Sustentável',
    paragraph: 'A EcoFunding convida você a se juntar a nós em nossa jornada rumo à sustentabilidade, tornando-se um parceiro no setor de energia solar. Estamos comprometidos em apoiar projetos que promovam o uso de energias renováveis, reduzindo a dependência de combustíveis fósseis e diminuindo as emissões de carbono. Ao preencher nosso formulário de parceria, você dá o primeiro passo para transformar a energia do sol em soluções sustentáveis para o futuro.',
    button: 'Saiba Mais'
  },

  // Add more slide objects as needed
];

class HomeCarousel extends Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={slidesData.length}
      >
        <Wrapper2>
          <Slider>
            {slidesData.map((slide, index) => (
              <Slide index={index} key={slide.key}>
                <Home
                  imgurl={slide.src}
                  altText={slide.alt}
                  title={slide.title}
                  paragraph={slide.paragraph}
                  button={slide.button}
                />
              </Slide>
            ))}
          </Slider>
          <div className="controls">
            <DotGroup style={{ marginBottom: '50px' }} className="dot-group" />
          </div>
        </Wrapper2>
      </CarouselProvider>
    );
  }
}

export default HomeCarousel;
