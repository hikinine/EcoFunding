import React, { createContext, useContext, useState } from 'react';

export const StepContext = createContext();

export const useStep = () => useContext(StepContext);

export const StepProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState('');

  const nextStep = () => setStep((currentStep) => Math.min(currentStep + 1, 2));
  const prevStep = () => setStep((currentStep) => Math.max(currentStep - 1, 0));

  return (
    <StepContext.Provider value={{ step, setStep, nextStep, prevStep, role, setRole }}>
      {children}
    </StepContext.Provider>
  );
};