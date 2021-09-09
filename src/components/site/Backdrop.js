import styled from 'styled-components';

const Backdrop = ({ show }) => {
  return show && <StyleBackdrop></StyleBackdrop>;
};

export default Backdrop;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const StyleBackdrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
`;
