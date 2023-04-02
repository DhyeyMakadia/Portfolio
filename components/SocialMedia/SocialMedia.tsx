import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
library.add(faInstagram, faGithub, faTwitter, faFacebookF, faLinkedinIn);

export const SocialMedia = () => {
  return (
    <>
      <div className="social-media">
        <ul className="social">
          <li className="instagram">
            <a
              href="https://www.instagram.com/_dhyey_24_/"
              className="social-link group"
              id="ig"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
          </li>
          <li className="github">
            <a
              href="https://github.com/DhyeyMakadia"
              className="social-link group"
              id="git"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
          </li>
          <li className="twitter">
            <a
              href="https://twitter.com/Dhyey_Makadia"
              className="social-link group"
              id="tw"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
          </li>
          <li className="linkedin">
            <a
              href="https://www.linkedin.com/in/dhyey-makadia"
              className="social-link group"
              id="in"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
            </a>
          </li>
          <li className="facebook">
            <a
              href="https://www.facebook.com/dhyey.patel.16503"
              className="social-link group mx-auto"
              id="fb"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="social-icon !w-[15px]"
              />
            </a>
          </li>
        </ul>
        <div className="social-line"></div>
      </div>

      <div className="mail">
        <a href="mailto:dj.makadia24@gmail.com" className="mail-link">
          dj.makadia24@gmail.com
        </a>
        <div className="mail-line"></div>
      </div>
    </>
  );
};
