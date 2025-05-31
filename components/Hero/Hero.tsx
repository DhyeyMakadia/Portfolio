import React from "react";
import { Button } from "../Button";
import { Link } from "../Link";
import { ProfileDetails } from "../../utils/data";

export const Hero = () => {
  const Resume = () => {
    window.open(ProfileDetails.links.RESUME, "_blank");
    // window.open("/assets/DhyeyMakadia_Resume.pdf", "_blank");
  };
  return (
    <section id="hero" className="container">
      <div className="content-box">
        <div className="font-mono text-green mb-2.5">Hi, my name is</div>
        <div>
          <h1 className="name">Dhyey Makadia</h1>
        </div>
        <div className="designation">I am a Developer</div>
        <div className="max-w-[555px] text-md leading-[1.3] md:text-lg">
          I am a software engineer and highly passionate about programming,
          logic building & web development. Currently, I'm enrolled for
          developing web techs at&nbsp;
          <Link
            url={ProfileDetails.currentOrganization.companyLink}
            name={ProfileDetails.currentOrganization.name}
          />
          .
        </div>
        <div>
          <Button onClick={Resume} text="Resume" className="mt-5" />
        </div>
      </div>
    </section>
  );
};
