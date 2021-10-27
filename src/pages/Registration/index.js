import React from 'react';
import { Form, Input, Button } from "../../components";

import {RegistrationSchema} from "../../utils/ValidationSchema";

import './Registration.scss';


const Registration = () => {
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [repeatPasswordValue, setRepeatPasswordValue] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    RegistrationSchema.validate({
      email: emailValue,
      password: passwordValue,
      repeatPassword: repeatPasswordValue
    })
      .then((result)=>console.log(result))
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
