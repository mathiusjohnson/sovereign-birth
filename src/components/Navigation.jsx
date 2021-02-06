import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <nav>
        <div id="overlay" class="bg-hero-pattern bg-cover h-half-screen overlay z-10 flex justify-between">
          
          <div class="text-white z-20 text-2xl p-24 flex items-start justify-start w-1/2">
            <div className=" flex flex-wrap space-x-4 ">

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

          <div className="mx-48">

          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);