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
import { ProfileDetails } from "../../utils/data";
library.add(faInstagram, faGithub, faTwitter, faFacebookF, faLinkedinIn);

export const SocialMedia = () => {
  return (
    <>
      <div className="social-media">
        <ul className="social">
          <SocialMediaIcon
            avatar={faLinkedinIn}
            link={ProfileDetails.links.LINKEDIN}
          />
          <SocialMediaIcon
            avatar={faGithub}
            link={ProfileDetails.links.GITHUB}
          />
          <SocialMediaIcon
            avatar={faInstagram}
            link={ProfileDetails.links.INSTAGRAM}
          />
          <SocialMediaIcon
            avatar={faTwitter}
            link={ProfileDetails.links.TWITTER}
          />
          <SocialMediaIcon
            avatar={faFacebookF}
            link={ProfileDetails.links.FACEBOOK}
            className="mx-auto"
            avatarClassName="!w-[15px]"
          />
        </ul>
        <div className="social-line"></div>
      </div>

      <div className="mail">
        <a href={`mailto:${ProfileDetails.personal.EMAIL}`} className="mail-link">
          {ProfileDetails.personal.EMAIL}
        </a>
        <div className="mail-line"></div>
      </div>
    </>
  );
};
