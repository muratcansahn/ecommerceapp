import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";

const index = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/"> eCommerce </Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Link to="/signin">
          <Button colorScheme="telegram">Login</Button>
        </Link>

        <Link to="/signup">
          <Button colorScheme="telegram">Register</Button>
        </Link>
      </div>
    </nav>
  );
};

export default index;
