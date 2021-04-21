import React from 'react';

const ShowButton = ({call_to_action}) => {
  return (
    <button type="button" className="btn btn-primary leading-5 m-2  md:m-4">
      {call_to_action}
    </button>
  );
};

export default ShowButton;