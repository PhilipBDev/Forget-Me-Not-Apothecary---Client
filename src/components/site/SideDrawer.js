import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideDrawer = ({ show }) => {
  return (
    <StyleSideDrawer show={show}>
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
    </StyleSideDrawer>
  );
};

export default SideDrawer;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const StyleSideDrawer = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(103, 105, 88, 0.5);
    position: fixed;
    transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: ${({ show }) => (show ? '6rem' : '3.5rem')};
    transition: transform 0.3s ease-in-out;
  }
`;

const Li = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  padding: 18px 10px;
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
  background: rgba(36, 101, 166, 0.5);
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
