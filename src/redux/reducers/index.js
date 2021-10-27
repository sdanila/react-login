import { combineReducers } from 'redux';

import login from './login';
import registration from './registration';
import changePassword from './changePassword';


const rootReducer = combineReducers({
  login,
  registration,
  changePassword
})

export default rootReducer