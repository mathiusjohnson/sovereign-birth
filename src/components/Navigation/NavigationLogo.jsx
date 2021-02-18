import React from 'react';
import logo from '../../assets/images/logobold.png';

const NavigationLogo = () => {
  return (
    <div className="col-start-3 flex justify-center">
    <div className="z-50 w-84 md:w-72">
      <img src={logo} alt="Sovereign Birth Logo" />
    </div>
  </div>
  );
};

export default NavigationLogo;