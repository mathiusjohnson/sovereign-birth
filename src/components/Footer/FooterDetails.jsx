import React from 'react';

const FooterDetails = () => {
  return (
    <div className="row-start-3 md:row-start-1 md:col-start-3 md:col-span-2 flex flex-col items-center md:items-start lg:items-center justify-center space-y-4  ">
    <h3 className="text-lg md:text-2xl font-bold">Re-wild your pregnancy and birth in power.</h3>
    <div className="flex space-x-2 ">
      <p>In person and virtual support</p>
      <span>|</span>
      <p>Squamish, BC, Canada</p>
    </div>
    <p className="m-0 text-sm italic">
      Copyright &copy; Sovereign Birth 2020
    </p>
  </div>
  );
};

export default FooterDetails;