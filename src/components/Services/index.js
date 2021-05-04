import React from 'react';
import ServiceHeader from './ServiceHeader';
import ServiceList from './ServiceList';

const index = ({businessData, createService}) => {
  return (
    <div className="space-y-8 my-24 container mx-auto">
      <ServiceHeader />
      <ServiceList 
        services={businessData} 
        createService={createService}
      />
    </div>
  );
};

export default index;