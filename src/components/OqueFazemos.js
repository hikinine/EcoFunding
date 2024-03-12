
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'react-animation/dist/keyframes.css';
import Mapa from './Mapa';
import { useMarker } from './earth/MarkerContext';
import { MediumAndDown } from './breakpoints';
import Fundo from '../assets/FUNDO_GLOBO.jpg';
import { Link } from 'react-router-dom';
import EcoAlgo from '../assets/EcoAlgo.png'
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

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${Fundo});
  
  background-size: cover;
  width: 100%;
  max-width: 100%;
  height: 80vh;
  @media (max-width: 768px) {
    flex-direction: column;
    
  }

  
  * {
    font-family: 'Lexend Tera', sans-serif;
  }
`;

const Content = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  margin-right: 1rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 12px;
  border: none;
  width: 20vw;
  align-self: flex-end;
  cursor: pointer;
  @media (max-width: 768px){
    padding: auto;
    width: 100%;
    align-self: center;
  }
`;

const Header = styled.h1`
  font-size: 64px;
  margin-bottom: 10px;
  margin-left: 3rem;
  color: white;
  text-align: center;
  font-weight: 500;
  font-family: 'Lexend Tera', sans-serif !important;
  @media (max-width: 768px) {
    font-size: 32px; // Adjust font size for mobile
    margin-left: 2rem; // Adjust margin for mobile
    text-align: center; // Center text on mobile
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 18px;
  
  word-break: break-word;
  color: white;
  font-weight: lighter;
  font-family: 'Lexend Tera', sans-serif !important;
  text-align: end;
  @media (max-width: 768px) {
    font-size: 16px; // Adjust font size for mobile
    margin-left: 2rem; // Adjust margin for mobile
    text-align: center; // Center text on mobile
  }
`;
const Image = styled.img`
  max-width: 800px;
  
  margin-left: 1rem;
  margin-top: 1rem;
  @media (max-width: 768px) {
    max-width: 200px;
  }
  @media (max-width: 1308px) {
    max-width: 400px;
  }
`

const OverlayContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  width: 100%; // Ensures the container spans the full width
  text-align: right; // Aligns the button to the right
`;
// Animation Variants
const slideInFromLeft = {
  hidden: { x: -100, opacity: 0.5 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

// Component
const OqueFazemos = () => {
  const [showContent, setShowContent] = useState(true);
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { selectedMarker } = useMarker();
  const { width } = useWindowSize(); // Use the custom hook
  useEffect(() => {
    console.log('Selected Marker changed:', selectedMarker);
  }, [selectedMarker]);
  
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);
  
  return (
    <Container>
      
      <Image src={EcoAlgo} />
      
      {showContent && (
        <Content show={showContent}>
          <ColumnFlex>
            <Header>O que Fazemos</Header>
            <Paragraph
              ref={ref}
              variants={slideInFromLeft}
              initial="hidden"
              animate={controls}
            >
              Na Ecofunding, nosso compromisso é com o futuro do planeta. Unimos tecnologia, sustentabilidade e finanças para criar um impacto ambiental positivo.
            </Paragraph>
            <ButtonContainer>
            <Link to="/SaibaMais" > <Button>Saiba Mais</Button> </Link>
            </ButtonContainer>
          </ColumnFlex>
        </Content>
      )}
    </Container>
  );
};

export default OqueFazemos;