import axios from 'axios';
import { takeLatest, call, put, select } from 'redux-saga/effects';

import {profileSelector} from "../selectors";

import {
  SAGA_CHANGE_PASSWORD_REQUEST,
  SAGA_LOGIN_REQUEST,
  SAGA_REGISTRATION_REQUEST
} from "../actions";
import {reducerSuccessAuth} from "../actions/login";
import {reducerSetAlert} from "../actions/alert";


function checkEmail({answer, email}) {
  return answer.find(el => el.email === email)
}

async function loginRequest() {
  const request = await axios.get('http://localhost:3001/users')
    .then(res => res.data);
  return request;
}

export function* loginSagaWorker({payload}) {
  const {email, password} = payload;
  try {
    const answer = yield call(loginRequest);
    const emailCheck = yield call(checkEmail, {answer, email});
    if (emailCheck === undefined) throw Error('User with this email was not found');
    if (emailCheck.password !== password) throw Error('Wrong password');
    yield put(reducerSuccessAuth({ email, auth: true }));
    yield put(reducerSetAlert({success: 'Success sign in'}));
  } catch (e) {
    yield put(reducerSetAlert({error: e.message}));
  }
}

export function* loginSagaWatcher () {
  yield takeLatest(SAGA_LOGIN_REQUEST, loginSagaWorker)
}


async function registrationRequest(args) {
  return await axios.post('http://localhost:3001/users', {...args});
}

function* registrationSagaWorker({payload}) {
  const {email, password} = payload;
  try {
    yield call(registrationRequest, {email, password});
    yield put(reducerSuccessAuth({ email, auth: true }));
    yield put(reducerSetAlert({success: 'Success sign up'}));
  } catch (e) {
    yield put(reducerSetAlert({error: e.message}));
  }
}

export function* registrationSagaWatcher() {
  yield takeLatest(SAGA_REGISTRATION_REQUEST, registrationSagaWorker);
}


async function changePasswordRequest({user, newPassword}) {
  return await axios.patch(`http://localhost:3001/users/${user.id}`, {password: newPassword})
}

function* changePasswordSagaWorker({payload}) {
  const {email} = yield select(profileSelector)
  const {oldPassword, newPassword} = payload;
  try {
    const answer = yield call(loginRequest);
    const user = yield call(checkEmail, {answer, email});
    if (user.password !== oldPassword) throw new Error('Wrong password');
    yield call(changePasswordRequest, {user, newPassword});
    yield put(reducerSetAlert({success: 'Success change password'}));
  } catch (e) {
    yield put(reducerSetAlert({error: e.message}));
  }
}

export function* changePasswordSagaWatcher() {
  yield takeLatest(SAGA_CHANGE_PASSWORD_REQUEST, changePasswordSagaWorker);
}