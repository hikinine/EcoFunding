import React, { useState } from 'react';
import styled from 'styled-components';
import ESGBG from '../assets/ESG1.png'; // Ensure this path is correct
import ESG2 from '../assets/ESG2.png'; // Ensure this path is correct
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-image: url(${ESGBG});
  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
    padding: 20px;
  }
  * {
    font-family: 'Montserrat', sans-serif;
  }
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  height: 70%;
  width: auto;
  cursor: pointer;
  border-radius: 12px;
  border-color: transparent;
  color: ${({ active }) => (active ? 'white' : 'black')};
  background: ${({ active }) =>
    active ? 'linear-gradient(180deg, rgba(102,102,102,1) 0%, rgba(154,154,154,1) 100%);' : 'linear-gradient(180deg, rgba(197, 197, 197, 1) 0%, rgba(255, 255, 255, 1) 100%)'};
`;

const ImageDisplay = styled.img`
  max-width: 800px;
  width: 100%;
  height: ;
  border-radius: 4px;
  padding: 5px;
  z-index: 1;
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 400px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    max-width: 200px;
  }
`;

const TextDisplay = styled.p`
  text-align: start;
  color: white;

  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  word-break: break-word;
  height: auto;
  @media (min-width: ${breakpoints.desktop}) {
    max-width: 500px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 400px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    max-width: 200px;
  }
`;

const TextImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  color: white;
  margin-top: 1em;
`;

const ButtonDiv = styled.div`
  width: 600px;
  height: 100px;
  align-items: center;
  text-align: center;
  margin-top: 3em;
  margin-bottom: -1em;
`;

const TextRectangle = styled.div`
  background-color: rgba(51, 100, 40, 0.7);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  margin-top: -0.5em;
  display: flex; /* Use Flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 20px; /* Add some padding */
  flex-direction: column;
`;

// New styles for positioning the arrows
const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
`;

const PrevArrowButton = styled(ArrowButton)`
  left: -50px; // Adjust as needed
`;

const NextArrowButton = styled(ArrowButton)`
  right: -50px; // Adjust as needed
`;
const TestArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  & svg {
    color: white;
    background: none; // Explicitly state transparency here too
    border: none;
  }
`;


const ESG = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { 
      src: ESG2, 
      alt: 'Image 1',  
      text: `Os créditos de carbono são parte essencial do esforço global para combater as mudanças climáticas. Eles funcionam como instrumentos financeiros que representam a redução de emissões de gases de efeito estufa (GEE). Abaixo, detalhamos uma visão geral sobre os créditos de carbono, seu funcionamento e importância.
      • Unidade de Medida: Um crédito de carbono equivale à redução de uma tonelada métrica de dióxido de carbono ou de um gás de efeito estufa equivalente. 
      • Moeda Ambiental: Podem ser vistos como uma "moeda" que quantifica o esforço de redução ou remoção  de emissões de gases de efeito estufa.`,
      button: 'Saiba Mais',
      topico: 'O que são Créditos de Carbono?' 
    },
    { 
      src: ESG2, 
      alt: 'Image 2',  
      text: `Sustentabilidade é um conceito fundamental na era atual, refletindo a necessidade de desenvolvermos práticas e políticas que garantam a saúde e a viabilidade do nosso planeta para as gerações futuras. Trata-se de um equilíbrio entre crescimento econômico, cuidado com o meio ambiente e bem-estar social, formando os pilares essenciais para uma sociedade mais justa e um mundo mais habitável.`,
      button: 'Saiba Mais',
      topico: 'Sustentabilidade: Um Compromisso com o Futuro' 
    },
    { 
      src: ESG2, 
      alt: 'Image 3',  
      text: `A responsabilidade ambiental é um princípio essencial para a preservação do nosso planeta, exigindo a conscientização e ação de indivíduos, empresas e governos na promoção de um futuro mais sustentável. Este conceito abrange a obrigação de minimizar o impacto negativo das atividades humanas no meio ambiente, assegurando a conservação dos recursos naturais para as presentes e futuras gerações.`,
      button: 'Saiba Mais',
      topico: 'Responsabilidade Ambiental'
    },
    { 
      src: ESG2, 
      alt: 'Image 4',  
      text: `
      A pegada de carbono mede o impacto ambiental das atividades humanas, quantificando a emissão total de gases de efeito estufa (GEEs), como CO2, CH4, N2O, entre outros. Essencial no âmbito corporativo, essa métrica é crucial para entender e mitigar o contributo das empresas ao aquecimento global e mudanças climáticas. Os GEEs intensificam o efeito estufa, elevando a temperatura global, o que resulta em derretimento de gelo polar, alterações climáticas significativas e eventos meteorológicos extremos.`,
      button: 'Saiba Mais',
      topico: 'Entendendo a Pegada de Carbono: Impacto e Gestão'
    },
    { 
      src: ESG2, 
      alt: 'Image 5',  
      text: `A energia renovável é o pilar central para uma transição energética sustentável e para o combate às mudanças 
      climáticas. Diferente dos combustíveis fósseis, as fontes renováveis, como solar, eólica, hidráulica e geotérmica, 
      fornecem energia limpa, reduzindo as emissões de gases de efeito estufa. A mudança para energias renováveis não 
      só beneficia o meio ambiente, mas também impulsiona a economia, diminuindo custos de energia a longo prazo e 
      criando novas oportunidades de emprego.
      `,
      button: 'Saiba Mais',
      topico: 'Energia Renovável: Sustentabilidade e Inovação'
    },
    // Add more image objects as needed
  ];
  const properties = {
    prevArrow: (
      <TestArrowButton style={{ left: '-50px', background: 'none', border: 'none', }}> <FaArrowLeft /></TestArrowButton>
    ),
    nextArrow: (
      <TestArrowButton style={{ right: '-50px', background: 'none', border: 'none', }}> <FaArrowRight /></TestArrowButton>
    ),
    // Other properties
  };
  
  return (
    <Container>
      <H1>Saiba Mais Sobre ESG</H1>
      <SliderWrapper>
        <ButtonDiv className='slide-container'>
          <Slide {...properties} slidesToScroll={2} slidesToShow={3}>
            {images.map((image, index) => (
              <Button
                key={index}
                active={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
              >
                {image.topico}
              </Button>
            ))}
          </Slide>
        </ButtonDiv>
      </SliderWrapper>
      <TextImage>
        <ImageDisplay src={images[currentIndex]?.src} alt={images[currentIndex]?.alt} />
        <TextRectangle>
        <TextDisplay>
          {images[currentIndex].text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}<br />
            </React.Fragment>
          ))}
        </TextDisplay>
          <Link to={`/page${currentIndex + 1}`}>
              <Button>Saiba Mais</Button>
            </Link>
        </TextRectangle>
      </TextImage>
    </Container>
  );
};

export default ESG;
