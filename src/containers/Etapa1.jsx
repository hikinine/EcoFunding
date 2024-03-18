import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import { useFormikContext } from 'formik';
import * as Yup from 'yup';
const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 300px;

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100%;

input {
  width: 200px;
  height: 30px;
  margin: 10px;
}

select {
  width: 200px;
  height: 30px;
  margin: 10px;
}

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
function Etapa1({ nextStep, prevStep }) {
  const { values } = useFormikContext();
  const isInvestor = values.role === 'investor';

  // Example validation function to check if all questions are answered
 
  
 

  return (
    <StyledContainer>
    <form>
      {isInvestor ? (
        <div>
          <p>Olá  , preencha os dados do formulario de investidor para prosseguir</p>
          
          <Field name="email" type="text" placeholder="email" />
          <Field name="phone" type="text" placeholder="phone" />
      
        </div>
      ) : (
        <div>
          <p>Projectist questions here</p>
          {/* Implement your questions for projectists */}
        </div>
      )}
      <RowModel>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="button" onClick={nextStep}>Next</button>
      </RowModel>
    </form>
    </StyledContainer>
  );
}

export default Etapa1;