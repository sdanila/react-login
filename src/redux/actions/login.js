import {REDUCER_SAVE_LOGIN_STATE, REDUCER_SUCCESS_AUTH} from "./index";

export const reducerLoginSaveState = payload => ({
  type: REDUCER_SAVE_LOGIN_STATE,
  payload
});

export const reducerSuccessAuth = payload => ({
  type: REDUCER_SUCCESS_AUTH,
  payload
});

export const sagaLoginRequest = payload => ({
  type: 'SAGA_LOGIN_REQUEST',
  payload
});