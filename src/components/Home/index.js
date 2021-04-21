import React from "react";
import CallToAction from "./CallToAction";
import Values from "./Values";
import LazyLoad from 'react-lazyload';

function Home(props) {
  return (
    <div>
      <div className="container mx-auto">
        <LazyLoad height={200}>
          <Values />
        </LazyLoad>

        <LazyLoad height={200}>
          <CallToAction />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Home;  