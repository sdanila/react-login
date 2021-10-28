import {REDUCER_SET_ALERT} from "../actions";

const initialState = {
  success: '',
  error: ''
}

const alert = (state = initialState, action) => {
  switch (action.type) {
    case REDUCER_SET_ALERT:
      return {
        ...initialState,
        ...action.payload,
      }
    default: return state;
  }
}

export default alert;