import React, { useEffect, useState } from "react";
import { Link } from "../Link";

export const Experience = () => {
  const [selectedTag, setSelectedTag] = useState<number>(0);
  useEffect(() => {
    const highlighter = document.getElementById("name-highlight");
    highlighter
      ? (highlighter.style.transform = `translateY(calc(${selectedTag} * 42px))`)
      : null;
  }, [selectedTag]);

  return (
    <section id="experiences">
      <h2 className="heading">Education & Experience</h2>
      <div className="experience-container">
        <div className="experience-tag-container">
          {/* TODO: Pass Index value of map function in set method */}
          <button className="experience-tag" onClick={()=>setSelectedTag(0)}>Tatvasoft</button>
          <button className="experience-tag" onClick={()=>setSelectedTag(1)}>Brainy Beams</button>
          <button className="experience-tag" onClick={()=>setSelectedTag(2)}>CreArt</button>
          <button className="experience-tag" onClick={()=>setSelectedTag(3)}>LJIET</button>
          <button className="experience-tag" onClick={()=>setSelectedTag(4)}>Dream</button>
          <button className="experience-tag" onClick={()=>setSelectedTag(5)}>Delta</button>
          <div id="name-highlight" data-target="3"></div>
        </div>
        {/* TODO: Just change the variable data to display according to the selection */}
        <div className="experience-content-container">
          <div id="content6" className="experience-content">
            <h3>
              <span>Developer</span>
              <span className="company">
                &nbsp;@&nbsp;
                <Link name="Tatvasoft" url="#" />
              </span>
            </h3>
            <p className="duration">Nov 2021 - Present</p>
            <ul className="content-description custom-list-item">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, distinctio temporibus eius reiciendis iste asperiores.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, distinctio temporibus eius reiciendis iste asperiores.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, distinctio temporibus eius reiciendis iste asperiores.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
