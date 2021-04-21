import React from "react";
import { withRouter } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import DropDown from "./DropDown";
import NavigationBody from "./NavigationBody";
import NavigationLogo from "./NavigationLogo";

function Navigation(props) {

  return (

      <nav className="z-50">
        <div>
  
        {props.location.pathname === '/home' || props.location.pathname === '/' ?
          <div id="overlay" className="bg-hero-pattern bg-cover h-half-screen overlay z-10 grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 w-100 bg-top">
            <div className="flex justify-center ml-4 mt-12 lg:hidden">
              <DropDown  />
            </div>
            <NavigationLinks />
            <NavigationBody />
            <NavigationLogo />
          </div> 
          :
          <div className="bg-maximum-blue-green grid grid-cols-2 lg:grid-cols-3 w-100">
            <DropDown />
            <NavigationLinks />
            <NavigationLogo />
          </div>
         } 
      </div>
    </nav>
  );
}

export default withRouter(Navigation);