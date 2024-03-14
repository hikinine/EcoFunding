import React from 'react';
import styled from 'styled-components';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react';
import Faq from 'react-faq-component';

const data = {
    title: "FAQ",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "What is the package version",
        content: "v1.0.5"
      }]
  }
  const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #3f4c5c;
  `;
  const Header = styled.h1`
  font-size: 50px;
  color: #000;
  text-align: center;
  margin-bottom: 30px;
  `;
const FAQ = () => {
    return (
        <>
        <Container>
                <Faq data={data}/>
        </Container>
        
               
            
               
        </>
    );
};

export default FAQ;
