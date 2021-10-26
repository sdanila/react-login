import React from 'react';

import './Form.scss';


const Form = ({onSubmit, children}) => (
  <form onSubmit={onSubmit} className='form'>
    {children}
  </form>
);


export default Form;
