import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircle } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const SocialMediaIcons = () => {
  return (
    <div className="space-x-4 md:space-x-1 lg:space-x-12 flex justify-center items-center lg:justify-center row-start-2 md:row-start-1 md:col-start-5 md:col-span-2 text-white">
    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sovereign.birth/"   className="fa-layers fa-fw fa-3x">
      <FontAwesomeIcon className=" bg-white rounded-full" icon={faCircle} /> <FontAwesomeIcon className="text-maximum-blue-green" icon={faInstagram} transform={'shrink-8'} /> 
    </a>
    <a href="mailto:info@SovereignBirth.ca"   className="fa-layers fa-fw fa-3x">
      <FontAwesomeIcon className=" bg-white rounded-full" icon={faCircle} /> 
      <FontAwesomeIcon icon={faEnvelope} className="text-maximum-blue-green" transform={'shrink-8'} />         
    </a>
    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/SovereignBirth"   className="fa-layers fa-fw fa-3x">
     <FontAwesomeIcon className=" bg-white rounded-full" icon={faCircle} /> 
     <FontAwesomeIcon className="text-maximum-blue-green" icon={faFacebookF} transform={'shrink-8'} />      
    </a>
  </div>
  );
};

export default SocialMediaIcons;