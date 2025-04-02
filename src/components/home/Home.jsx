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
  const [showMore, setShowMore] = useState(false);
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
      <section className={styles["home-content-section"]}>
        <h2>Benefits of Partnering with us</h2>
        <ul>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>A Trusted Long-Term Partner strategy visioner, premium service provider, dedicated customer support and post-installation services. Transparent
            communication and a client-centric approach in every project. A commitment to building lasting relationships based on trust, performance, and shared
            sustainability goals. Targeting fewer number of customers providing premium services.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Proven Expertise in Renewable Energy Extensive experience in designing, developing, and constructing solar power projects. A team of highly skilled
            engineers, project managers, and consultants with deep industry knowledge. Compliance with international standards (ISO 9001, 14001, 45001) ensuring
            quality, safety, and environmental responsibility.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Turnkey EPC & Customized Solutions Full-scale Engineering, Procurement, and Construction (EPC) services, eliminating the need for multiple contractors.
            Tailor-made solutions for utility-scale, commercial & industrial (C&I), and hybrid solar projects. Flexible and scalable designs to meet specific client needs
            and site conditions.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Cutting-Edge Technology & Innovation Integration of advanced solar modules, inverters, and energy storage systems for maximum efficiency. Use of real-time
            monitoring, AI-driven energy management, and predictive analytics to enhance performance. Implementation of smart grid and hybrid energy solutions to
            ensure energy reliability and cost savings.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Cost-Effective & High-Performance Systems Strong supplier relationships ensure competitive pricing and high-quality materials. Optimization of system
            efficiency to deliver the highest energy output and return on investment (ROI).Long-term operations & maintenance (O&M) services to maximize system
            lifespan and minimize downtime. </li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Commitment to Sustainability & ESG Compliance Contribution to carbon footprint reduction by supporting the transition to clean energy. Compliance with
            environmental, social, and governance (ESG) standards. Support for clients in achieving net-zero goals and fulfilling corporate sustainability commitments.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Seamless Project Execution & Risk Mitigation Extensive experience in regulatory approvals, permitting, and grid connection support. Robust project
            management framework ensuring timely delivery and budget control. Risk assessment and mitigation strategies to handle project complexities and
            uncertainties.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Strong Industry Network & Partnerships Collaboration with leading technology providers, financial institutions, and energy stakeholders. Access to innovative
            financing models (PPAs, leasing, and investment opportunities). Strategic alliances with policy makers and industry leaders to stay ahead of regulatory trends.</li>
        </ul>
        <span className={styles['logo-span']}><img src="" alt="" /></span>
      </section>
      <section className={styles["founder-info"]}>
        <h2>Team Experience & Executive summary</h2>
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
              sustainable energy solutions.
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
      <section className={styles["video-section"]}>
        <video className={styles["background-video"]} autoPlay loop muted playsInline>
          <source src="video-slide2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

    </section>
  );
}
