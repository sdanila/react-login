import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { changePasswordSchema } from '../../utils/ValidationSchema'
import {changePasswordSelector, profileSelector} from "../../redux/selectors";
import {reducerChangePassSaveState, sagaChangePasswordRequest} from "../../redux/actions/changePassword";

import { Button, Form, Input } from "../../components";

import './ChangePassword.scss';


const ChangePassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { oldPassword, newPassword, repeatPassword } = useSelector(changePasswordSelector);
  const { auth } = useSelector(profileSelector);

  const [oldPasswordValue, setOldPasswordValue] = React.useState(oldPassword);
  const [newPasswordValue, setNewPasswordValue] = React.useState(newPassword);
  const [repeatPasswordValue, setRepeatPasswordValue] = React.useState(repeatPassword);

  React.useEffect(() => {

    !auth && history.push('/login');
  }, [auth, history]);

  React.useEffect(() => {

    return () => dispatch(reducerChangePassSaveState({
      oldPassword: oldPasswordValue,
      newPassword: newPasswordValue,
      repeatPassword: repeatPasswordValue
    }))
  }, [dispatch, oldPasswordValue, newPasswordValue, repeatPasswordValue]);

  const onSubmit = (e) => {
    e.preventDefault();
    changePasswordSchema.validate({
      oldPassword: oldPasswordValue,
      newPassword: newPasswordValue,
      repeatPassword: repeatPasswordValue
    })
      .then(res => dispatch(sagaChangePasswordRequest({...res})))
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
