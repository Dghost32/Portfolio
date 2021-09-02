import React, { useContext } from "react";
import { IoIosOpen, IoLogoGithub, IoMdClose } from "react-icons/io";
import ProjectCardContext from "../context/ProjectModalContext";
import "../styles/ProjectModal.css";
import { Tooltip } from "@material-ui/core";
import { images, projectInfo } from "../types/stateTypes/ProjectModalStates";

const ProjectModal = () => {
  let { projectModalOpen, setProjectModalOpen, currentProject } =
    useContext(ProjectCardContext);

  return (
    <div className={`modal ${projectModalOpen}`}>
      <div className="modal-container">
        <Images prj={currentProject} />
        <ProjectInfo
          prj={currentProject}
          setProjectModalOpen={setProjectModalOpen}
        />
      </div>
    </div>
  );
};

export default ProjectModal;

let Images = ({ prj }: images) => (
  <div
    className="images-container"
    onClick={() => {
      const el = document.querySelector(".images-container");
      el?.classList.toggle("expand");
    }}
  >
    <img src={prj?.imageDesktop} alt={prj?.name + "-desktop"} />
    <img src={prj?.imageIpad} alt={prj?.name + "-ipad"} />
    <img src={prj?.imageMobile} alt={prj?.name + "-mobile"} />
  </div>
);

let ProjectInfo = ({ prj, setProjectModalOpen }: projectInfo) => {
  let techs = prj?.technologies.map((tech, index) => (
    <i className="txt-sm col-dark tech" key={`tech-modal-${index}`}>
      {tech}
    </i>
  ));

  return (
    <div className="project-info">
      <div className="flex jc-sb ai-c">
        <h1 className="txt-sm txt-wb txt-pink">{prj?.name}</h1>
        <div className="techs ">{techs}</div>
      </div>
      <p className="txt-wm">{prj?.description}</p>
      <div className="flex jc-sb ai-c ">
        <div className="flex jc-sb ai-c">
          {prj?.github && (
            <Tooltip title="check source code!">
              <a
                href={prj?.github}
                className="link-btn txt-dark flex jc-sb ai-c"
                target="_blank"
                rel="noreferrer"
              >
                <i className="txt-dark txt-sm">
                  <IoLogoGithub />
                </i>
                <p className="txt-ws">Github</p>
              </a>
            </Tooltip>
          )}
          {prj?.page && (
            <a
              className="txt-dark link-btn flex jc-sb ai-c"
              href={prj?.page}
              target="_blank"
              rel="noreferrer"
            >
              <i className="txt-sm">
                <IoIosOpen />
              </i>
              <p className="txt-ws ">Visit page</p>
            </a>
          )}
        </div>
        <div className="close-btn">
          <i
            className="close-modal txt-sm txt-pink"
            onClick={() => setProjectModalOpen && setProjectModalOpen("hidden")}
          >
            <IoMdClose />
          </i>
        </div>
      </div>
    </div>
  );
};
