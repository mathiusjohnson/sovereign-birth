import React from 'react';
import Services from '../components/Services/index'
const ServicesPage = ({businessData}) => {
  console.log(businessData);
  return (
    <div>
      <Services businessData={businessData} />
    </div>
  );
};

export default ServicesPage;