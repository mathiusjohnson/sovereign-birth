import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircle } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer py-10">
      <footer className="my-6 space-y-4 md:space-y-0 grid md:grid-cols-6 auto-rows-min text-maximum-blue-green ">
        <div className="flex flex-col justify-center items-center row-start-1 md:col-span-2">
          <div className="flex justify-center">
            <div className="w-56">
              <img id="pngColorFilter" width="" src={logo} alt="Sovereign Birth Logo"/>
            </div>
          </div>
        </div>

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

        {/* SOCIAL MEDIA ICONS */}
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
      </footer>
    </div>
  );
}

export default Footer;