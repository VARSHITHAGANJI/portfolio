// component/NavBar.js

// import { NavLink } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/experience">Experience</NavLink>
//         </li>
//         <li>
//           <NavLink to="/products">Products</NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

import React from 'react';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
const Navbar = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require("../../logo.svg")} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            About
          </NavLink>
          <NavLink to='/experience' activeStyle>
            Experience
          </NavLink>
          <NavLink to='/skills' activeStyle>
            Skills
          </NavLink>
          <NavLink to='/projects' activeStyle>
            Projects
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
     <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={20}
    />
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;