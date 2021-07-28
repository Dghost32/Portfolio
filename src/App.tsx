import ProjectModalState from "./context/ProjectModalState";
/* Components */
import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import Whoami from "./components/Whoami";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
/* Styles */
import "./App.css";
import "./Scrollbar.css";

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
    </div>
  );
}

export default App;
