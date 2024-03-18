import React from 'react';
import styled from 'styled-components';
import { Field, FormikContext } from 'formik';
import { useFormikContext } from 'formik';
import * as Yup from 'yup';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: auto;
  margin-bottom: 6rem;
  font-family: 'Dm Sans', sans-serif;
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
  width: 200px;
  height: 30px;
  margin: 10px;
  padding: 10px;
  font-family: 'Dm Sans', sans-serif;
  &:focus {
    outline: 1px solid #2ebc15;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 30px;
  margin: 10px;
  background-color: transparent;
  border: 1px solid #2ebc15;
  color: #2ebc15;
  font-family: 'Dm Sans', sans-serif;
  cursor: pointer;
  &:hover {
    background-color: #2ebc15;
    color: white;
  }
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
          <h2>FORMULÁRIO PARA INVESTIDORES</h2>
          <p>Olá {formikContext.values.name} , preencha os dados do formulario de investidor para prosseguir</p>
          
          <StyledInput name="email" type="text" placeholder="Email-corporativo" />
          <StyledInput name="Nome do representante" type="text" placeholder="Nome do representante" />
          <StyledInput name="Cargo" type="text" placeholder="Cargo" />
          <StyledInput name="Nome da empresa" type="text" placeholder="Nome da empresa" />
          <StyledInput name="Segmento" type="text" placeholder="Segmento" />
          
      
        </div>
      ) : (
        <div>
          <h2>FORMULÁRIO PARA PARCEIRO ECO-SUSTENTÁVEL</h2>
          <p>Olá {formikContext.values.name} , preencha os dados do formulario de parceiros-ecossustentáveis para prosseguir</p>
          <StyledInput name="CPF/CNPJ" type="text" placeholder="CPF/CPNJ" />
          <StyledInput name="Empresa" type="text" placeholder="Empresa" />
          <StyledInput name="Segmento" type="text" placeholder="Segmento" />
          <StyledInput name="Nome do representante da empresa" type="text" placeholder="Nome do representante" />
          <StyledInput name="Cargo" type="text" placeholder="Cargo" />
          <StyledInput name="Cidade" type="text" placeholder="Cidade" />
          <StyledInput name="Estado" type="text" placeholder="Estado" />
          <StyledInput name="NomeDoProjeto" type="text" placeholder="Nome do projeto" />
          
          
        </div>
      )}
      </FormContent>
      <RowModel>
      <Button type="button" onClick={prevStep}>Back</Button>
      <Button type="button" onClick={nextStep} disabled={!(dirty)}>Next</Button>
      </RowModel>
    </form>
    
    </StyledContainer>
    
  );
}

export default Etapa1;