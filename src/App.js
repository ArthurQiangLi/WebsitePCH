import "./App.css";
import React from "react";
import CompNavbar from "./components/CompNavbar.jsx";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home.jsx";
import Lessons from "./components/Lessons.jsx";
import Postboard from "./components/Postboard.jsx";
import AboutMe from "./components/AboutMe.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/postboard" element={<Postboard />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
