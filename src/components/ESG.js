import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import ESGBG from '../assets/ESG1.png'; // Ensure this path is correct
import ESG2 from '../assets/ESG2.png'; 
import { Link } from 'react-router-dom';

import './styleESG.css'
import 'react-animation/dist/keyframes.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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
  background-color: #242a32;
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
  margin-bottom: 30px;
  height: 60px;
  width: auto;
  cursor: pointer;
  border: 2px solid #2ebc15;
  color: ${({ active }) => (active ? 'white' : 'gray')};
  background: ${({ active }) =>
    active ? '#2ebc15' : 'transparent'};
    @media (max-width: ${breakpoints.tablet}) {
    width: 200px;
    height: 100px;
    padding-left: 20px;
    margin: 10px auto;
  }
`;

const ImageDisplay = styled.img`
  max-width: 800px;
  width: 100%;
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

const TextImage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled(motion.h1)`
  color: white;
  margin-top: 1em;
`;
const animationOpacity = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 }
  },
};

const ButtonDiv = styled.div`
  width: 100%; /* Ensure it spans the full width of its parent */
  display: flex;
  justify-content: center; /* This will center the button */
  align-items: center;
  margin-top: 3em;
  margin-bottom: -1em;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%; /* Adjust if necessary */
  }
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

// New styles for positioning



const ESG = () => {
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
      text: `A pegada de carbono mede o impacto ambiental das atividades humanas, quantificando a emissão total de gases de efeito estufa (GEEs), como CO2, CH4, N2O, entre outros. Essencial no âmbito corporativo, essa métrica é crucial para entender e mitigar o contributo das empresas ao aquecimento global e mudanças climáticas. Os GEEs intensificam o efeito estufa, elevando a temperatura global, o que resulta em derretimento de gelo polar, alterações climáticas significativas e eventos meteorológicos extremos.`,
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
  return (
   
    <Container as={motion.div} inView={{ opacity: 0.4 }}>
      <H1 ref={ref}
          variants={animationOpacity}
          initial="hidden"
          animate={controls}>Saiba Mais Sobre ESG</H1>
 
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          style={{width: '70vw'}}
          className='mySwiper'
          
          breakpoints={{
           
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // When window width is >= 768px (tablet)
    768: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // When window width is >= 1024px (desktop)
    1024: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }}
>
  {images.map((image, index) => (
    <SwiperSlide key={index}>
      <ButtonDiv>
        <Button
          active={index === currentIndex}
          onClick={() => setCurrentIndex(index)}
        >
          {image.topico}
        </Button>
      </ButtonDiv>
    </SwiperSlide>
  ))}
</Swiper>
      <TextRectangle style={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px', marginTop: '2em'}}>
      <TextDisplay>Deslize para saber mais.</TextDisplay>
      </TextRectangle>
      <TextImage ref={ref}
          variants={animationOpacity}
          initial="hidden"
          animate={controls}>
        <ImageDisplay src={images[currentIndex]?.src} alt={images[currentIndex]?.alt} />
        <TextRectangle>
          <TextDisplay>
            {images[currentIndex].text.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}<br />
              </React.Fragment>
            ))}
          </TextDisplay>
          <Link to={`/Page${currentIndex + 1}`}>
              <Button>Saiba Mais</Button>
            </Link>
        </TextRectangle>
      </TextImage>
    </Container>

  );
};


export default ESG;
