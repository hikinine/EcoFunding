

import React, { useState, useRef, useContext, Component, useEffect } from 'react';
import styled from 'styled-components';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import folhaesquerda from '../assets/FolhaEsquerda.png';
import HomeSection1 from '../assets/HomeSection1.jpg';	
import HomeSection2 from '../assets/HomeSection2.jpg';	
import HomeSection3 from '../assets/HomeSection3.jpg';	
import folhaesquerdacima from '../assets/FolhaEsquerdaCima.png';
import folhadireitabaixo from '../assets/FolhaDireitaBaixo.png';
import homeSection from '../assets/HomeSection.png';
import '../components/home.css';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    // Call at mount to ensure we have the initial size
    handleResize();

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}



const Wrapper = styled.section`
  background: white;
  text-align: center;
  width: 100%;
  height: auto;
  min-height: calc(100% + 10vh);
  
  margin-top: 4em;
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
  margin-right: 2em;
  margin-left: 2em;
  width: 500px;
`;

const FrameImage = styled.div`
  position: relative;
  margin-left: 2em;
  width: 700px;
  height: 500px;
  overflow: visible;
`;


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
  width: 30%;
  height: 30%;
  z-index: 1000;
  right: 0;
  bottom: 0;
  
  transition: transform 0.35s ease-out;
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

const Home = ({ imgurl, altText, title, paragraph, button, transform }) => {
  const { width } = useWindowSize(); // Use the custom hook
  return (
    <Wrapper>
      <Container>
      <FrameText>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <button style={{ padding: '10px 10px', color: "black", borderColor: '#2ebc15' }}>{button}</button>
      </FrameText>
      <FrameImage>
        <ResponsiveImage src={imgurl} alt={altText} />
        {width > 768 &&<ResponsiveFolhaDireita src={folhadireitabaixo} style={{ transform: transform }}/>}
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
    title: 'Transforme Seu Carbono em Impacto',
    paragraph: ' A primeira plataforma do Brasil que converte dívidas de carbono em oportunidades de investimento verde, credenciada pela CVM',
    button: 'Learn More'
  },
  {
    key: 'slide2',
    src: HomeSection2,
    alt: 'Another image description',
    title: 'Faça a Diferença com Seu Projeto',
    paragraph: '  Junte-se à vanguarda do movimento verde no Brasil com a EcoFunding, a primeira e única plataforma dedicada a transformar projetos sustentáveis em realidade, sob o aval da CVM. Aqui, sua iniciativa não apenas ganha visibilidade, mas também atrai investimentos comprometidos com um futuro sustentável.',
    button: 'Saiba Mais'
  },
  {
    key: 'slide2',
    src: HomeSection3,
    alt: 'Another image description',
    title: 'O Poder Verde do Seu Investimento',
    paragraph: 'Descubra como seu investimento pode gerar retorno financeiro e ao mesmo tempo combater a dívida de carbono do Brasil. A EcoFunding, certificada pela CVM, oferece um caminho seguro e inovador para investir em projetos que lideram a transição para a sustentabilidade.',
    button: 'Investir Agora'
  },
  // Add more slide objects as needed
];

const HomeCarousel = () => {
  const [slideHeight, setSlideHeight] = useState(40); // Default slide height
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
  const updateDimensions = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      setSlideHeight(150); // Example: Increase height for smaller screens
    } else {
      setSlideHeight(40); // Reset to default for larger screens
    }
  };

  useEffect(() => {
    updateDimensions(); // Set initial value
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={slideHeight}
      totalSlides={slidesData.length}
    >
        <Wrapper2 onMouseMove={handleMouseMove}>
        <ParallaxFolhaCima ref={folhaCimaRef} src={folhaesquerdacima} />
          <Slider>
            {slidesData.map((slide, index) => (
              <Slide index={index} key={slide.key}>
                <Home
                  imgurl={slide.src}
                  altText={slide.alt}
                  title={slide.title}
                  paragraph={slide.paragraph}
                  button={slide.button}
                  transform={`translate(${mousePosition.mouseX * 0.3}%, ${mousePosition.mouseY * 0.3}%)`}
                />
              </Slide>
            ))}
          </Slider>
          <div className="controls">
            <DotGroup style={{ marginBottom: '50px' }} className="dot-group" />
          </div>
          <ParallaxFolha ref={folhaRef} src={folhaesquerda} alt="folha" />
        </Wrapper2>
      </CarouselProvider>
    );
  };
export default HomeCarousel;
