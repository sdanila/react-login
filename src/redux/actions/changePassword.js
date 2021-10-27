import {REDUCER_SAVE_CHANGE_PASSWORD_STATE} from "./index";

export const reducerChangePassSaveState = payload => ({
  type: REDUCER_SAVE_CHANGE_PASSWORD_STATE,
  payload
});

export const sagaChangePasswordRequest = payload => ({
  type: 'SAGA_CHANGE_PASSWORD_REQUEST',
  payload
})