import React from 'react';

const ShowButton = ({call_to_action, call_to_action_link, call_to_action_target}) => {
  return (
    <a href={call_to_action_link} target={call_to_action_target} rel="noreferrer"  className="btn btn-primary leading-5 m-2  md:m-4">
      {call_to_action}
    </a>
  );
};

export default ShowButton;