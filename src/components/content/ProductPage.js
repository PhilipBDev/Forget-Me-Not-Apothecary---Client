import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { getProductDetails } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions';

const ProductPage = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push('/cart');
  };

  return (
    <ProductStyle>
      {loading ? (
        <Header>Loading...</Header>
      ) : error ? (
        <Header>{error}</Header>
      ) : (
        <>
          <LeftSide>
            <LeftImageSection>
              <LeftImage src={product.imageUrl} alt={product.name} />
            </LeftImageSection>

            <LeftInfo>
              <LeftName>{product.name}</LeftName>
              <LeftDescription>{product.description}</LeftDescription>
            </LeftInfo>
          </LeftSide>

          <RightSide>
            <RightInfo>
              <RightParagraph>
                Price: <span>{product.price}</span>
              </RightParagraph>
              <RightParagraph>
                Status:{' '}
                <span>
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </RightParagraph>
              <RightParagraph>
                Qty:
                <RightSelect
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </RightSelect>
              </RightParagraph>
              <RightButtonSection>
                <RightButton type="button" onClick={addToCartHandler}>
                  Add To Cart
                </RightButton>
              </RightButtonSection>
            </RightInfo>
          </RightSide>
        </>
      )}
    </ProductStyle>
  );
};

export default ProductPage;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const ProductStyle = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex: 0.8;

  @media (max-width: 960px) {
    flex-direction: column;
    flex: 1;
  }
`;

const LeftImageSection = styled.div`
  margin: 1rem;
  flex: 0.6;

  @media (max-width: 960px) {
    flex: 1;
  }
`;

const LeftImage = styled.img`
  border-radius: 1rem;

  @media (max-width: 960px) {
    width: 100%;
    height: 300px;
  }
`;

const LeftInfo = styled.div`
  margin: 1rem;
  flex: 0.4;
  background: rgba(36, 101, 166, 0.5);
  color: #fff;
  height: fit-content;
  padding: 1rem;
  font-size: 0.9rem;
  border: 2px solid #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  border-radius: 1rem;

  @media (max-width: 960px) {
    flex: 1;
  }
`;

const LeftName = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const LeftDescription = styled.p`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border: none;
`;

const RightSide = styled.div`
  flex: 0.2;

  @media (max-width: 960px) {
    flex: 1;
    padding: 1rem;
  }
`;

const RightInfo = styled.div`
  width: 250px;
  margin: 1rem;
  background: rgba(36, 101, 166, 0.5);
  color: #fff;
  padding: 1rem;
  border: 2px solid #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  border-radius: 1rem;

  @media (max-width: 960px) {
    width: 100%;
    margin: 0;
  }
`;

const RightParagraph = styled.p`
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const RightSelect = styled.select`
  padding: 10px 16px;
`;

const RightButtonSection = styled(RightParagraph)`
  border: none;
`;

const RightButton = styled.button`
  grid-column: 1/-1;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  color: #fff;
  width: 100%;
  padding: 8px 16px;
  background: rgba(66, 194, 245, 0.8);
  border: 1px solid #fff;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 1rem;

  &:hover {
    background: rgba(243, 255, 74, 0.9);
    color: #fff;
    font-weight: bold;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    font-size: 1.2rem;
  }
`;

const Header = styled.h2`
  font-size: 1.75rem;
  color: #fff;
  margin-bottom: 1rem;
  margin-left: 8px;
  padding-top: 1rem;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;
