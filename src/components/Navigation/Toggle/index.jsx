import React from 'react';

import './Toggle.scss';


const Toggle = ({visible, setVisible}) => {
  return (
    <div
      onClick={() => setVisible(!visible)}
      className={`toggle ${visible ? 'open' : 'close'}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Toggle;
