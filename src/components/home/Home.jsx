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
      {/* <section className={styles["home-content-section"]}>
        <h2>Experience & Executive summary</h2>
        <section className={styles["home-map-section"]}>
          <img src="global-map.png" alt="global-map" />
        </section>
        <section className={styles["home-power-data-section"]}>
          <img src="Chart-Markets-background-L16x9.png" alt="power-data" />
        </section>
        <section className={styles["executive-summary-section"]}>
          <article>
            <header>
              <span><img src="contract.png" alt="contract-image" /></span>
              <div className={styles["headers-container"]}>
                <h4>700+*</h4>
                <h4>1000+**</h4>
              </div>
            </header>
            <p>Annual execution capacity in *MWp / in **MWh</p>
          </article>
          <article>
            <header>
              <span><img src="engineer.png" alt="engineer-image" /></span>
              <h3>400+</h3>
            </header>
            <p>Construction professionals</p>
          </article>
          <article>
            <header>
              <span><img src="sun-panel.png" alt="sun-panel-image" /></span>
              <h3>2 400+</h3>
            </header>
            <p>In MWp execution capacity</p>
          </article>
          <article>
            <header>
              <span><img src="batery.png" alt="batery-img" /></span>
              <h3>400+</h3>
            </header>
            <p>In MWh execution capacity</p>
          </article>
          <article>
            <header>
              <span><img src="project.png" alt="project-image" /></span>
              <h3>60+</h3>
            </header>
            <p>Executed Projects</p>
          </article>
          <article>
            <header>
              <span><img src="map.png" alt="map-image" /></span>
              <h3>11+</h3>
            </header>
            <p>Markets of experience</p>
          </article>
          <article>
            <header>
              <span><img src="clock.png" alt="clock-image" /></span>
              <h3>9+</h3>
            </header>
            <p>Years of experience</p>
          </article>
        </section>
      </section> */}
      <section className={styles["video-section"]}>
        <h2>Experience & Executive summary</h2>
        <video className={styles["background-video"]} autoPlay loop muted playsInline>
          <source src="video-slide2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

    </section>
  );
}
