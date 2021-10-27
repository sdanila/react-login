import React from 'react';
import { Button, Form, Input } from "../../components";

import { changePasswordSchema } from '../../utils/ValidationSchema'

import './ChangePassword.scss';


const ChangePassword = () => {
  const [oldPasswordValue, setOldPasswordValue] = React.useState('');
  const [newPasswordValue, setNewPasswordValue] = React.useState('');
  const [repeatPasswordValue, setRepeatPasswordValue] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    changePasswordSchema.validate({
      oldPassword: oldPasswordValue,
      newPassword: newPasswordValue,
      repeatPassword: repeatPasswordValue
    })
      .then(res => console.log(res))
      .catch(error => console.log(error.errors));
  }

  return (
    <div className='change-password'>
      <h1 className='change-password__title'>Change password</h1>
      <p className='change-password__desc'>Please enter all fields</p>
      <Form onSubmit={onSubmit}>
        <Input
          type='password'
          name='oldPassword'
          value={oldPasswordValue}
          setValue={setOldPasswordValue}
          placeholder='Old password'
        />
        <Input
          type='password'
          name='newPassword'
          value={newPasswordValue}
          setValue={setNewPasswordValue}
          placeholder='New password'
        />
        <Input
          type='password'
          name='repeatPassword'
          value={repeatPasswordValue}
          setValue={setRepeatPasswordValue}
          placeholder='Repeat password'
        />
        <Button type='submit' className='button__sign'>Change</Button>
      </Form>
    </div>
  );
};

export default ChangePassword;
