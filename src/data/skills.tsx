/* icons */
import { AiFillHtml5 } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaNodeJs, FaBootstrap } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { DiCss3, DiReact, DiGitBranch } from "react-icons/di";
import { SiJavascript, SiTypescript, SiMaterialUi } from "react-icons/si";
/* types */
import skill from "../types/skill";

/* Skills array, to add a new skill just need to add a new skill object to this array according to skill's object interface*/
let skills: Array<skill> = [
  {
    name: "Html",
    icon: <AiFillHtml5 />,
    filter: {
      front: 1,
      back: 0,
      design: 0,
    },
  },
  {
    name: "Css",
    icon: <DiCss3 />,
    filter: {
      front: 1,
    },
  },
  {
    name: "Javascript",
    icon: <SiJavascript />,
    filter: {
      front: 1,
      back: 1,
    },
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
    filter: {
      front: 1,
      back: 1,
    },
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    filter: {
      back: 1,
    },
  },
  {
    name: "React",
    icon: <DiReact />,
    filter: {
      front: 1,
    },
  },
  {
    name: "Git",
    icon: <DiGitBranch />,
    filter: {},
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    filter: {},
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    filter: {
      design: 1,
    },
  },
  {
    name: "Material-Ui",
    icon: <SiMaterialUi />,
    filter: {
      design: 1,
    },
  },
  {
    name: "Figma",
    icon: <FiFigma />,
    filter: {
      design: 1,
    },
  },
];

export default skills;
