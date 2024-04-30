import "./App.css";
import React from "react";
import CompNavbar from "./components/CompNavbar.jsx";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home.jsx";
import Courses from "./components/Courses.jsx";
import Lessons from "./components/Lessons.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
