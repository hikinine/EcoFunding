import React from 'react';
import styled from 'styled-components';
import { useStep } from './StepContext';
import axios from 'axios';
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  margin: 4rem 0;
`;

const Button = styled.button`
  padding: 10px 30px;
  margin-top: 20px;
  background-color: #2ebc15;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #249a12;
  }
`;

const ButtonBack = styled(Button)`
  background-color: transparent;
  color: #2ebc15;
  border: 1.5px solid #2ebc15;

  &:hover {
    background-color: #2ebc15;
    color: white;
  }
`;

const InfoDiv = styled.div`
  margin: 20px 0;
`;

function Etapa2({ goToStep, formValues }) {
  const handleSubmit = async () => {
    // Validate your form data here before sending
    try {
        await axios.post('http://localhost:3001/submit-form', formValues);
        alert('Form data submitted successfully');
        // Here, you can also handle navigation or state reset as needed
    } catch (error) {
        console.error('Error submitting form data:', error);
        alert('Failed to submit form data');
    }
};
  return (
    <StyledContainer>
      <ButtonBack onClick={() => goToStep(1)}>VOLTAR</ButtonBack>
      <h2>Confirme seus dados</h2>
      <InfoDiv><strong>Nome:</strong> {formValues.name}</InfoDiv>
      <InfoDiv><strong>Sobrenome:</strong> {formValues.surname}</InfoDiv>
      <InfoDiv><strong>Tipo de formulário:</strong> {formValues.role}</InfoDiv>
      <InfoDiv><strong>Telefone:</strong> {formValues.phone}</InfoDiv>
      {/* Conditional rendering based on the role */}
      {formValues.role === 'investor' && (
        <>
          <InfoDiv><strong>Email Corporativo:</strong> {formValues.corporateEmail}</InfoDiv>
          <InfoDiv><strong>Nome do representante:</strong> {formValues.representantName}</InfoDiv>
          <InfoDiv><strong>Cargo:</strong> {formValues.cargo}</InfoDiv>
          <InfoDiv><strong>Nome da empresa:</strong> {formValues.empresa}</InfoDiv>
          <InfoDiv><strong>Segmento:</strong> {formValues.segmento}</InfoDiv>
        </>
      )}
      {formValues.role === 'parceiros' && (
        <>
          <InfoDiv><strong>CPF/CNPJ:</strong> {formValues.cpfCnpj}</InfoDiv>
          <InfoDiv><strong>Nome da Empresa:</strong> {formValues.empresa}</InfoDiv>
          <InfoDiv><strong>Segmento:</strong> {formValues.segmento}</InfoDiv>
          <InfoDiv><strong>Nome do Representante:</strong> {formValues.representantName2}</InfoDiv>
          <InfoDiv><strong>Cargo:</strong> {formValues.cargo}</InfoDiv>
          <InfoDiv><strong>Cidade:</strong> {formValues.cidade}</InfoDiv>
          <InfoDiv><strong>Estado:</strong> {formValues.estado}</InfoDiv>
          <InfoDiv><strong>Nome do Projeto:</strong> {formValues.nomeDoProjeto}</InfoDiv>
        </>
      )}
      <Button onClick={handleSubmit}>ENVIAR</Button>
    </StyledContainer>
  );
}

export default Etapa2;
