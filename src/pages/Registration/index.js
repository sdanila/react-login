import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { RegistrationSchema } from "../../utils/ValidationSchema";
import { registrationSelector } from "../../redux/selectors";
import {reducerRegistrationSaveState, sagaRegistrationRequest} from "../../redux/actions/registration";

import { Form, Input, Button } from "../../components";

import './Registration.scss';


const Registration = () => {
  const dispatch = useDispatch();
  const { email, password, repeatPassword } = useSelector(registrationSelector)

  const [emailValue, setEmailValue] = React.useState(email);
  const [passwordValue, setPasswordValue] = React.useState(password);
  const [repeatPasswordValue, setRepeatPasswordValue] = React.useState(repeatPassword);

  React.useEffect(() => {

    return () => dispatch(reducerRegistrationSaveState({
      email: emailValue,
      password: passwordValue,
      repeatPassword: repeatPasswordValue
    }));
  }, [dispatch, emailValue, passwordValue, repeatPasswordValue]);

  const onSubmit = (e) => {
    e.preventDefault();
    RegistrationSchema.validate({
      email: emailValue,
      password: passwordValue,
      repeatPassword: repeatPasswordValue
    })
      .then((result) => dispatch(sagaRegistrationRequest({...result})))
      .catch(error => console.log(error.errors));
  }

  return (
    <div className='registration'>
      <h1 className='registration__title'>Sign up</h1>
      <p className='registration__desc'>Please enter all fields</p>
      <Form onSubmit={onSubmit}>
        <Input
          type='text'
          name='email'
          value={emailValue}
          setValue={setEmailValue}
          placeholder='Email'
        />
        <Input
          type='password'
          name='password'
          value={passwordValue}
          setValue={setPasswordValue}
          placeholder='Password'
        />
        <Input
          type='password'
          name='repeatPassword'
          value={repeatPasswordValue}
          setValue={setRepeatPasswordValue}
          placeholder='Repeat password'
        />
        <Button type='submit' className='button__sign'>Sign up</Button>
      </Form>
    </div>
  );
};

export default Registration;
