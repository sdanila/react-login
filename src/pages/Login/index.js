import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { loginSchema } from "../../utils/ValidationSchema";
import { loginSelector } from "../../redux/selectors";
import {reducerLoginSaveState, sagaLoginRequest} from "../../redux/actions/login";

import { Form, Input, Button } from "../../components";

import './Login.scss';


const Login = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector(loginSelector);

  const [emailValue, setEmailValue] = React.useState(email);
  const [passwordValue, setPasswordValue] = React.useState(password);

  React.useEffect(() => {

    return () => dispatch(reducerLoginSaveState(
      { email: emailValue, password: passwordValue }
      ));
  }, [dispatch, emailValue, passwordValue]);

  const onSubmit = (e) => {
    e.preventDefault();
    loginSchema.validate({email: emailValue, password: passwordValue})
      .then(res => dispatch(sagaLoginRequest({...res})))
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
