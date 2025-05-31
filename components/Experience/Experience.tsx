import React, { useEffect, useState } from "react";
import { Link } from "../Link";
import { ProfileDetails } from "../../utils/data";

type ExperienceData = {
  displayName: string;
  name: string;
  designation: string;
  website: string;
  duration: string;
  description: string[];
};

export const Experience = () => {
  const [selectedTag, setSelectedTag] = useState<number>(0);
  const [selectedExpData, setSelectedExpData] = useState<ExperienceData | null>(
    null
  );

  const handleTagClick = (name: string, index: number) => {
    setSelectedTag(index);
    const selectedItem = ProfileDetails.Experience.find(
      (item) => item.name === name
    );
    setSelectedExpData(selectedItem ?? null);
  };

  useEffect(() => {
    handleTagClick(ProfileDetails.Experience[0].name, 0);
  }, []);

  return (
    <section id="experiences">
      <h2 className="heading">Education & Experience</h2>
      <div className="experience-container">
        <div className="experience-tag-container">
          {ProfileDetails.Experience.map((item, index) => (
            <button
              key={item.name}
              className={`experience-tag ${
                selectedTag === index ? "active" : ""
              }`}
              onClick={() => handleTagClick(item.name, index)}
            >
              {item.displayName}
            </button>
          ))}
          <div
            id="name-highlight"
            style={{
              transform: `translateY(calc(${selectedTag} * 42px))`,
            }}
          />
        </div>

        <div className="experience-content-container">
          {selectedExpData && (
            <div id="content6" className="experience-content">
              <h3>
                <span>{selectedExpData.designation}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <Link
                    name={selectedExpData.name}
                    url={selectedExpData.website}
                  />
                </span>
              </h3>
              <p className="duration">{selectedExpData.duration}</p>
              <ul className="content-description custom-list-item">
                {selectedExpData.description.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
