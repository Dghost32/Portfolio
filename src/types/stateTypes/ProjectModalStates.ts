import { project } from "../project";

export type projectCardOpenState = [
  projectCardOpen: boolean,
  setProjectCardOpen: Function
];

export type currentProjectState = [
  currentProject: project | undefined,
  setCurrentProject: Function
];
