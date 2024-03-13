import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  background-position: center;
  background-size: cover;
  height: 100vh;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 80px;
`;
const ScrollContainer = styled.div`
  width: 60%;
  height: 80%; // Adjust based on your needs
  overflow-y: auto; // Enables vertical scrolling
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px; // Adds some padding inside the scroll container
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); // Optional: adds a shadow for better depth perception
`;

const Parceiros= () => {
    return (
      <Container>
        <ContentWrapper>
          <ScrollContainer>
            <h1>Parceiros</h1>
            <p>Conheça nossos parceiros</p>
          </ScrollContainer>
        </ContentWrapper>
      </Container>
    );
  }

export default Parceiros;