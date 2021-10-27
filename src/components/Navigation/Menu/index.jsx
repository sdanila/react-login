import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';


const links = [
  {to:'/login', label:'Sign in'},
  {to:'/registration', label:'Sign up'},
  {to:'/profile', label:'Profile'},
  {to:'/change-password', label:'Change password'},
]


const Menu = ({visible, setVisible}) => {

  const renderLinks = () => {
    return links.map((link, index) => (
      <li key={index}>
        <Link
          to={link.to}
          onClick={() => setVisible(!visible)}
        >
          {link.label}
        </Link>
      </li>
    ))
  }

  return (
    <nav className={`menu ${visible ? 'open' : 'close'}`}>
      <ul>
        {renderLinks()}
      </ul>
    </nav>
  );
};

export default Menu;
