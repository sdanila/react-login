import React from 'react';

import './Input.scss';


const Input = ({type, name, value, setValue, placeholder}) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={e => setValue(e.target.value)}
    placeholder={placeholder}
    className='input'
  />
);


export default Input;
