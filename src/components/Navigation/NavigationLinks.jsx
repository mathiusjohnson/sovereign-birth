import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { saveState } from '../../helpers/localStorage';
import fire from '../../fire.js';

const NavigationLinks = ({ transition }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const signOut = () => {
    fire.auth().signOut()
  };

  console.log("logged in is: ", isLoggedIn);

  const toHomeOrOther = (transitionTo) => {
      transition(transitionTo)
      saveState(transitionTo)
    }

    return (
           
      <div className={`text-white z-20 text-2xl p-24 hidden lg:flex items-start justify-start`}>
      <div className="flex flex-wrap space-x-4 ">

        {/* NAVIGATION LINKS */}
        <Link onClick={() => toHomeOrOther("HOME")} className="nav-link hover:opacity-70" to="/">
          Home
        </Link>

        <Link  onClick={() => toHomeOrOther("OTHERPAGES")} className="nav-link hover:opacity-70" to="/services">
          Services
        </Link>

        <Link  onClick={() => toHomeOrOther("OTHERPAGES")} className="nav-link hover:opacity-70" to="/about">
          About
        </Link>


        <Link  onClick={() => toHomeOrOther("OTHERPAGES")} className="nav-link hover:opacity-70" to="/contact">
          Contact
        </Link>

        {!isLoggedIn
          ? (
            <Link to='/login'>
              Admin
            </Link>
          ) 
          : (
            <>
            <span onClick={signOut}>
              <button href="#">Sign out</button>
            </span>
              <Link to='/AddNumber'>
                Add Service
              </Link>
            </>
          
          )}

      </div>
    </div>

    );
};

export default NavigationLinks;