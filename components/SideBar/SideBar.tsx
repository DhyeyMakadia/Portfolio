import React, { useContext, useEffect, useState } from "react";
import cx from "classnames";
import { MainContext } from "../../context/main";

export const SideBar = () => {
  const { sidebarVisible, handleNavClick } = useContext(MainContext);

  return (
    <aside id="mobile-menu" className={cx(sidebarVisible && "active")}>
      <div className="w-full">
        <div className="sidebar-link-container">
          <a
            className="sidebar-link before:content-['01.']"
            onClick={() => handleNavClick("about")}
          >
            About
          </a>
          <a
            className="sidebar-link before:content-['02.']"
            onClick={() => handleNavClick("experiences")}
          >
            Experiences
          </a>
          <a
            className="sidebar-link before:content-['03.']"
            onClick={() => handleNavClick("work")}
          >
            Work
          </a>
          <a
            className="sidebar-link before:content-['04.']"
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </aside>
  );
};
