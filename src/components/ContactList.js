import React from "react";

const ContactList = ({ contact, deleteContact }) => {
  return (
    <li id="contactItem">
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <button id="deleteButton" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactList;
