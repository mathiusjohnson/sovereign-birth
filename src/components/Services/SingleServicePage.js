import React from 'react';
import { loadState } from '../../helpers/localStorage'

const SingleServicePage = (props) => {
  console.log('props in single service: ', props);
  const service = loadState()
  console.log(service);
  return (
    <div className="space-y-2 my-2">
      <div className="flex justify-center font-bold">
        <h1 className="text-3xl">{service.title}</h1>
      </div>
    </div>
  );
};

export default SingleServicePage;