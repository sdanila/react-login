import React from 'react';
import { Menu, Toggle } from "../../components";

import './Layout.scss';


const Layout = ({children}) => {
  const [visibleMenu, setVisibleMenu] = React.useState(false);

  return (
    <div className='layout'>
      <Toggle
        visible={visibleMenu}
        setVisible={setVisibleMenu}
      />
      <Menu
        visible={visibleMenu}
        setVisible={setVisibleMenu}
      />

      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
