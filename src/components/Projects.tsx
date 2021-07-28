import React from "react";
import projects from "../data/projects";
import "../styles/Projects.css";
import { project } from "../types/project";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  let ProjectsList: Array<JSX.Element> = [];
  projects.forEach((prj: project) =>
    ProjectsList.push(
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
        <div className="projects-cards-container">{ProjectsList}</div>
      </div>
    </div>
  );
};

export default Projects;
