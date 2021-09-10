import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';

const Navbar = ({ click }) => {
  return (
    <Nav>
      <div>
        <Title>Forget-Me-Not Apothecary</Title>
      </div>
      <BurgerMenu />
    </Nav>
  );
};

export default Navbar;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const Nav = styled.nav`
  background-color: rgba(66, 194, 245, 0.8);
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;
  z-index: 50;
`;
const Title = styled.h2`
  color: #fff;
  font-size: 30px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  @media (max-width: 640px) {
    font-size: 1.4rem;
  }
`;
