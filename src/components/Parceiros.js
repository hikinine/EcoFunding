import React from 'react';
import { useState } from 'react';
import { CForm, CCol, CFormInput, CFormSelect, CFormCheck, CButton } from '@coreui/react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  
  background-position: center;
  background-size: cover;
  height: 100vh;
`;
const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  
  background-position: center;
  background-size: cover;
  height: 70vh;
`;
const StyledCForm = styled(CForm)`
width: 80%;
margin: 0 auto;

`;
const Button = styled.button`
  background: transparent;
  border: 2px solid #2ebc15;
  color: #2ebc15;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem 2rem;
  &:hover {
    background: #2ebc15;
    color: white;
    border: 2px solid white;
  }
  `;

const Parceiros= () => {
  const { isAuthenticated, loginWithRedirect, isLoading, user } = useAuth0();
  const [userRole, setUserRole] = useState('');
  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Container1>
      <h1>FAÇA LOGIN PARA ACESSAR OS FORMULARIOS</h1>
      <Button onClick={() => loginWithRedirect()}>Log In</Button>
      </Container1>;
  }
  if (!userRole) {
    return (
      <Container1>
        <h2> Olá {user.name}, </h2>
        <p>Deseja acessar o formulário para investidor ou quer se tornar um parceiro Eco-sustentável?</p>
        <div style={{ display: 'flex', gap: '1rem'}}>
        <Button onClick={() => setUserRole('investor')}>Investidor</Button>
        <Button onClick={() => setUserRole('projetist')}>Parceiro Eco-Sustentável</Button>
        </div>
      </Container1>
    );
  }
    return (
      <Container>
        {userRole === 'investor' && (
        <div>
          <h2>Investor Form</h2>
          
          <button onClick={() => setUserRole('')}>Change Role</button>
        </div>
      )}
      {userRole === 'projetist' && (
        <div>
          <h2>Projetist Form</h2>
          
          <button onClick={() => setUserRole('')}>Change Role</button>
        </div>
      )}
      </Container>
    );
  }

export default Parceiros;