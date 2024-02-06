import { Link } from "react-router-dom";
import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <Link className={styles.menuItem} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.menuItem} to="/sobre">
            Sobre
          </Link>
        </li>
        <li>
          <Link className={styles.menuItem} to="/comentarios">
            Comentários
          </Link>
        </li>
        <li>
          <Link className={styles.menuItem} to="/contato">
            Contato
          </Link>
        </li>
        <li>
          <Link className={styles.menuItem} to="/apigatos">
            Gatinhos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;