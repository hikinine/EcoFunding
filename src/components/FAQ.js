import React from 'react';
import styled from 'styled-components';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Add this global style for vertical dots
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  .slick-vertical .slick-dots {
    display: block !important;
    height: auto;
    position: absolute;
    top: 0;
    right: -25px; // Adjust as needed to place dots on the right side of the slider
    bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .slick-vertical .slick-dots li {
    margin: 3px 0; // Adjust spacing between dots
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #3f4c5c;
  background-position: center;
  background-size: cover;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 80px;
`;

const SwiperContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: white;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 16px;
  word-break: break-word;
  color: white;
  text-align: center;
  width: 30vw;
`;

const StyledAccordion = styled(CAccordion)`
  background-color: transparent !important;
`;

const StyledAccordionItem = styled(CAccordionItem)`
  background-color: transparent !important;
`;

const StyledAccordionHeader = styled(CAccordionHeader)`
  background-color: transparent !important;
`;

const StyledAccordionBody = styled(CAccordionBody)`
  background-color: transparent !important;
  color: white;
`;

const FAQ = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        adaptiveHeight: true,
        arrows: false, // Consider removing arrows for a cleaner vertical navigation
    };

    return (
        <>
          <GlobalStyles />
        <Container>
            <Content>
            <Header>FAQ</Header>
            <Paragraph>Bem-vindo à seção de Perguntas Frequentes (FAQ) da EcoFunding! Aqui, reunimos respostas para as dúvidas mais comuns sobre nossa plataforma, processos e como você pode se envolver. Se você tiver alguma questão que não esteja coberta aqui, não hesite em nos contatar.</Paragraph>
            </Content>
            <SwiperContainer>
                <Slider {...settings}>
                    {/* Each accordion item wrapped in a div for the slider */}
                    <div>
                        <StyledAccordion flush>
                            <StyledAccordionItem itemKey={1}>
                                <StyledAccordionHeader>Como posso ter certeza de que meu investimento está ajudando o meio ambiente?</StyledAccordionHeader>
                                <StyledAccordionBody>
                                    <ul>
                                        <li><strong>Relatórios de Impacto:</strong> Acompanhe o impacto positivo do seu investimento com relatórios detalhados.</li>
                                        <li><strong>Certificações:</strong> Projetos certificados por órgãos renomados garantem sua confiabilidade.</li>
                                    </ul>
                                </StyledAccordionBody>
                            </StyledAccordionItem>
                        </StyledAccordion>
                    </div>
                    <div>
                        <StyledAccordion flush>
                            <StyledAccordionItem itemKey={1}>
                                <StyledAccordionHeader>Como posso ter certeza de que meu investimento está ajudando o meio ambiente?</StyledAccordionHeader>
                                <StyledAccordionBody>
                                    <ul>
                                        <li><strong>Relatórios de Impacto:</strong> Acompanhe o impacto positivo do seu investimento com relatórios detalhados.</li>
                                        <li><strong>Certificações:</strong> Projetos certificados por órgãos renomados garantem sua confiabilidade.</li>
                                    </ul>
                                </StyledAccordionBody>
                            </StyledAccordionItem>
                        </StyledAccordion>
                    </div>
                    <div>
                        <StyledAccordion flush>
                            <StyledAccordionItem itemKey={1}>
                                <StyledAccordionHeader>Como posso ter certeza de que meu investimento está ajudando o meio ambiente?</StyledAccordionHeader>
                                <StyledAccordionBody>
                                    <ul>
                                        <li><strong>Relatórios de Impacto:</strong> Acompanhe o impacto positivo do seu investimento com relatórios detalhados.</li>
                                        <li><strong>Certificações:</strong> Projetos certificados por órgãos renomados garantem sua confiabilidade.</li>
                                    </ul>
                                </StyledAccordionBody>
                            </StyledAccordionItem>
                        </StyledAccordion>
                    </div>
                    {/* Repeat for other accordion items */}
                </Slider>
            </SwiperContainer>
        </Container>
        </>
    );
};

export default FAQ;
