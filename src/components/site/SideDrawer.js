import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import domain from '../../util/domain';

const SideDrawer = ({ show }) => {
  const { user, getUser } = useContext(UserContext);

  async function logOut() {
    await Axios.get(`${domain}/auth/logOut`);
    await getUser();
  }

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <StyleSideDrawer show={show}>
      {user === null ? (
        <>
          <Li>
            <LoginLink to="/login">Login</LoginLink>
          </Li>
          <Li>
            <RegisterLogoutLink to="/register">Register</RegisterLogoutLink>
          </Li>
        </>
      ) : (
        user && (
          <Li>
            <RegisterLogoutLink to="/" onClick={logOut}>
              Log Out
            </RegisterLogoutLink>
          </Li>
        )
      )}
      <Li>
        <NavLink to="/">Shop</NavLink>
      </Li>
      <Li>
        <CartButton>
          <CartLink to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <CartNav>Cart</CartNav>
            <CartNav>({getCartCount()})</CartNav>
          </CartLink>
        </CartButton>
      </Li>
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

const LoginLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  &:hover {
    color: #efff12;
  }
`;

const RegisterLogoutLink = styled(LoginLink)`
  margin-right: 2rem;
`;

const CartButton = styled.div`
  background: rgba(36, 101, 166, 0.3);
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
