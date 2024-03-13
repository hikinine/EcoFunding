import React from 'react';
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
const StyledCForm = styled(CForm)`
width: 80%;
margin: 0 auto;

`;

const Parceiros= () => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <button onClick={() => loginWithRedirect()}>Log In</button>;
  }
    return (
      <Container>
        <StyledCForm  className="row g-3">
          <CCol md={4}>
            <CFormInput type="name" id="inputEmail4" label="Nome" />
          </CCol>
          <CCol md={6}>
            <CFormInput type="surname" id="inputEmail4" label="Sobrenome" />
          </CCol>
          <CCol md={6}>
            <CFormInput type="email" id="inputEmail4" label="Email Corporativo" />
          </CCol>
          
          <CCol xs={12}>
            <CFormInput id="inputAddress" label="" placeholder="1234 Main St"/>
          </CCol>
          <CCol xs={12}>
            <CFormInput id="inputAddress2" label="Address 2" placeholder="Apartment, studio, or floor"/>
          </CCol>
          <CCol md={6}>
            <CFormInput id="inputCity" label="City"/>
          </CCol>
          <CCol md={4}>
            <CFormSelect id="inputState" label="State">
              <option>Choose...</option>
              <option>...</option>
            </CFormSelect>
          </CCol>
          <CCol md={2}>
            <CFormInput id="inputZip" label="Zip" />
          </CCol>
          <CCol xs={12}>
            <CFormCheck type="checkbox" id="gridCheck" label="Check me out"/>
          </CCol>
          <CCol xs={12}>
            <CButton color="primary" type="submit">Sign in</CButton>
          </CCol>
        </StyledCForm>
      </Container>
    );
  }

export default Parceiros;