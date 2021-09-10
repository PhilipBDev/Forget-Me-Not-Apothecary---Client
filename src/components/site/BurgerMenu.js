import styled from 'styled-components';
import { useState } from 'react';
import SideDrawer from './SideDrawer';

const BurgerMenu = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Burger show={show} onClick={() => setShow(!show)}>
        <div />
        <div />
        <div />
      </Burger>
      <SideDrawer show={show} />
    </>
  );
};

export default BurgerMenu;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const Burger = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 2rem;
  z-index: 20;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ show }) => (show ? '#ccc' : '#fff')};
    border-radius: 10px;
    transform-origin: 1px;
    box-shadow: ${({ show }) =>
      show
        ? '0'
        : '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'};
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ show }) => (show ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ show }) => (show ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ show }) => (show ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ show }) => (show ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
