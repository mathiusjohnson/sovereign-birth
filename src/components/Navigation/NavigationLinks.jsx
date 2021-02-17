import React from 'react';
import { Link } from "react-router-dom";

const NavigationLinks = () => {
    return (
        <div class="absolute z-10 hidden group-hover:inline-block">
                
        <div class=" pb-4 bg-transparent border-1 border-solid border-white text-white ml-2 text-center">
          <div class="flex flex-col">
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
              Contact
            </Link>

          </div>
        </div>
    </div>
    );
};

export default NavigationLinks;