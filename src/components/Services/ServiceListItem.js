import React from 'react';
import insertHere from '../../assets/images/Insert-Photo-Here.jpg';

const ServiceListItem = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="flex justify-center space-x-3 relative">
        <h4 className="absolute bg-white text-lg top-2 font-bold">Prenatal Support</h4>
        <img width="200px" src={insertHere} alt="insert here text"></img>
        <p className="mt-10">From a simple cup of tea and chat, to helping you create intentions and wishes for your birth. We are here to listen to you, provide resources and build your confidence as your family grows.</p>
      </div>
      
      <div className="flex flex-col items-center">
        <h5>Three prenatal visits that cover:</h5>
        <ul>
          <li>Understanding the physiology of birth</li>
          <li>Building your birth values</li>
          <li>Understanding the physiology of birth</li>
          <li>Building your birth values</li>
          <li>Understanding the physiology of birth</li>
          <li>Building your birth values</li>        </ul>
      </div>
    </div>
  );
};

export default ServiceListItem;