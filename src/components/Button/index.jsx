import React from 'react';

import './Button.scss';


const Button = ({type, className = '', children}) => (
  <button
    type={type}
    className={`button ${className}`}
  >
    {children}
  </button>
);

export default Button;
