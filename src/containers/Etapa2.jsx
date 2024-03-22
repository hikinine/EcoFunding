import React from 'react';
import styled from 'styled-components';
import { firestore } from '../config/firebase';
import { collection, addDoc } from "firebase/firestore";
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Adjust the gap as needed */
  
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StyledButton = styled.input`
  padding: 10px 20px;
  width: 10%;
  margin: 0 auto;
  background-color: #2ebc15;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #249a12;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 40vh;
  margin-top: 10%;
  margin-bottom: 5%;
  font-family: 'Dm Sans';
  h2 {	
    text-align: center;	
  }
`;
const InfoText = styled.p`
  font-size: 16px;
  margin: 0 auto;
  text-align: start;
`;



const ThirdStep = ({ formData, prevStep }) => {
  const handleSubmit = async () => {
    try {
      // Reference to the submissions collection
      const submissionsRef = collection(firestore, "submissions");
      
      // Add a new document with a generated ID
      await addDoc(submissionsRef, formData);
      
      console.log("Document successfully written!");
      alert('Form successfully submitted!');
    } catch (error) {
      console.error("Error writing document: ", error);
      alert('Error submitting form, please try again.');
    }
  };
  return (
    <InfoContainer>
      <h2>Confirm Information</h2>
      <InfoText>First Name: {formData.firstName}</InfoText>
      <InfoText>Last Name: {formData.lastName}</InfoText>
      <InfoText>Mobile Number: {formData.mobileNumber}</InfoText>
      <InfoText>Role: {formData.role}</InfoText>
      {/* Display additional details based on role */}
      {formData.detailParceiro && <InfoText>Detail for Parceiro: {formData.detailParceiro}</InfoText>}
      {formData.detailInvestidor && <InfoText>Detail for Investidor: {formData.detailInvestidor}</InfoText>}
      
      <StyledButton as="button" type="button" onClick={prevStep}>Back</StyledButton>
      <StyledButton as="button" type="button" onClick={handleSubmit}>Confirm and Submit</StyledButton>
    </InfoContainer>
  );
};

export default ThirdStep;