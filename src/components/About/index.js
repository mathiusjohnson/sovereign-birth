import React from 'react';
import AboutBeliefs from './AboutBeliefs';
import AboutPhoto from './AboutPhoto';
import AboutText from './AboutText';

const index = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <AboutPhoto />
        <AboutText />
      </div>
      <AboutBeliefs />
    </div>
  );
};

export default index;