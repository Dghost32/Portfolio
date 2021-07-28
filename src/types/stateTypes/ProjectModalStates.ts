import { project } from "../project";

export type projectModalOpenState = [
  projectModalOpen: "shown" | "hidden",
  setProjectModalOpen: Function
];

export type currentProjectState = [
  currentProject: project | undefined,
  setCurrentProject: Function
];
