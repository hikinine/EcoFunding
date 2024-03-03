import React from "react";
import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const media = {
  desktop: (...args) => css`
    @media (min-width: 870px) {
      ${css(...args)};
    }
  `
};

const Footer = styled.footer`
  font-family: nunito-sans, sans-serif;
  text-align: center;
  ${media.desktop`
    text-align: left;
    background-color: #7ac26a;
  `}
`;

const TopBar = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 40px 0;
  ${media.desktop`
    padding: 45px 80px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  `}
`;

const GetTheApp = styled.div`
  font-size: 18px;
  font-weight: 900;
  line-height: 1.11;
  color: #fff;
  margin: 0 -15px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  ${media.desktop`
    flex-wrap: nowrap;
    align-items: center;
    white-space: nowrap;
  `}
`;

const GetTheAppTitle = styled.div`
  margin-bottom: 4px;
  width: 100%;
  color: #fff;
  ${media.desktop`
    width: unset;
    margin: 0 15px;
  `}
  
`;

const AppStoreApp = styled.img`
  width: 189px;
  height: 63px;
  margin: 16px auto;
  padding: 0 20px;
  ${media.desktop`
    padding: 0;
    margin: 0 8px;
  `}
`;

const GoogleApp = styled.img`
  width: 189px;
  height: 63px;
  margin: 16px auto;
  padding: 0 20px;
  ${media.desktop`
    padding: 0;
    margin: 0 8px;
  `}
`;

const DesktopSocialList = styled.div`
  display: none;
  ${media.desktop`
    display: flex;
    align-items: center;
  `};
`;

const MobileSocialList = styled.div`
  padding-bottom: 40px;
  width: 100%;
  ${media.desktop`
    display: none;
  `};
`;

const Twitter = styled.svg`
  border: 1px lightgray solid;
  width: 33px;
  height: 33px;
  margin-left: 5px;
`;

const Facebook = styled.svg`
  border: 1px lightgray solid;
  width: 33px;
  height: 33px;
  margin-left: 5px;
`;

const Instagram = styled.svg`
  border: 1px lightgray solid;
  width: 33px;
  height: 33px;
  margin-left: 5px;
`;

const HR = styled.div`
  display: none;
  ${media.desktop`
    height: 0;
    padding: 0;
    margin: 0;
    display: block;
    border-bottom: 1px #cacada solid;
  `};
`;

const BottomBar = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
  ${media.desktop`
    flex-wrap: nowrap;
    padding: 40px 80px 60px;
    justify-content: space-between;
  `};
`;

const Menu = styled.div`
  margin-bottom: 30px;
  min-width: 50%;
  ${media.desktop`
    min-width: unset;
    margin-bottom: 0;
    margin-right: 40px;
  `}
`;

const MenuHead = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 900;
  line-height: 1.11;
  color: white;
`;

const MenuLink = styled.a`
  display: block;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  color: white;
  ${media.desktop`
    white-space: nowrap;
  `}
`;

const Policy = styled.div`
  width: 100%;
  max-width: 764px;
  font-size: 12px;
  line-height: 1.33;
  color: #2b2738;
  margin: 0 20px;
  text-align: center;
`;

const PolicyRow = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
`;
const NewsletterForm = styled.form`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.desktop`
    flex-direction: row;
    justify-content: center;
  `}
  margin-left: -60px;
  margin-right: 20px;
`;

const EmailInput = styled.input`
  padding: 10px;
  margin-bottom: 10px; // Remove margin on desktop if you prefer the button next to the input
  border: 1px solid #ccc;
  border-radius: 5px;
  ${media.desktop`
    margin-bottom: 0;
    margin-right: 10px;
  `}
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50; // Example color
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049; // Darker shade for hover effect
  }
`;
const NewsletterText = styled.p`
  color: #fff; // Adjust the color based on your footer's background
  font-size: 18px;
  overflow: hidden; // Keeps the text in a single line, hiding overflow
  left: -60px;
  position: relative;

`;
const Container = styled.div`
 display: flex;
 flex-direction: column;

 
`;
const menu = [
  {
    name: "Empresa",
    links: [
      { title: "Inicio", url: "www.openfit.com" },
      { title: "Investir", url: "www.openfit.com" },
      { title: "Seja um parceiro Eco", url: "www.openfit.com" },
      { title: "Contato", url: "www.openfit.com" }
    ]
  },
  {
    name: "Documentos",
    links: [
      { title: "CVM", url: "www.openfit.com" },
      { title: "Politica de Privacidade", url: "www.openfit.com" },
      { title: "ESG", url: "www.openfit.com" },
      { title: "Créditos de carbono", url: "www.openfit.com" },
      { title: "Mercado de Carbono", url: "www.openfit.com" },
      { title: "FAQ", url: "www.openfit.com" }
    ]
  }
];

const SocialList = () => (
  <>
    <Twitter />
    <Facebook />
    <Instagram />
  </>
);

const Rodape = () =>{
  return (
    <Footer>
      <TopBar>
        <GetTheApp>
          <AppStoreApp />
          <GetTheAppTitle> Eco Funding</GetTheAppTitle>
        </GetTheApp>
        <DesktopSocialList>
          <SocialList />
        </DesktopSocialList>
      </TopBar>
      <HR />
      <BottomBar>
      <Container>
      <NewsletterText> Inscreva em nossa Newsletter </NewsletterText>
        <NewsletterForm>
          <EmailInput type="email" placeholder="Your email for our newsletter" />
          <SubmitButton type="submit">Subscribe</SubmitButton>
        </NewsletterForm>
      </Container>
        {menu.map(({ name, links }) => (
          <Menu>
            <MenuHead>{name}</MenuHead>
            {links.map(({ title, url }) => (
              <MenuLink href={url}>{title}</MenuLink>
            ))}
          </Menu>
        ))}
        <MobileSocialList>
          <SocialList />
        </MobileSocialList>
        <Policy>
          <PolicyRow>© 2024 eCOfunding. Todos os direitos reservados.</PolicyRow>
         
          <PolicyRow>
            As an Amazon Associate, we may earn from qualifying purchases.
          </PolicyRow>
        </Policy>
        
        
      </BottomBar>
      <BottomBar>
      <Policy>
          <PolicyRow>© 2024 eCOfunding. Todos os direitos reservados.</PolicyRow>
         
          <PolicyRow>
            As an Amazon Associate, we may earn from qualifying purchases.
          </PolicyRow>
        </Policy>
      </BottomBar>
    </Footer>
  );
}
export default Rodape;
