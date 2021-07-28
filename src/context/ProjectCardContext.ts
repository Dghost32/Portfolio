import React, { createContext } from "react";
import { projectCardContext } from "../types/contextTypes/context";

let ProjectCardContext: React.Context<projectCardContext> = createContext({});
export default ProjectCardContext;
