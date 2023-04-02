import React, { useEffect, useRef, useState } from "react";
import { SideBar } from "../SideBar";
import { BrandLogo } from "./BrandLogo";
import { HamBurger } from "./HamBurger";
import cx from "classnames";

type scrollPosType = {
  previous: number;
  current: number;
};

export const Navbar = () => {
  const previousScrollPos = useRef(0)
  const [navbarStyle, setNavbarStyle] = useState<string>('')
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);

  function handleScroll() {
    let currentScrollPos = window.pageYOffset
    if (currentScrollPos!== 0) {
      setNavbarStyle('hanging-navbar')
    } else {
      setNavbarStyle('')
    }
    if (previousScrollPos.current >= currentScrollPos) {
      setIsNavbarVisible(true)
    } else {
      setIsNavbarVisible(false)
    }
    previousScrollPos.current = currentScrollPos
  };

  useEffect(() => {
    previousScrollPos.current = window.pageYOffset
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navbar = isNavbarVisible ? "!top-0" : "!-top-[100px]"
  return (
    <header
      className={cx("header", navbar, navbarStyle )}
    >
      <nav className="navbar-main">
        <div className="logo">
          <a href="/" className="">
            <BrandLogo />
          </a>
        </div>
        <HamBurger />

        <ul className="md:flex flex-row items-center hidden">
          <li className="">
            <a
              href="/"
              className="before:content-['01.'] nav-link leading-[1.3]"
            >
              About
            </a>
          </li>
          <li className="">
            <a
              href="/"
              className="before:content-['02.'] nav-link leading-[1.3]"
            >
              Experiences
            </a>
          </li>
          <li className="">
            <a
              href="/"
              className="before:content-['03.'] nav-link leading-[1.3]"
            >
              Work
            </a>
          </li>
          <li className="">
            <a
              href="/"
              className="before:content-['04.'] nav-link leading-[1.3]"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
