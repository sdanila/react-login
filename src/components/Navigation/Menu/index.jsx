import React from 'react';
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';

import {profileSelector} from "../../../redux/selectors";

import './Menu.scss';


const Menu = ({visible, setVisible}) => {
  const { auth } = useSelector((profileSelector));

  let links = [
    {to:'/login', label:'Sign in'},
    {to:'/registration', label:'Sign up'}
  ]

  if (auth) {
    links = [
      {to:'/profile', label:'Profile'},
      {to:'/change-password', label:'Change password'}
    ]
  }

  const renderLinks = (links) => {
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
        {renderLinks(links)}
      </ul>
    </nav>
  );
};

export default Menu;
