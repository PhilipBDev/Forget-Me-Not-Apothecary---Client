import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

const SingleItem = ({ item, qtyChangeHandler, removeHandler }) => {
  const { user } = useContext(UserContext);

  return (
    <ItemStyle>
      <div>
        <img src={item.imageUrl} alt={item.name} />
      </div>

      <ItemName to={`/product/${item.product}`}>
        <p>{item.name}</p>
      </ItemName>
      {user === null ? (
        <>
          <ItemPrice>{item.price}</ItemPrice>
        </>
      ) : (
        user && (
          <>
            <ItemPrice>${Math.round(item.price - item.price / 10)}</ItemPrice>
          </>
        )
      )}

      <ItemSelect
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </ItemSelect>

      <DeleteItem onClick={() => removeHandler(item.product)}>
        <i className="fas fa-trash"></i>
      </DeleteItem>
    </ItemStyle>
  );
};

export default SingleItem;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const ItemStyle = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
  gap: 8px;
  background: rgba(36, 101, 166, 0.5);
  color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  border: 2px solid #fff;
  place-items: center;
  margin-bottom: 8px;
`;

const ItemPrice = styled.p`
@media (max-width: 700px) {
    font-size: 0.8rem;
`;

const ItemName = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    color: #efff12;
  }

  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

const ItemSelect = styled.select`
  padding: 10px 17px;

  @media (max-width: 700px) {
    padding: 8px 13px;
  }
`;

const DeleteItem = styled.button`
  padding: 10px 17px;
  color: #ff7700;
  background: #f4f4f4;
  border: 1px solid #171717;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    background: rgba(243, 255, 74, 0.9);
    color: #fff;
    font-weight: bold;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    font-size: 1.2rem;
  }

  @media (max-width: 700px) {
    padding: 8px 13px;
  }
`;
