import React from 'react';
import { saveState } from '../../../helpers/localStorage';
import ServiceButton from './ServiceButton';
import ServiceTextBody from './ServiceTextBody';
import ServiceTitle from './ServiceTitle';

const ServiceDetails = ({service, isLoggedIn, onEditClicked}) => {
  const onClickSaveState = () => {
    saveState(service)
  }
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <ServiceTitle className="" id={service.id} title={service.title}/>                  
        <ServiceTextBody text_body={service.text_body} />
      </div>
      <div className="flex justify-center">
          {isLoggedIn && (
              <div onClick={() => onEditClicked()} className="btn btn-primary m-4 bg-black text-lg text-black">Edit</div>
          )}
        <ServiceButton
          onClickSaveState={onClickSaveState}
          call_to_action={service.call_to_action} 
          call_to_action_link={service.call_to_action_link} 
          call_to_action_target={service.call_to_action_target} />
      </div>
    </div>
  );
};

export default ServiceDetails;