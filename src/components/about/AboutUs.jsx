import { useState } from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className={styles["about-section"]}>
      <header>
        <h2>SUNNOVATE GROUP MANAGEMENT</h2>
      </header>
      <section className={styles["company-info"]}>
        <section className={styles["info-section"]}>
          <h4>About Sunnovate Group</h4>
          <h5>OUR MISSION</h5>
          <p>
            At Sunnovate Group, our mission is to accelerate the global
            transition to clean, renewable energy by delivering innovative,
            efficient, and sustainable solar power solutions. We are committed
            to leveraging cutting-edge technology, engineering excellence, and
            strategic partnerships to create a greener future. By empowering
            businesses and communities with reliable and future-proof energy
            systems, we drive positive environmental and economic impact
            worldwide.
          </p>
        </section>
        <section className={styles["company-info-img-section"]}>
          <img
            className={styles["company-info-img"]}
            src="https://img1.wsimg.com/isteam/getty/2149036305/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:4605,m"
            alt="sheep"
          />
        </section>
      </section>
      <section className={styles["founder-info"]}>
        <section className={styles["founder-img-section"]}>
          <img
            className={styles["founder-img"]}
            src="Valentin-4x5.jpg"
            alt="founder"
          />
        </section>
        <section className={styles["founder-info-section"]}>
          <h4>Valentin Gospodinov</h4>
          <h5>Founder & CEO</h5>
          <p>
            Visionary leader and renewable energy specialist with 10 years of
            experience in project management, procurement, cost estimation, and
            turnkey operations within the Photovoltaic (PV) and Battery Energy
            Storage Systems (BESS) sectors.{" "}
            <b>
              Summary of 60+ completed projects with a combined capacity of 2330
              MWp PV and 400+ MWh BESS.
            </b>
          </p>
          {showMore && (
            <p className={styles["extra-text"]}>
              Proven track record of delivering large-scale solar energy
              projects across Europe, the Middle East, and the USA. As the
              Founder of <strong>Sunnovate Group</strong>, committed to driving
              innovation, sustainability, and operational excellence in
              renewable energy solutions. Skilled in strategic planning,
              contract negotiations, supply chain management, and team
              leadership, with a focus on delivering high-value, scalable, and
              sustainable energy projects.
            </p>
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            className={styles["toggle-btn"]}
          >
            {showMore ? "- Show Less" : "+ Show More"}
          </button>
        </section>
      </section>
    </section>
  );
}
