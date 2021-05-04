import React from "react";
import CallToAction from "./Offerings";
import Values from "./Values";
import Banner from "./Banner";
import LazyLoad from 'react-lazyload';
import SubscriptionService from "./SubscriptionService";

function Home(businessData) {
  let titles = businessData.props.map(service => service.title);
  return (
    <div className="">
      <div className="">
        <Banner />
        <LazyLoad height={200}>
          <Values />
        </LazyLoad>

        <LazyLoad height={200}>
          <CallToAction titles={titles} />
        </LazyLoad>

        <LazyLoad height={200}>
          <SubscriptionService />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Home;  