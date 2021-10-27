import { combineReducers } from 'redux';

import login from './login';
import registration from './registration';
import changePassword from './changePassword';
import profile from "./profile";


const rootReducer = combineReducers({
  login,
  registration,
  changePassword,
  profile
})

export default rootReducer