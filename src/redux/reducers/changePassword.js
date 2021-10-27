import {REDUCER_SAVE_CHANGE_PASSWORD_STATE} from "../actions";

const initialState = {
  oldPassword: '',
  newPassword: '',
  repeatPassword: ''
}

const changePassword = (state = initialState, action) => {
  switch (action.type) {
    case REDUCER_SAVE_CHANGE_PASSWORD_STATE:
      return {
        ...action.payload,
      }
    default:
      return state;
  }
}

export default changePassword;