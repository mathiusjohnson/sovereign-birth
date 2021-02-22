import React from 'react';
import ServiceListItem from './ServiceListItem';

const ServiceList = ({services}) => {

  const renderedServices = services? services.map((service, index) => {
    return (
      <ServiceListItem key={index} service={service} />
    )
  }) : ""
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
      {renderedServices}
      </div>
    </div>
  );
};

export default ServiceList;