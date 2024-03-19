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
  align-content: center;
  justify-content: center;
  height: 100%;

  h2 {
    font-size: 24px;
    margin-top: 4em;
    margin-left: 3rem;
    width: 350px;
    text-transform: uppercase;
    
    font-weight: 500;
    font-family: 'Lexend Tera', sans-serif !important;
  }
`;
function Etapa2({ prevStep }) {
  // Use Formik context
  const formikContext = useFormikContext();

  return (
    <StyledContainer>
      <Button type="button" onClick={prevStep}>Voltar</Button>
      <Form>
        <Div>
          <h2>Seu formulário será enviado</h2>
          <p>Nome : {formikContext.values.name}</p>
          <p>Sobrenome: {formikContext.values.surname}</p>
          <p>Tipo de formulário: {formikContext.values.role}</p>
          <p>Email: {formikContext.values.email}</p>
          <p>Telefone: {formikContext.values.phone}</p>

         
        </Div>
        
      </Form>
        
        <Button type="submit">Confirmar</Button> {/* Form submission Button */}
    </StyledContainer>
  );
}

export default Etapa2;