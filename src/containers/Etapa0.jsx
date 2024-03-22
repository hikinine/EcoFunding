import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Adjust the gap as needed */
  height: 40vh;
  align-items: center;
  margin-top: 10%;
  font-family: 'Dm Sans';
  
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const StyledButton = styled.button`
  padding: 10px 50px;
  background-color: #2ebc15;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #249a12;
  }
`;

const MobileInput = ({ onChange, value }) => {
  return (
    <StyledInput
      type="tel"
      placeholder="Telefone (XX) XXXXX-XXXX"
      value={value}
      onChange={onChange}
    />
  );
};

const FirstStep = ({ nextStep, updateFormData }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [mobileNumber, setMobileNumber] = useState('');

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 3) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    }
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const handleMobileInputChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setMobileNumber(formattedPhoneNumber);
    setValue('mobileNumber', formattedPhoneNumber, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput type="text" placeholder="First name" {...register("firstName", { required: true, maxLength: 80 })} />
      
      <StyledInput type="text" placeholder="Last name" {...register("lastName", { required: true, maxLength: 100 })} />
      <MobileInput value={mobileNumber} onChange={handleMobileInputChange} />
      <StyledLabel>
        Parceiro <StyledInput type="radio" value="Parceiro" {...register("role", { required: true })} />
        Investidor <StyledInput type="radio" value="Investidor" {...register("role", { required: true })} />
      </StyledLabel>
      <StyledButton type="submit">Próxima etapa</StyledButton>
    </StyledForm>
  );
};

export default FirstStep;
