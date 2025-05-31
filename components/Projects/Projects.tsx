import React, { useMemo } from "react";
import { Button } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { externalLinkIcon, githubIcon } from "../../utils/icons";
import Link from "next/link";
import { Routes } from "../../utils/routes";
import FeaturedProjects from "./FeaturedProjects";
import { ProfileDetails } from "@/utils/data";
library.add(faFolder, faArrowUpRightFromSquare, faGithub);

export const Projects = () => {
  const featuredProjects = useMemo(
    () => ProfileDetails.Projects.filter((project) => project.featured),
    []
  );
  return (
    <>
      <section
        id="work"
        className="container flex flex-col justify-center py-10 lg:py-12"
      >
        <h2 className="heading mb-5">Some Work I have done</h2>
        <FeaturedProjects projects={featuredProjects} />
      </section>
      <section className="container flex flex-col justify-center py-10 lg:py-12">
        <h2 className="font-semibold text-slate-lightest text-[clamp(26px,5vw,28px)] text-center">
          Other Noteworthy Projects
        </h2>
        <div className="text-center mb-10">
          <Link href={Routes.Archive} legacyBehavior>
            <span className="link text-sm !lowercase">view the archive</span>
          </Link>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="project">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <FontAwesomeIcon icon={faFolder} />
                  </div>
                  <div className="project-links">
                    <a href="#">{githubIcon}</a>
                    <a href="#">{externalLinkIcon}</a>
                  </div>
                </div>
                <h3 className="project-title">News App</h3>
                <div className="project-description">
                  In Helperland, Service providers (Cleaners) can register
                  themselves for providing services through the portal. Users
                  can book the service requests for cleaning and get the job
                  done by one of the service providers.
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  <li>tech1</li>
                  <li>tech2</li>
                  <li>tech3</li>
                </ul>
              </footer>
            </div>
          </li>
          <li className="project">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <FontAwesomeIcon icon={faFolder} />
                  </div>
                  <div className="project-links">
                    <a href="#">{githubIcon}</a>
                    <a href="#">{externalLinkIcon}</a>
                  </div>
                </div>
                <h3 className="project-title">News App</h3>
                <div className="project-description">
                  In Helperland, Service providers (Cleaners) can register
                  themselves for providing services through the portal. Users
                  can book the service requests for cleaning and get the job
                  done by one of the service providers.
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  <li>tech1</li>
                  <li>tech2</li>
                  <li>tech3</li>
                </ul>
              </footer>
            </div>
          </li>
          <li className="project">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <FontAwesomeIcon icon={faFolder} />
                  </div>
                  <div className="project-links">
                    <a href="#">{githubIcon}</a>
                    <a href="#">{externalLinkIcon}</a>
                  </div>
                </div>
                <h3 className="project-title">News App</h3>
                <div className="project-description">
                  In Helperland, Service providers (Cleaners) can register
                  themselves for providing services through the portal. Users
                  can book the service requests for cleaning and get the job
                  done by one of the service providers.
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  <li>tech1</li>
                  <li>tech2</li>
                  <li>tech3</li>
                </ul>
              </footer>
            </div>
          </li>
          <li className="project">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <FontAwesomeIcon icon={faFolder} />
                  </div>
                  <div className="project-links">
                    <a href="#">{githubIcon}</a>
                    <a href="#">{externalLinkIcon}</a>
                  </div>
                </div>
                <h3 className="project-title">News App</h3>
                <div className="project-description">
                  In Helperland, Service providers (Cleaners) can register
                  themselves for providing services through the portal. Users
                  can book the service requests for cleaning and get the job
                  done by one of the service providers.
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  <li>tech1</li>
                  <li>tech2</li>
                  <li>tech3</li>
                </ul>
              </footer>
            </div>
          </li>
          <li className="project">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <FontAwesomeIcon icon={faFolder} />
                  </div>
                  <div className="project-links">
                    <a href="#">{githubIcon}</a>
                    <a href="#">{externalLinkIcon}</a>
                  </div>
                </div>
                <h3 className="project-title">News App</h3>
                <div className="project-description">
                  In Helperland, Service providers (Cleaners) can register
                  themselves for providing services through the portal. Users
                  can book the service requests for cleaning and get the job
                  done by one of the service providers.
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  <li>tech1</li>
                  <li>tech2</li>
                  <li>tech3</li>
                </ul>
              </footer>
            </div>
          </li>
        </ul>
        <div className="text-center w-100 mt-10">
          <Button
            //   text= {showMore ? "Show Less" : "Show More"}
            text="Show More"
            onClick={() => null}
            className="morepro"
          />
        </div>
      </section>
    </>
  );
};
