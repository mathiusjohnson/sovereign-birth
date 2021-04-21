import React from "react";
import { withRouter } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import DropDown from "./DropDown";
import useVisualMode from '../../hooks/useVisualMode'
import NavigationBody from "./NavigationBody";
import NavigationLogo from "./NavigationLogo";
import { loadState } from "../../helpers/localStorage";

const HOME = "HOME";
const OTHERPAGES = "OTHERPAGES";

function Navigation(props) {
  const modeState = loadState();
  const { mode, transition } = useVisualMode(HOME);

  console.log(props);
  return (

      <nav className="z-50">
        <div>
  
        {props.location.pathname === '/home' || props.location.pathname === '/' ?
          <div id="overlay" className="bg-hero-pattern bg-cover h-half-screen overlay z-10 grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 w-100 bg-top">
            <div className="flex justify-center mt-12 lg:hidden">
              <DropDown transition={transition} SHOW={HOME} OTHERPAGES={OTHERPAGES} mode={mode}  />
            </div>
            <NavigationLinks transition={transition} SHOW={HOME} OTHERPAGES={OTHERPAGES} />
            <NavigationBody />
            <NavigationLogo />
          </div> 
          :
          <div className="bg-maximum-blue-green grid grid-cols-2 lg:grid-cols-3 w-100">
            <div className="flex justify-center mt-12 lg:hidden">
              <DropDown transition={transition} SHOW={HOME} OTHERPAGES={OTHERPAGES} mode={mode}  />
            </div>
            <NavigationLinks transition={transition} SHOW={HOME} OTHERPAGES={OTHERPAGES} mode={mode}/>
            <NavigationLogo />
          </div>
         } 
      </div>
    </nav>
  );
}

export default withRouter(Navigation);