import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import cx from "classnames";

type Props = {
  link: string;
  avatar: any;
  className?: string;
  avatarClassName?: string;
};

const SocialMediaIcon: FC<Props> = ({
  link,
  avatar,
  className,
  avatarClassName,
}) => {
  return (
    <li>
      <a
        href={link}
        className={cx("social-link group", className)}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={avatar}
          className={cx("social-icon", avatarClassName)}
        />
      </a>
    </li>
  );
};

export default SocialMediaIcon;
