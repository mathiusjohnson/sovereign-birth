import React from "react";
import { withRouter } from "react-router-dom";
import NavigationLinks from "./Navigation/NavigationLinks";
import DropDownNavigationLinks from "./Navigation/DropDownNavigationLinks";
import useVisualMode from '../hooks/useVisualMode'
import NavigationBody from "./Navigation/NavigationBody";
import NavigationLogo from "./Navigation/NavigationLogo";
import { loadState } from "../helpers/localStorage";

const HOME = "HOME";
const OTHERPAGES = "OTHERPAGES";

function Navigation(props) {
  const modeState = loadState();
  console.log("mode state in nav: ", modeState);
  const { mode, transition } = useVisualMode(HOME);

  console.log("mode in navigation: ", mode, modeState);

  const toOtherPAges = mode === OTHERPAGES || modeState === OTHERPAGES
  return (

      <nav>
        <div>
  
        {mode === HOME || modeState === HOME ?
          <div id="overlay" className="bg-hero-pattern bg-cover h-half-screen overlay z-10 grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 w-100 bg-top">
            <DropDownNavigationLinks transition={transition} SHOW={HOME} OTHERPAGES={OTHERPAGES} mode={mode}  />
            <NavigationLinks transition={transition} SHOW={HOME} OTHERPAGES={OTHERPAGES} />
            <NavigationBody />
            <NavigationLogo />
          </div> :

          <div className="bg-maximum-blue-green grid grid-cols-2 lg:grid-cols-3 w-100">
            <DropDownNavigationLinks transition={transition} SHOW={HOME} OTHERPAGES={OTHERPAGES}  />
            <NavigationLinks transition={transition} SHOW={HOME} OTHERPAGES={OTHERPAGES} mode={mode}/>
            <NavigationLogo />
          </div>
        }
      </div>
    </nav>
  );
}

export default withRouter(Navigation);