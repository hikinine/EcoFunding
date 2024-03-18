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

          <Button type="button" onClick={prevStep}>Back</Button>
          <Button type="submit">Submit</Button> {/* Form submission Button */}
        </div>
      </Form>
    </StyledContainer>
  );
}

export default Etapa2;