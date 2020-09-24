import React, { useState, useEffect } from "react";

import Form from "../Form";
import Filter from "../Filter";
import Info from "../Info";
import ContactList from "../ContactList";
import useContact from "../../hook";
import "./App.css";
import styles from "./App.module.css";

function App() {
  const [info, setinfo] = useState("Welcome to Contact-List App");
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [display, setDisplay] = useState([]);

  const [list, setList] = useContact("contacts");

  useEffect(() => {
    setDisplay(list);
  }, [list]);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleNumberInput = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { name: name, number: number };
    const findMatch = list.filter(
      (contact) => contact.name === newContact.name
    );
    if (findMatch.length === 0) {
      setList(list.concat(newContact));
      setinfo(`${newContact.name} is added to the list!!`);
      setTimeout(() => {
        setinfo("Welcome to Contact-List App");
      }, 5000);
      setName("");
      setNumber("");
    } else {
      setinfo(`${newContact.name} already exists, please enter a new name`);
      setTimeout(() => {
        setinfo("Welcome to Contact-List App");
      }, 5000);
    }
  };

  const handleDelete = (toDelete) => {
    if (window.confirm(`are you sure you want to delete ${toDelete}?`)) {
      const existingItems = [...list];
      const updatedList = existingItems.filter(
        (contact) => contact.name !== toDelete
      );
      setList(updatedList);
      setinfo(`${toDelete} is deleted from the list!!`);
      setTimeout(() => {
        setinfo("Welcome to Contact-List App");
      }, 5000);
    } else {
      return null;
    }
  };

  const handleFilter = (event) => {
    const keyWord = event.target.value;
    const existingItems = [...list];
    const foundItems = existingItems.filter(
      (contact) =>
        contact.name.toLowerCase().indexOf(keyWord.toLowerCase()) > -1
    );
    setDisplay(foundItems);
  };

  console.log("tood", display);

  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>CONTACT-LIST APP</h1>
      <Info info={info} />
      <Filter handleChange={handleFilter} />
      <Form
        nameInput={handleNameInput}
        numberInput={handleNumberInput}
        handleSubmit={handleSubmit}
        name={name}
        number={number}
      />
      <ContactList deleteContact={handleDelete} data={display} />
    </div>
  );
}

export default App;
