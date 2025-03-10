import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles["video-section"]}>
      <video
        className={styles["background-video"]}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="entry-video-site.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className={styles["video-overlay"]}>
        <h1>Sunnovate Group</h1>
        <p style={{ fontSize: "1.8em" }}>Innovate. Commit. Empower.</p>
        <Link className={styles["contract-link"]} to="contacts">
          CONTRACT US
        </Link>
      </section>
    </section>
  );
}
