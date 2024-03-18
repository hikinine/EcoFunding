import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Etapa0 from './Etapa0';
import Etapa1 from './Etapa1';
import Etapa2 from './Etapa2';
import * as Yup from 'yup';

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

function FormContainer() {
  const [step, setStep] = useState(0);

  const initialValues = {
    name: '',
    surname: '',
    role: '',
    email: '',
    phone: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
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
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema} // Apply the validation schema
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form>
          {renderStep(step, formikProps)}
        </Form>
      )}
    </Formik>
  );
}

export default FormContainer;
