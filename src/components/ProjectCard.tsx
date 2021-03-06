import React, { useContext } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { projectCardProps } from "../types/propTypes/ProjectCardProps";
import ProjectModalContext from "../context/ProjectModalContext";
/* types */
import { project } from "../types/project";
/* styles */
import "../styles/ProjectCard.css";

const ProjectCard = ({ prj, id }: projectCardProps) => {
  let { setProjectModalOpen, setCurrentProject } =
    useContext(ProjectModalContext);

  let handleClick = (prj: project) => {
    setCurrentProject && setCurrentProject(prj);
    setProjectModalOpen && setProjectModalOpen("shown");
  };

  return (
    <div id={id} className="project-card">
      <img src={prj.imageIpad} alt={prj.name} className="background-img" />
      <h1 className="txt-ss txt-light">{prj.name}</h1>
      <div className="learn-more" onClick={() => handleClick(prj)}>
        <p className="txt-wb txt-light">Learn more </p>
        <i className="txt-pink txt-ss leran-more-arrow">
          <IoIosArrowDropdown />
        </i>
      </div>
    </div>
  );
};

export default ProjectCard;
