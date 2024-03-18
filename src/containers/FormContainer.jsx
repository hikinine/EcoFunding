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
  email: Yup.string()
    .email('Invalid email address')
    .notOneOf(
      [/.*@gmail\.com$/, /.*@hotmail\.com$/, /.*@yahoo\.com$/, /.*@outlook\.com$/],
      'Email must not be from Gmail, Hotmail, Yahoo, or Outlook'
    )
    .required('Email is required'),
  phone: Yup.string().required('Phone is required'),
});
const StepNavigation = ({ currentStep, goToStep }) => {
  const steps = [
    { name: 'Etapa 0', image: Image1 },
    { name: 'Etapa 1', image: Image2 },
    { name: 'Etapa 2', image: Image3 },
  ];

  return (
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
  );
};
  
function FormContainer() {
  const [step, setStep] = useState(0);

  const initialValues = {
    name: '',
    surname: '',
    role: '',
    email: '',
    phone: '',
  };

  

  const renderStep = (step, formikProps) => {
    switch (step) {
      case 0:
        return <Etapa0 nextStep={() => setStep(step + 1)} formikProps={formikProps} />;
      case 1:
        return <Etapa1 nextStep={() => setStep(step + 1)} prevStep={() => setStep(step - 1)} formikProps={formikProps} />;
      case 2:
        return <Etapa2 prevStep={() => setStep(step - 1)} formikProps={formikProps} />;
      default:
        return <div>Form Completed</div>;
    }
  }
  const goToStep = (step) => {
    setStep(step);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit} 
    >
      {(formikProps) => (
        <Form>
          <StepNavigation currentStep={step} goToStep={goToStep} />
          {renderStep(step, formikProps)}
        </Form>
      )}
    </Formik>
  );
}
export default FormContainer;
