import React from "react";
/* components */
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
/* data */
import projects from "../data/projects";
/* types */
import { project } from "../types/project";
/* style */
import "../styles/Projects.css";

const Projects = () => {
  let projectCards: Array<JSX.Element> = [];
  projects.forEach((prj: project) =>
    projectCards.push(
      <ProjectCard
        key={`prj-${prj.name}`}
        prj={prj}
        id={`prj-${prj.name.toLowerCase()}`}
      />
    )
  );

  return (
    <div id="projects" className="page projects">
      <div className="projects-content">
        <h1 className="txt-pink txt-sb txt-wb"> PROJECTS</h1>
        <p className="txt-ss txt-wm txt-light">
          Here you can see some of my projects, hope you like them!
        </p>
        <div className="projects-cards-container">{projectCards}</div>
      </div>
      <ProjectModal />
    </div>
  );
};

export default Projects;
