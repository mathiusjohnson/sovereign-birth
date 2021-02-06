import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/footerlogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircle } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer border-t-2 border-wheat bg-maximum-blue-green py-6">
      <footer class="my-6 space-y-4 md:space-y-0 grid md:grid-cols-6 auto-rows-min ">
        <div className="flex flex-col justify-center items-center row-start-1 md:col-span-2">
          <div className="flex justify-center">
            <div className="w-56">
              <img id="pngColorFilter" width="" src={logo} alt="Sovereign Birth Logo"/>
            </div>
          </div>
          <h3 className="text-white row-start-2 text-2xl flex justify-center">Sovereign Birth</h3>
        </div>

        <div class="row-start-3 md:row-start-1 md:col-start-3 md:col-span-2 flex flex-col items-center md:items-start lg:items-start justify-center space-y-4 text-white ">
          <h3 className="text-lg md:text-2xl font-bold">Your Body. Your Birth. Your Way.</h3>
          <ul className="flex space-x-2 text-sm">
            <Link>
              <li>Services</li>
            </Link>
            <Link>
              <li>Meet the Doulas</li>
            </Link>
            <Link>
              <li>Contact Us</li>
            </Link>
          </ul>
          <p class="m-0 text-sm italic">
            Copyright &copy; Sovereign Birth 2020
          </p>
        </div>

        {/* SOCIAL MEDIA ICONS */}
        <div className="space-x-4 md:space-x-1 lg:space-x-12 flex justify-center items-center lg:justify-start row-start-2 md:row-start-1 md:col-start-5 md:col-span-2 text-maximum-blue-green">
          <Link to='/'   className="fa-layers fa-fw fa-3x">
            <FontAwesomeIcon className="text-white bg-white rounded-full" icon={faCircle} /> <FontAwesomeIcon icon={faInstagram} transform={'shrink-8'} /> 
          </Link>
          <Link to='/'  className="fa-layers fa-fw fa-3x">
            <FontAwesomeIcon className="text-white bg-white rounded-full" icon={faCircle} /> <FontAwesomeIcon icon={faEnvelope} transform={'shrink-8'} />         
          </Link>
          <Link to='/'  className="fa-layers fa-fw fa-3x">
           <FontAwesomeIcon className="text-white bg-white rounded-full" icon={faCircle} /> 
           <FontAwesomeIcon icon={faFacebookF} transform={'shrink-8'} />      
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;