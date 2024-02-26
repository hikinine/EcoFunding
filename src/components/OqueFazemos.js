import React, { useState } from 'react';
import styled from 'styled-components';
import Mapa from './Mapa';
import ImagemMapa from '../assets/mapa.png';
import EcoGiant from '../assets/ecofundinggiant.svg';
import Overlay from './Overlay';
import { MarkerProvider } from './earth/MarkerContext';

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
`;

const Content = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
`;

const ImageMap = styled.img`
    width: 40vw;
    height: auto;
    cursor: pointer;
    
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
const OqueFazemos = () => {
    const [showMapa, setShowMapa] = useState(false);
    const [showContent, setShowContent] = useState(true);

    const toggleContent = () => {
        setShowMapa(!showMapa);
        setShowContent(!showContent);
    };

    return (
        <Container>
            {showContent && (
                <Content show={showContent}>
                    <Header>O que Fazemos</Header>
                    <Paragraph>Na Ecofunding, nosso compromisso é com o futuro do planeta. Unimos tecnologia, sustentabilidade e finanças para criar um impacto ambiental positivo.</Paragraph>
                    <ul style={{ color: 'white', paddingLeft: '100px'}}>
                        <li>Captação de Projetos Sustentáveis: Identificamos e selecionamos os projetos mais promissores em sustentabilidade espalhados pelo Brasil.</li>
                        <li>Análise dos Projetos Sustentáveis: Analisamos e legalizamos os projetos selecionados, deixando eles aptos para o investimento.</li>
                        <li>Plataforma de Investimento Verde: Facilitamos o encontro entre empresas com altas dívidas de carbono e projetos ambientais inovadores.</li>
                        <li>Redução e Compensação de Carbono: Empresas investidoras recebem a oportunidade de abater até 60% de suas dívidas de carbono, além de ganhar créditos de carbono.</li>
                    </ul>
                    <Paragraph>Juntos, estamos construindo um legado de sustentabilidade e transformação, oferecendo às empresas uma rota clara para a compensação de carbono e um futuro mais verde</Paragraph>
                </Content>
            )}
            {!showMapa ? (
                <ImageMap src={ImagemMapa} onClick={toggleContent} />
            ) : (
                <MarkerProvider>
                <Mapa />
                </MarkerProvider>
                
            )}
            <Button onClick={toggleContent}>{showMapa ? 'Return' : 'Change to Mapa'}</Button>
        </Container>
    );
};

export default OqueFazemos;
