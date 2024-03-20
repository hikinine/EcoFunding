import React, { useState} from 'react';
import styled from 'styled-components';
import { Field, useFormikContext } from 'formik';

const CollumnModel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100%;
  h2 {
  font-size: 24px;
  margin-top: 2em;
  margin-left: 3rem;
  color: #2ebc15;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  font-family: 'Lexend Tera', sans-serif !important;
  @media (max-width: 768px) {
    font-size: 32px; // Adjust font size for mobile
    margin-left: 2rem; // Adjust margin for mobile
    text-align: center; // Center text on mobile
    height: 110vh;
  }

}

`;
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 600px;
  font-family: 'Dm Sans', sans-serif;
  @media (max-width: 1268px) {
    flex-direction: column;
    
  }
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  


div {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100%;

}


}
`;
const Paragraph = styled.p`
  font-size: 33px; /* Increased from 22px */
  margin-top: 0px; /* Adjusted for visual consistency */
  margin-bottom: 30px; /* Increased for better spacing */
  font-family: 'Dm Sans', sans-serif !important;
`;

const RoleButton = styled.button`
  margin: 15px;
  padding: 15px 0; /* Increased padding */
  width: 350px; /* Increased width */
  background-color: ${(props) => (props.isSelected ? '#242a32' : 'transparent')};
  color: ${(props) => (props.isSelected ? 'white' : '#242a32')};
  border: 1.5px solid #242a32; /* Slightly thicker border */
  cursor: pointer;
  text-transform: uppercase;
  font-family: 'Lexend Tera', sans-serif;
  font-size: 1.125em; /* Increased font size */
  &:hover {
    background-color: #242a32;
    color: white;
  }
`;

const StyledInput = styled(Field)`
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
  width: 375px; /* Increased width */
  height: calc(5cap * 1.5); /* Increased height */
  margin-bottom: 0px; /* Adjusted margin for positioning */
  margin-left: 300px; /* Adjusted margin for positioning */
  position: relative;
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
  @media (max-width: 768px) {
    margin-left: 0px;
    width: 50vw; /* Adjust margin for mobile */
    margin-bottom: 100px; /* Adjust margin for mobile */
  }
`;

function Etapa0({ nextStep }) {
  const { values, setFieldValue } = useFormikContext(); // Access Formik context
  const [selectedRole, setSelectedRole] = useState(values.role || 'none');
  
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setFieldValue('role', role);
  };
  const goToNextStep = () => {
    if (values.role === 'investor' || values.role === 'parceiros') {
      nextStep();
    } else {
      alert('Please select either "Investidor" or "Parceiro" to proceed.');
    }
  };
  return (
    
      
      <StyledContainer>
        <CollumnModel>
        <Paragraph> Preencha os dados abaixo</Paragraph>
        
        <StyledInput name="name" type="text" placeholder="Nome" />
        <StyledInput name="surname" type="text" placeholder="Sobrenome" />
        <StyledInput name="phone" type="text" placeholder="Telefone" />
        
        
        <RoleButton
        onClick={() => handleRoleSelect('parceiros')} // Change 'projectist' to 'parceiros' if needed
        isSelected={selectedRole === 'parceiros'}
      >
        Parceiro
      </RoleButton>
        <RoleButton
          onClick={() => handleRoleSelect('investor')}
          isSelected={selectedRole === 'investor'}
        >
          Investidor
        </RoleButton>
        
      
        
        </CollumnModel>
        <Button type="button" onClick={goToNextStep}>PRÓXIMA ETAPA</Button>
      </StyledContainer>
    
  );
}
export default Etapa0;