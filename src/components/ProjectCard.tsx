import "../styles/ProjectCard.css";
import { IoIosArrowDropdown } from "react-icons/io";
import { projectCardProps } from "../types/propTypes/ProjectCardProps";

const ProjectCard = ({ prj, id }: projectCardProps) => {
  /* show card info only on hover */
  document.getElementById(id)?.addEventListener("mouseenter", () => {
    Array.from(document.getElementsByClassName(`project-info-${id}`)).forEach(
      (el) => {
        el.classList.remove("no-hover");
        el.classList.add("hover");
      }
    );
  });
  document.getElementById(id)?.addEventListener("mouseleave", () => {
    Array.from(document.getElementsByClassName(`project-info-${id}`)).forEach(
      (el) => {
        el.classList.remove("hover");
        el.classList.add("no-hover");
      }
    );
  });

  let techs = prj.technologies.map((tech) => (
    <i className="txt-ss txt-dark tech">{tech}</i>
  ));

  return (
    <div id={id} className="project-card">
      <img src={prj.imageIpad} alt={prj.name} className="background-img" />
      <div className={`getup no-hover project-info-${id} technologies`}>
        {techs}
      </div>
      <h1 className="getup txt-ss">{prj.name}</h1>
      <div className="getup learn-more">
        <p className="txt-wb txt-light">Learn more </p>
        <i className="txt-pink txt-ss leran-more-arrow">
          <IoIosArrowDropdown />
        </i>
      </div>
    </div>
  );
};

export default ProjectCard;
