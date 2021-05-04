import React from 'react';
import logo from "../../assets/images/logobold.png";

const FooterLogo = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="flex justify-center">
      <div className="w-56">
        <a href="/">
          <img id="pngColorFilter" width="" src={logo} alt="Sovereign Birth Logo"/>
        </a>
      </div>
    </div>
  </div>
  );
};

export default FooterLogo;