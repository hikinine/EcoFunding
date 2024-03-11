
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'react-animation/dist/keyframes.css';

import Mapa from './Mapa';
import { MarkerProvider, useMarker } from './earth/MarkerContext';
import { MediumAndDown } from './breakpoints';
import EcoGiant from '../assets/FUNDO_GLOBO.jpg';


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
  background-image: url(${EcoGiant});
  background-position: center;
  background-size: cover;
  height: 80vh;
  ${MediumAndDown} {
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
  align-self: end;
  cursor: pointer;
`;

const Header = styled.h1`
  font-size: 64px;
  margin-bottom: 10px;
  margin-left: 3rem;
  color: white;
  text-align: center;
  font-weight: 500;
  font-family: 'Lexend Tera', sans-serif !important;
  ${MediumAndDown} {
    font-size: 32px;
    margin-left: 2rem;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 18px;
  
  word-break: break-word;
  color: white;
  font-weight: lighter;
  font-family: 'Lexend Tera', sans-serif !important;
  text-align: end;
  ${MediumAndDown} {
    font-size: 20px;
    margin-left: 2rem;
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

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
      
      {width > 768 && <Mapa />}
      
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
            <Button>Saiba Mais</Button>
            
          </ColumnFlex>
        </Content>
      )}
    </Container>
  );
};

export default OqueFazemos;