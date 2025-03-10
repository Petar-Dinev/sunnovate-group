import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { AiFillTikTok } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={styles["main-footer"]}>
      <div className={styles["social-icons"]}>
        <a
          href="https://www.facebook.com/people/Sunnovate-Group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/sunnovate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://www.linkedin.com/company/sunnovate-group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <AiFillTikTok />
        </a>
        <a
          href="https://x.com/SunnovateGroup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.youtube.com/@sunnovategroup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutubeSquare />
        </a>
      </div>
      <h6>SUNNOVATE GROUP</h6>
      <p>153B Georgi S. Rakovski Str., 1000 Sofia, Bulgaria</p>
      <p>Copyright &copy; 2025 Sunnovate Group - All Rights Reserved.</p>
    </footer>
  );
}
