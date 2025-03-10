import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import styles from "./Contacts.module.css";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Contacts() {
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
          <form>
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email*" />
            <input type="number" name="phone" id="phone" placeholder="Phone" />
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address (Street, City, Zip Code)"
            />
            <textarea
              name="description"
              id="description"
              placeholder="Let us know the details of what you are looking for, and we'll contact you with a quote."
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
          <p>153B Georgi S. Rakovski Str., 1000 Sofia, Bulgaria</p>
          <p>Partners@sunnovate-group.com</p>
        </section>
      </section>
    </section>
  );
}
