import { useRef, useState, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

const PayPalOrder = ({ orderTotal }) => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  const [paid, setPaid] = useState(false);
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Total amount for all items.',
                amount: {
                  currency_code: 'USD',
                  value: user
                    ? Math.round(orderTotal - orderTotal / 10)
                    : orderTotal,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [orderTotal, user]);

  if (paid) {
    history.push('/orderconfirmation');
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default PayPalOrder;
