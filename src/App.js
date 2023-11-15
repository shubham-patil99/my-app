import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import ExpertComp from './componants/expertcomp';

// const Home = () => <h2>Home</h2>;
// const About = () => <h2>About</h2>;
// const Contact = () => <h2>Contact</h2>;

function App() {
  return (
    <>
     
    <Router>
      
      <div className="App">
        <nav className="App-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <ExpertComp  />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div>
   
    </div>
      </div>
      
    </Router>
   
    </>
  );
}

export default App;