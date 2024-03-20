import React from 'react';
import styled from 'styled-components';
import { Form, useFormikContext } from 'formik';

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: calc(100% + 300px);
  margin-bottom: 6rem;
  margin-top: 10rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Button = styled.button`
  
  height: calc(5cap * 1.5); /* Increased height */
  padding:  0 100px;
  margin-left: 250px;
  margin-right: 250px;
  background-color: transparent;
  border: 1.5px solid #2ebc15; /* Slightly thicker border */
  color: #2ebc15;
  font-family: 'Lexend Tera', sans-serif;
  font-size: 1.125em; /* Increased font size */
  cursor: pointer;
  &:hover {
    background-color: #2ebc15;
    color: white;
  }
  
`;
const ButtonBack = styled.button`
  
  height: calc(5cap * 1.5); /* Increased height */
  padding:  0 100px;
  margin-left: 250px;
  margin-right: 250px;
  background-color: transparent;
  border: 1.5px solid #2ebc15; /* Slightly thicker border */
  color: #2ebc15;
  font-family: 'Lexend Tera', sans-serif;
  font-size: 1.125em; /* Increased font size */
  cursor: pointer;
  &:hover {
    background-color: #2ebc15;
    color: white;
  }
  @media (max-width: 768px) {
    display: none;
  }
  
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -200px;
  
  justify-content: start;
  height: 100%;
  width: 25vw;
  @media (max-width: 768px) {
    width: 100%;
  }
  h2 {
    font-size: 24px;
    margin-top: 4em;
    
    
    text-transform: uppercase;
    text-align: start;
    font-weight: 700;
    font-family: 'Lexend Tera', sans-serif !important;
  }
`;
function Etapa2({ prevStep }) {
  // Use Formik context
  const formikContext = useFormikContext();

  return (
    <StyledContainer>
      <ButtonBack type="button" onClick={prevStep}>VOLTAR</ButtonBack>
      <Form>
        <Div>
        <h2>Confirme seus dados</h2>
          <p><strong>Nome:</strong> {formikContext.values.name}</p>
          <p><strong>Sobrenome:</strong> {formikContext.values.surname}</p>
          <p><strong>Tipo de formulário:</strong> {formikContext.values.role}</p>
          <p><strong>Telefone:</strong> {formikContext.values.phone}</p>
          {formikContext.values.role === 'investor' &&(

          <>
            <p><strong>Email Corporativo:</strong> {formikContext.values.corporateEmail}</p>
            <p><strong>Nome do representante:</strong> {formikContext.values.representantName}</p>
            <p><strong>Cargo:</strong> {formikContext.values.cargo}</p>
            <p><strong>Nome da empresa:</strong> {formikContext.values.empresa}</p>
            <p><strong>Segmento:</strong> {formikContext.values.segmento}</p>
          </>
          )}
          
          {formikContext.values.role === 'parceiros' && (
           
           <>
            <p><strong>CPF/CNPJ:</strong> {formikContext.values.cpfCnpj}</p>
            <p><strong>Nome da Empresa:</strong> {formikContext.values.empresa}</p>
            <p><strong>Segmento:</strong> {formikContext.values.segmento}</p>
            <p><strong>Nome do Representante:</strong> {formikContext.values.representantName2}</p>
            <p><strong>Cargo:</strong> {formikContext.values.cargo}</p>
            <p><strong>Cidade:</strong> {formikContext.values.cidade}</p>
            <p><strong>Estado:</strong> {formikContext.values.estado}</p>
            <p><strong>Nome do Projeto:</strong> {formikContext.values.nomeDoProjeto}</p>
          </>
          
          )}

         
        </Div>
        
      </Form>
        
        <Button type="submit">ENVIAR</Button> {/* Form submission Button */}
    </StyledContainer>
  );
}

export default Etapa2;