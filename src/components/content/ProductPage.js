import styled from 'styled-components';

const ProductPage = () => {
  return (
    <ProductStyle>
      <LeftSide>
        <LeftImageSection>
          <LeftImage
            src="https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/SFFOR113-1_medium.jpg"
            alt="product name"
          />
        </LeftImageSection>

        <LeftInfo>
          <LeftName>Product 1</LeftName>
          <LeftDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            dolor suscipit impedit asperiores expedita quod.
          </LeftDescription>
        </LeftInfo>
      </LeftSide>

      <RightSide>
        <RightInfo>
          <RightParagraph>
            Price: <span>$29.99</span>
          </RightParagraph>
          <RightParagraph>
            Status: <span>In Stock</span>
          </RightParagraph>
          <RightParagraph>
            Qty:
            <RightSelect>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </RightSelect>
          </RightParagraph>
          <RightButtonSection>
            <RightButton type="button">Add To Cart</RightButton>
          </RightButtonSection>
        </RightInfo>
      </RightSide>
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
