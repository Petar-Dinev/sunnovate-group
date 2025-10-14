import { useContext } from "react";
import styles from "./Dashboard.module.css";
import { LanguageContext } from "../../contexts/languageContext";
import { translations } from "../../translations";

// export default function Dashboard() {
//   const { language } = useContext(LanguageContext)

//   if(language == 'bg') {
//     return (
//       <section className={styles["main-services-section"]}>
//       <header className={styles["services-header"]}>
//         <h3>УСЛУГИ</h3>
//       </header>
//       <section className={styles["services-section"]}>
//         <section className={styles["services-info-section"]}>
//           <ul>
//             <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Цялостна експертиза &mdash; От проектиране на проекта до изпълнение и дългосрочна поддръжка.</li>
//             <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Ангажимент за качество и устойчивост &mdash; Предоставяне на високоефективни, екологично отговорни решения.</li>
//             <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Доказан опит &mdash; Успешно изпълнени проекти в различни мащаби и региони.</li>
//             <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Иновационен и технологично ориентиран подход &mdash; Използване на най-новите постижения в слънчевата енергия и съхранението на енергия.</li>
//           </ul>
//           <span><img src="logo.png" alt="logo" /></span>
//         </section>
//         <section className={styles['services-content-section']}>
//           <ul>
//             <li>Предварителни и осъществими проучвания</li>
//             <li>Подкрепа за развитие</li>
//             <li>Стратегии за слънчева и възобновяема енергия</li>
//             <li>Планиране и инженерно проектиране на нови електроцентрали за самостоятелни слънчеви фотоволтаични системи{/*, както и за съхранение на слънчева енергия и други хибридни решения*/}</li>
//             <li>EPC услуги „до ключ“ (вкл. O&M)</li>
//             <li>Строителни работи (механични, електрически, граждански)</li>
//             <li>Управление на проекти и строителен надзор</li>
//             <li>Процес на тръжни търгове и договорно проектиране (EPC/EPCM, O&M, PPA)</li>
//             <li>Инженерни решения „до ключ“ като SCADA, CMMS, LVRT и CCTV</li>
//             <li>Въвеждане в експлоатация и сертифициране</li>
//             <li>Консултации по PPA</li>
//             <li>Анализ и оптимизация на оперативните показатели</li>
//             <li>Стратегия за експлоатация и поддръжка и оптимизация на оперативните разходи</li>
//             <li>Инспекции с термални дронове</li>
//             <li>Проучвания за обновяване на електроснабдяването</li>
//             <li>Изграждане на капацитет</li>
//           </ul>
//         </section>
//       </section>
//     </section>
//     )
//   }
//   return (
//     <section className={styles["main-services-section"]}>
//       <header className={styles["services-header"]}>
//         <h3>SERVICES</h3>
//       </header>
//       <section className={styles["services-section"]}>
//         <section className={styles["services-info-section"]}>
//           <ul>
//             <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>End-to-End Expertise &mdash; From project design to execution and long-term maintenance.</li>
//             <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Commitment to Quality & Sustainability &mdash; Delivering high-performance, environmentally responsible solutions.</li>
//             <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Proven Track Record &mdash; Successfully executed projects across various scales and regions.</li>
//             <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Innovation & Technology-Driven Approach &mdash; Leveraging the latest advancements in solar and energy storage.</li>
//           </ul>
//           <span><img src="logo.png" alt="logo" /></span>
//         </section>
//         <section className={styles['services-content-section']}>
//           <ul>
//             <li>Pre-feasibility and feasibility studies</li>
//             <li>Development support</li>
//             <li>Solar and renewable energy strategies</li>
//             <li>Planning and engineering design of new power plants for stand-alone solar PV, as well as Solar plus energy storage and other hybrid solutions</li>
//             <li>Turnkey EPC services (incl. O&M)</li>
//             <li>Construction works (Mechanical, Electrical, Civil Works)</li>
//             <li>Project management and construction supervision</li>
//             <li>Bidding process & contractual design (EPC/EPCM, O&M, PPA)</li>
//             <li>Turnkey engineering solutions as SCADA, CMMS, LVRT & CCTV</li>
//             <li>Commissioning and certification</li>
//             <li>PPA advisory</li>
//             <li>Operational performance analysis and optimization</li>
//             <li>O&M strategy and OPEX optimization</li>
//             <li>Thermal drone-enabled inspections</li>
//             <li>Repowering studies</li>
//             <li>Capacity building</li>
//           </ul>
//         </section>
//       </section>
//     </section>
//   );
// }

export default function Dashboard() {
  const { language } = useContext(LanguageContext);
  const t = translations[language]?.dashboard || translations.en.dashboard;

  return (
    <section className={styles["main-services-section"]}>
      <header className={styles["services-header"]}>
        <h2>{t.header}</h2>
      </header>
      <section className={styles["services-section"]}>
        <section className={styles["services-info-section"]}>
          <ul>
            {t.infoList.map((item, i) => (
              <li key={i}>
                <span>
                  <img src="wire-with-leaf.png" alt="wire-img" />
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles["services-content-section"]}>
          <ul>
            {t.contentList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      </section>
              <section className={styles["logo-section"]}>
          <p>
            <span>
              <img src="logo.png" alt="logo" />
            </span>
          </p>
        </section>
    </section>
  );
}

