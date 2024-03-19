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
  }

}

`;
const Paragraph = styled.p`
  font-size: 22px;
  margin-top: -50px;
  margin-bottom: 100px;
  font-family: 'Dm Sans', sans-serif !important;
`;

const RoleButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: ${(props) => (props.isSelected ? '#2ebc15' : 'transparent')};
  color: ${(props) => (props.isSelected ? 'white' : '#2ebc15')};
  border: 1px solid #2ebc15;
  cursor: pointer;
  text-transform: uppercase;
  font-family: 'Lexend Tera', sans-serif;
  &:hover {
    background-color: #2ebc15;
    color: white;
  }
`;
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 600px;
  font-family: 'Dm Sans', sans-serif;
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
const Button = styled.button`
  width: 150px;
  height: 5cap;
  margin: 10px;
  background-color: transparent;
  border: 1px solid #2ebc15;
  color: #2ebc15;
  font-family: 'Lexend Tera', sans-serif;
  cursor: pointer;
  &:hover {
    background-color: #2ebc15;
    color: white;
  }
`;
const StyledSelect = styled.select`
  width: 200px;
  height: 30px;
  margin: 10px;
  &:focus {
    outline: 1px solid #2ebc15;
  }
  
  option {
    font-family: 'Dm Sans', sans-serif;
    padding: 20px;
    margin: 10px;
  }

`;
const StyledInput = styled(Field)`
  width: 200px;
  height: 30px;
  margin: 10px;
  padding: 10px;
  font-family: 'Dm Sans', sans-serif;
  &:focus {
    outline: 1px solid #2ebc15;
  }
`;
function Etapa0({ nextStep }) {
  const { values, setFieldValue } = useFormikContext(); // Access Formik context
  const [selectedRole, setSelectedRole] = useState(values.role || '');
  
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setFieldValue('role', role);
  };
  return (
    
      
      <StyledContainer>
        <CollumnModel>
        <Paragraph> Preencha os dados do formulario de investidor para prosseguir</Paragraph>
        <div>
        <StyledInput name="name" type="text" placeholder="Nome" />
        <StyledInput name="surname" type="text" placeholder="Sobrenome" />
        <StyledInput name="phone" type="text" placeholder="Telefone" />
        </div>
        <div>
        <RoleButton
          onClick={() => handleRoleSelect('projectist')}
          isSelected={selectedRole === 'projectist'}
        >
          Parceiro Eco
        </RoleButton>
        <RoleButton
          onClick={() => handleRoleSelect('investor')}
          isSelected={selectedRole === 'investor'}
        >
          Investidor
        </RoleButton>
      </div>
        <Button type="button" onClick={nextStep}>PRÓXIMA ETAPA</Button>
        </CollumnModel>
      </StyledContainer>
    
  );
}
export default Etapa0;