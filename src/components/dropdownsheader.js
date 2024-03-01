import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import "./header.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Wrapper = styled.header`
background-color: transparent;
margin-bottom: 22px;

.ant-menu-item-selected {
    border-bottom: 3px solid green !important;
    color: green !important;
  }

  & .ant-menu-item:hover {
    border-bottom: 3px solid #d9d9d9 !important;
    color: black !important;
  }

  // remove ant design blue border
  .ant-menu-item-selected::after {
    content: none;
    border-bottom: none !important;
  }

  & .ant-menu-item:hover::after {
    content: none;
    border-bottom: none !important;
  }
.ant-submenu-item-selected {
    border-bottom: 3px solid green !important;
    color: green !important;
  }

  & .ant-submenu-item:hover {
    border-bottom: 3px solid #d9d9d9 !important;
    color: black !important;
  }

  // remove ant design blue border
  .ant-submenu-item-selected::after {
    content: none;
    border-bottom: none !important;
  }

  & .ant-submenu-item:hover::after {
    content: none;
    border-bottom: none !important;
  }
  .ant-menu-item, .ant-submenu-item {
    text-transform: none; /* or uppercase, capitalize, etc., as needed */
}
* {
    
}
`;
const items = [
    {
      label: <Link to="/">Home</Link>,
      key: 'home',
    },
    {
      label: 'Sobre',
      key: 'sobre',
      children: [
        {
          label: <Link to="/category1">Sobre Nós</Link>,
          key: 'sobrenos',
        },
        {
          label: <Link to="/category2">Sobre ESG</Link>,
          key: 'sobreEsg',
        },
      ],
    },
    {
      label: 'Investir',
      key: 'investir',
      children: [
        {
          label: <Link to="/category1">Investir Agora</Link>,
          key: 'investir',
        },
        {
          label: <Link to="/category2">Sobre os Investimentos</Link>,
          key: 'sobreinvestimentos',
        },
      ],
    },
    {
      label: 'Seja um Parceiro Eco',
      key: 'parceiro',
      children: [
        {
          label: <Link to="/category1">Sobre a Parceria</Link>,
          key: 'category1',
        },
        {
          label: <Link to="/category2">Formulário</Link>,
          key: 'category2',
        },
      ],
    },
    {
      label: <Link to="/about">About</Link>,
      key: 'about',
    },
  ];

const Dropdown = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState('mail');
    const [menuMode, setMenuMode] = useState('horizontal');
    const updateMenuMode = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) { // Assuming 768px is your mobile breakpoint
            setMenuMode('vertical');
        } else {
            setMenuMode('horizontal');
        }
    };
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    
        // Define your navigation paths based on the key or any other logic
        switch(e.key) {
          case 'inicio':
            navigate('/');
            break;
          case 'sobreesg':
            navigate('/SobreEsg');
            break;
          case 'sobrenos':
            navigate('/Sobre Nós');
            break;
          case 'sobreinvestir':
            navigate('/SobreInvestir');
            break;
          case 'investir':
            navigate('/Investir');
            break;
          case 'setting:2':
            navigate('/SobreParcerias');
            break;
          case 'setting:2':
            navigate('/Formulario');
            break;
          case 'contato':
            navigate('/Contato');
            break;
          
          default:
            // Handle default case or error
        }
      };

    // Listen to window resize event
    useEffect(() => {
        updateMenuMode(); // Update on initial render
        window.addEventListener('resize', updateMenuMode);
        return () => window.removeEventListener('resize', updateMenuMode);
    }, []);


    return <Wrapper><Menu style={{ color: 'green' }}onClick={onClick} selectedKeys={[current]} mode={menuMode} items={items} /></Wrapper>;
};

export default Dropdown;