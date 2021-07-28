import { project } from "../project";

export type projectModalContext = {
  projectModalOpen?: "shown" | "hidden";
  setProjectModalOpen?: Function;
  currentProject?: project | undefined;
  setCurrentProject?: Function;
};
