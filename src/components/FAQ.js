import React from 'react';
import styled from 'styled-components';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react';
import Faq from 'react-faq-component';

const data = {
    title: "",
    rows: [
      {
        title: " Como sei que meu investimento ajuda o meio ambiente?",
        content: `Relatórios de Impacto: Acompanhe o impacto positivo do seu investimento com relatórios detalhados.
        <br>Certificações: Projetos certificados por órgãos renomados garantem sua confiabilidade.
        `
      },
      {
        title: ". Como a eCOfunding avalia e seleciona projetos para investimento?",
        content: `Critérios rigorosos: Análise de viabilidade, impacto ambiental e social, equipe qualificada e histórico do proponente.
        <br>Comitê de especialistas: Seleção criteriosa dos projetos com maior potencial de impacto positivo.
        `
      },
      {
        title: " Qual a garantia de que meu investimento me retornará créditos ambientais?",
        content: `Projetos certificados: Apenas projetos com certificações de órgãos renomados garantem a geração de créditos.
        <br>Processo rigoroso: Rigorosa avaliação e acompanhamento garantem a entrega dos créditos.`
        
      },
      {
        title: "Como posso monitorar o progresso e o impacto do meu investimento?",
        content: `Plataforma online: Acompanhe o andamento do projeto, resultados e impacto ambiental em tempo real.
        <br> Relatórios periódicos: Receba relatórios detalhados com fotos, vídeos e indicadores de performance.
        `
      }]
  }
  const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #3f4c5c;
  .faq-row-content {
  font-family: 'Montserrat', sans-serif;
}

  `;
  const Header = styled.h1`
  font-size: 50px;
  color: #000;
  text-align: center;
  margin-bottom: 30px;
  `;
  const H1 = styled.h1`
  font-size: 50px;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
  `;
const FAQ = () => {
    return (
        <>
        <Container>
          <H1 > FAQ </H1>
                <Faq className="faq-row-content" data={data} styles={{
                    rowContentFontFamily: "Montserrat" 
                    }}
                />
        </Container>
        
               
            
               
        </>
    );
};

export default FAQ;
