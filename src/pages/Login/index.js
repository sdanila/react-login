import React from 'react';
import { Form, Input, Button } from "../../components";

import './Login.scss';


const Login = () => {
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  const onSubmit = () => {
    alert(JSON.stringify(
      {emailValue, passwordValue}, null, 2
    ));
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
          onChange={setEmailValue}
          placeholder="Email"
        />
        <Input
          type="password"
          name='password'
          value={passwordValue}
          onChange={setPasswordValue}
          placeholder='Password'
        />
        <Button type='submit' className='button__sign'>Sign in</Button>
      </Form>
    </div>
  );
};

export default Login;
