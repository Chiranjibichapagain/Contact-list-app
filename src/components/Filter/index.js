import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ handleChange }) => {
  return (
    <div className={styles.filterBox}>
      <input
        className={styles.input}
        id="filterInput"
        placeholder="Type and search contact"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
