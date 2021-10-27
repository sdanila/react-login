import {REDUCER_SAVE_LOGIN_STATE} from "./index";

export const reducerLoginSaveState = payload => ({
  type: REDUCER_SAVE_LOGIN_STATE,
  payload
});

export const sagaLoginRequest = payload => ({
  type: 'SAGA_LOGIN_REQUEST',
  payload
})