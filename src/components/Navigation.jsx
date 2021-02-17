import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from '../assets/images/logobold.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navigation(props) {
  return (
    <div>
      <nav>
        <div id="overlay" class="bg-hero-pattern bg-cover h-half-screen overlay z-10 grid grid-cols-2 lg:grid-cols-3">

            <div class="relative group lg:hidden flex flex-col ml-4">
              <button class="flex items-center w-full py-4 mt-4 text-2xl font-bold text-left text-white uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-6 md:ml-4 focus:outline-none font-montserrat">
              <FontAwesomeIcon className="text-white fa-2x" icon={faBars} /> 
              </button>
              <div class="z-10 hidden group-hover:flex justify-center ml-3">
                <div class="pb-4 bg-transparent text-white text-xl flex flex-col justify-center">
                      <Link class="nav-link" to="/">
                        Home
                      </Link>

                      <Link class="nav-link" to="/about">
                        Meet Us
                      </Link>

                      <Link class="nav-link" to="/contact">
                        Services
                      </Link>

                      <Link class="nav-link" to="/contact">
                        Resources
                      </Link>

                      <Link class="nav-link" to="/contact">
                        Kind Words
                      </Link> 

                      <Link class="nav-link" to="/contact">
                        Contact Us
                      </Link>

                  </div>
              </div>
            </div>  
            <div class="text-white z-20 text-2xl p-24 hidden lg:flex items-start justify-start  ">
              <div className="flex flex-wrap space-x-4 ">

                {/* NAVIGATION LINKS */}
                <Link class="nav-link" to="/">
                  Home
                </Link>

                <Link class="nav-link" to="/about">
                  Meet Us
                </Link>

                <Link class="nav-link" to="/contact">
                  Services
                </Link>

                <Link class="nav-link" to="/contact">
                  Resources
                </Link>

                <Link class="nav-link" to="/contact">
                  Kind Words
                </Link> 

                <Link class="nav-link" to="/contact">
                  Contact Us
                </Link>

              </div>
            </div>
            <div className="flex justify-center">
              <div className="z-50 w-84 md:w-64">
                <img src={logo} alt="Sovereign Birth Logo" />
              </div>
            </div>
            <div>
              
            </div>
          </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);