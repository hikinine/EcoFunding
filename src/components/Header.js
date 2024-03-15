import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/LOGOTIPO.webp";
const StyledHeader = styled.header`
  background-color: transparent;
  width: 100%;
  padding: 50px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .nav_logo {
    padding: 0 12px;
    width: 100%; // Ensure the container takes full width
    text-align: center; // Center the content
  }
  
  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    padding: 20px 0; // Reduce padding on smaller screens
    flex-direction: column;
    align-items: center;
    
    .menuToggleBtn {
      display: block;
    }
  }
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;
  color: black;
  li {
    color: black;
    &:hover {
      cursor: pointer;
      border-radius: 4px;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    color: black;
    display: block;
    padding: 10px 10px;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  }
`;
const Img = styled.img`
    max-width: 350px;
`;
const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  return (
    <>
      <StyledHeader>
        <div className="nav_logo">
          <Link to={"/"} className="nav-logo-link">
            <Img src={Logo} alt="ECOFUNDING" />
          </Link>
        </div>

        <NavManu isToggleOpen={isToggleOpen}>
          <li>
            <Link to={"/about"} className="nav-menu-list">
              SOBRE
            </Link>
          </li>
          <li>
            <Link to={"/projects"} className="nav-menu-list">
              PARCERIA
            </Link>
          </li>
          <li>
            <Link to={"/til"} className="nav-menu-list">
              FAQ
            </Link>
          </li>
          <li>
            <Link to={"/diary"} className="nav-menu-list">
              CONTATO
            </Link>
          </li>
        </NavManu>
        <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
      </StyledHeader>
    </>
  );
};

export default Header;
