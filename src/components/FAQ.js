import React from 'react';
import styled from 'styled-components';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react';

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

const ScrollContainer = styled.div`
  width: 60%;
  height: 80%; // Adjust based on your needs
  overflow-y: auto; // Enables vertical scrolling
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px; // Adds some padding inside the scroll container
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); // Optional: adds a shadow for better depth perception
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
    return (
        <>
        <Container>
            <Content>
                <Header>FAQ</Header>
                <Paragraph>Bem-vindo à seção de Perguntas Frequentes (FAQ) da EcoFunding! Aqui, reunimos respostas para as dúvidas mais comuns sobre nossa plataforma, processos e como você pode se envolver. Se você tiver alguma questão que não esteja coberta aqui, não hesite em nos contatar.</Paragraph>
            </Content>
            <ScrollContainer>
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
                    <StyledAccordionItem itemKey={1}>
                        <StyledAccordionHeader>Como posso saber o retorno do meu investimento ao meio ambiente?</StyledAccordionHeader>
                        <StyledAccordionBody>
                            <ul>
                                <li><strong>Créditos Ambientais:</strong> Receba créditos que representam a quantia de CO2 que você ajudou a reduzir.</li>
                                <li><strong>Relatórios de Impacto:</strong> Acompanhe os resultados tangíveis do projeto em termos de sustentabilidade.</li>
                            </ul>
                        </StyledAccordionBody>
                    </StyledAccordionItem>
                    <StyledAccordionItem itemKey={1}>
                        <StyledAccordionHeader>Como a Ecofunding avalia e seleciona projetos para investimento?</StyledAccordionHeader>
                        <StyledAccordionBody>
                            <ul>
                                <li><strong>Critérios rigorosos:</strong> Análise de viabilidade, impacto ambiental e social, equipe qualificada e histórico do proponente.</li>
                                <li><strong>Comitê de especialistas:</strong> Seleção criteriosa dos projetos com maior potencial de impacto positivo.</li>
                            </ul>
                        </StyledAccordionBody>
                    </StyledAccordionItem>
                    <StyledAccordionItem itemKey={1}>
                        <StyledAccordionHeader>Qual a garantia de que meu investimento me retornará créditos ambientais?</StyledAccordionHeader>
                        <StyledAccordionBody>
                            <ul>
                                <li><strong>Projetos certificados:</strong> Apenas projetos com certificações de órgãos renomados garantem a geração de créditos.</li>
                                <li><strong>Processo rigoroso:</strong> Rigorosa avaliação e acompanhamento garantem a entrega dos créditos.</li>
                            </ul>
                        </StyledAccordionBody>
                    </StyledAccordionItem>
                    <StyledAccordionItem itemKey={1}>
                        <StyledAccordionHeader>Como posso monitorar o progresso e o impacto do meu investimento? </StyledAccordionHeader>
                        <StyledAccordionBody>
                            <ul>
                                <li><strong>Plataforma online:</strong> Acompanhe o andamento do projeto, resultados e impacto ambiental em tempo real.</li>
                                <li><strong>Relatórios periódicos:</strong> Receba relatórios detalhados com fotos, vídeos e indicadores de performance.</li>
                            </ul>
                        </StyledAccordionBody>
                    </StyledAccordionItem>
                    
                </StyledAccordion>
            </ScrollContainer>
        </Container>
        </>
    );
};

export default FAQ;
