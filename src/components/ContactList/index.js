import React from "react";

import Thead from "../Thead";
import Tbody from "../Tbody";
import styles from "./ContactList.module.css";

const ContactList = ({ data, deleteContact }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <Thead />
      </thead>
      <tbody>
        {data.map((contact) => (
          <Tbody
            key={contact.name}
            data={contact}
            deleteContact={deleteContact}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
