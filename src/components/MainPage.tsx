import React from "react";
/* Components */
import Tooltip from "@material-ui/core/Tooltip";
/* Styles */
import "../styles/MainPage.css";
/* icons */
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsChevronDoubleDown } from "react-icons/bs";
import Particles from "./Particles";

const MainPage = () => {
  return (
    <div id="main-page" className="page main">
      <Particles c="#ffffff" n={25} />
      <MyInfo />
      <Socials />
      <GoDownArrow />
    </div>
  );
};
export default MainPage;

const MyInfo = () => (
  <>
    <span className="txt-sm txt-ws txt-light">Hi, i'm</span>
    <div className="txt-sb txt-wb">
      <span className="txt-light"> &lt; </span>
      <span className="txt-pink">Carlos </span>
      <span className="txt-light">Jimenez</span>
      <span className="txt-pink"> /&gt;</span>
    </div>
    <span className="txt-ss txt-ws txt-light">Jr Fullstack Developer</span>
  </>
);

const Socials = () => (
  <div className="txt-light txt-sb socials">
    <Tooltip title="Github">
      <a
        aria-label="github"
        href="https://github.com/Dghost32"
        rel="noreferrer"
        target="_blank"
      >
        <i className="socials-icon">
          <FiGithub />
        </i>
      </a>
    </Tooltip>
    <Tooltip title="LinkedIn">
      <a
        aria-label="Linked-in"
        href="https://www.linkedin.com/in/carlos-mauricio-jimenez-camargo-b82924207/"
        rel="noreferrer"
        target="_blank"
      >
        <i className="socials-icon">
          <FaLinkedinIn />
        </i>
      </a>
    </Tooltip>
    <Tooltip title="Whatsapp">
      <a
        aria-label="Whatsapp"
        href="https://wa.me/+573016244869"
        rel="noreferrer"
        target="_blank"
      >
        <i className="socials-icon" aria-label="whatsapp">
          <AiOutlineWhatsApp />
        </i>
      </a>
    </Tooltip>
  </div>
);

const GoDownArrow = () => (
  <div className="triangle">
    <div className="down-arrow-container">
      <i
        className="txt-dark txt-sm txt-wb down-arrow"
        onClick={() => document.getElementById("whoami")?.scrollIntoView()}
      >
        <BsChevronDoubleDown />
      </i>
    </div>
  </div>
);
