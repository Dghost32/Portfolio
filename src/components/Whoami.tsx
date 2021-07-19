import React from "react";
import "../styles/WhoamiS.css";

const Whoami = () => {
  return (
    <div id="whoami" className="whoami-container">
      <Content />
      <div className="bottom-ball"></div>
    </div>
  );
};

export default Whoami;

const Content = () => (
  <div className="whoami-content">
    <h1 className="txt-sb txt-wb txt-pink">WHOAMI</h1>
    <p className="txt-wm">
      I’m a fifth semester systems engineering student at the national
      university of Colombia, passionate about web development, especially on
      front-end and UI/UX design. I'm currently looking for the right
      opportunity to work in an environment that will help me progress in a
      Front-End developer role.{" "}
    </p>
    <div className="hobies">
      <p className="txt-wb">hobies:</p>
      <div className="hobies-two txt-ws">
        <p>Videogames</p>
        <p>Music</p>
        <p>Sports</p>
        <p>Draw</p>
      </div>
    </div>
  </div>
);
