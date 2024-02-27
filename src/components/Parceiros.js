import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FolhaEsquerda from '../assets/FolhaEsquerda.png';
import FolhaEsquerdaCima from '../assets/FolhaEsquerdaCima.png';
import FolhaMeio from '../assets/FolhaMeio.png';
import Image from '../assets/HomeSection.png';
import FolhaDireitaBaixo from '../assets/FolhaDireitaBaixo.png';
import Home from './Home';



const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;

const Container1 = styled.div`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: stretch;
  padding-right: var(--dl-space-space-sixunits);
  justify-content: space-between;
`;

const Container2 = styled.div`
  flex: 0 0 auto;
  left: 0px;
  width: 200px;
  bottom: 0px;
  height: auto;
  display: flex;
  position: absolute;
  align-self: flex-end;
  align-items: flex-start;
  padding-left: 0px;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 768px) {
    display: none;
    
  }
`;

const StyledImage = styled.img`
  width: 200px;
  object-fit: cover;
`;

const Container3 = styled(Container2)`
  top: 0px;
  margin: auto;
`;

const Image1 = styled(StyledImage)`
  width: 149px;
  height: 104px;
  align-self: flex-start;
  margin-top: 0px;
  @media (max-width: 768px) {
    display: none;
    
  }
`;

const Container4 = styled.div`
  width: 497px;
  height: 399px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.h1`
  align-self: center;
`;

const TextParagraph = styled.p`
  width: var(--dl-size-size-xxlarge);
  height: 100%;
  align-self: center;
  word-break: break-word;
`;

const Container5 = styled.div`
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Button = styled.button`
  align-self: flex-end;
  margin-right: var(--dl-space-space-sixunits);
`;

const Container7 = styled.div`
  flex: 0 0 auto;
  width: 531px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Image2 = styled(StyledImage)`
  width: 100%;
  height: 100%;
  margin-right: 20%;
`;

const Image3 = styled(StyledImage)`
  right: -30px;
  width: 200px;
  bottom: -54px;
  margin: auto;
  position: absolute;
  align-self: flex-end;
  margin-right: 10%;
`;

const Container8 = styled.div`
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  right: 0px;
  width: 200px;
  bottom: 0px;
  height: auto;
  margin: auto;
  display: flex;
  position: absolute;
  align-self: flex-end;
  align-items: flex-start;
  padding-left: 0px;
  flex-direction: row;
  justify-content: center;
`;

const Image4 = styled(StyledImage)`
  width: 200px;
  @media (max-width: 768px) {
    display: none;
    
  }
`;

// Add media queries as needed using styled-components' css helper

const Parceiros = (props) => {
  return (
    <Container>
      <Home></Home>
    </Container>
  );
};

Parceiros.defaultProps = {
  button: 'Button',
  heading: 'Heading',
  text: 'Text',
  text1: 'Text',
  imageAlt1: 'image',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading1: 'Heading',
  imageSrc1: '/homesection-600w.png',
  imageAlt: 'image',
  imageSrc2: '/folhaesquerda-200h.png',
  imageAlt2: 'image',
  imageSrc3: '18730d8a-b9b9-41cf-9340-7705ef2a20ba',
  imageAlt3: 'image',
  imageSrc21: 'e1229e4e-4075-4525-a8f2-aa7ebff4ea61',
  imageAlt21: 'image',
  imageSrc4: '/folhaesquerdacima-200h.png',
  imageAlt4: 'image',
  imageSrc5: '/folhameio-400h.png',
  imageAlt5: 'image',
  imageSrc41: '18730d8a-b9b9-41cf-9340-7705ef2a20ba',
  imageAlt41: 'image',
  imageSrc6: '/folhadireitabaixo-400h.png',
  imageAlt6: 'image',
  imageSrc51: '3ca9a6e8-19a9-42fe-8762-102b09a0ba3c',
  imageAlt51: 'image',
};

Parceiros.propTypes = {
  button: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc: PropTypes.string,
  heading1: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc21: PropTypes.string,
  imageAlt21: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageSrc41: PropTypes.string,
  imageAlt41: PropTypes.string,
  imageSrc6: PropTypes.string,
  imageAlt6: PropTypes.string,
  imageSrc51: PropTypes.string,
  imageAlt51: PropTypes.string,
};

export default Parceiros;