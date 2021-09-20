//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: rgba(8, 156, 209, 0.4);
  border-radius: 1rem;
  border: 2px solid #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  padding-bottom: 3rem;
  width: 20rem;
  margin: 0 auto;
  margin-top: 3rem;
`;

export const InputStyle = styled.input`
  display: flex;
`;

export const FormTitle = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  color: #fff;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  margin-top: 1rem;
  margin-bottom: 1.2rem;
`;

export const FormHeader = styled.h3`
  font-weight: bold;
  font-size: 1.2rem;
  color: #fff;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
`;

export const FormBtn = styled.button`
  display: block;
  color: #fff;
  background: rgba(36, 101, 166, 0.3);
  font-size: 1.5em;
  margin-top: 1.2em;
  margin-left: 1.5rem;
  padding: 10px 18px;
  border: 1px solid #fff;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-weight: bold;
  border-radius: 1rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: rgba(243, 255, 74, 0.9);
    color: #fff;
    font-weight: bold;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    font-size: 1.5rem;
  }
`;

export const FormFooter = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
  text-align: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  test-decoration: none;
  margin-top: 3rem;
  margin-bottom: 0.3rem;
`;
