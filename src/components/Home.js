<<<<<<< Updated upstream
import React from "react";
import styled from "styled-components";
import FolhaEsquerdaCima from "../assets/FolhaEsquerdaCima.png";
import FolhaEsquerda from "../assets/FolhaEsquerda.png";
import HomeSection from "../assets/HomeSection.png";
import FolhaMeio from "../assets/FolhaMeio.png";
import FolhaDireitaBaixo from "../assets/FolhaDireitaBaixo.png";
const StyledSlide = styled.div`
=======


import React, { useState, useRef, useContext, Component, useEffect } from 'react';
import styled from 'styled-components';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import FolhaEsquerda from '../assets/FolhaEsquerda.webp';
import HomeSection1 from '../assets/HomeSection1.webp';	
import HomeSection2 from '../assets/HomeSection3.webp';	
import HomeSection3 from '../assets/HomeSection2.webp';	
import folhaesquerdacima from '../assets/FolhaEsquerdaCima.webp';
import folhadireitabaixo from '../assets/FolhaDireitaBaixo.webp';
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
  justify-content: center;
  align-items: center;
  
  margin-top: 2em;
  margin-bottom: 2em;
  width: 100vw;
  height: auto;
  gap: 10em;
  @media (max-width: 768px) {
    height: auto;
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
  justify-content: flex-start;
  align-items: start;
  margin-top: -10em;
  width: 700px;
  overflow: visible;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-top: 2em;
    

  }
`;

