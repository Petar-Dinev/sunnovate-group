import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/languageContext";

export default function Header() {

  const { language } = useContext(LanguageContext)
  console.log(language);
  
  if (language == 'bg') {
    return (<header className={styles["main-header"]}>
      <span className={styles["main-logo-span"]}>
        <img src="logo.png" alt="logo" className={styles["main-logo"]} />
      </span>
      <nav>
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Начало
            </Link>
          </li>
          <li>
            <Link to="/services">Услуги</Link>
          </li>
          <li>
            <Link to="/about-us">За нас</Link>
          </li>
          <li>
            <Link to="/contacts">Контакти</Link>
          </li>
        </ul>
      </nav>
    </header>)
  }
  
  return (
    <header className={styles["main-header"]}>
      <span className={styles["main-logo-span"]}>
        <img src="logo.png" alt="logo" className={styles["main-logo"]} />
      </span>
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
