import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import ProjectMain from "./components/Projects/ProjectMain";
import Skills_Main from "./components/Skills/Skills_Main";
import Services from "./components/Services/Services";
import Youtube from "./components/Youtube/Youtube";
import Certificate from "./components/Certificates/Certificate";
import Contact1 from "./components/Contact/Contact1";
import Pmain from "./Pmain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <ProjectMain />
      <Skills_Main />
      <Services />
      <Youtube />
      <Certificate />
      <Contact1 />
      
      
    </div>
  );
}

export default App;
