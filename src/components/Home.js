import React from "react";
import styled from "styled-components";
import FolhaEsquerdaCima from "../assets/FolhaEsquerdaCima.png";
import FolhaEsquerda from "../assets/FolhaEsquerda.png";
import HomeSection from "../assets/HomeSection.png";
import FolhaMeio from "../assets/FolhaMeio.png";
import FolhaDireitaBaixo from "../assets/FolhaDireitaBaixo.png";
import { ThemeProvider } from "styled-components";
const StyledSlide = styled.div`
    align-items: center;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 50px;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
    padding: 10px 10px;
    position: relative;
    width: 100%;

    @media (max-width: 768px) {
        & .homesection {
            height: auto;
            object-fit: cover;
            position: relative;
            width: 200px;
            
        }
        & .frame-2 {
            height: auto;
            object-fit: cover;
            position: relative;
            width: 200px; 
            
        }
    }
`;
const Frame = styled.div`
    
    align-items: center;
    display: inline-flex;
    flex: auto;
    flex-direction: column;
    gap: 30px;
    height: 613px;
    text-align: center;
    position: relative;
    @media (max-width: 1448px) {
         height: auto;
         object-fit: cover;
         position: relative;
         width: 550px;
    }
    @media (max-width: 1100px) {
        height: auto;
         object-fit: cover;
         position: relative;
         width: 350px;
    }
`;

const TextWrapper = styled.h1`
    color: #000000;
    font-family: "Montserrat-Bold", Helvetica;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    
    text-align: left;
`;
const TextDiv = styled.p`
     color: #000000;
    font-family: "Montserrat-Medium", Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    word-break: break-word;
    text-align: left;
`;

const FolhaEsquerdaCimaImg = styled.img`
        height: 104px;
        left: 67px;
        object-fit: cover;
        position: absolute;
        top: 131px;
        width: 149px;
`;
const FolhaEsquerdaImg = styled.img`
                height: 241px;
                left: 0;
                object-fit: cover;
                position: absolute;
                top: 607px;
                width: 409px;
        
`;
const Frame2 = styled.div`
                align-items: center;
                display: inline-flex;
                flex: 0 0 auto;
                flex-direction: column;
                gap: 10px;
                justify-content: center;
                position: relative;
`;
const HomeSectionImg = styled.img`
                height: auto;
                object-fit: cover;
                position: relative;
                width: 961px;
                right: 200px;
                @media (max-width: 1810px) {
                 height: auto;
                 object-fit: cover;
                 position: relative;
                 width: 550px;
                 right: 0;
                }
                @media (max-width: 1400px) {
                 height: auto;
                 object-fit: cover;
                 position: relative;
                 width: 300px;
                }
`;
const FolhaMeioImg = styled.img`
                height: 167px;
                left: 28px;
                object-fit: cover;
                position: absolute;
                top: -64px;
                width: 248px;
`;
const FolhaDireitaBaixoImg = styled.img`
                height: 233px;
                left: 399px;
                object-fit: cover;
                position: absolute;
                top: 504px;
                width: 300px;
`;

const Home = () => {
    return (
       
        <StyledSlide>
        
            <Frame >
                <TextWrapper >Transforme Seu Carbono em Impacto</TextWrapper>
                <TextDiv >A primeira plataforma do Brasil que converte dívidas de carbono em oportunidades de investimento verde, credenciada pela CVM  </TextDiv>
            </Frame>
            <FolhaEsquerdaCimaImg className="folhaesquerdacima" alt="Folhaesquerdacima" src={FolhaEsquerdaCima} />
            <FolhaEsquerdaImg className="folhaesquerda" alt="Folhaesquerda" src={FolhaEsquerda} />
            <Frame2 className="frame-2">
                <HomeSectionImg className="homesection" alt="Homesection" src={HomeSection} />
                <FolhaMeioImg className="folhameio" alt="Folhameio" src={FolhaMeio} />
                <FolhaDireitaBaixoImg className="folhadireitabaixo" alt="Folhadireitabaixo" src={FolhaDireitaBaixo} />
            </Frame2>
            
        </StyledSlide>
       
    );
};
export default Home;
