import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import { Login, Registration, ChangePassword, Profile } from "./pages";


export const AppRoute = () => (
  <Switch>
    <Route path='/login' component={Login} />
    <Route path='/registration' component={Registration} />
    <Route path='/change-password' component={ChangePassword} />
    <Route path='/profile' component={Profile} />
    <Redirect to='/login' />
  </Switch>
);
