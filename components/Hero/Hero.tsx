import React from "react";
import { Button } from "../Button";
import { Link } from "../Link";

export const Hero = () => {
  const post = "Developer";
  const companyLink = "#";
  const companyName = "Tatvasoft";
  const Resume = () => {
    window.open("https://drive.google.com/file/d/1zEWSLL2iScegkHwC4fc7w-_-Bc3KWTxa/view?usp=sharing", "_blank")
    // window.open("/assets/DhyeyMakadia_Resume.pdf", "_blank");
    null;
  };
  return (
    <section id="hero" className="container">
      <div className="content-box">
        <div className="font-mono text-green mb-2.5">Hi, my name is</div>
        <div>
          <h1 className="name">Dhyey Makadia</h1>
        </div>
        <div className="designation">I am a {post}</div>
        <div className="max-w-[555px] text-md leading-[1.3] md:text-lg">
          I am a software engineer and highly passionate about programming,
          logic building & web development. Currently, I'm enrolled for
          developing web techs at&nbsp;
          <Link url={companyLink} name={companyName} />.
        </div>
        <div>
          <Button onClick={Resume} text="Resume" className="mt-5" />
        </div>
      </div>
    </section>
  );
};
