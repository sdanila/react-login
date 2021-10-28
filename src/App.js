import React from 'react';
import {useSelector} from "react-redux";

import {profileSelector} from "./redux/selectors";

import { AuthRoute, LoginRoute } from "./routes";

import Layout from './hoc/Layout';


function App() {
  const { auth } = useSelector(profileSelector);

  return (
    <Layout>
      {
        auth
          ? <AuthRoute />
          : <LoginRoute />
      }
    </Layout>
  );
}

export default App;
