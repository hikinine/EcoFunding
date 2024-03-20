import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/LOGOTIPO.webp";

const StyledHeader = styled.header`
  
  width: 100%;
  display: flex;
  
  align-items: center;
  justify-content: space-between;
  position: relative; // Ensure proper stacking
  
  
  .nav_logo {
    text-align: left; // Default to left alignment
    width: 25vw; 
    @media (max-width: 768px){
      text-align: center; // Center the content on smaller screens
      width: 100%; // Full width to accommodate smaller screens
    }
  }
  
  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 1.5em; // Use em for scalability
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
    z-index: 2; // Ensure it's above other content

    @media screen and (max-width: 768px) {
      display: block;
    }
  }

  @media screen and (max-width: 768px) {
    
    flex-direction: column;
    align-items: center;
  }
`;

const NavManu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  color: black;

  li {
    margin-right: 1em; // Use em for spacing between items

    &:hover {
      cursor: pointer;
      border-radius: 4px;
    }
  }

  .nav-menu-list, .nav-menu-list1 {
    text-decoration: none;
    color: black;
    display: block;
    padding: 0.5em; // Use em for padding
    

    &:hover{
      background-color: #2ebc15;
      color: white;
    }
  }

  .nav-menu-list1 {
    border: 1px solid #2ebc15;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top: 1em; // Adjust top margin
    display: ${props => props.isToggleOpen ? "flex" : "none"}; // Use flex to align items vertically
  }
`;

const Img = styled.img`
    max-width: 100%; // Ensure logo is responsive
    height: auto; // Maintain aspect ratio
`;
const Div = styled.div`
    padding: 20px;  
   @media (max-width: 768px){
      padding: 0px;
    }
`;
const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    
    <Div>
      <StyledHeader>
        <div className="nav_logo">
          <Link to={"/"}>
            <Img src={Logo} alt="ECOFUNDING" />
          </Link>
        </div>

        <NavManu isToggleOpen={isToggleOpen}>
          <li><Link to={"/about"} className="nav-menu-list">SOBRE</Link></li>
          <li><Link to={"/projects"} className="nav-menu-list">PARCERIA</Link></li>
          <li><Link to={"/til"} className="nav-menu-list">FAQ</Link></li>
          <li><Link to={"/diary"} className="nav-menu-list1">CONTATO</Link></li>
        </NavManu>
        <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
      </StyledHeader>
    </Div>

    
  );
};

export default Header;
