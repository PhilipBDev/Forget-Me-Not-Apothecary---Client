import styled from 'styled-components';
import SingleItem from './SingleItem';

const Cart = () => {
  return (
    <CartStyle>
      <LeftSide>
        <CartHeader>Shopping Cart</CartHeader>
        <SingleItem />
        <SingleItem />
        <SingleItem />
      </LeftSide>
      <RightSide>
        <CartInfo>
          <CartSubtotal>Subtotal for (0) items:</CartSubtotal>
          <CartPrice>$29.99</CartPrice>
        </CartInfo>
        <ButtonStyle>
          <CheckoutBtn>Proceed to Checkout</CheckoutBtn>
        </ButtonStyle>
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
