import React, { useState } from 'react'
import styled from 'styled-components'
import ESGBG from '../assets/ESG1.png'
import ESG2 from '../assets/ESG2.png'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 110vh;
  background-image: url(${ESGBG});

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
    padding: 20px;
  }
`;


const Button = styled.button`
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 12px;
  border-color: transparent;
  color: ${({ active }) => (active ? 'white' : 'black')};
  background: ${({ active }) =>
    active ? 'linear-gradient(180deg, rgba(102,102,102,1) 0%, rgba(154,154,154,1) 100%);' : 'linear-gradient(180deg, rgba(197, 197, 197, 1) 0%, rgba(255, 255, 255, 1) 100%)'};
`

const ImageDisplay = styled.img`
  max-width: 800px; // Maximum width for large screens
  width: 100%; // Make the image width responsive
  height: auto; // Maintain aspect ratio
  border-radius: 4px;
  padding: 5px;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 400px; // Adjust max-width for tablet devices
  }
  @media (max-width: ${breakpoints.mobile}) {
    max-width: 200px; // Adjust max-width for mobile devices
  }
`;

const TextDisplay = styled.p`
  text-align: center;
  color: white;
  width: 100%px;
  background-color: rgba(51, 100, 40, 0.7);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  word-break: break-word;
  height: auto;
  @media (min-width: ${breakpoints.desktop}) {
    max-width: 500px; // Adjust max-width for tablet devices
  }
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 400px; // Adjust max-width for tablet devices
  }
  @media (max-width: ${breakpoints.mobile}) {
    max-width: 200px; // Adjust max-width for mobile devices
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
  width: 400px;
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
  margin-top: -1em;
`;



const ESG = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: ESG2, alt: 'Image 1', text: '\nThis is image 1 description. This is image 1 description.This is image 1 description. This is image 1 description.This is image 1 description.This is image 1 description.This is image 1 description.This is image 1 description.This is image 1 description.This is image 1 description.This is image 1 description.This is image 1 description.This is image 1 description.This is image 1 description.' },
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
  const buttonStylePrev = {
    width: "30px",
    background: 'none',
    border: '0px',
    marginRight: '10em',
  };
  const buttonStyleNext = {
    width: "30px",
    background: 'none',
    border: '0px',
    marginLeft: '10em',
  };
  
  const properties = {
    prevArrow: <button style={{ ...buttonStylePrev }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyleNext }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>,
  };
  return (
    <Container>
      <H1>Saiba Mais Sobre ESG</H1>
      <ButtonDiv className='slide-container'>
        <Slide {...properties} slidesToScroll={2} slidesToShow={3}>
          {images.map((_, index) => (
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
        <TextRectangle>
          <TextDisplay>{images[currentIndex].text}</TextDisplay>
        </TextRectangle>
      </TextImage>
    </Container>
  );
};

export default ESG;