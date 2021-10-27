import {REDUCER_SAVE_REGISTRATION_STATE} from "../actions";

const initialState = {
  email: '',
  password: '',
  repeatPassword: ''
}

const registration = (state = initialState, action) => {
  switch (action.type) {
    case REDUCER_SAVE_REGISTRATION_STATE:
      return {
        ...action.payload,
      }
    default:
      return state;
  }
}

export default registration;