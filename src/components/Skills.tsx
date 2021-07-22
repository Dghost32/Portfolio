import React, { useState, useEffect } from "react";
/* Components */
import Skill from "./Skill";
/* Data */
import skillFilters, { translateFilter } from "../data/skillFilters";
import skills from "../data/skills";
/* Types */
import skill from "../types/skill";
import { appliedFilter, skillsList } from "../types/stateTypes/SkillsStates";
/* Css */
import "../styles/Skills.css";

const Skills = () => {
  const [appliedFilter, setAppliedFilter]: appliedFilter = useState(undefined);
  const [skillsList, setSkillsList]: skillsList = useState([]);

  useEffect(() => {
    filterSkills();
  }, [appliedFilter]);

  let addActiveFilter = (sf?: string) => {
    document
      .getElementById(`filter${translateFilter(appliedFilter)}`)
      ?.classList.remove("filter-active");

    document.getElementById(`filter${sf}`)?.classList.add("filter-active");
  };

  let filterSkills = () => {
    !appliedFilter
      ? setSkillsList(
          skills.map((skill: skill) => (
            <Skill key={`skill-${skill.name}`} skill={skill} />
          ))
        )
      : setSkillsList(
          skills
            .filter((skill: skill) => skill.filter[appliedFilter] === 1)
            .map((skill: skill) => (
              <Skill key={`skill-${skill.name}`} skill={skill} />
            ))
        );
  };

  let handleFilterClick = (sf: string) => {
    sf === "All"
      ? setAppliedFilter(undefined)
      : setAppliedFilter(translateFilter(sf));
    addActiveFilter(sf);
  };

  let filters = skillFilters.map((sf: string, index: number) => (
    <p
      key={`${index}-${sf}`}
      id={"filter" + sf}
      className={`txt-ws txt-light filter ${sf === "All" && "filter-active"}`}
      onClick={(ev: React.MouseEvent<HTMLParagraphElement>) =>
        handleFilterClick(ev.currentTarget.innerText)
      }
    >
      {sf}
    </p>
  ));

  return (
    <div id="skills" className="skills-container">
      {/* lEFT  */}
      <div className="section">
        <h1 className="txt-sb txt-wb txt-pink">Skills</h1>
        <p className="txt-ss txt-wm txt-dark">
          In this section you can see the technologies i’ve worked with.
        </p>
      </div>
      {/* RIGHT */}
      <div className="section">
        <div className="skills-box">
          <div className="filters">{filters}</div>
          <div className="skills-elements-container">{skillsList}</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
