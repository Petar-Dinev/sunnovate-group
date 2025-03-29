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
      {/* <section>
        <h2>About Sunnovate</h2>
        <h5>Who We Are</h5>
        <p>
          Sunnovate is a leading company in the sector of renewable energy engineering, procurement, and construction, specializing in the development and execution of photovoltaic power plant projects and battery energy storage systems. With a commitment to innovation, sustainability, and operational excellence, we provide turnkey solutions and wide flexibility for businesses, utilities, and governments looking to transition to clean energy.
        </p>
      </section> */}
    </section>
  );
}
