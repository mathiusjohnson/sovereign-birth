import React from 'react';
import logo from '../../assets/images/logobold.png';

const NavigationLogo = () => {
  return (
    <div className="col-start-3 flex justify-center mt-4">
      <div className="z-50 mr-4 w-32 md:w-48">
        <a href="/">
          <img src={logo} alt="Sovereign Birth Logo" />
        </a>
      </div>
    </div>
  );
};

export default NavigationLogo;