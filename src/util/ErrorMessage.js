import React from 'react';
import styled from 'styled-components';

function ErrorMessage({ message, clear }) {
  return (
    <Error className="error-message">
      <p>{message}</p>
      <ErrorBtn onClick={clear}>Clear</ErrorBtn>
    </Error>
  );
}

export default ErrorMessage;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const Error = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  border-color: #fff;
  border-style: solid;
  color: #fff;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  text-align: center;
`;

const ErrorBtn = styled.button`
  background-color: #fff;
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #000;
  border-radius: 0.5rem;
  &:hover {
    background-color: #808080;
  }
`;
