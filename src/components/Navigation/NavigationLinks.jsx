import React from 'react';
import { Link } from "react-router-dom";
import { loadState, saveState } from '../../helpers/localStorage';

const NavigationLinks = ({ mode, transition, HOME, OTHERPAGES }) => {
    const modeState = loadState();
    const toHomeOrOther = (transitionTo) => {
      console.log(transitionTo);
      transition(transitionTo)
      saveState(transitionTo)
    }

    console.log("mode in links: ", mode, modeState);
    return (
           
      <div className={`text-white z-20 text-2xl p-24 hidden lg:flex items-start justify-start`}>
      <div className="flex flex-wrap space-x-4 ">

        {/* NAVIGATION LINKS */}
        <Link onClick={() => toHomeOrOther("HOME")} className="nav-link" to="/">
          Home
        </Link>

        <Link  onClick={() => toHomeOrOther("OTHERPAGES")} className="nav-link" to="/services">
          Services
        </Link>

        <Link  onClick={() => toHomeOrOther("OTHERPAGES")} className="nav-link" to="/about">
          About
        </Link>


        <Link  onClick={() => toHomeOrOther("OTHERPAGES")} className="nav-link" to="/contact">
          Contact
        </Link>

      </div>
    </div>

    );
};

export default NavigationLinks;