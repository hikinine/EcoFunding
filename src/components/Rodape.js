import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

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
  width: 32%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 68%;
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
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 85px;
  justify-content: space-between;
  gap: 20px;
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
  color: #828282;
  font-size: 13px;
  margin-right: 6rem;
  & > div {
    color: #fff;
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
    font-family: Lexend Zetta, sans-serif;
    font-weight: 200;
  }
`;

const NewsletterForm = styled.form`
  border: 1px solid rgba(46, 188, 21, 1);
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 8px 13px;
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
  padding: 5px 15px;
  cursor: pointer;
`;

const ContentText = styled.p`
  color: #465363;
  font-size: 13px;
  line-height: 1.6;
`;

function Rodape() {
  const width = useWindowSize();
  return (
    <StyledHeader>
      <MainContent>
        <Sidebar>
          <Logo src="logo.png" alt="Logo" />
          <SocialMediaIcons>
            <IconImg src="icon1.png" alt="Icon 1" />
            <IconImg src="icon2.png" alt="Icon 2" />
            <IconImg src="icon3.png" alt="Icon 3" />
            <IconImg src="icon4.png" alt="Icon 4" />
          </SocialMediaIcons>
        </Sidebar>
        <ContentWrapper>
          <Navbar>
            <div>EMPRESA</div>
            <div>Início</div>
            <div>Investir</div>
            <div>Seja um parceiro Eco</div>
            <div>Contato</div>
          </Navbar>
          <Navbar>
            <div>EMPRESA</div>
            <div>Início</div>
            <div>Investir</div>
            <div>Seja um parceiro Eco</div>
            <div>Contato</div>
          </Navbar>
          <Collumn>
          { width > 768 && <NewsletterSection>
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
}
          <ContentText>
            Lorem ipsum dolor sit amet consectetur. In urna senectus eget ut dui
            consectetur. At at sed amet pellentesque eget amet sed lectus. Urna
            mauris vitae egestas purus ac...
          </ContentText>
          </Collumn>
        </ContentWrapper>
      </MainContent>
    </StyledHeader>
  );
}

export default Rodape;