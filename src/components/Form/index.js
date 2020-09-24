import React from "react";

import styles from "./Form.module.css";

const Form = ({ handleSubmit, nameInput, numberInput, name, number }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        id="nameInput"
        type="text"
        onChange={nameInput}
        name="name"
        value={name}
        placeholder="Name"
      />
      <input
        className={styles.input}
        id="numberInput"
        type="number"
        onChange={numberInput}
        name="number"
        value={number}
        placeholder="Phone Number"
      />
      <button className={styles.button} type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
