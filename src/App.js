import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen";
export default function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}
