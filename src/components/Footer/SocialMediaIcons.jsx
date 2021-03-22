import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircle } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const SocialMediaIcons = () => {
  return (
    <div className="space-x-4 md:space-x-1 lg:space-x-12 flex justify-center items-center lg:justify-center row-start-2 md:row-start-1 md:col-start-5 md:col-span-2 text-maximum-blue-green">
    <Link to='/'   className="fa-layers fa-fw fa-3x">
      <FontAwesomeIcon className=" bg-maximum-blue-green rounded-full" icon={faCircle} /> <FontAwesomeIcon className="text-white" icon={faInstagram} transform={'shrink-8'} /> 
    </Link>
    <Link to='/'  className="fa-layers fa-fw fa-3x">
      <FontAwesomeIcon className=" bg-maximum-blue-green rounded-full" icon={faCircle} /> 
      <FontAwesomeIcon icon={faEnvelope} className="text-white" transform={'shrink-8'} />         
    </Link>
    <Link to='/'  className="fa-layers fa-fw fa-3x">
     <FontAwesomeIcon className=" bg-maximum-blue-green rounded-full" icon={faCircle} /> 
     <FontAwesomeIcon className="text-white" icon={faFacebookF} transform={'shrink-8'} />      
    </Link>
  </div>
  );
};

export default SocialMediaIcons;