import { Projects } from "@/services/types/projects";
import React from "react";
import FeaturedProjectItem from "./FeaturedProjectItem";

type Props = {
  projects: Array<Projects>;
};

const FeaturedProjects: React.FC<Props> = ({ projects }) => {
  return (
    <div className="featured-project">
      <ul className="max-w-[1000px]">
        {projects.map((project) => (
          <FeaturedProjectItem
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            externalLink={project.externalLink}
          />
        ))}
      </ul>
    </div>
  );
};

export default FeaturedProjects;
