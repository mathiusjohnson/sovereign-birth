import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircle } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <footer class="py-12 space-y-6 bg-wheat grid md:grid-cols-6 auto-rows-min">
        {/* {logo} */}
        <div className="flex justify-center row-start-1 md:col-span-2">

          <img src={logo} alt="Sovereign Birth Logo"/>
        </div>

        <div class="row-start-3 md:row-start-1 md:col-start-3 md:col-span-2 flex flex-col items-center lg:items-start justify-center space-y-4">
          <h3 className="text-lg md:text-base font-bold">Your Body. Your Birth. Your Way.</h3>
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
        <div className="space-x-4 md:space-x-1 flex justify-center items-center lg:justify-start row-start-2 md:row-start-1 md:col-start-5 md:col-span-2 ">
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