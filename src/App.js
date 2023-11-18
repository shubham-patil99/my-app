import React from 'react';
import Nav from './componants/nav';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
// import Home from './pages/home';
// import Contact from './pages/contact';
// import ExpertComp from './componants/expertcomp';

function App() {
  return (
    <>
      <div>
        <Nav />
      </div>
    </>

    
  );
}

export default App;



// function App() {
//   return (
//     <>
     
//     <Router>
//     <nav className="navbar navbar-inverse">
//          <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//            <Link to="/contact">Contact</Link>

//   <div className="container-fluid">
//     <div className="navbar-header">
//       <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>                        
//       </button>
//       <a className="navbar-brand" href="#">Logo</a>
//     </div>
//     <div className="collapse navbar-collapse" id="myNavbar">
//       <ul className="nav navbar-nav">
//       <Routes>
//          <Route path="/" element={<Home />} />
//          <Route path="/about" element={<About />} />
//          <Route path="/contact" element={<Contact />} />
//       </Routes>
//       </ul>
//       <ul className="nav navbar-nav navbar-right">
//         <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
//       </ul>
//     </div>
//   </div>
// </nav>
      
//     </Router>
   
//     </>
//   );
// }

// export default App;