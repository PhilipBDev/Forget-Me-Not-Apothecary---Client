import Axios from 'axios';
import styled from 'styled-components';
import React, { useContext, useState } from 'react';
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

const Register = () => {
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [formPasswordVerify, setFormPasswordVerify] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const { getUser } = useContext(UserContext);

  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    const registerData = {
      email: formEmail,
      password: formPassword,
      passwordVerify: formPasswordVerify,
    };

    try {
      await Axios.post(`${domain}/auth/`, registerData);
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
      <FormTitle>Sign Up</FormTitle>
      {errorMessage && (
        <ErrorMessage
          message={errorMessage}
          clear={() => setErrorMessage(null)}
        />
      )}
      <form onSubmit={register}>
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
        <FormHeader>Verify Password: </FormHeader>
        <InputStyle
          placeholder="Verify Password"
          type="password"
          value={formPasswordVerify}
          onChange={(e) => setFormPasswordVerify(e.target.value)}
        />
        <FormBtn type="submit">Submit</FormBtn>
      </form>
      <FormFooter>Already have an account?</FormFooter>
      <FormLink to="/login">( Login )</FormLink>
    </UserWrapper>
  );
};

export default Register;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const FormLink = styled(Link)`
  text-decoration: none;
  color: rgb(243, 255, 74);
  font-weight: bold;
`;
