import React from 'react';
import ServiceListItem from './ServiceListItem/index.js';

const ServiceList = ({services, createService}) => {
  const renderedServices = services ? services.map((service, index) => {
    return (
      <ServiceListItem key={index} id={index} service={service} createService={createService} />
    )
  }) : ""

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="grid grid-cols-3 auto-rows-min flex-wrap -mx-1 lg:-mx-4">
      {renderedServices}
      </div>
    </div>
  );
};

export default ServiceList;