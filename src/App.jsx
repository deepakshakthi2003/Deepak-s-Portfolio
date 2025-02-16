import "./App.css";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen/index";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
