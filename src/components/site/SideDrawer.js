import styled from 'styled-components';

const SideDrawer = ({ show }) => {
  const sideDrawerDisplay = ['StyleSideDrawer'];

  if (show) {
    StyleSideDrawer.push('show');
  }
  return <StyleSideDrawer></StyleSideDrawer>;
};

export default SideDrawer;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const StyleSideDrawer = styled.div`
  width: 70%;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: ${({ show }) => (show ? 'flex' : 'none')};
`;
