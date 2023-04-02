import React from "react";
import cx from "classnames";

type Props = {
  url: string;
  name: string;
  className?: string;
};

export function Link(props: Props) {
  const { url, name, className } = props;
  return (
    <a
      href={url}
      className={cx("link", className)}
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </a>
  );
}
