import React, { createContext } from "react";
import { projectModalContext } from "../types/contextTypes/context";

let ProjectModalContext: React.Context<projectModalContext> = createContext({});
export default ProjectModalContext;
