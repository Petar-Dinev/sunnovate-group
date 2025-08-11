import { useContext } from "react";
import styles from "./AboutUs.module.css";
import { LanguageContext } from "../../contexts/languageContext";
import { translations } from "../../translations";

export default function AboutUs() {
  const { language } = useContext(LanguageContext);

  if (language == 'bg') {
    return (
      <section className={styles["about-section"]}>
        <section className={styles['company-info-section']}>
          <h2>За Sunnovate</h2>
          <h4>Кои сме ние</h4>
          <p>
            Sunnovate е водеща компания в сектора на
            <strong>инженеринга, доставките и строителството на възобновяема енергия</strong>,
            специализирана в разработката и изпълнението на
            <strong>проекти за фотоволтаични електроцентрали и системи за съхранение на енергия в батерии</strong>.
            С ангажимент към <strong>иновации, устойчивост и оперативно съвършенство</strong>,
            ние предлагаме цялостни решения „до ключ“ и висока гъвкавост при реализирането на проекти.
          </p>
          <h4>Нашата мисия</h4>
          <p>
            <em>"Да дадем сила на устойчивото бъдеще чрез иновативни решения за възобновяема енергия."</em>
            Стремим се да ускорим <strong>глобалния енергиен преход</strong>,
            като доставяме <strong>високоефективни соларни системи</strong>,
            които са рентабилни, мащабируеми и екологично отговорни.
          </p>
          <h4>Нашата визия</h4>
          <p>
            Да бъдем доверен лидер във възобновяемата енергия, който стимулира иновациите и създава трайна стойност за партньори и общности.
            Ангажирани сме към устойчивост, надеждност и предоставяне на висококачествени услуги с професионализъм и доверие.
          </p>
          <h4>Нашите основни ценности</h4>
          <ul>
            <li>
              <span className={styles['bullet-span']}><img src="wire-with-leaf.png" alt="wire-img" /></span>
              <strong>Ориентиран към клиента подход и отдаденост</strong>
            </li>
            <li>Персонализираме решенията според енергийните нужди и бизнес целите на клиентите ни.</li>
            <li>
              <span className={styles['bullet-span']}><img src="wire-with-leaf.png" alt="wire-img" /></span>
              <strong>Интегритет</strong>
            </li>
            <li>Изграждаме дългосрочни отношения, основани на прозрачност, етика и доверие.</li>
            <li>
              <span className={styles['bullet-span']}><img src="wire-with-leaf.png" alt="wire-img" /></span>
              <strong>Надеждност</strong>
            </li>
            <li>Доставяме проекти с най-високи стандарти за качество, безопасност и прецизност.</li>
            <li>
              <span className={styles['bullet-span']}><img src="wire-with-leaf.png" alt="wire-img" /></span>
              <strong>Иновации</strong>
            </li>
            <li>Приемаме най-новите технологии за подобряване на ефективността и производителността.</li>
            <li>
              <span className={styles['bullet-span']}><img src="wire-with-leaf.png" alt="wire-img" /></span>
              <strong>Устойчивост</strong>
            </li>
            <li>Посветени сме на намаляване на въглеродния отпечатък в света чрез чистоенергийни решения.</li>
          </ul>
          <span className={styles['logo-span']}><img src="logo.png" alt="logo-img" /></span>
        </section>
      </section>

    )
  }

  if (language == 'it') {
    return (
      <section className={styles["about-section"]} >
        <section className={styles['company-info-section']}>
          <h2>Chi è Sunnovate</h2>
          <h4>Chi siamo</h4>
          <p>
            Sunnovate è un'azienda leader nel settore <strong>dell'ingegneria, fornitura e costruzione di fonti di energia rinnovabile</strong>, specializzata nello sviluppo e nell'implementazione di <strong>progetti per impianti fotovoltaici e sistemi di accumulo di energia a batterie</strong>. Con un impegno verso <strong>innovazione, sostenibilità ed eccellenza operativa</strong>, forniamo soluzioni complete e flessibilità nella realizzazione dei progetti.
          </p>

          <h4>La nostra missione</h4>
          <p>
            <em>"Creare un futuro sostenibile attraverso soluzioni innovative per l'energia rinnovabile."</em> Ci impegniamo ad accelerare <strong>la transizione energetica globale</strong> fornendo <strong>sistemi solari ad alta efficienza</strong> che siano economicamente vantaggiosi, scalabili e rispettosi dell'ambiente.
          </p>

          <h4>La nostra visione</h4>
          <p>
            Essere un leader di fiducia nel campo delle energie rinnovabili, guidando l'innovazione e creando valore a lungo termine per partner e comunità. Ci dedichiamo alla sostenibilità, all'affidabilità e alla fornitura di servizi di alta qualità con precisione e fiducia eccezionali.
          </p>

          <h4>I nostri valori fondamentali</h4>
          <ul>
            <li>
              <span className={styles['bullet-span']}><img src="wire-with-leaf.png" alt="wire-img" /></span>
              <strong>Approccio orientato al cliente & Impegno</strong>
            </li>
            <li>Offriamo soluzioni personalizzate in base alle esigenze energetiche e agli obiettivi aziendali dei nostri clienti.</li>

            <li>
              <span className={styles['bullet-span']}><img src="wire-with-leaf.png" alt="wire-img" /></span>
              <strong>Integrità</strong>
            </li>
            <li>Costruiamo relazioni a lungo termine basate su trasparenza, etica e fiducia.</li>

            <li>
              <span className={styles['bullet-span']}><img src="wire-with-leaf.png" alt="wire-img" /></span>
              <strong>Affidabilità</strong>
            </li>
            <li>Realizziamo progetti secondo i più alti standard di qualità, sicurezza e precisione.</li>

            <li>
              <span className={styles['bullet-span']}><img src="wire-with-leaf.png" alt="wire-img" /></span>
              <strong>Innovazione</strong>
            </li>
            <li>Adottiamo le tecnologie più avanzate per migliorare l'efficienza e le prestazioni.</li>

            <li>
              <span className={styles['bullet-span']}><img src="wire-with-leaf.png" alt="wire-img" /></span>
              <strong>Sostenibilità</strong>
            </li>
            <li>Ci impegniamo a ridurre l'impronta di carbonio attraverso soluzioni di energia pulita.</li>
          </ul>

          <span className={styles['logo-span']}><img src="logo.png" alt="logo-img" /></span>
        </section>
      </section>
    )
  }

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

