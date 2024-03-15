import styled from 'styled-components';
import logo from '../assets/LOGOTIPO.webp';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; // Import useAuth0 hook
import { useState } from 'react';
const Button = styled.button`
  background: transparent;
  border-color: transparent;
  color: var(--clr-grey-5);
  cursor: pointer;
  font-size: 1.2rem;
  letter-spacing: var(--spacing);
  &:hover {
    color: var(--clr-primary-5);
  }
  `;
const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    gap: 200px;
    margin-right: 200px;
    
    a {
      text-decoration: none;
    }
    li {
      margin-bottom: 100px;
      margin-right: 100px;
      cursor: pointer;
    }
    @media (max-width: 1292px) {
      gap: 100px;
    }
`
const NavContainer = styled.nav`
  width: 90vw;
  display: flex;
  flex-direction: column; /* Stack children vertically */
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  font-weight: 300;
  padding: 1rem 400px;
  .nav-center {
    
    
  }
  .nav-header {
    display: flex;
    
    
    width: 100%; /* Ensure it spans the full width of its container */
    img {
      width: 175px;
      margin: 0; /* Remove any margin to center the logo */
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      width: 90vw;
      display: flex; /* Use flexbox for alignment */
      justify-content: center; /* Center the content horizontally */
      align-items: center; /* Center the content vertically */
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 4rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;
const Img = styled.img`
position: relative;


top: 0;
left: 200px;
width: 100%;
height: 100px;
object-fit: contain;
max-width: 800px;

`;
const Header = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0(); // Destructure needed functions and state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const [isNavOpen, setIsNavOpen] = useState(false); 
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <Img src={logo} alt='comfy sloth' />
          </Link>
          <button type='button' className='nav-toggle' onClick={toggleNav} >
            <FaBars />
          </button>
        </div>
        <Ul className='nav-links' isOpen={isNavOpen}>
          <li>Sobre</li>
          <li>PARCERIA</li>
          <li>FAQ</li>
          {/* Conditional rendering based on authentication state */}
          {
  isAuthenticated ? (
    <li style={{ position: 'relative' }}>
      <img
        src={user.picture}
        alt={user.name}
        style={{ width: '30px', borderRadius: '50%', cursor: 'pointer' }}
        onClick={toggleDropdown} // Toggle dropdown on image click
      />
      {isDropdownOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            backgroundColor: 'white',
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
            padding: '12px',
            zIndex: 1,
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Button onClick={() => logout({ returnTo: window.location.origin })}>Conta</Button></li>
            <li><Button onClick={() => logout({ returnTo: window.location.origin })}>Dashboard</Button></li>
            <li><Button onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button></li>

          </ul>
        </div>
      )}
    </li>
  ) : (
    <li>
      <Button onClick={() => loginWithRedirect()}>Login</Button>
    </li>
  )
}
        </Ul>
      </div>
    </NavContainer>
  );
};


export default Header;