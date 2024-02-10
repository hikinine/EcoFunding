import React from 'react';
import styled from 'styled-components';
import Mapa from './Mapa';
import ImagemMapa from '../assets/mapa.png';
import EcoGiant from '../assets/ecofundinggiant.png';

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #7ac26a;
    align-items: center;
    background-image: url(${EcoGiant});
    background-position: center;
    height: 80vh;
    
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    margin-right: 20px;
`;

const Content = styled.div`
    flex: 1;
`;

const Header = styled.h1`
    font-size: 24px;
    margin-bottom: 10px;
    margin-left: 4rem;
    color: white;
`;

const Paragraph = styled.p`
    font-size: 16px;
    margin-left: 4rem;
    word-break: break-word;
    color: white;
`;

const ImageMap = styled.img`
    width: 40vw;
    height: 100%;
    margin-right: 20px;
`;

const FAQ = () => {
    return (
        <Container>
            <Content>
                <Header>O que Fazemos</Header>
                <Paragraph>This is the paragraphThis is the paragraphThis is the paragraphThis is the paragraphThis is the paragraphThis is the paragraphThis is the paragraph</Paragraph>
            </Content>
           
            <Content>
            <Header>Teste</Header>
            <Paragraph>teste teste teste</Paragraph>
            </Content>
        </Container>
    );
};

export default FAQ;