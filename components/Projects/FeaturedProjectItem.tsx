import { externalLinkIcon, githubIcon } from "@/utils/icons";
import React from "react";

type Props = {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  externalLink?: string;
};

const FeaturedProjectItem: React.FC<Props> = ({
  title,
  description,
  technologies,
  githubLink,
  externalLink,
}) => {
  return (
    <li className="featured-project-list-item group">
      <div className="featured-project-content">
        <p className="text-green text-xs mb-1">Featured Project</p>
        <h3 className="featured-project-title">
          <a href={externalLink ?? "#"}>{title}</a>
        </h3>
        <div className="featured-project-description">
          <p>{description}</p>
        </div>
        <ul className="featured-project-techlist">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="featured-project-links">
          {githubLink && <a href={githubLink}>{githubIcon}</a>}
          {externalLink && <a href={externalLink}>{externalLinkIcon}</a>}
        </div>
      </div>
      <div className="featured-project-image lg:cover">
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
    </li>
  );
};

export default FeaturedProjectItem;
