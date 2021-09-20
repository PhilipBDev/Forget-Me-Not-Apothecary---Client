import styled from 'styled-components';
import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';

const Tooltip = () => {
  const { user } = useContext(UserContext);

  return (
    <ToolWrapper>
      {user === null ? (
        <>
          <ToolBtn>?</ToolBtn>
          <ToolText>
            <p>Log in for member only discounts!</p>
          </ToolText>
        </>
      ) : (
        user && ''
      )}
    </ToolWrapper>
  );
};

export default Tooltip;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const ToolBtn = styled.button`
  background: #fff;
  padding: 0;
  border: none;
  color: #000;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  &:hover {
    background-color: #efff12;
  }
`;
const ToolText = styled.div`
  position: absolute;
  top: 10vh;
  visibility: hidden;
  border-radius: 1rem;

  @media (max-width: 768px) {
    top: 20vh;
  }
`;
const ToolWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;

  & ${ToolBtn}:hover + ${ToolText} {
    visibility: visible;
    color: #fff;
    text-align: center;
    background: rgba(36, 101, 166, 0.8);
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    border: 2px solid #fff;
    width: 18rem;
    padding: 0.8rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    margin-top: 1rem;
    margin-bottom: 2rem;
    margin-left: 1rem;
  }
`;
