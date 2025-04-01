import { useState } from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {

  return (
    <section className={styles["about-section"]}>
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
          <li><span className={styles['bullet-span']}><img src="wire-with-leaf.png" alt="wire-img" /></span><strong>Customer-Centric Approach & Commitment</strong></li>
          <li>We tailor solutions to meet our clients' energy needs and business goals.</li>
          <li><span className={styles['bullet-span']}><img src="wire-with-leaf.png" alt="wire-img" /></span><strong>Integrity</strong></li>
          <li>We build long-term relationships based on transparency, ethics, and trust.</li>
          <li><span className={styles['bullet-span']}><img src="wire-with-leaf.png" alt="wire-img" /></span><strong>Reliability</strong></li>
          <li>We deliver projects with the highest standards of quality, safety, and precision.</li>
          <li><span className={styles['bullet-span']}><img src="wire-with-leaf.png" alt="wire-img" /></span><strong>Innovation</strong></li>
          <li>We embrace cutting-edge technology to enhance efficiency and performance.</li>
          <li><span className={styles['bullet-span']}><img src="wire-with-leaf.png" alt="wire-img" /></span><strong>Sustainability</strong></li>
          <li>We are committed to reducing the world's carbon footprint through clean energy solutions.</li>
        </ul>
        <span className={styles['logo-span']}><img src="logo.png" alt="logo-img" /></span>
      </section>
    </section>
  );
}
