import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Etapa0 from './Etapa0';
import Etapa1 from './Etapa1';
import Etapa2 from './Etapa2';
import Image1 from '../assets/1.svg';
import Image2 from '../assets/2.svg';
import Image3 from '../assets/3.svg';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import { StepProvider } from './StepContext';


const H1 = styled.h1`
text-align: center;
font-size: 2em;
margin-top: 2em;
margin-bottom: 2em;
text-transform: uppercase;
`;

const StepNavigation = ({ currentStep, goToStep, formikProps }) => {
  const steps = [
    { name: 'Etapa 0', image: Image1 },
    { name: 'Etapa 1', image: Image2 },
    { name: 'Etapa 2', image: Image3 },
  ];

  return (
    <div style={{ marginTop: '4em', marginBottom: '4em', textAlign: 'center'}}>
  
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  marginTop: '4em' }}>
      
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {index > 0 && <div style={{ width: '50px', height: '2px', backgroundColor: 'black' }} />}
          <img
            src={step.image}
            alt={step.name}
            style={{ height: '50px' ,cursor: 'pointer', opacity: currentStep === index ? 1 : 0.5 }}
            onClick={() => goToStep(index)}
          />
        </React.Fragment>
      ))}
    </div>
    </div>

  );
};


function FormContainer({ id }) {
   const [step, setStep] = useState(0);
   const [formValues, setFormValues] = useState({
     name: '',
     surname: '',
     role: '',
     email: '',
     phone: '',
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

   const [formErrors, setFormErrors] = useState({});
   const validatePhone = (phone) => {
    // This regex allows optional spaces after the opening parenthesis and the area code, and an optional dash between the number sets
    // It matches: (XX)XXXXX-XXXX, (XX) XXXXX-XXXX, (XX)XXXXX - XXXX, and variations thereof
    const regex = /^\(\d{2}\)\s?\d{5}\s?-\s?\d{4}$/;
    return regex.test(phone);
  };
  const validateCPFOrCNPJ = (value) => {
    if (!value) {
      return false; // Immediately return false if value is falsy
    }
  
    const cpfCnpjClean = value.replace(/\D/g, ''); // Strips non-digit characters
  
    // Check if the cleaned value matches the numeric pattern for CPF or CNPJ
    if (cpfCnpjClean.length === 11) {
      // Implement CPF validation logic here (basic length check for demonstration)
      return true; // Assume valid for demonstration; implement detailed validation as needed
    } else if (cpfCnpjClean.length === 14) {
      // Implement CNPJ validation logic here (basic length check for demonstration)
      return true; // Assume valid for demonstration; implement detailed validation as needed
    }
  
    return false; // Return false if length doesn't match expected for CPF or CNPJ
  };
  
  // Update your validateStep function
  const validateStep = () => {
    let errors = {};
  
    // Validation for step 0
    if (step === 0) {
      if (!formValues.name) errors.name = 'Preencha o nome';
      if (!formValues.surnaime) errors.surnaime = 'Preencha o sobrenome';
      if (!formValues.phone || !validatePhone(formValues.phone)) {
        alert('O telefone deve estar no formato (XX) XXXXX-XXXX e completo');
        errors.phone = 'Invalid phone format';
      }
      if (!formValues.role) errors.role = 'Selecione um tipo de formulário';
    }
  
    // Validation for step 1
    if (step === 1) {
      if (formValues.role === 'investor' && !formValues.corporateEmail) errors.corporateEmail = "Preencha o email corporativo";
      if (!formValues.role === 'parceiros' && !formValues.representantName) errors.representantName = "Preencha o nome do representante";
      if (!formValues.role === 'parceiros' && !formValues.empresa) errors.empresa = "Preencha o nome da empresa";
      if (!formValues.role === 'parceiros' && !formValues.cargo) errors.cargo = "Preencha o cargo";
      if (!formValues.role === 'parceiros' && !validateCPFOrCNPJ(formValues.cpfCnpj)) {
        alert('O CPF/CNPJ deve estar no formato correto');
        errors.cpfCnpj = 'Invalid CPF/CNPJ format';
      }
    }
  
    // Display errors
    Object.values(errors).forEach(error => alert(error));
  
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  

  const goToStep = (newStep) => {
    if (validateStep()) {
      setStep(newStep);
    }
  };

  const handleSubmit = async () => {
    if (validateStep()) {
      // Your existing submit logic
    }
  };

  // Determine H1 text based on role
  const getH1Text = () => {
    switch (formValues.role) {
      case 'investor':
        return 'Investidor';
      case 'parceiros':
        return 'Parceiro Eco';
      default:
        return 'Formulários';
    }
  };

  return (
    <StepProvider>
      <>
        <H1 id={id}>{getH1Text()}</H1>
        {/* Render steps based on current step */}
        <StepNavigation currentStep={step} goToStep={goToStep} />
        {step === 0 && <Etapa0 goToStep={goToStep} formValues={formValues} setFormValues={setFormValues} />}
        {step === 1 && <Etapa1 goToStep={goToStep} formValues={formValues} setFormValues={setFormValues} />}
        {step === 2 && <Etapa2 goToStep={goToStep} formValues={formValues} setFormValues={setFormValues} />}
        {/* Add form submission button or logic */}
      </>
    </StepProvider>
  );
}

export default FormContainer;