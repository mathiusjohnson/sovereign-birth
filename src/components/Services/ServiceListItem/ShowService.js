import React from 'react';
import ShowButton from './ShowButton';
import ShowTextBody from './ShowTextBody';
import ShowTitle from './ShowTitle';

const ShowService = ({service}) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <ShowTitle className="" id={service.id} title={service.title}/>                  
        <ShowTextBody text_body={service.text_body} />
      </div>
      <div className="flex justify-center">
        <ShowButton call_to_action={service.call_to_action} call_to_action_link={service.call_to_action_link} call_to_action_target={service.call_to_action_target} />
      </div>
    </div>
  );
};

export default ShowService;