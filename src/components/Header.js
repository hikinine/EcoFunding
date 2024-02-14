import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const HeaderContainer = styled.header`
    color: black;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 70px;
    background-color: transparent;
    margin-bottom: -96px;
    
  

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

const Logo = styled.h1`
    font-size: 24px;
    margin-left: 100px;
    margin-top: 20px;
    display: flex;
    justify-content: center; 
    &:first-child {
        width: 50px;
        height: 50px;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

const Nav = styled.nav`

    margin-left: 180px;
    ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;

        li {
            font-size: 24px;
            margin-left: 80px;

            &:first-child {
                margin-left: 0;
            }
        }
    }

    @media (max-width: 768px) {
        ul {
            flex-direction: column;
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo><img src={logo} /></Logo>
            <Nav>
                <ul>
                    <li>Inicio</li>
                    <li>Sobre</li>
                    <li>Investir</li>
                    <li>Login</li>
                    <li>Cadastro</li>
                </ul>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;