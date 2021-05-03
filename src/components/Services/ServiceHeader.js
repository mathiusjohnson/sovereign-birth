import React from 'react';

const ServiceHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 mt-8">
      <h1 className="text-5xl text-center text-maximum-blue-green font-header uppercase tracking-wide">Offerings</h1>
      <div className="border-b-2 border-solid border-gray-500 w-1/12 opacity-40"></div>
    </div>
  );
};

export default ServiceHeader;