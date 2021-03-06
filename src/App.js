import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import './App.css';
import Header from "./containers/Header"
import Home from "./containers/Home"
import About from "./containers/About"
import Student from "./containers/Student"
import Footer from "./containers/Footer"

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="student" element={<Student />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
