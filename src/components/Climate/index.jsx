import React, { useState } from 'react';
import tempPic from './images/temp.svg';

const Climate = ({ temperature, humidity }) => {
  const [tempLevel, setTempLevel] = useState(temperature);

  return (
    <>
      <div className="climate">
        <div className="climate__icon">
          <img src={tempPic} alt="" />
        </div>
        <div className="climate__content">
          <div className="climate__temperature">{tempLevel}&deg;C</div>
          <div className="climate__humidity">Vlhost vzduchu 51&nbsp;%</div>
        </div>
        <div className="climate__controls">
          <button
            onClick={() => {
              setTempLevel(tempLevel + 1);
            }}
            className="button"
          >
            +
          </button>
          <button
            onClick={() => {
              setTempLevel(tempLevel - 1);
            }}
            className="button"
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default Climate;
