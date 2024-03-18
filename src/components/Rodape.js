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
    // Call at mount to ensure we have the initial size
    handleResize();

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

const StyledHeader = styled.header`
  background-color: #242a32;
  padding: 74px 80px;
  
  font-size: 16px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const MainContent = styled.main`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;
const Collumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  aspect-ratio: 7.14;
  object-fit: cover;
  width: 100%;
  align-self: center;
  color: white;
  fill: white;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 85px;
  justify-content: center;
  gap: 100px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const IconImg = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  width: 27px;
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  
  color: #fff;
  font-size: 13px;
  margin-right: 10rem;
  margin-left: 10rem;
  & > div {
    color: #828282;
    margin-top: 49px;
    font-family: DM Sans, sans-serif;
    &:first-child {
      margin-top: 0;
      font-weight: 500;
      font-size: 15px;
      color: rgba(255, 255, 255, 1);
    }
    @media (max-width: 991px) {
      margin-top: 40px;
    }
  }
`;

const NewsletterSection = styled.section`
  display: flex;
  flex-direction: column;
  color: #2ebc15;
  font-size: 16px;
  margin-top: 55px;
  

  & > div:first-child {
    font-family: Lexend Tera, sans-serif;
    font-weight: 200;
  }
  @media (max-width: 991px) {
    display: none ;
  }
`;

const NewsletterForm = styled.form`
  border: 1px solid rgba(46, 188, 21, 1);
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding-left: 13px;
  font-weight: 400;
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
  padding: 20px 15px;
  cursor: pointer;
`;

const ContentText = styled.p`
  color: #465363;
  font-size: 13px;
  line-height: 1.6;
  margin-top: 200px;
  @media (max-width: 991px) {
    display: none ;
  }
`;

function Rodape() {
  const width = useWindowSize();
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
            <span style={{ fontFamily: 'Lexend Tera' }}>EMPRESA</span>
            <div>Início</div>
            <div>Investir</div>
            <div>Seja um parceiro Eco</div>
            <div>Contato</div>
          </Navbar>
          <Navbar>
          <span style={{ fontFamily: 'Lexend Tera' }}>EMPRESA</span>
            <div>Início</div>
            <div>Investir</div>
            <div>Seja um parceiro Eco</div>
            <div>Contato</div>
          </Navbar>
          <Collumn>
        <NewsletterSection>
            <div>
              SE INSCREVA NA NOSSA{" "}
              <span style={{ fontWeight: 600, color: "rgba(46,188,21,1)" }}>
                NEWSLETTER
              </span>
            </div>
            <NewsletterForm>
              <NewsletterInput
                type="email"
                placeholder="Digite seu e-mail"
                aria-label="Digite seu e-mail"
              />
              <SubmitButton>Enviar</SubmitButton>
            </NewsletterForm>
          </NewsletterSection>

          
          </Collumn>
        </ContentWrapper>
      </MainContent>
      <ContentText>
          "Acreditamos que o futuro do nosso planeta está diretamente ligado a uma economia mais sustentável, onde a tecnologia desempenha um papel crucial no processo como um todo. Buscamos simplificar e democratizar o acesso a soluções sustentáveis, capacitando tanto pessoas quanto empresas a contribuírem ativamente para a preservação do nosso futuro e do meio ambiente.

Temos como compromisso principal, desenvolver soluções ambientais inovadoras que permitem diversos tipos de empresas a compensarem suas emissões de carbono de maneira descomplicada e segura. Estamos empenhados em facilitar e promover a adoção de práticas mais conscientes, promovendo assim um movimento efetivo em prol da sustentabilidade global.

Somos a ECOFUNDING, uma eco/fintech que nasceu pela inconformidade dos sócios em acreditarem que o futuro não está tão distante como a maioria das pessoas acreditam e que nós não herdamos a Terra dos nossos antepassados, simplesmente pegamos emprestada de nossos filhos."
          </ContentText>
    </StyledHeader>
  );
}

export default Rodape;