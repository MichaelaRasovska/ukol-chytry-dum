import React, { useState } from 'react';
import lightOff from './images/light-off.svg';
import lightOn from './images/light-on.svg';

const Light = ({ name, state }) => {
  const [onOrOff, setOnOrOff] = useState(state);

  return (
    <>
      <div
        onClick={() => {
          onOrOff === 'on' ? setOnOrOff('off') : setOnOrOff('on');
        }}
        className="light"
      >
        <div className="light__icon">
          {onOrOff === 'on' ? (
            <img src={lightOn} alt="" />
          ) : (
            <img src={lightOff} alt="" />
          )}
        </div>
        <div className="light__name">{name}</div>
      </div>
    </>
  );
};

export default Light;
