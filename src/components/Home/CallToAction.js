import React from 'react';
import callToActionImage from '../../assets/images/DSC_6958.jpg'

const CallToAction = () => {
  return (
    <div className=" grid grid-cols-2">
     <div className="col-start-1 flex flex-col justify-evenly items-center text-2xl space-y-4">
       <ul className="flex flex-col space-y-2 text-center font-semibold">
         <li className="hover:text-maximum-blue-green cursor-pointer">Wild Pregnancy Mentoring</li>
         <li className="hover:text-maximum-blue-green cursor-pointer">Freebirth Support</li>
         <li className="hover:text-maximum-blue-green cursor-pointer">Homebirth Doula</li>
         <li className="hover:text-maximum-blue-green cursor-pointer">Conscious Postpartum Preparation</li>
         <li className="hover:text-maximum-blue-green cursor-pointer">Prenatal Yoga</li>
         <li className="hover:text-maximum-blue-green cursor-pointer">Prenatal Community Circle</li>
         <li className="hover:text-maximum-blue-green cursor-pointer">Shop Products</li>
       </ul>
       <div className="space-y-4 flex flex-col justify-center items-center">
          <h2 className="text-maximum-blue-green font-semibold text-center w-5/6">Get my birth affirmation recording for free!</h2>
          <div className="space-x-4 flex justify-center">
            <input type="text" className="border-2 border-black rounded text-center " size="16" placeholder="Enter email.."></input>
            <button className="btn btn-primary text-base">Submit</button>
          </div>
       </div>
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