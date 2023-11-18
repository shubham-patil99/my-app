import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Projects from "../pages/projects";
// import ExpertComp from "./expertcomp";
import logo from "../images/logo.png"

function Nav() {
  return (
    <>
      <Router>
        <div className="App">
          <nav className="App-nav">
            <Link to="/"><img src={logo} alt="imc_logo" className="main-logo"></img></Link>
            <Link to="/about" className="pt-3">ABOUT</Link>
            <Link to="/projects" className="pt-3">PROJECTS</Link>
            <Link to="/contact" className="pt-3">CONTACT</Link> 
            
          </nav>
          {/* <ExpertComp /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default Nav;
