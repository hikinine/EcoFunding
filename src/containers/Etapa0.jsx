import React from 'react';
import styled from 'styled-components';
import { Field, useFormikContext } from 'formik';
const CollumnModel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100%;
  h2 {
  font-size: 24px;
  margin-top: 2em;
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

`;

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
  


div {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100%;

}


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
const StyledSelect = styled.select`
  width: 200px;
  height: 30px;
  margin: 10px;
  &:focus {
    outline: 1px solid #2ebc15;
  }
  
  option {
    font-family: 'Dm Sans', sans-serif;
    padding: 10px;
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
function Etapa0({ nextStep }) {
  const { values, setFieldValue } = useFormikContext(); // Access Formik context

  return (
    <CollumnModel>
      <h2> FORMULÁRIOS ECO-FUNDING</h2>
      <StyledContainer>
        <StyledInput name="name" type="text" placeholder="Name" />
        <StyledInput name="surname" type="text" placeholder="Surname" />
        <StyledSelect
          value={values.role} // Use Formik context values
          onChange={(e) => setFieldValue('role', e.target.value)} // Use Formik's setFieldValue
        >
          <option value="projectist">Projectist</option>
          <option value="investor">Investor</option>
        </StyledSelect>
        <Button type="button" onClick={nextStep}>Next</Button>
      </StyledContainer>
    </CollumnModel>
  );
}
export default Etapa0;