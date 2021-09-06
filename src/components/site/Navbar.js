import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Title>Forget-Me-Not Apothecary</Title>
      </div>
      <Ul>
        <>
          <Li>
            <NavLink to="/">Shop</NavLink>
          </Li>
          <Li>
            <NavLink to="/login">Login</NavLink>
          </Li>
          <Li>
            <NavLink to="/register">Register</NavLink>
          </Li>
          <Li>
            <NavLink to="/cart">
              <i className="fas fa-shopping-cart"></i> Cart
            </NavLink>
          </Li>
        </>
      </Ul>
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
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  margin-bottom: 1rem;
  z-index: 50;
`;
const Title = styled.h2`
  color: #fff;
`;

const Ul = styled.ul`
  padding: 0rem 0.6rem;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  border-radius: 1rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #808080;
  }
`;

const Li = styled.li`
  padding: 0.3rem;
  margin: 0rem 0.2rem;
  font-size: 18px;
  font-weight: 700;
  user-select: none;
`;
