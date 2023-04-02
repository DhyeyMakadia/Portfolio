import Head from "next/head";
import React from "react";
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
  return (
    <>
      <Head>
        <title>Dhyey Makadia</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Navbar />
      <SocialMedia />
      <div id="main-container">
        <div className="container">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Portfolio;
