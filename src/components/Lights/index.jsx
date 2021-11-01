import React from 'react';

import Light from '../Light';

const Lights = ({ lights }) => {
  return (
    <>
      {lights.map((svetlo) => (
        <Light key={svetlo.name} name={svetlo.name} state={svetlo.state} />
      ))}
    </>
  );
};

export default Lights;
