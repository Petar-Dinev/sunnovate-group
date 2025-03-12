import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles["home-section"]}>
      <img
        className={styles["home-page-img"]}
        src="/home-page-img.jpg"
        alt="home-page-img"
      />
      <section className={styles["home-img-overlay"]}>
        <h1>Sunnovate Group</h1>
        <p style={{ fontSize: "1.8em" }}>Innovate. Commit. Empower.</p>
        <Link className={styles["contract-link"]} to="contacts">
          CONTRACT US
        </Link>
      </section>
    </section>
  );
}
