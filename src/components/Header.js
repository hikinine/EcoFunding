
import React, { useState } from 'react';
import { CNavbar, CContainer, CNavbarBrand, CNavbarToggler, CCollapse, CNavbarNav, CNavItem, CNavLink, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider, CForm, CFormInput, CButton } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
// Import other necessary hooks and assets
import LOGO from '../assets/LOGOTIPO.svg';
import User1 from '../assets/user.svg';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";

// Styled components definitions
const Wrapper = styled.div`
  font-family: 'Lexend Tera', sans-serif;
  font-weight: 500;
  font-size: 12px;
  margin-top: 4em;
`;

const SpacedCNavItem = styled(CNavItem)`
  margin-right: 4rem;

  &:last-child {
    margin-right: 0;
  }
`;

const StyledCDropdown = styled(CDropdown)`
  margin-right: 4rem;

  &:last-child {
    margin-right: 0;
  }
`;

const SpacedCDropdownToggle = styled(CDropdownToggle)`
  margin-right: 4rem;

  &:last-child {
    margin-right: 0;
  }
`;
const CenteredCContainer = styled(CContainer)`
  display: flex; // Ensures the content can be flexibly laid out
  justify-content: center; // Centers the children (navbar brand)
  padding-left: 4rem; // Applies desired margin on the left
  
`;
const AlignedCNavbarBrand = styled(CNavbarBrand)`
  margin-left: 8em;
`;
 

function ResponsiveAppBar() {
  const [visible, setVisible] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <Wrapper>
      <CNavbar expand="lg" colorScheme="light">
      <AlignedCNavbarBrand href="#">
            <img src={LOGO} alt='Logo' style={{ height: '45px' }}/>
          </AlignedCNavbarBrand>
        <CenteredCContainer >
         
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
            <StyledCDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">SOBRE</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </StyledCDropdown>
            
            <SpacedCNavItem>
              <CNavLink href="#" >
                PARCERIA
              </CNavLink>
            </SpacedCNavItem>
            <SpacedCNavItem>
              <CNavLink href="#" >
                FAQ
              </CNavLink>
            </SpacedCNavItem>
            <SpacedCNavItem>
              <CNavLink href="#">CONTATO</CNavLink>
            </SpacedCNavItem>
          </CNavbarNav>
          <CNavbarNav className="ms-auto" style={{ marginRight: '4rem'}}>
          {isAuthenticated ? (
              <CDropdown variant="nav-item" popper={false}>
                <SpacedCDropdownToggle color="secondary">
                  {/* Display user's picture if authenticated */}
                  <img src={user.picture} alt={user.name} style={{ height: '25px'}} />
                </SpacedCDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#" onClick={() => logout({ returnTo: window.location.origin })}>Logout</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            ) : (
              <CButton style={{ backgroundColor: 'transparent', border: 'none'}} onClick={() => loginWithRedirect()}><img src={User1} alt='ega' style={{ height: '25px' }}/></CButton>
            )}
          </CNavbarNav>
          
        </CCollapse>
      </CenteredCContainer>
    </CNavbar>
    </Wrapper>
  
)
};
export default ResponsiveAppBar;