import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './elements/GlobalStyle';
import { useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/site/Navbar';
import SideDrawer from './components/site/SideDrawer';
import Backdrop from './components/site/Backdrop';
import Cart from './components/order/Cart';
import Storefront from './components/content/Storefront';
import ProductPage from './components/content/ProductPage';
import Login from './components/user/Login';
import Register from './components/user/Register';

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <SideDrawer show={sideToggle} />
      <Backdrop show={sideToggle} />
      <Main>
        <Switch>
          <Route exact path="/" component={Storefront} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Main>
    </Router>
  );
};

export default App;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const Main = styled.main`
  padding-left: 1rem;
`;
