
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Projects from './components/pages/ProjectsPage/Projects';
import AboutMe from './components/pages/AboutMePage/AboutMe';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
