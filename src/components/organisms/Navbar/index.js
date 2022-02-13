import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          HOME
        </Link>
        <Link to="/todo" className={styles.link}>
          TODO
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
