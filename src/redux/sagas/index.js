import { all, fork } from 'redux-saga/effects'

import {
  changePasswordSagaWatcher,
  loginSagaWatcher,
  registrationSagaWatcher} from "./authSagas";


export default function* rootSaga() {

  yield all([
    fork(loginSagaWatcher),
    fork(registrationSagaWatcher),
    fork(changePasswordSagaWatcher)
  ])
}