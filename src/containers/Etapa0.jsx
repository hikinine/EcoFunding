import React, { useState, useContext} from 'react';
import styled from 'styled-components';
import { useField,Field, useFormikContext } from 'formik';
import { useStep,  } from './StepContext';

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
  font-size: 30px; /* Increased from 22px */
  margin-top: 0px; /* Adjusted for visual consistency */
  margin-bottom: 20px; /* Increased for better spacing */
  font-family: 'Dm Sans', sans-serif !important;
`;

const RoleButton = styled.button`
  margin: 15px;
  padding: 15px 0; /* Increased padding */
  width: 350px; /* Increased width */
  background-color: ${props => props.isSelected ? '#242a32' : 'transparent'};
color: ${props => props.isSelected ? 'white' : '#242a32'};
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

const Input = styled.input`
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

function Etapa0({ goToStep, formValues, setFormValues }) {
  const [errors, setErrors] = useState({});
  

  const { setRole } = useStep(); // Assuming useStep hook provides access to setRole
  const [selectedRole, setSelectedRole, newRole] = useState('');
  const handleRoleSelect = (role) => {
    setSelectedRole(role); // Correctly updating the local state
    setRole(role); // Correctly updating the role in context
    console.log('Selected role:', role);
    setFormValues(prevState => ({ ...prevState, role: role })); // Correctly updating formValues with the selected role
};
const formatPhoneNumber = (value) => {
  // Remove all non-digits and limit to 11 digits
  let phoneNumber = value.replace(/\D/g, '').substring(0, 11);
  // Apply formatting
  if (phoneNumber.length > 2) {
    if (phoneNumber.length <= 10) {
      // Format for 10 digits (XX) XXXX-XXXX
      phoneNumber = phoneNumber.replace(/^(\d{2})(\d{4})(\d+)/, '($1) $2 - $3');
    } else {
      // Format for 11 digits (XX) XXXXX-XXXX
      phoneNumber = phoneNumber.replace(/^(\d{2})(\d{5})(\d+)/, '($1) $2 - $3');
    }
  }
  return phoneNumber;
};
const handleInputChange = (e) => {
  const { name, value } = e.target;
  if (name === "phone") {
    const formattedPhoneNumber = formatPhoneNumber(value);
    setFormValues(prevState => ({ ...prevState, [name]: formattedPhoneNumber }));
  } else {
    setFormValues(prevState => ({ ...prevState, [name]: value }));
  }
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
      <CollumnModel>
        <Paragraph> Preencha os dados abaixo</Paragraph>
        <Input
          name="name"
          type="text"
          placeholder="Nome"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <Input
          name="surnaime"
          type="text"
          placeholder="Sobrenome"
          value={formValues.surnaime}
          onChange={handleInputChange}
        />
        <Input
           type="tel"
           id="phone"
           name="phone"
           placeholder='Telefone (XX) XXXXX-XXXX'
           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
           required
           value={formValues.phone}
           onChange={handleInputChange}
        />
        {/* Similar input elements for 'surname' and 'phone' */}
        <RoleButton
          onClick={() => handleRoleSelect('parceiros')}
          isSelected={formValues.role === 'parceiros'}
        >
          Parceiro
        </RoleButton>
        <RoleButton
          onClick={() => handleRoleSelect('investor')}
          isSelected={formValues.role === 'investor'}
        >
          Investidor
        </RoleButton>
      </CollumnModel>
      <Button type="button" onClick={handleSubmit}>PRÓXIMA ETAPA</Button>
    </StyledContainer>
  );
}

export default Etapa0;