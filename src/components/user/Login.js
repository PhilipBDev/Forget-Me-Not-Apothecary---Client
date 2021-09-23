import Axios from 'axios';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import domain from '../../util/domain';
import ErrorMessage from '../../util/ErrorMessage';

import {
  UserWrapper,
  FormTitle,
  FormHeader,
  FormBtn,
  InputStyle,
  FormFooter,
} from './StyleForm';

const Login = () => {
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const { getUser } = useContext(UserContext);

  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    const loginData = {
      email: formEmail,
      password: formPassword,
    };

    try {
      await Axios.post(`${domain}/auth/login`, loginData);
    } catch (err) {
      if (err.response) {
        if (err.response.data.errorMessage) {
          setErrorMessage(err.response.data.errorMessage);
        }
      }
      return;
    }

    await getUser();

    history.push('/');
  }

  return (
    <UserWrapper>
      <FormTitle>Sign In</FormTitle>
      {errorMessage && (
        <ErrorMessage
          message={errorMessage}
          clear={() => setErrorMessage(null)}
        />
      )}
      <form onSubmit={login}>
        <FormHeader>Email: </FormHeader>
        <InputStyle
          placeholder="Email"
          type="email"
          value={formEmail}
          onChange={(e) => setFormEmail(e.target.value)}
        />
        <FormHeader>Password: </FormHeader>
        <InputStyle
          placeholder="Password"
          type="password"
          value={formPassword}
          onChange={(e) => setFormPassword(e.target.value)}
        />
        <FormBtn type="submit">Submit</FormBtn>
      </form>
      <FormFooter>Don't have an account yet?</FormFooter>
      <FormLink to="/register">( Register )</FormLink>
    </UserWrapper>
  );
};

export default Login;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const FormLink = styled(Link)`
  text-decoration: none;
  color: rgb(243, 255, 74);
  font-weight: bold;
`;
