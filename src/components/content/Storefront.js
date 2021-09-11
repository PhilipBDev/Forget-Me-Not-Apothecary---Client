import styled from 'styled-components';
import ProductCard from './ProductCard';

const Storefront = () => {
  return (
    <StoreStyle>
      <Title>Latest Products</Title>

      <ProductCardDisplay>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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

const Title = styled.h2`
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
