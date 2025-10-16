import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../contexts/languageContext";

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
  const { language } = useContext(LanguageContext)
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

  if (language == 'bg') {
    return (<section className={styles["home-section"]}>
      <section className={styles["main-logo-section"]}>
        <img className={styles['home-page-logo-img']} src={images[index]} alt="home-page-logo" />
        <section className={styles["home-img-overlay"]}>
          <Link className={styles["contract-link"]} to="contacts">
            Свържете се с нас
          </Link>
        </section>
      </section>
      <section className={styles["home-content-section"]}>
        <h2>Предимства на партньорството с нас и партньорства</h2>
        <h3>Предимства от партньорството с нас</h3>
        <ul>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Доверен дългосрочен партньор, визионер на стратегията, доставчик на първокласни услуги, специализирана поддръжка на клиенти и услуги след инсталация. Прозрачна комуникация и клиентоориентиран подход във всеки проект. Ангажимент за изграждане на трайни взаимоотношения, основани на доверие, производителност и споделени цели за устойчивост. Насочване към по-малък брой клиенти, предоставящи първокласни услуги.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Доказан опит в областта на възобновяемата енергия. Богат опит в проектирането, разработването и изграждането на проекти за слънчева енергия. Екип от висококвалифицирани инженери, ръководители на проекти и консултанти с дълбоки познания в индустрията. Съответствие с международните стандарти (ISO 9001, 14001, 45001), гарантиращи качество, безопасност и екологична отговорност.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>EPC услуги „до ключ“ и персонализирани решения. Пълномащабни инженерни, строителни и строителни (EPC) услуги, елиминиращи необходимостта от множество изпълнители. Индивидуални решения за комунални, търговски и промишлени (C&I) и хибридни соларни проекти. Гъвкави и мащабируеми проекти, отговарящи на специфичните нужди на клиента и условията на обекта.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Авангардни технологии и иновации. Интеграция на усъвършенствани слънчеви модули, инвертори и системи за съхранение на енергия за максимална ефективност. Използване на мониторинг в реално време, управление на енергията, управлявано от изкуствен интелект, и прогнозен анализ за подобряване на производителността. Внедряване на интелигентни мрежи и хибридни енергийни решения за осигуряване на енергийна надеждност и спестяване на разходи.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Рентабилни и високопроизводителни системи. Силните взаимоотношения с доставчиците осигуряват конкурентни цени и висококачествени материали. Оптимизация на системната ефективност за постигане на най-висока енергийна производителност и възвръщаемост на инвестициите (ROI). Дългосрочни услуги за експлоатация и поддръжка (O&M) за максимизиране на жизнения цикъл на системата и минимизиране на времето за престой.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Ангажимент за устойчивост и съответствие с ESG стандартите. Принос за намаляване на въглеродния отпечатък чрез подкрепа на прехода към чиста енергия. Спазване на екологичните, социалните и управленските (ESG) стандарти. Подкрепа за клиентите при постигане на цели за нулеви нетни емисии и изпълнение на корпоративните ангажименти за устойчивост.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Безпроблемно изпълнение на проекти и смекчаване на риска. Обширен опит в регулаторните одобрения, издаването на разрешителни и поддръжката на присъединяване към мрежата. Надеждна рамка за управление на проекти осигуряваща навременно изпълнение и контрол на бюджета. Стратегии за оценка и смекчаване на риска за справяне със сложността и несигурността на проекта.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Силна индустриална мрежа и партньорства. Сътрудничество с водещи доставчици на технологии, финансови институции и заинтересовани страни в енергийния сектор. Достъп до иновативни модели на финансиране (споразумения за покупко-продажба на електроенергия, лизинг и инвестиционни възможности). Стратегически съюзи с политици и лидери в индустрията, за да се изпревари регулаторната тенденция.</li>
        </ul>
        <h3>Партньорства</h3>
        <ul>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span><p>Sunnovate подписа меморандум за разбирателство с Habitat Global Foundation за проучване на възможностите за интегриране на модулна изчислителна инфраструктура в слънчеви проекти, превръщайки излишната възобновяема енергия в дигитален капацитет. Сътрудничеството съчетава експертизата в областта на енергийните и производствените разходи (EPC) с модела на Habitat, за да се осигурят напълно оптимизирани обекти за възобновяема енергия от следващо поколение. За да научите повече натиснете<a className={styles['external-link']} href="https://medium.com/@habitatfoundation/habitat-global-foundation-signs-mou-with-sunnovate-eood-21e6bcc96d36" target="_blank" rel="noopener noreferrer">тук.</a></p></li>
        </ul>
        <span className={styles['logo-span']}><img src="" alt="" /></span>
      </section>
      <section className={styles["founder-info"]}>
        <h2>Опит на екипа и резюме</h2>
        <section className={styles["founder-img-section"]}>
          <img
            className={styles["founder-img"]}
            src="Valentin-4x5.jpg"
            alt="founder"
          />
        </section>
        <section className={styles["founder-info-section"]}>
          <h4>Валентин Господинов</h4>
          <h5>Основател и Главен Изпълнителен Директор</h5>
          <p>
            Визионерски лидер и специалист по възобновяема енергия с 10 години опит в управлението на проекти, снабдяването, оценката на разходите и цялостни операции в секторите на фотоволтаичните (PV) системи и системите за съхранение на енергия от батерии (BESS).{" "}
          </p>
          {showMore && (
            <p className={styles["extra-text"]}>
              Доказан опит в изпълнението на мащабни проекти за слънчева енергия в Европа, Близкия изток и САЩ. Като основател на <strong>Sunnovate Group</strong>, ангажиран с насърчаването на иновации, устойчивост и оперативно съвършенство в решенията за възобновяема енергия. Умел в стратегическото планиране, договарянето на договори, управлението на веригата за доставки и екипното ръководство, с фокус върху предоставянето на висококачествени, мащабируеми и устойчиви енергийни решения.
            </p>
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            className={styles["toggle-btn"]}
          >
            {showMore ? "- Покажи По-малко" : "+ Покажи Още"}
          </button>
        </section>
      </section>
      <section className={styles["video-section"]}>
        <video className={styles["background-video"]} autoPlay loop muted playsInline>
          <source src="video-slide2.mp4" type="video/mp4" />
          Вашият браузър не поддържа видео тага.
        </video>
      </section>

    </section>)
  }

  if (language == 'it') {
    return (
      <section className={styles["home-section"]}>
        <section className={styles["main-logo-section"]}>
          <img className={styles['home-page-logo-img']} src={images[index]} alt="home-page-logo" />
          <section className={styles["home-img-overlay"]}>
            <Link className={styles["contract-link"]} to="contacts">
              CONTATTACI
            </Link>
          </section>
        </section>
        <section className={styles["home-content-section"]}>
          <h2>Vantaggi della collaborazione con noi e partnership</h2>
          <h3>Vantaggi della collaborazione con noi</h3>
          <ul>
            <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Un partner affidabile a lungo termine, visionario nella strategia, fornitore di servizi premium, con assistenza clienti dedicata e servizi post-installazione. Comunicazione trasparente
              e un approccio incentrato sul cliente in ogni progetto. Impegno a costruire relazioni durature basate su fiducia, performance e obiettivi di sostenibilità
              condivisi. Rivolto a un numero ridotto di clienti che forniscono servizi premium.</li>
            <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Comprovata competenza nelle energie rinnovabili. Vasta esperienza nella progettazione, sviluppo e costruzione di progetti di energia solare. Un team di ingegneri, project manager e consulenti altamente qualificati con una profonda conoscenza del settore. Conformità agli standard internazionali (ISO 9001, 14001, 45001) a garanzia di
              qualità, sicurezza e responsabilità ambientale.</li>
            <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Soluzioni EPC chiavi in mano e personalizzate. Servizi completi di ingegneria, approvvigionamento e costruzione (EPC), eliminando la necessità di più appaltatori.
              Soluzioni su misura per progetti solari su scala industriale, commerciale e industriale (C&I) e ibridi. Progetti flessibili e scalabili per soddisfare le esigenze specifiche del cliente
              e le condizioni del sito.</li>
            <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Tecnologia e innovazione all'avanguardia Integrazione di moduli solari avanzati, inverter e sistemi di accumulo di energia per la massima efficienza. Utilizzo di monitoraggio in tempo reale, gestione energetica basata sull'intelligenza artificiale e analisi predittiva per migliorare le prestazioni. Implementazione di soluzioni di smart grid e di energia ibrida per garantire affidabilità energetica e risparmi sui costi.</li>
            <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Sistemi convenienti e ad alte prestazioni. Solidi rapporti con i fornitori garantiscono prezzi competitivi e materiali di alta qualità. Ottimizzazione dell'efficienza del sistema per garantire il massimo rendimento energetico e ritorno sull'investimento (ROI). Servizi di gestione e manutenzione (O&M) a lungo termine per massimizzare la durata del sistema e ridurre al minimo i tempi di fermo.</li>
            <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Impegno per la sostenibilità e conformità ESG. Contributo alla riduzione dell'impronta di carbonio supportando la transizione verso l'energia pulita. Conformità agli standard ambientali, sociali e di governance (ESG). Supporto ai clienti nel raggiungimento degli obiettivi di zero emissioni nette e nel rispetto degli impegni aziendali in materia di sostenibilità.</li>
            <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Esecuzione impeccabile del progetto e mitigazione del rischio. Vasta esperienza in approvazioni normative, autorizzazioni e supporto per la connessione alla rete. Solido framework di gestione del progetto che garantisce la consegna puntuale e il controllo del budget. Strategie di valutazione e mitigazione del rischio per gestire le complessità e le incertezze del progetto.</li>
            <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Solida rete di partnership e partnership industriali. Collaborazione con i principali fornitori di tecnologia, istituzioni finanziarie e stakeholder del settore energetico. Accesso a modelli di finanziamento innovativi (PPA, leasing e opportunità di investimento). Alleanze strategiche con decisori politici e leader del settore per anticipare le tendenze normative.</li>
          </ul>
          <h3>Partnership</h3>
          <ul>
            <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span><p>Sunnovate ha firmato un protocollo d'intesa con Habitat Global Foundation per esplorare l'integrazione di infrastrutture di elaborazione modulare all'interno di progetti solari, trasformando l'energia rinnovabile in eccesso in capacità digitale. La collaborazione unisce l'esperienza degli EPC con il modello di Habitat per realizzare siti rinnovabili di nuova generazione, completamente ottimizzati. Per saperne di più clicca<a className={styles['external-link']} href="https://medium.com/@habitatfoundation/habitat-global-foundation-signs-mou-with-sunnovate-eood-21e6bcc96d36" target="_blank" rel="noopener noreferrer">qui.</a></p></li>
          </ul>
          <span className={styles['logo-span']}><img src="" alt="" /></span>
        </section>
        <section className={styles["founder-info"]}>
          <h2>Esperienza di squadra e riepilogo esecutivo</h2>
          <section className={styles["founder-img-section"]}>
            <img
              className={styles["founder-img"]}
              src="Valentin-4x5.jpg"
              alt="founder"
            />
          </section>
          <section className={styles["founder-info-section"]}>
            <h4>Valentin Gospodinov</h4>
            <h5>Fondatore e CEO</h5>
            <p>
              Leader visionario e specialista in energie rinnovabili con 10 anni
              di esperienza nella gestione di progetti, approvvigionamento, stima dei costi e
              operazioni chiavi in mano nei settori del fotovoltaico (FV) e dei sistemi di accumulo di energia a batteria (BESS).{" "}
            </p>
            {showMore && (
              <p className={styles["extra-text"]}>
                Esperienza comprovata nella realizzazione di progetti di energia solare su larga scala
                in Europa, Medio Oriente e Stati Uniti. In qualità di
                fondatore di <strong>Sunnovate Group</strong>, impegnato a promuovere
                innovazione, sostenibilità ed eccellenza operativa nelle
                soluzioni per le energie rinnovabili. Esperto in pianificazione strategica,
                negoziazioni contrattuali, gestione della supply chain e leadership di team, con particolare attenzione alla fornitura di soluzioni energetiche di alto valore, scalabili e
                sostenibili.
              </p>
            )}
            <button
              onClick={() => setShowMore(!showMore)}
              className={styles["toggle-btn"]}
            >
              {showMore ? "- Mostra Meno" : "+ Mostra Altro"}
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
        <h2>Benefits of partnering with us and partnerships</h2>
        <h3>Benefits of partnering with us</h3>
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
            lifespan and minimize downtime.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Commitment to Sustainability & ESG Compliance Contribution to carbon footprint reduction by supporting the transition to clean energy. Compliance with
            environmental, social, and governance (ESG) standards. Support for clients in achieving net-zero goals and fulfilling corporate sustainability commitments.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Seamless Project Execution & Risk Mitigation Extensive experience in regulatory approvals, permitting, and grid connection support. Robust project
            management framework ensuring timely delivery and budget control. Risk assessment and mitigation strategies to handle project complexities and
            uncertainties.</li>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span>Strong Industry Network & Partnerships Collaboration with leading technology providers, financial institutions, and energy stakeholders. Access to innovative
            financing models (PPAs, leasing, and investment opportunities). Strategic alliances with policy makers and industry leaders to stay ahead of regulatory trends.</li>
        </ul>
        <h3>Partnerships</h3>
        <ul>
          <li><span><img src="wire-with-leaf.png" alt="wire-img" /></span><p>Sunnovate has signed an MoU with Habitat Global Foundation to explore integrating modular compute infrastructure within solar projects, turning surplus renewable energy into digital capacity. The collaboration combines EPC expertise with Habitat’s model to deliver next-generation, fully optimized renewable sites. To learn more click<a className={styles['external-link']} href="https://medium.com/@habitatfoundation/habitat-global-foundation-signs-mou-with-sunnovate-eood-21e6bcc96d36" target="_blank" rel="noopener noreferrer">here.</a></p></li>
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
