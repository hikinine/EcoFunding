import React from 'react';
import styled from 'styled-components';
import { Field, FormikContext } from 'formik';
import { useFormikContext } from 'formik';
import * as Yup from 'yup';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 600px;
  font-family: 'Dm Sans', sans-serif;
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  

input {
  width: 200px;
  height: 30px;
  margin: 10px;
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100%;

}
select {
  width: 200px;
  height: 30px;
  margin: 10px;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
  margin-left: 3rem;
  color: #2ebc15;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  font-family: 'Lexend Tera', sans-serif !important;
  @media (max-width: 768px) {
    font-size: 32px; // Adjust font size for mobile
    margin-left: 2rem; // Adjust margin for mobile
    text-align: center; // Center text on mobile
  }

}
}
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
const RowModel = styled.div`
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
justify-content: center;
height: 100%;
`;
function Etapa1({ nextStep, prevStep, formikProps }) {
  const { values } = useFormikContext();
  const isInvestor = values.role === 'investor';
  const formikContext = useFormikContext();
  
  const { isValid, dirty } = useFormikContext();
  
 

  return (
    <StyledContainer>
    <form>
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
      <RowModel>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="button" onClick={nextStep} disabled={!(dirty)}>Next</button>
      </RowModel>
    </form>
    </StyledContainer>
  );
}

export default Etapa1;