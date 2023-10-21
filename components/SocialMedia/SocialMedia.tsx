import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcon from "./SocialMediaIcon";
library.add(faInstagram, faGithub, faTwitter, faFacebookF, faLinkedinIn);

export const SocialMedia = () => {
  return (
    <>
      <div className="social-media">
        <ul className="social">
          <SocialMediaIcon
            avatar={faInstagram}
            link="https://www.instagram.com/_dhyey_24_/"
          />
          <SocialMediaIcon
            avatar={faGithub}
            link="https://github.com/DhyeyMakadia"
          />
          <SocialMediaIcon
            avatar={faTwitter}
            link="https://twitter.com/Dhyey_Makadia"
          />
          <SocialMediaIcon
            avatar={faLinkedinIn}
            link="https://www.linkedin.com/in/dhyey-makadia"
          />
          <SocialMediaIcon
            avatar={faFacebookF}
            link="https://www.facebook.com/dhyey.patel.16503"
            className="mx-auto"
            avatarClassName="!w-[15px]"
          />
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
