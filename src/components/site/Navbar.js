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
            <CartButton>
              <CartLink to="/cart">
                <i className="fas fa-shopping-cart"></i>
                <CartNav>Cart</CartNav>
                <CartNav>0</CartNav>
              </CartLink>
            </CartButton>
          </Li>
          <Li>
            <NavLink to="/">Shop</NavLink>
          </Li>
          {/* <Li>
            <NavLink to="/login">Login</NavLink>
          </Li>
          <Li>
            <NavLink to="/register">Register</NavLink>
          </Li> */}
        </>
      </Ul>

      <Hamburger>
        <HamburgerDiv></HamburgerDiv>
        <HamburgerDiv></HamburgerDiv>
        <HamburgerDiv></HamburgerDiv>
      </Hamburger>
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
  @media (max-width: 960px) {
    font-size: 1.5rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  @media (max-width: 960px) {
    display: none;
  }
`;

const Li = styled.li`
  padding-left: 1.5rem;
  margin: 0rem 0.2rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  &:hover {
    color: #efff12;
  }
`;

const CartButton = styled.div`
  background: rgba(36, 101, 166, 0.4);
  padding: 10px;
  border-radius: 8px;
  &:hover {
    background: rgba(243, 255, 74, 0.9);
    color: #000;
  }
`;

const CartLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const CartNav = styled.span`
  display: flex;
  align-items: center;
  margin-left: 8px;
  color: #fff;
  text-decoration: none;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const Hamburger = styled.div`
  width: 30px;
  height: 25px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: rgba(243, 255, 74, 0.9);
  }
  @media (max-width: 960px) {
    display: flex;
  }
`;

const HamburgerDiv = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 1rem;
  background: #fff;
  box-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;
