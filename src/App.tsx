import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="app">
      <MainPage />
      <div id="whoami" style={{ height: "100vh" }}></div>
      <div
        id="projects"
        style={{ height: "100vh", background: "#1a1a1a" }}
      ></div>
      <div id="skills" style={{ height: "100vh" }}></div>
      <div id="contact" style={{ height: "20vh", background: "#1a1a1a" }}></div>
    </div>
  );
}

export default App;
