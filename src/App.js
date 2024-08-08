import {useState} from "react"
import { Routes, Route } from 'react-router-dom';
import NavBar from "./Components/Navbar/Navbar";
import Home from './Pages/Home';
import Experience from './Pages/Experience';

import { useContext } from "react";


import './App.css';

 
const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };
   return (
      <div>
      
      <NavBar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
         </Routes>
      </div>
   );
};
 
export default App;