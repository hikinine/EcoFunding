import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Eco from "../assets/LOGOTIPOcopy.svg";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

const Collumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  `;
const StyledHeader = styled.header`
  background-color: #242a32;
  padding: 37px 40px; /* Adjusted for mobile */
  font-size: 8px; /* Adjusted for mobile */
  @media (max-width: 991px) {
    flex-direction: column;
    display: flex;
    align-items: center;
  }
`;

const MainContent = styled.main`
  display: flex;
  gap: 10px; /* Adjusted for mobile */
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 50%; /* Adjusted for mobile */
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 50%; /* Adjusted for mobile */
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0; /* Adjusted for mobile */
  }
`;

const Logo = styled.img`
  max-width: 50%; /* Adjusted for mobile */
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 42.5px; /* Adjusted for mobile */
  justify-content: START;
  gap: 50px; /* Adjusted for mobile */
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const IconImg = styled.img`
  width: 13.5px; /* Adjusted for mobile */
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  color: #c8c8c8c8;
  padding: 50px; /* Adjusted for mobile */
  font-size: 6.5px; /* Adjusted for mobile */
  @media (max-width: 991px) {
    margin-right: 5rem; /* Adjusted for mobile */
    margin-left: 5rem; /* Adjusted for mobile */
  }
  @media (min-width: 992px) {
    font-size: 12px; /* Adjusted for mobile */
    div {
      margin-top: 20px; /* Adjusted for mobile */
      cursor: pointer;
    }
  }
`;

const NewsletterSection = styled.section`
  display: flex;
  flex-direction: column;
  color: #2ebc15;
  font-size: 8px; /* Adjusted for mobile */
`;

const NewsletterForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 15px; /* Adjusted for mobile */
  padding-left: 6.5px; /* Adjusted for mobile */
  border: 1px solid #2ebc15;
`;

const NewsletterInput = styled.input`
  flex-grow: 1;
  border: none;
  background: none;
  color: #fff;
  &::placeholder {
    color: #828282;
  }
`;

const SubmitButton = styled.button`
  background-color: rgba(46, 188, 21, 1);
  border: none;
  color: #fff;
  height: 100%;
  padding: 10px 7.5px; /* Adjusted for mobile */
  cursor: pointer;
`;

const ContentText = styled.p`
  color: #465363;
  font-size: 6.5px; /* Adjusted for mobile */
  line-height: 1.6;
  margin-top: 100px; /* Adjusted for mobile */
`;

function Rodape() {
  const width = useWindowSize();
  const breakpoint = 991;

  // Check if the window width is less than or equal to the breakpoint.
  // If true, return null to render nothing for mobile widths.
  if (width <= breakpoint) {
    return null;
  }
  if (width > breakpoint) {
    return null;
  }
  return (
    <StyledHeader>
      <MainContent>
        <Sidebar>
          <Logo src={Eco} alt="Logo" />
          <SocialMediaIcons>
            <IconImg src={Image1} alt="Icon 1" />
            <IconImg src={Image2} alt="Icon 2" />
            <IconImg src={Image3} alt="Icon 3" />
            
            </SocialMediaIcons>
        </Sidebar>
        <ContentWrapper>
          <Navbar>
            <div style={{ fontFamily: 'Lexend Tera', fontWeight: 500, fontSize: '8px', color: 'rgba(255, 255, 255, 1)' }}>EMPRESA</div>
            <div>Início</div>
            <div>Investir</div>
            <div>Seja um parceiro Eco</div>
            <div>Contato</div>
          </Navbar>
          <Navbar>
            <div style={{ fontFamily: 'Lexend Tera', fontWeight: 500, fontSize: '8px', color: 'rgba(255, 255, 255, 1)' }}>SERVIÇOS</div>
            <div>CVM</div>
            <div>SEMIL</div>
            <div>ESG</div>
            
          </Navbar>
          <Collumn>
            <NewsletterSection>
              <div>SE INSCREVA NA NOSSA <span style={{ fontWeight: 600, color: "rgba(46,188,21,1)" }}>NEWSLETTER</span></div>
              <NewsletterForm>
                <NewsletterInput type="email" placeholder="Digite seu e-mail" aria-label="Digite seu e-mail" />
                <SubmitButton>Enviar</SubmitButton>
              </NewsletterForm>
            </NewsletterSection>
          </Collumn>
        </ContentWrapper>
      </MainContent>
      <ContentText>
        "Acreditamos que o futuro do nosso planeta está diretamente ligado a uma economia mais sustentável, onde a tecnologia desempenha um papel crucial no processo como um todo. Buscamos simplificar e democratizar o acesso a soluções sustentáveis, capacitando tanto pessoas quanto empresas a contribuírem ativamente para a preservação do nosso futuro e do meio ambiente.
        
        Temos como compromisso principal, desenvolver soluções ambientais inovadoras que permitem diversas tipos de empresas a compensarem suas emissões de carbono de maneira descomplicada e segura. Estamos empenhados em facilitar e promover a adoção de práticas mais conscientes, promovendo assim um movimento efetivo em prol da sustentabilidade global.
        
        Somos a ECOFUNDING, uma eco/fintech que nasceu pela inconformidade dos sócios em acreditarem que o futuro não está tão distante como a maioria das pessoas acreditam e que nós não herdamos a Terra dos nossos antepassados, simplesmente pegamos emprestada de nossos filhos."
      </ContentText>
    </StyledHeader>
  );
}

export default Rodape;