import React, { useState } from 'react';
import fire from '../../../fire.js';
import useVisualMode from '../../../hooks/useVisualMode'
import EditService from './EditService.js';
import ShowTextBody from './ShowTextBody.js';
import ShowTitle from './ShowTitle'
import Status from "./Status";
// import Confirm from "./Confirm";
// import Error from "./Error";
import Empty from "./Empty";

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
  // console.log(service);
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

  // // FOR THE CANCEL INTERVIEW BUTTON IN THE SHOW COMPONENT
  // function cancel(id) {
  //   transition(CONFIRM);
  // }

  // // DELETES AN APPOINTMENT
  // function deleteService(id) {
  //   transition(DELETING, true);
  //     deleteService(id)
  //     .then(() => transition(EMPTY))
  //     .catch((error) => transition(ERROR_DELETE, true));
  // }


  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow hover:shadow-lg">

        <a href="/home">
          <img className="block h-auto w-full max-h-44 object-cover"  src={service.image_url} alt="insert here text"></img>
        </a>

        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

        {mode === SAVING && <Status message="Saving" />}

        {mode === DELETING && <Status message="Deleting..." />}

        {mode === 'SHOW' && (
          <ShowTitle 
            id={service.id} 
            title={service.title}/>
        )}
        
        {mode === 'SHOW' && (
          <ShowTextBody 
            text_body={service.text_body} 
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

        <footer className="">
          { mode === 'SHOW' ? 
            <div onClick={() => onEditClicked()} className="btn btn-primary m-2">Edit</div>
            :
            ""
          }
        </footer>
      </article>
    </div>
  );
};
