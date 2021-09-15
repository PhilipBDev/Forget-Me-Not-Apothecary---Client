import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductCard from './ProductCard';

// Actions
import { getProducts as listProducts } from '../../redux/actions/productActions';

const Storefront = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <StoreStyle>
      <Header>Latest Products</Header>

      <ProductCardDisplay>
        {loading ? (
          <Header>Loading...</Header>
        ) : error ? (
          <Header>{error}</Header>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </ProductCardDisplay>
    </StoreStyle>
  );
};

export default Storefront;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const StoreStyle = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
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

const ProductCardDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1232px) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`;
