import React from 'react';
import styled from 'styled-components';
import { Form, useFormikContext } from 'formik';

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 500px;
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
const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -200px;
  
  justify-content: start;
  height: 100%;
  width: vw;

  h2 {
    font-size: 24px;
    margin-top: 4em;
    margin-left: 3rem;
    
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
      <Button type="button" onClick={prevStep}>VOLTAR</Button>
      <Form>
        <Div>
          <h2>Confirme seus dados</h2>
          <p><strong>Nome:</strong> {formikContext.values.name}</p>
          <p><strong>Sobrenome:</strong> {formikContext.values.surname}</p>
          <p><strong>Tipo de formulário:</strong> {formikContext.values.role}</p>
          <p><strong>Email:</strong> {formikContext.values.email}</p>
          <p><strong>Telefone:</strong> {formikContext.values.phone}</p>

         
        </Div>
        
      </Form>
        
        <Button type="submit">ENVIAR</Button> {/* Form submission Button */}
    </StyledContainer>
  );
}

export default Etapa2;