import React from "react";
import skillIconProps from "../types/propTypes/SkillIconProps";
import "../styles/Skill.css";

let Skill = ({ skill }: skillIconProps) => (
  <div className="skill">
    <i className="skill-icon txt-dark">{skill.icon}</i>
    <h1 className="txt-dark txt-ws skill-name">{skill.name}</h1>
  </div>
);

export default Skill;
