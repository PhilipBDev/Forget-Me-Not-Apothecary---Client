import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <CardStyle>
      <CardImage
        src="https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/SFFOR113-1_medium.jpg"
        alt="product name"
      />

      <CardInfo>
        <Title>Product 1</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          recusandae facilis, ipsa vel dolorum aliquam cum? Totam vero molestias
          nemo, porro eos, pariatur nihil numquam eligendi, quasi autem ratione
          enim!
        </Description>

        <Price>$49.99</Price>

        <ProductLink to={`/product/${1919}`}>View</ProductLink>
      </CardInfo>
    </CardStyle>
  );
};

export default ProductCard;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const CardStyle = styled.div`
  width: 300px;
  padding: 1rem;
  background: rgba(36, 101, 166, 0.5);
  color: #fff;
  border-radius: 1.5rem;
  border: 2px solid #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 1232px) {
    width: 360px;
  }

  @media (max-width: 1115px) {
    width: 330px;
  }

  @media (max-width: 1028px) {
    width: 300px;
  }

  @media (max-width: 950px) {
    width: 400px;
  }

  @media (max-width: 830px) {
    width: 330px;
  }

  @media (max-width: 700px) {
    width: 290px;
  }

  @media (max-width: 630px) {
    width: 450px;
  }

  @media (max-width: 500px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    width: 300px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const CardInfo = styled.div`
  margin-bottom: 8px;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  padding-top: 1rem;
  overflow: hidden;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const Description = styled.p`
  font-size: 0.8rem;
`;

const Price = styled.p`
  font-weight: bold;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.2rem;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const ProductLink = styled(Link)`
  display: block;
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
