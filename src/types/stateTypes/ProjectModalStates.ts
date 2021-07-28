import { project } from "../project";

export type projectModalOpenState = [
  projectModalOpen: "shown" | "hidden",
  setProjectModalOpen: Function
];

export type currentProjectState = [
  currentProject: project | undefined,
  setCurrentProject: Function
];

export type images = { prj: project | undefined };

export type projectInfo = {
  prj: project | undefined;
  setProjectModalOpen: Function | undefined;
};
