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
const handleSubmit = async (values) => {
  // Initialize payload with common fields
  const payload = {
    form: {
      id: "eCOfunding LP",
      name: "eCOfunding LP"
    },
    fields: {
      // Common fields here
      name_ecofunding: {
        value: values.name || '',
      },
      email_ecofunding: {
        value: values.email || '',
      },
      BITRIXWEBHOOK: {
        value: "EcofundingInvestidor",
      },
    }
  };

  // Dynamically add fields based on the role
  if (values.role === 'investor') {
    payload.fields = {
      ...payload.fields,
      // Investor-specific fields
      nome_representante_ecofunding: {
        value: values.nomeRepresentante || '',
      },
      cargo_ecofunding: {
        value: values.cargo || '',
      },
      nome_empresa_ecofunding: {
        value: values.nomeEmpresa || '',
      },
      segmento_ecofunding: {
        value: values.segmento || '',
      },
    };
  } else if (values.role === 'partner') {
    payload.fields = {
      ...payload.fields,
      // Partner-specific fields
      cpf_cnpj_ecofunding: {
        value: values.cpfCnpj || '',
      },
      empresa_ecofunding: {
        value: values.empresa || '',
      },
      cidade_ecofunding: {
        value: values.cidade || '',
      },
      estado_ecofunding: {
        value: values.estado || '',
      },
      nome_projeto_ecofunding: {
        value: values.nomeDoProjeto || '',
      },
    };
  }

  try {
    const response = await axios.post("https://solarium-api.newsun.energy/v1/integracao-bitrix/webhook", payload);
    console.log(response.data);
    // Handle success response
  } catch (error) {
    console.error(error);
    // Handle error response
  }
};
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  surname: Yup.string().required('Surname is required'),
  role: Yup.string().required('Role is required'),
  
  phone: Yup.string().required('Phone is required'),
});

const stepValidationSchemas = [
  Yup.object().shape({
    name: Yup.string().required('Name is required'),
    surname: Yup.string().required('Surname is required'),
    // Add other fields for step 0
  }),
  Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    // Add other fields for step 1
  }),
];
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
   const initialValues = {
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
   };

   const goToStep = (newStep) => {
    setStep(newStep);
  };


 
   return (
    <StepProvider>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={stepValidationSchemas[step]}
      >
        {formikProps => (
          <>
            <H1 id={id}>
              {formikProps.values.role === 'investor' ? 'Investidor' : 'FORMULÁRIOS'}
            </H1>
            <StepNavigation currentStep={step} goToStep={goToStep} />
            <Form>
              {step === 0 && <Etapa0 goToStep={goToStep} formikProps={formikProps} />}
              {step === 1 && <Etapa1 goToStep={goToStep} />}
              {step === 2 && <Etapa2 goToStep={goToStep} />}
            </Form>
          </>
        )}
      </Formik>
    </StepProvider>
  );
}

export default FormContainer;