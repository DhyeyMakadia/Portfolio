import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { githubForkIcon, githubStarIcon } from "../../utils/icons";

export const Footer = () => {
  return (
    <footer id="footer" className="py-4">
      <div className="block md:hidden">
        <ul className="flex justify-center gap-4">
          <li>
            <a
              href="https://www.instagram.com/_dhyey_24_/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="footer-social-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dhyey-makadia"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="footer-social-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DhyeyMakadia"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
            >
              <FontAwesomeIcon icon={faGithub} className="footer-social-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Dhyey_Makadia"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="footer-social-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/dhyey.patel.16503"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="footer-social-icon !w-[12px]"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <a href="https://github.com/DhyeyMakadia" className="footer-content">
          Designed and Built by Dhyey Makadia
          <div className="git-stats">
            <span>
              {githubStarIcon}
              <span>100</span>
            </span>
            <span>
              {githubForkIcon}
              <span>5</span>
            </span>
          </div>
        </a>
      </div>
    </footer>
  );
};
