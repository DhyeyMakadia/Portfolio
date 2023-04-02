import React, { useEffect, useState } from "react";
import cx from "classnames";

type ISideBarProps = {
  isOpen: boolean;
};

export const SideBar = (props: ISideBarProps) => {
  const { isOpen } = props;

  return (
    <aside id="mobile-menu" className={cx(isOpen && "active")}>
      <div className="w-full">
        <div className="sidebar-link-container">
          <a
            className="sidebar-link before:content-['01.']"
            // onClick={() => handleScroll("about", "mobileView")}
          >
            About
          </a>
          <a
            className="sidebar-link before:content-['02.']"
            // onClick={() => handleScroll("experiences", "mobileView")}
          >
            Experiences
          </a>
          <a
            className="sidebar-link before:content-['03.']"
            // onClick={() => handleScroll("work", "mobileView")}
          >
            Work
          </a>
          <a
            className="sidebar-link before:content-['04.']"
            // onClick={() => handleScroll("contact", "mobileView")}
          >
            Contact
          </a>
        </div>
      </div>
    </aside>
  );
};
