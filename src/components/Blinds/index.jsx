import React, { useState } from 'react';
import blindsOpen from './images/blinds-open.svg';
import blindsClosed from './images/blinds-closed.svg';
import '../../style.css';

const Blinds = ({ state }) => {
  const [blindsState, setBlindsState] = useState(state);
  const [openButton, setOpenButton] = useState(true);

  return (
    <div className="blinds">
      <div className="blinds__icon">
        {blindsState === 'open' ? (
          <img src={blindsOpen} />
        ) : (
          <img src={blindsClosed} />
        )}
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          onClick={() => {
            setBlindsState('open');
            setOpenButton(true);
          }}
          className={openButton === true ? 'button button--active' : 'button'}
        >
          Otevřeno
        </button>
        <button
          onClick={() => {
            setBlindsState('closed');
            setOpenButton(false);
          }}
          className={openButton === false ? 'button button--active' : 'button'}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};

export default Blinds;
