import React from "react";
import styled from "styled-components";
import FolhaEsquerdaCima from "../assets/FolhaEsquerdaCima.png";
import FolhaEsquerda from "../assets/FolhaEsquerda.png";
import HomeSection from "../assets/HomeSection.png";
import FolhaMeio from "../assets/FolhaMeio.png";
import FolhaDireitaBaixo from "../assets/FolhaDireitaBaixo.png";
const StyledSlide = styled.div`
    align-items: center;
    background-color: #ffffff;
    display: flex;
    flex-direction: row
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
        width: 426px;
        align-items: center;
        display: inline-flex;
        flex: 1 0 auto;
        flex-direction: column;
        gap: 30px;
        height: 713px;
        width: 426px;
        text-align: center;
        position: relative;
`;
const TextWrapper = styled.div`
        color: #000000;
        font-family: "Montserrat-ExtraBold", Helvetica;
        font-size: 96px;
        font-weight: 800;
        height: 93px;
        letter-spacing: 0;
        line-height: normal;
        position: relative;
        white-space: nowrap;
        width: 526px;
      
`;
const TextDiv = styled.div`
         color: #000000;
        font-family: "Montserrat-Medium", Helvetica;
        font-size: 40px;
        font-weight: 500;
        height: 481px;
        letter-spacing: 0;
        line-height: normal;
        position: relative;
        width: 574px;
        word-break: break-word;   
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
                width: 761px;
                right: 100px;
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
                <TextWrapper >Texto CTA</TextWrapper>
                <TextDiv >
                    CopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopy
                </TextDiv>
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
