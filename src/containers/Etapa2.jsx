import React from 'react';
import styled from 'styled-components';
import { Form, useFormikContext } from 'formik';

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 300px;
`;

function Etapa2({ prevStep }) {
  // Use Formik context
  const formikContext = useFormikContext();

  return (
    <StyledContainer>
      <Form>
        <div>
          <h2>Review Your Information</h2>
          <p>Name: {formikContext.values.name}</p>
          <p>Surname: {formikContext.values.surname}</p>
          <p>Role: {formikContext.values.role}</p>
          <p>Email: {formikContext.values.email}</p>
          <p>Phone: {formikContext.values.phone}</p>

          <button type="button" onClick={prevStep}>Back</button>
          <button type="submit">Submit</button> {/* Form submission button */}
        </div>
      </Form>
    </StyledContainer>
  );
}

export default Etapa2;