import { combineReducers } from 'redux';

import login from './login';
import registration from './registration';
import changePassword from './changePassword';
import profile from "./profile";
import alert from "./alert";


const rootReducer = combineReducers({
  login,
  registration,
  changePassword,
  profile,
  alert
})

export default rootReducer