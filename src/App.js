import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Form from "./components/Form";
import Info from "./components/Info";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Services from "./services/Services";

function App() {
  const [allContacts, setAllContacts] = useState([]);
  const [info, setinfo] = useState("");
  const [filter, setFilter] = useState("");

  //**********************************************************************************************

  // get data from the server and send it to the states
  useEffect(() => {
    axios.get("http://localhost:3001/contacts").then((response) => {
      setAllContacts(response.data);
    });
  }, []);

  //**************************************************************************************************

  //gets search characteres from filter and filter the allContacts array and returns only that matches the criterea.
  const filteredData = allContacts.filter(
    (contact) =>
      contact.name &&
      contact.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
  );

  //**************************************************************************************************

  //Displaying the info (name& number) from the state
  const displayList = () => {
    const contacts = [...filteredData];
    if (contacts.length > 0) {
      // this is necessary because all others stuffs runs before axios, and in the begenning the allContacts is empty, so we want to run this only if the allContacts has something init.otherwise it will show undefined!!
      return contacts.map((contact) => (
        <ContactList
          contact={contact}
          key={contact.id}
          deleteContact={deleteContact}
        />
      ));
    }
  };

  //**************************************************************************************************

  // handles the delete
  const deleteContact = (id) => {
    const toDelete = allContacts.filter((contact) => contact.id === id);
    if (
      window.confirm(`Are you sure you want to delete ${toDelete[0].name}?`)
    ) {
      // toDelete is an array of obj so we need to do [0]
      return Services.deleteContact(toDelete[0].id).then((response) => {
        setAllContacts(
          allContacts.filter((contact) => contact.id !== toDelete[0].id)
        );
        setinfo(`${toDelete[0].name} is deleted!!`);
        setTimeout(() => {
          setinfo("");
        }, 5000);
      });
    } else {
      return null;
    }
  };

  //**************************************************************************************************

  // handle the submit button
  const submitContact = (newContact) => {
    // first we need to see if the new contact match with the existing name. if so we want to go for update
    const oldContact = allContacts.filter(
      (contact) => contact.name === newContact.name
    );
    // if oldContact is empty( length=0), then there is no match with the existing contact, then we can crate new contact
    if (oldContact.length === 0) {
      Services.addContact(newContact).then((response) => {
        setAllContacts(allContacts.concat(response.data));
      });
      setinfo(`${newContact.name} is added to the list`);
      setTimeout(() => {
        setinfo("");
      }, 5000);
    } else {
      // now if the filter match with the name of existing contact it will show length>1 so now we update; with seperate function
      handleUpdateContact(oldContact[0], newContact); // oldContact[0] beacuse it is an array of obj..so although theere is just 1 item we need to put the index.
    }
  };

  //**************************************************************************************************

  // handles the update
  const handleUpdateContact = (oldContact, newContact) => {
    if (
      window.confirm(
        `${oldContact.name} already exists. Do you want to update the contact?`
      )
    ) {
      return Services.updateContact(oldContact, newContact).then((response) => {
        const updatedContact = allContacts.map((contact) =>
          contact === oldContact
            ? { ...contact, number: response.data.number }
            : contact
        );
        // here we want to go to the allContacts and find the contact whe are updating (oldcontact)
        // so if allContact's contact=== to oldContact(contact we want to change) than we copy that contact and change it's number to the number we get from response.
        setAllContacts(updatedContact);
      });
    } else {
      return null;
    }
  };

//**************************************************************************************************

  return (
    <div className="App">
      <div className="main">
        <h1>MY CONTACTS</h1>
        <Info info={info} />
        <Filter filter={filter} setFilter={setFilter} />
        <Form submitContact={submitContact} />
        <div className="contactList">{displayList()}</div>
      </div>
    </div>
  );
}

export default App;
