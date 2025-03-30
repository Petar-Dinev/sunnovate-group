import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <section className={styles["services-section"]}>
      <header className={styles["services-header"]}>
        <h3>SERVICES</h3>
      </header>
      <section className={styles["services-info-section"]}>
        <ul>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>End-to-End Expertise &mdash; From project design to execution and long-term maintenance.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Commitment to Quality & Sustainability &mdash; Delivering high-performance, environmentally responsible solutions.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Proven Track Record &mdash; Successfully executed projects across various scales and regions.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Innovation & Technology-Driven Approach &mdash; Leveraging the latest advancements in solar and energy storage.</li>
        </ul>
        <span><img src="logo.png" alt="logo" /></span>
      </section>
      <section className={styles['services-content-section']}>
        <ul>
          <li>Pre-feasibility and feasibility studies</li>
          <li>Development support</li>
          <li>Solar and renewable energy strategies</li>
          <li>Planning and engineering design of new power plants for stand-alone solar PV, as well as Solar plus energy storage and other hybrid solutions</li>
          <li>Turnkey EPC services (incl. O&M)</li>
          <li>Construction works (Mechanical, Electrical, Civil Works)</li>
          <li>Project management and construction supervision</li>
          <li>Bidding process & contractual design (EPC/EPCM, O&M, PPA)</li>
          <li>Turnkey engineering solutions as SCADA, CMMS, LVRT & CCTV</li>
          <li>Commissioning and certification</li>
          <li>PPA advisory</li>
          <li>Operational performance analysis and optimization</li>
          <li>O&M strategy and OPEX optimization</li>
          <li>Thermal drone-enabled inspections</li>
          <li>Repowering studies</li>
          <li>Capacity building</li>
        </ul>
      </section>
    </section>
  );
}
