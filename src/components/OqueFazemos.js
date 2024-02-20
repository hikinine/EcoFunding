import React from 'react';
import styled from 'styled-components';
import Mapa from './Mapa';
import ImagemMapa from '../assets/mapa.png';
import EcoGiant from '../assets/ecofundinggiant.svg';

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #7ac26a;
    align-items: center;
    background-image: url(${EcoGiant});
    background-position: center;
    background-size: auto 320%;
    
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
const Ul = styled.ul`
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

const OqueFazemos = () => {
    return (
        <Container>
            <Content>
                <Header>O que Fazemos</Header>
                <Paragraph>Na Ecofunding, nosso compromisso é com o futuro do planeta. Unimos tecnologia, sustentabilidade e finanças para criar um impacto ambiental positivo.</Paragraph>
                <Ul>
                    <li>Captação de Projetos Sustentáveis: Identificamos e selecionamos os projetos mais promissores em sustentabilidade espalhados pelo Brasil.</li>
                    <li>Análise dos Projetos Sustentáveis: Analisamos e legalizamos os projetos selecionados, deixando eles aptos para o investimento. </li>
                    <li>Plataforma de Investimento Verde: Facilitamos o encontro entre empresas com altas dívidas de carbono e projetos ambientais inovadores.</li>
                    <li>Redução e Compensação de Carbono: Empresas investidoras recebem a oportunidade de abater até 60% de suas dívidas de carbono, além de ganhar créditos de carbono.</li>
                </Ul>
                <Paragraph>Juntos, estamos construindo um legado de sustentabilidade e transformação, oferecendo às empresas uma rota clara para a compensação de carbono e um futuro mais verde.</Paragraph>
            </Content>
             
            <Content>
            <Mapa style={{height: '90vh'}}/>
            </Content>
        </Container>
    );
};

export default OqueFazemos;