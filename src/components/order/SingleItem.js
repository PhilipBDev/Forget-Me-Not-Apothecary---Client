import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SingleItem = () => {
  return (
    <ItemStyle>
      <div>
        <img
          src="https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/SFFOR113-1_medium.jpg"
          alt="product name"
        />
      </div>

      <ItemName to={`/product/${1919}`} className="cartitem-name">
        <p>Product 1</p>
      </ItemName>
      <ItemPrice>$29.99</ItemPrice>

      <ItemSelect className="cartitem-select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </ItemSelect>

      <DeleteItem className="cartitem-deleteBtn">
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
