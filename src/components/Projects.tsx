import React from "react";
import "../styles/ProjectsS.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-content">
        <h1 className="txt-pink txt-sb txt-wb"> PROJECTS</h1>
        <p className="txt-ss txt-wm txt-light">
          Here you can see some of my projects, hope you like them!
        </p>

        <div className="projects-cards-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
