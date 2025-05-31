import React, { useContext, useEffect, useRef, useState } from "react";
import { HamBurger } from "./HamBurger";
import cx from "classnames";
import { BrandLogo } from "../../utils/icons";
import { MainContext } from "../../context/main";
import Link from "next/link";
import { Routes } from "../../utils/routes";

export const Navbar = () => {
  const previousScrollPos = useRef(0);
  const [navbarStyle, setNavbarStyle] = useState<string>("");
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const { handleNavClick } = useContext(MainContext);

  function handleScroll() {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos !== 0) {
      setNavbarStyle("hanging-navbar");
    } else {
      setNavbarStyle("");
    }
    if (previousScrollPos.current >= currentScrollPos) {
      setIsNavbarVisible(true);
    } else {
      setIsNavbarVisible(false);
    }
    previousScrollPos.current = currentScrollPos;
  }

  useEffect(() => {
    previousScrollPos.current = window.pageYOffset;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbar = isNavbarVisible ? "!top-0" : "!-top-[100px]";

  return (
    <header className={cx("header", navbar, navbarStyle)}>
      <nav className="navbar-main">
        <div className="logo">
          <Link href={Routes.Home}>{BrandLogo}</Link>
        </div>
        <HamBurger />

        <ul className="md:flex flex-row items-center hidden">
          <li className="">
            <button
              onClick={() => handleNavClick("about")}
              className="before:content-['01.'] nav-link leading-[1.3]"
            >
              About
            </button>
          </li>
          <li className="">
            <button
              onClick={() => handleNavClick("experiences")}
              className="before:content-['02.'] nav-link leading-[1.3]"
            >
              Experiences
            </button>
          </li>
          <li className="">
            <button
              onClick={() => handleNavClick("work")}
              className="before:content-['03.'] nav-link leading-[1.3]"
            >
              Work
            </button>
          </li>
          <li className="">
            <button
              onClick={() => handleNavClick("contact")}
              className="before:content-['04.'] nav-link leading-[1.3]"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
