import {REDUCER_SAVE_REGISTRATION_STATE} from "./index";

export const reducerRegistrationSaveState = payload => ({
  type: REDUCER_SAVE_REGISTRATION_STATE,
  payload
});

export const sagaRegistrationRequest = payload => ({
  type: 'SAGA_REGISTRATION_REQUEST',
  payload
})