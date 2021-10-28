import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

import {Login, Registration, ChangePassword, Profile} from "./pages";


export const AuthRoute = () => (
  <Switch>
    <Route path='/change-password' component={ChangePassword}/>
    <Route path='/profile' component={Profile}/>
    <Redirect to='/profile'/>
  </Switch>
);

export const LoginRoute = () => (
  <Switch>
    <Route path='/login' component={Login}/>
    <Route path='/registration' component={Registration}/>
    <Redirect to='/login'/>
  </Switch>
)
