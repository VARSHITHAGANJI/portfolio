import { Routes, Route } from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';

import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Education from './Pages/Education';

import Skills from './Pages/Skills';
import About from './Pages/About';

import Header from "./Components/Header"
import Footer from "./Components/Footer"
import React, { useState, useEffect } from 'react';


import './App.css';

 
const App = () => {
   const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.classList.add(`${savedTheme}-theme`);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.remove(`${theme}-theme`);
    document.body.classList.add(`${newTheme}-theme`);
    localStorage.setItem('theme', newTheme);
  };
 
   return (
      <div>
         <div className={`app-container ${theme}-theme`}>
         
         <Header theme={theme} toggleTheme={toggleTheme} />
       
        <Container className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Education />} />
            {/* <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} /> */}
          </Routes>
        
        </Container>
        <div className="flex-grow-1">
         <footer className="footer-fixed">
          <Footer />
        </footer>
      </div>
      </div>
      </div>
   );
};
 
export default App;