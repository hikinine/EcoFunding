import React, { useState } from 'react';
import styled from 'styled-components';
import ESGBG from '../assets/ESG1.png';
import ESG2 from '../assets/ESG2.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 110vh;
  background-image: url(${ESGBG});
`;

const Button = styled.button`
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 12px;
  border-color: transparent;
  color: ${({ active }) => (active ? 'white' : 'black')};
  background: ${({ active }) => (active ? 'linear-gradient(180deg, rgba(102,102,102,1) 0%, rgba(154,154,154,1) 100%);' : 'linear-gradient(180deg, rgba(197, 197, 197, 1) 0%, rgba(255, 255, 255, 1) 100%)')}; /* Change 'green' to your desired color */
 
`;

const ImageDisplay = styled.img`
  max-width: 800px;
  max-height: 400px;
  border-radius: 4px;
  padding: 5px;
`;

const TextDisplay = styled.div`
  text-align: center;
  color: white;
  width: 800px;
  background-color: rgba(51, 100, 40, 0.7);
  border-radius: 12px;
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
  width: 400px;
  height: 100px;
  align-items: center;
  text-align: center;
  margin-top: 3em;
  margin-bottom: -1em;
`;

const ESG = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: ESG2, alt: 'Image 1', text: 'This is image 1 description.' },
    { src: ESG2, alt: 'Image 2', text: 'This is image 2 description.' },
    { src: ESG2, alt: 'Image 3', text: 'This is image 3 description.' },
    { src: ESG2, alt: 'Image 3', text: 'This is image 3 description.' },
    { src: ESG2, alt: 'Image 3', text: 'This is image 3 description.' },
    { src: ESG2, alt: 'Image 3', text: 'This is image 3 description.' },
    { src: ESG2, alt: 'Image 3', text: 'This is image 3 description.' },
    { src: ESG2, alt: 'Image 3', text: 'This is image 3 description.' },
    { src: ESG2, alt: 'Image 3', text: 'This is image 3 description.' },
    { src: ESG2, alt: 'Image 3', text: 'This is image 3 description.' },
    // Add more image objects as needed
  ];

  return (
    <Container>
      <H1>Saiba Mais Sobre ESG</H1>
      <ButtonDiv className='slide-container'>
        <Slide slidesToScroll={2} slidesToShow={3}>
          {images.map((image, index) => (
            <Button
              key={index}
              active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            >
              Image {index + 1}
            </Button>
          ))}
        </Slide>
      </ButtonDiv>
      <TextImage>
        <ImageDisplay src={images[currentIndex].src} alt={images[currentIndex].alt} />
        <TextDisplay>{images[currentIndex].text}</TextDisplay>
      </TextImage>
    </Container>
  );
};

export default ESG;
