import React from "react";
import "./App.css";
import "./Scrollbar.css";
import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import Whoami from "./components/Whoami";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ProjectModalState from "./context/ProjectModalState";

function App() {
  return (
    <div className="app">
      <Navigation />
      <MainPage />
      <Whoami />
      <ProjectModalState>
        <Projects />
      </ProjectModalState>

      <Skills />
      <Contact />
    </div>
  );
}

export default App;