const FrameImage = styled.div`

  position: relative;
  margin-left: 2em;
  width: 33vw;
  height: 500px;
  overflow: visible;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 2em;
    flex-direction: column;
    justify-content: center;
>>>>>>> Stashed changes
    align-items: center;
    background-color: #ffffff;
    display: flex;
    gap: 20px;
    justify-content: center;
    height: 1080px;
    min-width: 1920px;
    padding: 10px 10px;
    position: relative;
    width: 100%;

    @media (max-width: 768px) {
        & .homesection {
            height: auto;
            object-fit: cover;
            position: relative;
            width: 200px;
            
        }
        & .frame-2 {
            height: auto;
            object-fit: cover;
            position: relative;
            width: 200px; 
            
        }
    }


`;
const Frame = styled.div`
        width: 426px;
        align-items: center;
        display: inline-flex;
        flex: 1 0 auto;
        flex-direction: column;
        gap: 10px;
        height: 713px;
        width: 426px;
        text-align: center;
        position: relative;
`;
const TextWrapper = styled.div`
        color: #000000;
        font-family: "Montserrat-ExtraBold", Helvetica;
        font-size: 96px;
        font-weight: 800;
        height: 93px;
        letter-spacing: 0;
        line-height: normal;
        position: relative;
        white-space: nowrap;
        width: 526px;
      
`;
<<<<<<< Updated upstream
const TextDiv = styled.div`
         color: #000000;
        font-family: "Montserrat-Medium", Helvetica;
        font-size: 40px;
        font-weight: 500;
        height: 481px;
        letter-spacing: 0;
        line-height: normal;
        position: relative;
        width: 574px;
        word-break: break-word;   
`;
const FolhaEsquerdaCimaImg = styled.img`
        height: 104px;
        left: 67px;
        object-fit: cover;
        position: absolute;
        top: 131px;
        width: 149px;
`;
const FolhaEsquerdaImg = styled.img`
                height: 241px;
                left: 0;
                object-fit: cover;
                position: absolute;
                top: 607px;
                width: 409px;
        
`;
const Frame2 = styled.div`
                align-items: center;
                display: inline-flex;
                flex: 0 0 auto;
                flex-direction: column;
                gap: 10px;
                justify-content: center;
                position: relative;
`;
const HomeSectionImg = styled.img`
                height: auto;
                object-fit: cover;
                position: relative;
                width: 761px;
                right: 100px;
`;
const FolhaMeioImg = styled.img`
                height: 167px;
                left: 28px;
                object-fit: cover;
                position: absolute;
                top: -64px;
                width: 248px;
`;
const FolhaDireitaBaixoImg = styled.img`
                height: 233px;
                left: 399px;
                object-fit: cover;
                position: absolute;
                top: 504px;
                width: 300px;
`;
const Home = () => {
    return (
        <StyledSlide>
        
            <Frame >
                <TextWrapper >Texto CTA</TextWrapper>
                <TextDiv >
                    CopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopy
                </TextDiv>
            </Frame>
            <FolhaEsquerdaCimaImg className="folhaesquerdacima" alt="Folhaesquerdacima" src={FolhaEsquerdaCima} />
            <FolhaEsquerdaImg className="folhaesquerda" alt="Folhaesquerda" src={FolhaEsquerda} />
            <Frame2 className="frame-2">
                <HomeSectionImg className="homesection" alt="Homesection" src={HomeSection} />
                <FolhaMeioImg className="folhameio" alt="Folhameio" src={FolhaMeio} />
                <FolhaDireitaBaixoImg className="folhadireitabaixo" alt="Folhadireitabaixo" src={FolhaDireitaBaixo} />
            </Frame2>
            
        </StyledSlide>
=======
const Button1 = styled.button`
  padding: 10px 50px;
  color: ${props => props.buttonText === 'Regulada pela CVM' ? 'white' : '#242a32'}; // Initial color
  background-color: ${props => props.buttonText === 'Regulada pela CVM' ? '#242a32' : 'transparent'}; // Conditional background color
  border: ${props => props.buttonText === 'Regulada pela CVM' ? '1px solid #242a32' : '1px solid #242a32'} ; // Set border-color and assume a default border style of solid
  font-family: 'Lexend Tera';
  font-weight:550;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 2em;
  @media (max-width: 768px) {
    font-size: 8px;
    

  }

  
  &:hover {
    color: ${props => props.buttonText === 'Regulada pela CVM' ? '#242a32' : 'white'}; // New text color on hover
    background-color: ${props => props.buttonText === 'Regulada pela CVM' ? 'transparent' : '#242a32'}; // New background color on hover
  }
`;
const StyledCarouselProvider = styled(CarouselProvider)`
  height: 95vh;
`;

const Home = ({ imgurl, altText, title, paragraph, button, transform }) => {
  const { width } = useWindowSize(); // Use the custom hook

  // Function to render title with conditional line breaks
  const renderTitle = (title) => {
    // Define the substring to break the line before, case-insensitive
    const breakBefore = "eco-sustentável";
    const breakBeforeRegex = new RegExp(`(${breakBefore})`, 'i'); // 'i' flag for case-insensitive
    const match = title.match(breakBeforeRegex);
  
    if (match) {
      // If the title contains the substring where we want to insert a line break
      const splitIndex = match.index;
      return (
        <>
          {title.substring(0, splitIndex)}
          <br />
          {title.substring(splitIndex)}
        </>
      );
    }
    return title; // No specific break point found, return the title as is
  };
 
  return (
    <Wrapper>
      <Container>
        <FrameText>
          <H11>{renderTitle(title)}</H11>
          <Paragraph1>{paragraph}</Paragraph1>
          <Button1 buttonText={button}>{button}</Button1>
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
    title: 'Nascemos para conectar propósitos sustentáveis a realidades transformadoras',
    paragraph: 'Somos a primeira plataforma corporate crowdfunding de investimentos sustentáveis do Brasil.',
    button: 'Regulada pela CVM'
  },
  {
    key: 'slide2',
    src: HomeSection3,
    alt: 'Seja um investidor eco-sustentável',
    title: `Torne-se um investidor EcoSustentável`,
    paragraph: 'Transforme seu débito em crédito ambiental.',
    button: 'CADASTRE-SE'
    
  },
  {
    key: 'slide2',
    src: HomeSection2,
    alt: 'Another image description',
    title: `Torne-se um parceiro Ecosustentável`,
    paragraph: 'Analisamos a viabilidade de seu projeto.',
    button: 'CADASTRE-SE'
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
  
    switch (true) {
      case windowWidth < 668:
        setSlideHeight(110); // Example: Increase height for smaller screens
        break;
      case windowWidth >= 668 && windowWidth < 1604:
        setSlideHeight(27); // Hypothetical case: Medium screens
        break;
      case windowWidth >= 1604:
        setSlideHeight(20); // Reset to default for larger screens
        break;
      default:
        // Optionally handle any unexpected cases
        console.log("Unhandled window width: ", windowWidth);
    }
  };

  useEffect(() => {
    updateDimensions(); // Set initial value
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <StyledCarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={slideHeight}
      totalSlides={slidesData.length}
      style={{ marginTop: '-8em' }}
    >
        <Wrapper2 onMouseMove={handleMouseMove}>
        <ParallaxFolha ref={folhaRef} src={FolhaEsquerda} alt="folha"/>
        <ParallaxFolhaCima ref={folhaCimaRef} src={folhaesquerdacima} />
          <Slider>
            {slidesData.map((slide, index) => (
              <Slide index={index} key={slide.key}>
                <Home
                  style={{ overflow: 'visible'}}
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
          
        </Wrapper2>
      </StyledCarouselProvider>
>>>>>>> Stashed changes
    );
};
export default Home;
