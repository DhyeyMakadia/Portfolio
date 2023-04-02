import React from "react";
import cx from "classnames";

type Props = {
  onClick: () => void;
  className: string;
  text: string;
};

export const Button = (props: Props) => {
  const { text, className, onClick } = props;
  return (
    <button type="button" className={cx("btn", className)} onClick={onClick}>
      {text}
    </button>
  );
};
