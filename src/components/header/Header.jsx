import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/languageContext";
import { translations } from "../../translations";

export default function Header() {

  const { language, changeLanguage } = useContext(LanguageContext)
  const t = translations[language]?.header || translations.en.header;

  return (<header className={styles["main-header"]}>
    <span className={styles["main-logo-span"]}>
      <img src="logo.png" alt="logo" className={styles["main-logo"]} />
    </span>
    <nav>
      <ul>
        <li>
          <Link to="/">{t.nav.home}</Link>
        </li>
        <li>
          <Link to="/services">{t.nav.services}</Link>
        </li>
        <li>
          <Link to="/about-us">{t.nav.about}</Link>
        </li>
        <li>
          <Link to="/contacts">{t.nav.contacts}</Link>
        </li>
      </ul>
    </nav>
    <div className={styles['language-div']}>
      <img
        src="/en.svg"
        alt="English"
        onClick={() => changeLanguage("en")}
        className={`${styles.flag} ${language === "en" ? styles.activeFlag : ""}`}
      />
      <img
        src="/it.svg"
        alt="Italian"
        onClick={() => changeLanguage("it")}
        className={`${styles.flag} ${language === "it" ? styles.activeFlag : ""}`}
      />
      <img
        src="/bg.svg"
        alt="Bulgarian"
        onClick={() => changeLanguage("bg")}
        className={`${styles.flag} ${language === "bg" ? styles.activeFlag : ""}`}
      />
    </div>
  </header>)

}
