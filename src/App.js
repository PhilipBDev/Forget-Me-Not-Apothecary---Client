import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './elements/GlobalStyle';
import styled from 'styled-components';
import Navbar from './components/site/Navbar';
import Cart from './components/order/Cart';
import Storefront from './components/content/Storefront';
import ProductPage from './components/content/ProductPage';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { UserContextProvider } from './context/UserContext';
import Axios from 'axios';

// Default Header
Axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Main>
          <Switch>
            <Route exact path="/" component={Storefront} />
            <Route exact path="/product/:id" component={ProductPage} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Main>
      </Router>
    </UserContextProvider>
  );
};

export default App;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const Main = styled.main`
  padding-left: 1rem;
`;
