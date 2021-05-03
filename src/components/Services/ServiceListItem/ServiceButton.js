import React from 'react';
import { Link } from 'react-router-dom';

const ServiceButton = ({onClickSaveState, call_to_action, call_to_action_link, call_to_action_target}) => {
  console.log();
  if (call_to_action_target === '_blank') {
    return (
      <a href={call_to_action_link} target={call_to_action_target} rel="noreferrer"  className="btn btn-primary text-base md:text-2xl leading-5 m-2  md:m-4">
        {call_to_action}
      </a>
    );
  } else {
    return (
      <Link onClick={() => onClickSaveState()} to={call_to_action_link} rel="noreferrer" className="btn btn-primary text-base md:text-2xl leading-5 m-2  md:m-4">
        {call_to_action}
      </Link>
    );
  }
};

export default ServiceButton;