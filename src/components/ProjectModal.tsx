import React, { useContext } from "react";
import { IoIosOpen, IoLogoGithub, IoMdCloseCircle } from "react-icons/io";
import Tooltip from "@material-ui/core/Tooltip";
import ProjectCardContext from "../context/ProjectModalContext";
import "../styles/ProjectModal.css";
import { project } from "../types/project";

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

let Images = ({ prj }: { prj: project | undefined }) => (
  <div className="images-container">
    <img src={prj?.imageDesktop} alt={prj?.name + "-desktop"} />
    <img src={prj?.imageIpad} alt={prj?.name + "-ipad"} />
    <img src={prj?.imageMobile} alt={prj?.name + "-mobile"} />
  </div>
);

let ProjectInfo = ({
  prj,
  setProjectModalOpen,
}: {
  prj: project | undefined;
  setProjectModalOpen: Function | undefined;
}) => {
  let techs = prj?.technologies.map((tech, index) => (
    <i className="txt-sm col-dark tech" key={`tech-modal-${index}`}>
      {tech}
    </i>
  ));

  return (
    <div className="project-info">
      <div className="flex-cols">
        <h1 className="txt-sm txt-wb txt-pink">{prj?.name}</h1>
        <div className="techs ">{techs}</div>
      </div>
      <p className="txt-wm">{prj?.description}</p>
      <div className="flex-cols">
        <div className="flex-cols">
          <Tooltip title="Check source code!">
            <a
              className="btn github-btn"
              href={prj?.github}
              target="_blank"
              rel="noreferrer"
            >
              <i className="txt-dark txt-sm">
                <IoLogoGithub />
              </i>
            </a>
          </Tooltip>
          {prj?.page && (
            <div className="btn visit-page-btn flex-cols">
              <a href={prj?.page} target="_blank" rel="noreferrer">
                <i className="txt-dark txt-sm">
                  <IoIosOpen />
                </i>
              </a>
              <p className="txt-ws">Visit page</p>
            </div>
          )}
        </div>
        <div className="close-btn">
          <i
            className="close-modal txt-sm txt-wm txt-pink"
            onClick={() => setProjectModalOpen && setProjectModalOpen("hidden")}
          >
            <IoMdCloseCircle />
          </i>
        </div>
      </div>
    </div>
  );
};
