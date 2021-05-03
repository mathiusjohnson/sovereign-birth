import React from 'react';
import callToActionImage from '../../assets/images/DSC_6958.jpg'
import ServiceList from './CallToActionItems/ServiceList';
import SubscriptionService from './CallToActionItems/SubscriptionService';
import OfferingsCTA from './OfferingsCTA';

const CallToAction = ({titles}) => {

  return (
    <div className="container mx-auto grid grid-cols-2">
      <div className="flex mt-2 md:mt-4">
        <div className="w-3/4 rounded">
          <img className="rounded-lg shadow-xl" src={callToActionImage} alt="pregnant belly in white dress facing sideways" />
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center text-2xl space-y-2 md:space-y-4">
        <OfferingsCTA />
      </div> 
     
    </div>
  );
};

export default CallToAction;