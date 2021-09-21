import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const OrderConfirmation = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push('/');
  }, 3000);

  return (
    <>
      <ConfirmStyle>ORDER CONFIRMED!</ConfirmStyle>
      <ConfirmStyle>Redirecting...</ConfirmStyle>
    </>
  );
};

export default OrderConfirmation;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const ConfirmStyle = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;

  padding-top: 1rem;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;
