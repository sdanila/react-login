import React from 'react';
import { Form, Input, Button } from "../../components";

import {loginValidationSchema} from "../../utils/ValidationSchema";

import './Login.scss';


const Login = () => {
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    loginValidationSchema.validate({emailValue, passwordValue})
      .then(() => console.log('esss'))
      .catch(error => console.log(error.errors));
  }

  return (
    <div className='login'>
      <h1 className='login__title'>Sign in</h1>
      <p className='login__desc'>Please enter your email and password</p>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="email"
          value={emailValue}
          setValue={setEmailValue}
          placeholder="Email"
        />
        <Input
          type="password"
          name='password'
          value={passwordValue}
          setValue={setPasswordValue}
          placeholder='Password'
        />
        <Button type='submit' className='button__sign'>Sign in</Button>
      </Form>
    </div>
  );
};

export default Login;
