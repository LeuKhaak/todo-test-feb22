import React from "react";
import styles from "./styles.module.scss";

function Error({ notice }) {
  return <div className={styles.error}>{notice}</div>;
}

export default Error;
