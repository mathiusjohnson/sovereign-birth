import React from "react";
import CallToAction from "./CallToAction";
import Values from "./Values";
import LazyLoad from 'react-lazyload';

function Home(businessData) {
  console.log('businessData in home: ', businessData.props);
  let titles = businessData.props.map(service => service.title);
  return (
    <div>
      <div className="container mx-auto">
        <LazyLoad height={200}>
          <Values />
        </LazyLoad>

        <LazyLoad height={200}>
          <CallToAction titles={titles} />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Home;  