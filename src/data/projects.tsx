import { FaReact } from "react-icons/fa";
import {
  SiFirebase,
  SiJavascript,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { project } from "../types/project";

let projects: Map<string, project> = new Map();
projects.set("todo", {
  name: "TODO",
  description: "lorem ipsum blabla bla",
  github: "https://github.com/Dghost32/todo",
  page: "https://todo-dghost32.netlify.app",
  imageDesktop: "./images/project-images/todo/todo-desktop.png",
  imageIpad: "./images/project-images/todo/todo-ipad.png",
  imageMobile: "./images/project-images/todo/todo-mobile.png",
  technologies: [<FaReact />, <SiTypescript />],
});

projects.set("redboard", {
  name: "RedBoard",
  description: "lorem ipsum blabla bla",
  github: "https://github.com/Dghost32/red-board",
  imageDesktop: "./images/project-images/redboard/redboard-desktop.png",
  imageIpad: "./images/project-images/redboard/redboard-ipad.png",
  imageMobile: "./images/project-images/redboard/redboard-mobile.png",
  technologies: [<FaReact />, <SiTypescript />, <SiFirebase />],
});

projects.set("confusion", {
  name: "Confusion",
  description: "lorem ipsum blabla bla",
  github: "https://github.com/Dghost32/confusion-react",
  page: "https://confusion-carlos-jimenez.netlify.app",
  imageDesktop: "./images/project-images/confusion/confusion-desktop.png",
  imageIpad: "./images/project-images/confusion/confusion-ipad.png",
  imageMobile: "./images/project-images/confusion/confusion-mobile.png",
  technologies: [<FaReact />, <SiJavascript />, <SiRedux />],
});

projects.set("portfolio", {
  name: "Portfolio",
  description: "lorem ipsum blabla bla",
  github: "https://github.com/Dghost32/portfolio",
  page: "https://carlosjimenez.netlify.app",
  imageDesktop: "./images/project-images/portfolio/portfolio-desktop.png",
  imageIpad: "./images/project-images/portfolio/portfolio-ipad.png",
  imageMobile: "./images/project-images/portfolio/portfolio-mobile.png",
  technologies: [<FaReact />, <SiTypescript />],
});

export default projects;
