import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles["main-header"]}>
      <h1 className={styles["logo-h1"]}>
        <img src="logo.png" alt="logo" className={styles["logo-h1"]} />
      </h1>
      <nav>
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
