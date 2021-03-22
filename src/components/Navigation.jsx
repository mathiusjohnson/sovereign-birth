import React from "react";
import { withRouter } from "react-router-dom";
import NavigationLinks from "./Navigation/NavigationLinks";
import DropDown from "./Navigation/DropDown";
import useVisualMode from '../hooks/useVisualMode'
import NavigationBody from "./Navigation/NavigationBody";
import NavigationLogo from "./Navigation/NavigationLogo";
import { loadState } from "../helpers/localStorage";

const HOME = "HOME";
const OTHERPAGES = "OTHERPAGES";

function Navigation(props) {
  const modeState = loadState();
  const { mode, transition } = useVisualMode(HOME);

  return (

      <nav>
        <div>
  
        {mode === HOME || modeState === HOME ?
          <div id="overlay" className="bg-hero-pattern bg-cover h-half-screen overlay z-10 grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 w-100 bg-top">
            <div className="flex justify-center mt-12 md:hidden">
              <DropDown transition={transition} SHOW={HOME} OTHERPAGES={OTHERPAGES} mode={mode}  />
            </div>
            <NavigationLinks transition={transition} SHOW={HOME} OTHERPAGES={OTHERPAGES} />
            <NavigationBody />
            <NavigationLogo />
          </div> :

          <div className="bg-maximum-blue-green grid grid-cols-2 lg:grid-cols-3 w-100">
            <div className="md:hidden">
              <DropDown transition={transition} SHOW={HOME} OTHERPAGES={OTHERPAGES}  />
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