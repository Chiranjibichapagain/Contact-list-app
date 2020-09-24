import React from "react";
import styles from "./Tbody.module.css";

const Tbody = ({ data, deleteContact }) => {
  return (
    <tr>
      <td className={styles.td}>{data.name}</td>
      <td className={styles.td}>{data.number}</td>
      <td className={styles.td}>
        <button
          className={styles.button}
          onClick={() => deleteContact(data.name)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Tbody;
