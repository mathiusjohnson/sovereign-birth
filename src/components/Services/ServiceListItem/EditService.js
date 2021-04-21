import React, { useState } from "react";

export default function Form ({
  serviceTitle, serviceText_body, onCancel, onSave, id
}) {
  const [title, setTitle] = useState(serviceTitle || "");
  const [textBody, setTextBody] = useState(serviceText_body || "");
  const [error, setError] = useState("");

  const reset = () => {
    setTitle("");
    setTextBody(null);
  };

  const cancel = () => {
    reset();
    onCancel();
  };

  function validate() {
    if (title === "") {
      setError("Service title cannot be blank");
      return;
    }
    if (textBody === null) {
      setError("Service text cannot be blank")
      return;
    }
    if (title !== "" && textBody !== null){
      setError("");
      onSave(title, textBody)
    } 
  }

  return (
    <main className="">
      <section className="">
        <form className="space-y-2 p-2" autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="w-full rounded"
            name="name"
            type="text"
            placeholder="Enter Service Name"
            value={title || "" }
            onChange={(event) => {
              setTitle(event.target.value) 
              setError("")
            }}
            data-testid=""
          />
          <section className="">{error}</section>
        <textarea
            className="w-full rounded"
            name="name"
            type="text"
            placeholder="Enter Service Text"
            value={textBody || "" }
            onChange={(event) => {
              setTextBody(event.target.value) 
              setError("")
            }}
            data-testid=""
            rows="4"
          />
        </form>

      </section>
      <section className="">
        <section className="">
          <div className="btn btn-secondary m-2" onClick={cancel} danger="true">
            Cancel
          </div>
          <div className="btn btn-primary m-2"
            onClick={() => {
              validate();
            }}
            confirm="true"
          >
            Save
          </div>
        </section>
      </section>
    </main>
  );
}