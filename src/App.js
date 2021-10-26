import React from 'react';
import { AppRoute } from "./routes";

import Layout from './hoc/Layout';


function App() {

  return (
    <Layout>
      <AppRoute />
    </Layout>
  );
}

export default App;
