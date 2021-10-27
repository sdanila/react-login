import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';

import {
  SAGA_CHANGE_PASSWORD_REQUEST,
  SAGA_LOGIN_REQUEST,
  SAGA_REGISTRATION_REQUEST
} from "../actions";
import {reducerSuccessAuth} from "../actions/login";


function checkEmail({answer, email}) {
  return answer.find(el => el.email === email)
}

function checkPassword({answer, password}) {
  return answer.find(el => el.password === password)
}

async function loginRequest() {
  const request = await axios.get('http://localhost:3001/users')
    .then(res => res.data);
  return request;
}

export function* loginSagaWorker({payload}) {
  const {email, password} = payload;
  try {
    const answer = yield call(loginRequest, payload);
    const emailCheck = yield call(checkEmail, {answer, email});
    if (emailCheck === undefined) throw Error('User with this email was not found');
    const passwordCheck = yield call(checkPassword, {answer, password});
    if (passwordCheck === undefined) throw Error('Wrong password');
    yield put(reducerSuccessAuth({ email, auth: true }));
  } catch (e) {
    console.log(e);
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
  } catch (e) {
    console.error(e);
  }
}

export function* registrationSagaWatcher() {
  yield takeLatest(SAGA_REGISTRATION_REQUEST, registrationSagaWorker);
}


async function changePasswordRequest({oldPassword, newPassword}) {

}

function* changePasswordSagaWorker({payload}) {
  const {oldPassword, newPassword} = payload;
  try {
    yield call(changePasswordRequest, {oldPassword, newPassword});
  } catch (e) {
    console.error(e);
  }
}

export function* changePasswordSagaWatcher() {
  yield takeLatest(SAGA_CHANGE_PASSWORD_REQUEST, changePasswordSagaWorker);
}