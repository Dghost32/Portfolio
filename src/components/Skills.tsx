import React, { useState, useEffect, ReactElement } from "react";
/* Data */
import skillFilters, { translateFilter } from "../data/skillFilters";
import { filterSkills } from "../data/skills";
/* Types */
import { appliedFilter, skillsList } from "../types/stateTypes/SkillsStates";
/* Css */
import "../styles/Skills.css";

const Skills = () => {
  const [appliedFilter, setAppliedFilter]: appliedFilter = useState(undefined);
  const [skillsList, setSkillsList]: skillsList = useState([]);

  useEffect(() => {
    setSkillsList(filterSkills(appliedFilter));
  }, [appliedFilter]);

  let toggleActiveFilter = (sf?: string): void => {
    /* removes current */
    document
      .getElementById(`filter-${translateFilter(appliedFilter)}`)
      ?.classList.remove("filter-active");
    /* adds new one */
    document.getElementById(`filter-${sf}`)?.classList.add("filter-active");
  };

  let handleFilterClick = (skillFilter: string): void => {
    skillFilter === "All"
      ? setAppliedFilter(undefined)
      : setAppliedFilter(translateFilter(skillFilter));
    toggleActiveFilter(skillFilter);
  };

  let filters: Array<ReactElement> = skillFilters.map(
    (skillFilter: string, index: number): ReactElement => (
      <p
        key={`${index}-${skillFilter}`}
        id={"filter-" + skillFilter}
        className={`txt-wb txt-light filter ${
          skillFilter === "All" ? "filter-active" : ""
        }`}
        onClick={(e: React.MouseEvent<HTMLParagraphElement>) =>
          handleFilterClick(e.currentTarget.id.split("-")[1])
        }
      >
        {skillFilter}
      </p>
    ),
  );

  return (
    <div id="skills" className="page skills">
      <div className="section">
        <h1 className="txt-sb txt-wb txt-pink">Skills</h1>
        <p className="txt-ss txt-wm txt-dark">
          In this section you can see the technologies i’ve worked with.
        </p>
      </div>

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
