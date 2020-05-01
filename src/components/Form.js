import React, { useState } from "react";

const Form = ({ submitContact }) => {
  const [newContact, setNewContact] = useState({
    name: "",
    number: "",
  });

  const handleInput = (event) => {
    setNewContact({ ...newContact, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitContact(newContact);
    setNewContact({ name: "", number: "" });
  };

  return (
    <div className="formBody">
      <form onSubmit={handleSubmit}>
        <input
          id="nameInput"
          type="text"
          onChange={handleInput}
          name="name"
          value={newContact.name}
          placeholder="Name"
        />
        <input
          id="numberInput"
          type="number"
          onChange={handleInput}
          name="number"
          value={newContact.number}
          placeholder="Phone Number"
        />
        <button id="submitButton" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
