import React from 'react';
import { Link } from "react-router-dom";
import { saveState } from '../../helpers/localStorage';
import AuthNav from "../auth-nav";
import LogoutButton from '../logout-button';

const NavigationLinks = ({ mode, transition, HOME, OTHERPAGES }) => {

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

        <AuthNav />
        <LogoutButton />
      </div>
    </div>

    );
};

export default NavigationLinks;