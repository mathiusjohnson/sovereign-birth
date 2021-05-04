import React from 'react';
import AboutBeliefs from './AboutBeliefs';
import AboutPhoto from './AboutPhoto';
import AboutText from './AboutText';

const index = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2  space-y-8 md:space-y-24 my-8 md:my-24">
        <AboutPhoto />
        <AboutText />
      </div>
      <AboutBeliefs />
    </div>
  );
};

export default index;