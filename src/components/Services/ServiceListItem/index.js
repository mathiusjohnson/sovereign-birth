import React, { useState } from 'react';
import fire from '../../../fire.js';
import useVisualMode from '../../../hooks/useVisualMode'
import EditService from './EditService.js';
import Status from "./Status";
// import Confirm from "./Confirm";
// import Error from "./Error";
import Empty from "./Empty";
import ServiceDetails from './ServiceDetails.js';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
// const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
// const ERROR_DELETE = "ERROR_DELETE";

export default function ServiceListItem({service, createService, deleteService, id}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { mode, transition, back } = useVisualMode(SHOW);

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const onEditClicked = () => {
    transition(EDIT)
  }

  function save(title, text_body) {

    const serviceId = service.id

    const updatedService = {
      title,
      text_body,
      index: id,
      serviceId
    }

    transition(SAVING, true);
      createService(id, updatedService)
      .then(() => transition(SHOW))
      .catch((error) =>{
        transition(ERROR_SAVE, true);
      }) 
  }

  // // FOR THE DELETE SERVICE BUTTON IN THE SHOW COMPONENT
  // function cancel(id) {
  //   transition(CONFIRM);
  // }

  // // DELETES A SERVICE
  // function deleteService(id) {
  //   transition(DELETING, true);
  //     deleteService(id)
  //     .then(() => transition(EMPTY))
  //     .catch((error) => transition(ERROR_DELETE, true));
  // }

  console.log(isLoggedIn, mode)

  return (
      <article className="text-center my-1 px-1 lg:my-12 mx-2 overflow-hidden rounded-lg">

        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

        {mode === SAVING && <Status message="Saving" />}

        {mode === DELETING && <Status message="Deleting..." />}

        {mode === 'SHOW' && (
          <ServiceDetails className="" 
            id={service.id} 
            service={service}
            isLoggedIn={isLoggedIn}
            onEditClicked={onEditClicked}
            />
        )}

        {mode === 'EDIT' && (
          <EditService 
            id={service.id}
            onCancel={back}
            onSave={save}
            serviceTitle={service.title}
            serviceText_body={service.text_body}
          />
        )}
      </article>
  );
};
