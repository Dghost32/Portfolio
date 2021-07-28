import React, { useState } from "react";
import { ProjectModalStateProps } from "../types/propTypes/ProjectModalStateProps";
import {
  currentProjectState,
  projectModalOpenState,
} from "../types/stateTypes/ProjectModalStates";
import ProjectModalContext from "./ProjectModalContext";

const ProjectModalState = ({ children }: ProjectModalStateProps) => {
  const [projectModalOpen, setProjectModalOpen]: projectModalOpenState =
    useState("hidden");
  const [currentProject, setCurrentProject]: currentProjectState =
    useState(undefined);

  return (
    <ProjectModalContext.Provider
      value={{
        projectModalOpen,
        setProjectModalOpen,
        currentProject,
        setCurrentProject,
      }}
    >
      {children}
    </ProjectModalContext.Provider>
  );
};

export default ProjectModalState;
