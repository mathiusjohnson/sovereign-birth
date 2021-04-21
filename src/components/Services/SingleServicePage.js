import React from 'react';
import { loadState } from '../../helpers/localStorage'

const SingleServicePage = (props) => {
  const service = loadState()
  return (
    <div className="space-y-2 my-2">
      <div className="flex justify-center font-bold">
        <h1 className="text-3xl">{service.name}</h1>
      </div>
    </div>
  );
};

export default SingleServicePage;