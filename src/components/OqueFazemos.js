import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion'; // Import motion
import { useInView } from 'react-intersection-observer';
import Mapa from './Mapa';
import ImagemMapa from '../assets/mapa.png';
import EcoGiant from '../assets/ecofundinggiant.png';
import Overlay from './Overlay';
import { MarkerProvider } from './earth/MarkerContext';
import { LargeAndUp, MediumAndDown } from './breakpoints';
import responsiveFonts from './responsive-fonts';
import { animations } from 'react-animation';
import 'react-animation/dist/keyframes.css';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; /* Center children */
    background-color: #7ac26a;
    background-image: url(${EcoGiant});
    background-position: center;
    background-size: auto 320%;
    height: 80vh;
    position: relative; /* For absolute positioning of the button */
    
    ${MediumAndDown} {
        flex-direction: column;
        background-size: cover;
    }
 * {
    font-family: 'Montserrat', sans-serif;
    
  }
`;

const Content = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
`;

const ImageMap = styled.img`
    width: 40vw;
    height: auto;
    cursor: pointer;
  @media (max-width: 768px) {
   width: 25vw;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 35vw;
  }
  @media (min-width: 1025px) {
    font-size: 16px;
    width: 40vw
  }
    
`;

const Button = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    ${MediumAndDown} {
        top: 10px;
        right: 10px;
        font-size: 14px; // Make the button smaller on smaller screens
    }
`;

const Header = styled.h1`
    font-size: 24px;
    margin-bottom: 10px;
    margin-left: 4rem;
    color: white;
    font-weight: bolder;
    
    ${MediumAndDown} {
        font-size: 20px;
        margin-left: 2rem;
    }

`;

const Paragraph = styled(motion.p)`
    font-size: 18px;
    margin-left: 4rem;
    word-break: break-word;
    color: white;
    font-weight:bold;
  @media (max-width: 768px) {
   font-size: 10px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 12px;
  }
  @media (min-width: 1025px) {
    font-size: 16px;
  }


`;
const Topicos = styled(motion.ul)`
font-size: 18px;
margin-left: 4rem;
color: white;
font-weight: 600;

@media (max-width: 768px) {
   font-size: 8px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 12px;
  }
  @media (min-width: 1025px) {
    font-size: 16px;
  }
`;
const slideInFromLeft = {
  hidden: { x: -100, opacity: 0.5 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const slideInFromLeftDelayed = {
  hidden: { x: -100, opacity: 0.5 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.75 } },
};
const slideInFromRight = {
  hidden: { x: 100, opacity: 0.5 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const OqueFazemos = () => {
    const [showMapa, setShowMapa] = useState(false);
    const [showContent, setShowContent] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

    const toggleContent = () => {
        setShowMapa(!showMapa);
        setShowContent(!showContent);
    };

    return (
        <Container>
            {showContent && (
                <Content show={showContent} style={{animation: animations.popIn}} >
                    <Header>O que Fazemos</Header>
                    <Paragraph 
                               ref={ref}
                               variants={slideInFromLeft}
                               initial="hidden"
                               animate={controls}>Na Ecofunding, nosso compromisso é com o futuro do planeta. Unimos tecnologia, sustentabilidade e finanças para criar um impacto ambiental positivo.</Paragraph>
                      <Topicos 
                                variants={slideInFromLeftDelayed}
                                initial="hidden"
                                animate={controls}
                                ref={ref}>
                        <li>Captação de Projetos Sustentáveis: Identificamos e selecionamos os projetos mais promissores em sustentabilidade espalhados pelo Brasil.</li>
                        <li>Análise dos Projetos Sustentáveis: Analisamos e legalizamos os projetos selecionados, deixando eles aptos para o investimento.</li>
                        <li>Plataforma de Investimento Verde: Facilitamos o encontro entre empresas com altas dívidas de carbono e projetos ambientais inovadores.</li>
                        <li>Redução e Compensação de Carbono: Empresas investidoras recebem a oportunidade de abater até 60% de suas dívidas de carbono, além de ganhar créditos de carbono.</li>
                    </Topicos>
                    <Paragraph variants={slideInFromLeft}
                        initial="hidden"
                       animate={controls}
                       ref={ref}>Juntos, estamos construindo um legado de sustentabilidade e transformação, oferecendo às empresas uma rota clara para a compensação de carbono e um futuro mais verde, clique no mapa para saber mais sobre os projetos.</Paragraph>
                </Content>
            )}
            {!showMapa ? (
                <ImageMap src={ImagemMapa} onClick={toggleContent} initial="hidden" animate={controls} ref={ref} variants={slideInFromRight}/>
            ) : (
                <MarkerProvider>
                <Mapa />
                </MarkerProvider>
                
            )}
            {showMapa && <Button onClick={toggleContent}>Retornar</Button>}
            
        </Container>
    );
};

export default OqueFazemos;
