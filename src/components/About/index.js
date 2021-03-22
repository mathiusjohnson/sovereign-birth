import React from 'react';
import AboutBeliefs from './AboutBeliefs';
import AboutPhoto from './AboutPhoto';
import AboutText from './AboutText';

const index = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2  space-y-8 md:space-y-24 mt-8 md:mt-24">
        <AboutPhoto />
        <AboutText />
      </div>
      <AboutBeliefs />
    </div>
  );
};

export default index;