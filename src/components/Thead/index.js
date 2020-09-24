import React from "react";

import styles from "./Thead.module.css";

const Thead = () => {
  return (
    <tr className={styles.tr}>
      <th className={styles.th}>Name</th>
      <th className={styles.th}>Phone Number</th>
      <th className={styles.th}> Action</th>
    </tr>
  );
};

export default Thead;
