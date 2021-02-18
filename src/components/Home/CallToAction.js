import React from 'react';
import callToActionImage from '../../assets/images/DSC_6958.jpg'

const CallToAction = () => {
  return (
    <div className=" grid grid-cols-2">
     <div className="col-start-1 flex flex-col justify-center items-center text-2xl space-y-4">
        <h2 className=" text-center ">Get my birth affirmation recording for free!</h2>
        <input className="border-2 border-black rounded text-center py-2" placeholder="Enter email.."></input>
        <button className="btn btn-primary text-base">Submit</button>
      </div> 
      <div className="flex justify-center">
        <div className="w-1/2 rounded">
          <img className="rounded-lg shadow-xl" src={callToActionImage} alt="pregnant belly in white dress facing sideways" />
        </div>
      </div>
     
    </div>
  );
};

export default CallToAction;