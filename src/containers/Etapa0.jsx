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
`;

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
function Etapa0({ nextStep }) {
  const { values, setFieldValue } = useFormikContext(); // Access Formik context

  return (
    <CollumnModel>
      <h2> FORMULÁRIOS ECO-FUNDING</h2>
      <StyledContainer>
        <Field name="name" type="text" placeholder="Name" />
        <Field name="surname" type="text" placeholder="Surname" />
        <select
          value={values.role} // Use Formik context values
          onChange={(e) => setFieldValue('role', e.target.value)} // Use Formik's setFieldValue
        >
          <option value="projectist">Projectist</option>
          <option value="investor">Investor</option>
        </select>
        <button type="button" onClick={nextStep}>Next</button>
      </StyledContainer>
    </CollumnModel>
  );
}
export default Etapa0;