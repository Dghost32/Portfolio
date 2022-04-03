/* icons */
import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs, FaBootstrap } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import {
  DiCss3,
  DiReact,
  DiGitBranch,
  DiLinux,
  DiPhp,
  DiMysql,
  DiMongodb,
} from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiMaterialUi,
  SiJest,
  SiFirebase,
} from "react-icons/si";
/* types */
import skill from "../types/skill";
/* Components */
import Skill from "../components/Skill";

/* Skills array, to add a new skill just need to add a new skill object to this array according to skill's object interface*/
let skills: Array<skill> = [
  {
    name: "React",
    icon: <DiReact />,
    filter: {
      front: 1,
    },
  },
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
    name: "PHP",
    icon: <DiPhp />,
    filter: {
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
    name: "Express",
    icon: <FaNodeJs />,
    filter: {
      back: 1,
    },
  },
  {
    name: "Jest",
    icon: <SiJest />,
    filter: {
      test: 1,
    },
  },
  {
    name: "SQL",
    icon: <DiMysql />,
    filter: {
      db: 1,
    },
  },
  {
    name: "MongoDB",
    icon: <DiMongodb />,
    filter: {
      db: 1,
    },
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    filter: {
      db: 1,
      back: 1,
    },
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    filter: {
      front: 1,
    },
  },
  {
    name: "Material-Ui",
    icon: <SiMaterialUi />,
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
    name: "Linux",
    icon: <DiLinux />,
    filter: {},
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

export let filterSkills = (
  filter: "front" | "back" | "design" | "db" | "test" | undefined
): Array<JSX.Element> => {
  if (!filter)
    return skills.map((skill: skill) => (
      <Skill key={`skill-${skill.name}`} skill={skill} />
    ));
  return skills
    .filter((skill: skill) => skill.filter[filter] === 1)
    .map((skill: skill) => <Skill key={`skill-${skill.name}`} skill={skill} />);
};
