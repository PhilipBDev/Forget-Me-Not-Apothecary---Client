import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import SingleItem from './SingleItem';
import PayPalOrder from './PayPalOrder';
import UserContext from '../../context/UserContext';

import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

const Cart = () => {
  const { user } = useContext(UserContext);

  const [checkout, setCheckout] = useState(false);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
    setCheckout(false);
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    setCheckout(false);
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  console.log(cartItems);

  return (
    <CartStyle>
      <LeftSide>
        <CartHeader>Shopping Cart</CartHeader>
        {cartItems.length === 0 ? (
          <CartHeader>
            Your Cart Is Empty <Back to="/">Go Back</Back>
          </CartHeader>
        ) : (
          cartItems.map((item) => (
            <SingleItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeFromCartHandler}
            />
          ))
        )}
      </LeftSide>
      <RightSide>
        <CartInfo>
          <CartSubtotal>Subtotal for ({getCartCount()}) items:</CartSubtotal>

          {user === null ? (
            <>
              <CartPrice>${getCartSubTotal()}</CartPrice>
            </>
          ) : (
            user && (
              <>
                <CartPrice>
                  ${Math.round(getCartSubTotal() - getCartSubTotal() / 10)}
                </CartPrice>
              </>
            )
          )}
        </CartInfo>
        <>
          {checkout ? (
            <PayPalOrder orderTotal={getCartSubTotal()} />
          ) : (
            <ButtonStyle
              onClick={() => {
                setCheckout(true);
              }}
            >
              <CheckoutBtn>Proceed to Checkout</CheckoutBtn>
            </ButtonStyle>
          )}
        </>
      </RightSide>
    </CartStyle>
  );
};

export default Cart;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const CartStyle = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 2rem auto;

  @media (max-width: 1320px) {
    max-width: 900px;
  }

  @media (max-width: 960px) {
    max-width: 800px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const CartHeader = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  color: #fff;
  padding-bottom: 2rem;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const LeftSide = styled.div`
  flex: 0.7;
  margin-right: 1rem;
  background: transparent;
  padding: 1rem;
`;

const RightSide = styled.div`
  flex: 0.3;
  background: rgba(36, 101, 166, 0.5);
  color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  border: 2px solid #fff;
  height: fit-content;
  margin-top: 4.75rem;

  @media (max-width: 960px) {
    margin: 1rem;
  }
`;

const CartInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;
`;

const Back = styled(Link)`
  padding: 0.8rem 1.7rem;
  text-decoration: none;
  width: 100%;
  color: #fff;
  border: 1px solid #faffd1;
  background: rgba(66, 194, 245, 0.8);
  border-radius: 3rem;
  margin-left: 0.2rem;
  cursor: pointer;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    background: rgba(243, 255, 74, 0.9);
    color: #fff;
    font-weight: bold;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    font-size: 1.2rem;
  }
`;

const CartSubtotal = styled.p`
  padding: 8px;
  font-weight: bold;
`;

const CartPrice = styled.p`
  padding: 8px;
`;

const ButtonStyle = styled.div`
  border: none;
`;

const CheckoutBtn = styled.button`
  padding: 0.8rem 1.7rem;
  width: 100%;
  color: #fff;
  border: 1px solid #faffd1;
  background: rgba(66, 194, 245, 0.8);
  cursor: pointer;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    background: rgba(243, 255, 74, 0.9);
    color: #fff;
    font-weight: bold;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    font-size: 1.2rem;
  }
`;
