import React, { useContext, useEffect } from "react";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { SocialMedia } from "../components/SocialMedia";
import { MainContext } from "../context/main";

const Portfolio = () => {
  const {
    scrollSectionId,
    setScrollSectionId,
    sidebarVisible,
    setSidebarVisible,
  } = useContext(MainContext);

  useEffect(() => {
    if (scrollSectionId) {
      const element = document.getElementById(scrollSectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      if (sidebarVisible) {
        setSidebarVisible(false);
      }
      setScrollSectionId("");
    }
  }, [scrollSectionId]);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};
export default Portfolio;
