import { project } from "../project";

export type projectCardContext = {
  projectCardOpen?: boolean;
  setProjectCardOpen?: Function;
  currentProject?: project | undefined;
  setCurrentProject?: Function;
};
