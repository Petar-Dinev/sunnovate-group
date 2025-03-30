import { useState } from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className={styles["about-section"]}>
      <header>
        <h2>SUNNOVATE GROUP MANAGEMENT</h2>
      </header>
      <section className={styles['company-info-section']}>
        <h2>About Sunnovate</h2>
        <h4>Who We Are</h4>
        <p>Sunnovate is a leading company in the sector of <strong>renewable energy engineering, procurement, and construction</strong>, specialized in the development and execution of <strong>photovoltaic power plant projects and battery energy storage systems</strong>. With a commitment to <strong>innovation, sustainability, and operational excellence, we provide turnkey solutions and wide flexibility</strong> for project implementations.</p>
        <h4>Our Mission</h4>
        <p><em>"Empowering a sustainable future through innovative renewable energy solutions."</em> We strive to accelerate the <strong>global energy transition</strong> by delivering <strong>high-performance solar power systems</strong> that are cost-effective, scalable, and environmentally responsible.</p>
        <h4>Our Vision</h4>
        <p>To be a trusted leader in renewable energy, driving innovation and creating lasting value for partners and communities. Committed to sustainability, reliability, and delivering high-quality services with excellence and trust.</p>
        <h4>Our Core Values</h4>
        <ul>
          <li><span></span><strong>Customer-Centric Approach & Commitment</strong> - We tailor solutions to meet our clients' energy needs and business goals.</li>
          <li><span></span><strong>Integrity</strong> - We build long-term relationships based on transparency, ethics, and trust.</li>
          <li><span></span><strong>Reliability</strong> - We deliver projects with the highest standards of quality, safety, and precision.</li>
          <li><span></span><strong>Innovation</strong> - We embrace cutting-edge technology to enhance efficiency and performance.</li>
          <li><span></span><strong>Sustainability</strong> - We are committed to reducing the world's carbon footprint through clean energy solutions.</li>
        </ul>
        <span className={styles['logo-span']}><img src="logo.png" alt="logo-img" /></span>
      </section>
      {/* <section className={styles["company-info"]}>
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
      </section> */}
      <section className={styles["founder-info"]}>
        <h2>Our Team</h2>
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
