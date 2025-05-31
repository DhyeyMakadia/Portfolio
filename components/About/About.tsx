import React from "react";
import { Link } from "../Link";
import { ProfileDetails } from "../../utils/data";

export const About = () => {
  return (
    <section
      id="about"
      className="container flex flex-col justify-center !max-w-[1000px]"
    >
      <h2 className="heading"> About Me</h2>
      <div className="lg:grid grid-flow-col gap-10 mt-4">
        <div className="lg:col-span-2">
          <div className="about-description">
            <p>
              Hello! My name is Dhyey, a developer focused on crafting great web
              experiences. Developing software that empowers people to make a
              difference is my passion. I love to create web apps that would
              make life easy, accessible and enjoyable for people.
            </p>
            <p>
              I have recently completed my Bachelor's Degree in Computer
              Engineering from&nbsp;
              <Link
                url={ProfileDetails.college.collegeLink}
                name={ProfileDetails.college.name}
              />
              . My main focus these days is building exquisite web experiences
              at&nbsp;
              <Link
                url={ProfileDetails.currentOrganization.companyLink}
                name={ProfileDetails.currentOrganization.name}
              />
              .
            </p>
            <p>
              I am always looking for opportunities enabling me to learn
              exciting technologies to boost my passion for programming.
            </p>
          </div>
          <div>
            <p className="mb-1">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="custom-list-item columns-2">
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>

              <li>Node.js</li>
              <li>Nest.js</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
        <div className="py-5 lg:py-0 px-5">
          <div className="wrapper custom-img-border cover mx-auto mt-4">
            <img src="assets/images/about-02.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
