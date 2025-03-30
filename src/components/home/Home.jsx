import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

const images = [
  "Slide1.JPG",
  "Slide2.JPG",
  "Slide3.JPG",
  "Slide4.JPG",
  "Slide5.JPG",
  "Slide6.JPG",
  "Slide7.JPG",
  "Slide8.JPG",
]

export default function Home() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex + 1 < images.length) {
          return prevIndex + 1;
        }
        return 0;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [index])
  return (
    <section className={styles["home-section"]}>
      <section className={styles["main-logo-section"]}>
        <img className={styles['home-page-logo-img']} src={images[index]} alt="home-page-logo" />
        <section className={styles["home-img-overlay"]}>
        <Link className={styles["contract-link"]} to="contacts">
          CONTACT US
        </Link>
        </section>
      </section>
    </section>
  );
}
