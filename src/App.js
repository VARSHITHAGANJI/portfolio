// App.js
import { Routes, Route } from 'react-router-dom';
import NavBar from "./Components/Navbar";
import Home from './Pages/Home';
import Experience from './Pages/Experience';
// import Products from './Pages/Products';
 
const App = () => {
   return (
      <>
      <NavBar />
         <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/experience" element={<Experience />} />
         </Routes>
      </>
   );
};
 
export default App;