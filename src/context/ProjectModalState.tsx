import React, { useState } from "react";
import {
  currentProjectState,
  projectCardOpenState,
} from "../types/stateTypes/ProjectModalStates";
import ProjectCardContext from "./ProjectCardContext";

const ProjectModalState = ({ children }: { children: React.ReactChildren }) => {
  const [projectCardOpen, setProjectCardOpen]: projectCardOpenState =
    useState(false);
  const [currentProject, setCurrentProject]: currentProjectState =
    useState(undefined);

  return (
    <ProjectCardContext.Provider
      value={{
        projectCardOpen,
        setProjectCardOpen,
        currentProject,
        setCurrentProject,
      }}
    >
      {children}
    </ProjectCardContext.Provider>
  );
};

export default ProjectModalState;
