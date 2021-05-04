import React from 'react';
import callToActionImage from '../../assets/images/DSC_6958.jpg'
import OfferingsLink from './OfferingsLink';

const CallToAction = () => {

  return (
    <div className="container mx-4 md:mx-auto my-12 md:my-24 grid lg:grid-cols-2">
      <div className="row-start-2 lg:row-start-1 flex justify-center lg:justify-start mt-12 lg:mt-4">
        <div className="w-3/4 rounded">
          <img className="rounded-lg shadow-xl" src={callToActionImage} alt="pregnant belly in white dress facing sideways" />
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center text-2xl space-y-2 md:space-y-4">
        <OfferingsLink />
      </div> 
     
    </div>
  );
};

export default CallToAction;