import {REDUCER_SAVE_LOGIN_STATE} from "../actions";

const initialState = {
  email: '',
  password: ''
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case REDUCER_SAVE_LOGIN_STATE:
      return {
        ...action.payload
      }
    default:
      return state;
  }
}

export default login;