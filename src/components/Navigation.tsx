import React from "react";
import { Dropdown } from "react-bootstrap";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <Dropdown id="navigation">
      <NavButton />
      <NavMenu />
    </Dropdown>
  );
};

export default Navigation;

const NavButton = () => (
  <Dropdown.Toggle id="nav" className="navigation-btn txt-sm txt-dark">
    <NavMenuIcon />
  </Dropdown.Toggle>
);

const NavMenu = () => (
  <Dropdown.Menu
    id="navigation-menu-container"
    className="navigation-menu-container"
  >
    <NavMenuItem to="main-page">
      <p>Main Page</p>
    </NavMenuItem>
    <NavMenuItem to="whoami">
      <p>Whoami</p>
    </NavMenuItem>
    <NavMenuItem to="projects">
      <p>Projects</p>
    </NavMenuItem>
    <NavMenuItem to="skills">
      <p>Skills</p>
    </NavMenuItem>
  </Dropdown.Menu>
);

const NavMenuIcon = () => (
  <>
    <div className="icon"></div>
    <div className="icon"></div>
    <div className="icon"></div>
  </>
);

const NavMenuItem = ({
  to,
  children,
}: {
  to: string;
  children: JSX.Element;
}) => (
  <div
    className="txt-dark navigation-menu-item"
    onClick={() => document.getElementById(to)?.scrollIntoView()}
  >
    {children}
  </div>
);
