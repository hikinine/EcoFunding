import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Field, FormikContext } from 'formik';
import { useFormikContext } from 'formik';
import * as Yup from 'yup';
import { FaArrowRightLong } from "react-icons/fa6";
import { Step, useStep } from './StepContext';
import InputMask from 'react-input-mask';
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

const StyledInput = styled.input`
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

function Etapa1( goToStep, validateStep, formValues, setFormValues ) {
  const { role } = useStep(); // Access role from context
  const [errors, setErrors] = useState({});
  const { nextStep } = useStep(); // Adjust according to what `useStep` returns
  const [formData, setFormData] = useState({
    corporateEmail: '',
    representantName: '',
    cargo: '',
    cpfCnpj: '',
    empresa: '',
    segmento: '',
    representantName2: '',
    cidade: '',
    estado: '',
    nomeDoProjeto: ''
  });
 
  const validateCPFOrCNPJ = (value) => {
    if (!value) return false;
    const cpfCnpjClean = value.replace(/\D/g, '');
    // Basic length check, consider implementing detailed validation algorithms
    return cpfCnpjClean.length === 11 || cpfCnpjClean.length === 14;
  };

  // Implement validation logic
  const validate = () => {
    const newErrors = {};
    // Assuming `formData` represents your local state for form inputs
    if (!validateCPFOrCNPJ(formData.cpfCnpj)) {
      newErrors.cpfCnpj = 'CPF/CNPJ inválido';
    }
    // Add more validation checks as needed
    return newErrors;
  };

  const handleInputChange = (e) => {
  const { name, value } = e.target;
  if (name === "cpfCnpj") {
    // Allow only digits, dashes, slashes, and dots for CPF/CNPJ input
    const cleanedValue = value.replace(/[^\d\-/.]/g, '');
    setFormData(prevState => ({ ...prevState, [name]: cleanedValue }));
  } else {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }
};
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      // If no errors, proceed to the next step
      goToStep(2); // Assuming you want to go to the next step, adjust as needed
    } else {
      // Handle showing errors, for example:
      alert("Please correct the errors.");
    }
  };
  return (
    <StyledContainer>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormContent>
          {/* Conditional rendering based on role */}
          {role === 'investor' && (
            <div>
              <StyledInput
                name="corporateEmail"
                type="text"
                placeholder="Email corporativo"
                value={formData.corporateEmail}
                onChange={handleInputChange}
              />
              {/* Possibly other investor-specific inputs */}
            </div>
          )}
        {role === 'parceiros' && (
            <div>
              <StyledInput
                as={InputMask} // Use the InputMask component for this field
                mask={formData.cpfCnpj.length <= 14 ? "999.999.999-99" : "99.999.999/9999-99"}
                name="cpfCnpj"
                placeholder="CPF/CNPJ"
                value={formData.cpfCnpj}
                onChange={handleInputChange}
              />
              <StyledInput
                          name="empresa"
                          type="text"
                          placeholder="Nome da empresa"
                          value={formData.empresa}
                          onChange={handleInputChange}
                        />
              <StyledInput
                          name="nomeRepresentante"
                          type="text"
                          placeholder="Nome do representante"
                          value={formData.nomeRepresentante}
                          onChange={handleInputChange}
                        />
              <StyledInput
                          name="cargo"
                          type="text"
                          placeholder="Cargo"
                          value={formData.cargo}
                          onChange={handleInputChange}
                        />
              <StyledInput
                          name="segmento"
                          type="text"
                          placeholder="Segmento da empresa"
                          value={formData.segmento}
                          onChange={handleInputChange}
                        />
              <StyledInput
                          name="cidade"
                          type="text"
                          placeholder="Cidade"
                          value={formData.cidade}
                          onChange={handleInputChange}
                        />
              <StyledInput
                          name="estado"
                          type="text"
                          placeholder="Estado"
                          value={formData.estado}
                          onChange={handleInputChange}
                        />
              {/* Any additional fields as needed */}
              </div>
              )}
            </FormContent>
          <Button type="button" onClick={handleSubmit}>Próxima Etapa</Button>
        </form>
      </StyledContainer>
     );
     }

export default Etapa1;