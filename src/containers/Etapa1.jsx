import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Field, FormikContext } from 'formik';
import { useFormikContext } from 'formik';
import * as Yup from 'yup';
import { FaArrowRightLong } from "react-icons/fa6";
import { Step, useStep } from './StepContext';
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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };
  
  const validate = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = 'Nome é obrigatório';
    // Add other validations as needed
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = () => {
    if (validate()) {
      goToStep(1); // Proceed to next step if valid
    }
    else {
      alert('Preencha todos os campos')
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
                name="cpfCnpj"
                type="text"
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