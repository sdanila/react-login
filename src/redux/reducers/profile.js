import {REDUCER_SUCCESS_AUTH} from "../actions";

const initialState = {
  email: '',
  auth: false
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case REDUCER_SUCCESS_AUTH:
      return {
        ...action.payload
      }
    default:
      return state;
  }
}

export default profile;