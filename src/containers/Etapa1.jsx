import React from 'react';
import styled from 'styled-components';
import { Field, FormikContext } from 'formik';
import { useFormikContext } from 'formik';
import * as Yup from 'yup';
import { FaArrowRightLong } from "react-icons/fa6";
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: auto;
  margin-bottom: 6rem;
  font-family: 'Dm Sans', sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  form {
  display: flex;
  flex-direction: column; // This ensures the form's direct children are laid out in a column
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h2 {
    font-size: 24px;
    margin-top: 4em;
    margin-left: 3rem;
    color: #2ebc15;
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
    font-family: 'Lexend Tera', sans-serif !important;
  }
  
}
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const StyledInput = styled(Field)`
  width: 300px; /* Increased width */
  height: 45px; /* Increased height */
  margin: 15px; /* Adjusted margin for spacing */
  padding: 15px; /* Increased padding */
  font-family: 'Dm Sans', sans-serif;
  font-size: 1.125em; /* Increased font size */
  &:focus {
    outline: 1.5px solid #2ebc15; /* Slightly thicker outline */
  }
`;

const Button = styled.button`
  
  height: calc(5cap * 1.5); /* Increased height */
  padding:  0 150px;
  margin-left: 150px;
  margin-right: 150px;
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
const Paragraph = styled.p`
  font-size: 30px; /* Increased from 22px */
  margin: 0 50px;
  margin-bottom: 30px; /* Increased for better spacing */
  font-family: 'Dm Sans', sans-serif !important;
`;
const RowModel = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
`;

function Etapa1({ nextStep, prevStep, formikProps }) {
  const { values } = useFormikContext();
  const isInvestor = values.role === 'investor';
  const formikContext = useFormikContext();
  
  const { isValid, dirty } = useFormikContext();
  
 

  return (
    <StyledContainer>
      
    <form>
      <FormContent>
      {isInvestor ? (
        <div>
          
          
          
          <StyledInput name="corporateEmail" type="text" placeholder="Email-corporativo" />
          <StyledInput name="representantName" type="text" placeholder="Nome do representante" />
          <StyledInput name="cargo" type="text" placeholder="Cargo" />
          <StyledInput name="empresa" type="text" placeholder="Nome da empresa" />
          <StyledInput name="segmento" type="text" placeholder="Segmento" />
          
      
        </div>
      ) : (
        <div>
          
          
          <StyledInput name="cpfCnpj" type="text" placeholder="CPF/CPNJ" />
          <StyledInput name="empresa" type="text" placeholder="Empresa" />
          <StyledInput name="segmento" type="text" placeholder="Segmento" />
          <StyledInput name="representantName2" type="text" placeholder="Nome do representante" />
          <StyledInput name="cargo" type="text" placeholder="Cargo" />
          <StyledInput name="cidade" type="text" placeholder="Cidade" />
          <StyledInput name="estado" type="text" placeholder="Estado" />
          <StyledInput name="nomeDoProjeto" type="text" placeholder="Nome do projeto" />
          
          
        </div>
      )}
      </FormContent>
      
     
      
    </form>
    
      
      <Button type="button" onClick={nextStep} disabled={!(dirty)}><FaArrowRightLong /></Button>
    </StyledContainer>
    
  );
}

export default Etapa1;