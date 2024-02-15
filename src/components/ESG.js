import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
`;

const Button = styled.button`
  padding: 10px;
  margin: 5px;
  cursor: pointer;
`;

const ImageDisplay = styled.img`
  max-width: 300px;
  max-height: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
`;

// Your component
const ESG = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'URL_TO_IMAGE_1',
    'URL_TO_IMAGE_2',
    'URL_TO_IMAGE_3',
    // Add more image URLs as needed
  ];

  return (
    <Container>
      <div>
        {images.map((_, index) => (
          <Button key={index} onClick={() => setCurrentIndex(index)}>
            Image {index + 1}
          </Button>
        ))}
      </div>
      <ImageDisplay src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
    </Container>
  );
}

export default ESG;
