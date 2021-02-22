import React from 'react';
import ServiceHeader from './ServiceHeader';
import ServiceList from './ServiceList';

const index = ({businessData}) => {
  return (
    <div className="space-y-8 mt-8 container mx-auto">
      <ServiceHeader />
      <ServiceList services={businessData.services} />
    </div>
  );
};

export default index;