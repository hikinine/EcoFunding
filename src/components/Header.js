
import React, { useState } from 'react';
import styled from 'styled-components';
import LogoPic from '../assets/logo.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa; // Example background color
  * { 
    font-family: 'Montserrat', sans-serif;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
    width: 30%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Nav = styled.nav`
  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    width: 100%;
  }
  @media (min-width: 768px) { /* Adjust breakpoint as needed */
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  li {
    margin-right: 20px; /* Adjusts space between items */
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
`;

const NavLink = styled.a`
  margin: 0 10px;
  text-decoration: none;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: #333;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo src={LogoPic}/>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Nav isOpen={isOpen}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><NavLink href="#">Home</NavLink></li>
          <li><NavLink href="#">About</NavLink></li>
          <li><NavLink href="#">Services</NavLink></li>
          <li><NavLink href="#">Contact</NavLink></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;