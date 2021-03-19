import React from "react";
import CallToAction from "./CallToAction";
import Values from "./Values";
import LazyLoad from 'react-lazyload';

function Home(props) {
  // console.log("state in home: ", props);
  return (
    <div className="">
      <LazyLoad height={200}>
        <Values />
      </LazyLoad>

      <LazyLoad height={200}>
        <CallToAction />
      </LazyLoad>
    </div>
  );
}

export default Home;  