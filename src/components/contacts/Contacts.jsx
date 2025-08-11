import {
  FaAddressBook,
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaInstagramSquare,
  FaLinkedin,
  FaPhone,
  FaYoutubeSquare,
} from "react-icons/fa";
import styles from "./Contacts.module.css";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useContext, useState } from "react";
import emailjs from 'emailjs-com';
import { LanguageContext } from "../../contexts/languageContext";

export default function Contacts() {
  const { language } = useContext(LanguageContext)
  const [isSending, setIsSending] = useState(false);
  const [formValues, setformValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    description: ''
  })
  const onChangeHandler = (e) => {
    setformValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValues);
    emailjs
      .sendForm('service_3srbkks', 'template_1wofwj7', e.target, 'BLIGMLydgYMdwdCdt')
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setIsSending(true);
          setformValues({
            name: '',
            email: '',
            phone: '',
            address: '',
            description: ''
          });
          setTimeout(() => {
            setIsSending(false);
          }, 3000);
        },
        (error) => {
          console.error('Error sending email:', error.text);
        }
      );
  }
  if (language == 'bg') {
    return (
      <section className={styles["contacts-section"]}>
        <p>Свържете се с нас</p>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/people/Sunnovate-Group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/sunnovate/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/sunnovate-group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTikTok />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/SunnovateGroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@sunnovategroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutubeSquare />
            </a>
          </li>
        </ul>
        <p>СВЪРЖЕТЕ СЕ С НАС</p>
        <section className={styles["main-form-section"]}>
          <section className={styles["form-section"]}>
            <h4>Форма за запитване</h4>
            {isSending &&
              <section className={styles["success-message-section"]}>
                <p className={styles["success-message"]}>Email has been sent successfully!</p>
              </section>
            }
            <form onSubmit={submitHandler}>
              <input type="text" name="name" id="name" placeholder="Име" value={formValues.name} onChange={onChangeHandler} />
              <input type="email" name="email" id="email" placeholder="Емайл" value={formValues.email} onChange={onChangeHandler} />
              <input type="number" name="phone" id="phone" placeholder="Телефон" value={formValues.phone} onChange={onChangeHandler} />
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Адрес (Улица, Град, Пощенски код)"
                value={formValues.address}
                onChange={onChangeHandler}
              />
              <textarea
                name="description"
                id="description"
                placeholder="Споделете с нас подробности за това, което търсите, и ние ще се свържем с вас с оферта."
                value={formValues.description}
                onChange={onChangeHandler}
              ></textarea>

              <button>И З П Р А Т И</button>
            </form>
            <p>
              Този сайт е защитен от reCAPTCHA и се прилагат Политиката за поверителност на Google и Общите условия.
            </p>
          </section>
          <section className={styles["form-info-section"]}>
            <h4>Ангажимент към нашите клиенти и партньори</h4>
            <ul>
              <li>
                <b>Клиенто-Центрични Решения</b>: Ние приоритизираме вашите уникални нужди и цели, предоставяйки персонализирани решения, които водят до стойност, ефективност и дългосрочен успех.
              </li>
              <li>
                <b>Доверие и Прозрачност</b>: Изграждаме трайни партньорства чрез открита комуникация, надеждност и ангажимент за изпълнение на нашите обещания.
              </li>
              <li>
                <b>Споделен Успех</b>: Вашият растеж е наш приоритет. Работим съвместно, за да постигнем взаимен успех, като гарантираме, че всеки проект е в съответствие с вашата визия и цели.
              </li>
            </ul>
            <h4>Sunnovate Group</h4>
            <p className={styles["contact-p"]}>
              <FaPhone />{" "}
              <span className={styles["contact-span"]}>+359 88 334 1444</span>
            </p>
            <p className={styles["contact-p"]}>
              <FaEnvelope />{" "}
              <span className={styles["contact-span"]}>
                partners@sunnovate-group.com
              </span>
            </p>
            <p className={styles["contact-p"]}>
              <FaAddressBook />{" "}
              <span className={styles["contact-span"]}>
                153B ул. Георги С. Раковски, 1000 София, България
              </span>
            </p>
            <p className={styles["contact-p"]}>
              <FaGlobe />{" "}
              <span className={styles["contact-span"]}>
                www.sunnovate-group.com
              </span>
            </p>
          </section>
        </section>
        <section className={styles["google-map-section"]}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2932.612834308989!2d23.3242733!3d42.6907429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8572ce9345fd%3A0xe1a00f8d097475c!2z0KHQvtGE0LjRjyDRhtC10L3RgtGK0YAsINGD0LsuIOKAntCT0LXQvtGA0LPQuCDQoS4g0KDQsNC60L7QstGB0LrQuOKAnCAxNTPQkCwgMTAwMCDQodC-0YTQuNGP!5e0!3m2!1sbg!2sbg!4v1741619967964!5m2!1sbg!2sbg"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    );
  }

  if (language == 'it') {
    return (
      <section className={styles["contacts-section"]}>
        <p>Connettiti con noi</p>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/people/Sunnovate-Group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/sunnovate/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/sunnovate-group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTikTok />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/SunnovateGroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@sunnovategroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutubeSquare />
            </a>
          </li>
        </ul>
        <p>CONTATTACI</p>
        <section className={styles["main-form-section"]}>
          <section className={styles["form-section"]}>
            <h4>Modulo di richiesta</h4>
            {isSending &&
              <section className={styles["success-message-section"]}>
                <p className={styles["success-message"]}>Email inviata con successo!</p>
              </section>
            }
            <form onSubmit={submitHandler}>
              <input type="text" name="name" id="name" placeholder="Nome" value={formValues.name} onChange={onChangeHandler} />
              <input type="email" name="email" id="email" placeholder="Email" value={formValues.email} onChange={onChangeHandler} />
              <input type="number" name="phone" id="phone" placeholder="Telefono" value={formValues.phone} onChange={onChangeHandler} />
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Indirizzo (Via, Città, CAP)"
                value={formValues.address}
                onChange={onChangeHandler}
              />
              <textarea
                name="description"
                id="description"
                placeholder="Facci sapere i dettagli di ciò che stai cercando e ti contatteremo con un preventivo."
                value={formValues.description}
                onChange={onChangeHandler}
              ></textarea>

              <button>INVIA</button>
            </form>
            <p>
              Questo sito è protetto da reCAPTCHA e si applicano la Privacy Policy di Google e i Termini di servizio.
            </p>
          </section>
          <section className={styles["form-info-section"]}>
            <h4>Impegno verso i nostri clienti e partner</h4>
            <ul>
              <li>
                <b>Soluzioni orientate al cliente</b>: diamo priorità alle tue esigenze e obiettivi unici, fornendo soluzioni su misura che generano valore, efficienza e successo a lungo termine.
              </li>
              <li>
                <b>Fiducia e trasparenza</b>: costruiamo partnership durature attraverso una comunicazione aperta, affidabilità e un impegno a mantenere le nostre promesse.
              </li>
              <li>
                <b>Successo condiviso</b>: la tua crescita è la nostra priorità. Lavoriamo insieme per raggiungere un successo reciproco, assicurandoci che ogni progetto sia in linea con la tua visione e i tuoi obiettivi.
              </li>
            </ul>
            <h4>Sunnovate Group</h4>
            <p className={styles["contact-p"]}>
              <FaPhone />{" "}
              <span className={styles["contact-span"]}>+359 88 334 1444</span>
            </p>
            <p className={styles["contact-p"]}>
              <FaEnvelope />{" "}
              <span className={styles["contact-span"]}>
                partners@sunnovate-group.com
              </span>
            </p>
            <p className={styles["contact-p"]}>
              <FaAddressBook />{" "}
              <span className={styles["contact-span"]}>
                153B Georgi S. Rakovski Str., 1000 Sofia, Bulgaria
              </span>
            </p>
            <p className={styles["contact-p"]}>
              <FaGlobe />{" "}
              <span className={styles["contact-span"]}>
                www.sunnovate-group.com
              </span>
            </p>
          </section>
        </section>
        <section className={styles["google-map-section"]}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2932.612834308989!2d23.3242733!3d42.6907429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8572ce9345fd%3A0xe1a00f8d097475c!2z0KHQvtGE0LjRjyDRhtC10L3RgtGK0YAsINGD0LsuIOKAntCT0LXQvtGA0LPQuCDQoS4g0KDQsNC60L7QstGB0LrQuOKAnCAxNTPQkCwgMTAwMCDQodC-0YTQuNGP!5e0!3m2!1sbg!2sbg!4v1741619967964!5m2!1sbg!2sbg"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    );
  }

  return (
    <section className={styles["contacts-section"]}>
      <p>Connect With Us</p>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/people/Sunnovate-Group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/sunnovate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/sunnovate-group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTikTok />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/SunnovateGroup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@sunnovategroup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutubeSquare />
          </a>
        </li>
      </ul>
      <p>CONTACT US</p>
      <section className={styles["main-form-section"]}>
        <section className={styles["form-section"]}>
          <h4>Enquiry form</h4>
          {isSending &&
            <section className={styles["success-message-section"]}>
              <p className={styles["success-message"]}>Email has been sent successfully!</p>
            </section>
          }
          <form onSubmit={submitHandler}>
            <input type="text" name="name" id="name" placeholder="Name" value={formValues.name} onChange={onChangeHandler} />
            <input type="email" name="email" id="email" placeholder="Email*" value={formValues.email} onChange={onChangeHandler} />
            <input type="number" name="phone" id="phone" placeholder="Phone" value={formValues.phone} onChange={onChangeHandler} />
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address (Street, City, Zip Code)"
              value={formValues.address}
              onChange={onChangeHandler}
            />
            <textarea
              name="description"
              id="description"
              placeholder="Let us know the details of what you are looking for, and we'll contact you with a quote."
              value={formValues.description}
              onChange={onChangeHandler}
            ></textarea>

            <button>S E N D</button>
          </form>
          <p>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </section>
        <section className={styles["form-info-section"]}>
          <h4>Commitment to Our Clients and Partners</h4>
          <ul>
            <li>
              <b>Client-Centric Solutions</b>: We prioritize your unique needs
              and goals, delivering tailored solutions that drive value,
              efficiency, and long-term success.
            </li>
            <li>
              <b>Trust and Transparency</b>: We build lasting partnerships
              through open communication, reliability, and a commitment to
              delivering on our promises.
            </li>
            <li>
              <b>Shared Success</b>: Your growth is our priority. We work
              collaboratively to achieve mutual success, ensuring every project
              aligns with your vision and objectives.
            </li>
          </ul>
          <h4>Sunnovate Group</h4>
          <p className={styles["contact-p"]}>
            <FaPhone />{" "}
            <span className={styles["contact-span"]}>+359 88 334 1444</span>
          </p>
          <p className={styles["contact-p"]}>
            <FaEnvelope />{" "}
            <span className={styles["contact-span"]}>
              partners@sunnovate-group.com
            </span>
          </p>
          <p className={styles["contact-p"]}>
            <FaAddressBook />{" "}
            <span className={styles["contact-span"]}>
              153B Georgi S. Rakovski Str., 1000 Sofia, Bulgaria
            </span>
          </p>
          <p className={styles["contact-p"]}>
            <FaGlobe />{" "}
            <span className={styles["contact-span"]}>
              www.sunnovate-group.com
            </span>
          </p>
        </section>
      </section>
      <section className={styles["google-map-section"]}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2932.612834308989!2d23.3242733!3d42.6907429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8572ce9345fd%3A0xe1a00f8d097475c!2z0KHQvtGE0LjRjyDRhtC10L3RgtGK0YAsINGD0LsuIOKAntCT0LXQvtGA0LPQuCDQoS4g0KDQsNC60L7QstGB0LrQuOKAnCAxNTPQkCwgMTAwMCDQodC-0YTQuNGP!5e0!3m2!1sbg!2sbg!4v1741619967964!5m2!1sbg!2sbg"
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </section>
  );
}
