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
      <Navbar />
      <SocialMedia />
      <div id="main-container">
        <div className="container flex flex-col !min-h-screen">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <div className="grow"></div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Portfolio;
