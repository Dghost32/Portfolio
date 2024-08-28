import React from "react";
import "../styles/Whoami.css";

const Whoami = () => {
  return (
    <div id="whoami" className="page whoami">
      <UpperWave />
      <Content />
    </div>
  );
};

export default Whoami;

const UpperWave = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="upper-wave"
    viewBox="0 0 1440 320"
  >
    <path
      fill="#1a1a1a"
      fillOpacity="1"
      d="M0,0L480,0C96,0,192,0,288,0.7C384,85,480,171,576,186.7C672,203,768,149,864,106.7C960,64,1056,32,1152,37.3C1248,43,1344,85,1392,106.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    ></path>
  </svg>
);

const Content = () => (
  <div className="whoami-content">
    <h1 className="txt-sb txt-wb txt-pink">Who am i</h1>
    <p className="txt-ss txt-dark">
      I'm a Full-Stack Software Engineer proficient in creating robust and
      scalable web and mobile applications. With a strong foundation in
      <strong> TypeScript</strong>, and <strong> React</strong>. My expertise
      extends to back-end development using <strong> Express.js</strong>,
      <strong> MySQL</strong>, <strong> RESTful APIs</strong>, and
      <strong> GraphQL</strong>. I use <strong> React Native </strong> to create
      engaging cross-platform mobile experiences. Thriving in agile
      environments, I am passionate about leveraging technology to deliver
      innovative solutions.
    </p>
    <div className="hobies">
      <p className="txt-wb">hobbies:</p>
      <div className="hobies-two txt-ws">
        <p>Videogames</p>
        <p>Music</p>
        <p>Draw</p>
        <p>Coffee</p>
      </div>
    </div>
  </div>
);
