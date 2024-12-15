// // src/components/Navbar.js
// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';



// src/components/Navbar.js
import React, { useState } from 'react';
import { Navbar, Nav, Container,NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import Switch from 'react-switch';
import "../styles/Header.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { JustifyLeft, JustifyRight } from 'react-bootstrap-icons';

const MyNavbar = ({ theme, toggleTheme }) => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar bg={theme === 'light' ? 'light' : 'dark'} variant={theme} expand="lg" expanded={expanded}>
      <Container>
        <LinkContainer className = "navbar-title "to="/">
          <Navbar.Brand onClick={handleNavClick}>Varshitha Ganji</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto justify-content-end"> {/* Changed ml-auto to mr-auto for left alignment */}
            {/* <LinkContainer to="/">
              <Nav.Link className={theme === 'light' ? "nav-link-light" : "nav-link-dark " } onClick={handleNavClick}>Home</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/about">
              <Nav.Link className={theme === 'light' ? 'nav-link-light' : 'nav-link-dark'} onClick={handleNavClick}>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/experience">
              <Nav.Link className={theme === 'light' ? 'nav-link-light' : 'nav-link-dark'} onClick={handleNavClick}>Experience</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/skills">
              <Nav.Link className={theme === 'light' ? 'nav-link-light' : 'nav-link-dark'} onClick={handleNavClick}>Skills</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link className={theme === 'light' ? 'nav-link-light' : 'nav-link-dark'} onClick={handleNavClick}>Projects</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/blog">
              <Nav.Link className={theme === 'light' ? 'nav-link-light' : 'nav-link-dark'} onClick={handleNavClick}>Blog</Nav.Link>
            </LinkContainer> */}
             {/* Blogs Dropdown */}
            <NavDropdown title="Blogs" id="blogs-dropdown" style={{ color: '#5c2c2c' }}>
              <NavDropdown.Item as={Link} to="/blog/allposts" onClick={handleNavClick}>AllPosts</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog/technical" onClick={handleNavClick}>Technical Blogs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog/personal" onClick={handleNavClick}>Personal Blogs</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
        {/* <NavItem >
        <div className="theme-toggle ml-auto">
            <Switch
              onChange={toggleTheme}
              checked={theme === 'dark'}
              offColor="#F0E1DE"
              onColor="#F0E1DE"
              checkedIcon={<FontAwesomeIcon icon={faSun} className="theme-icon sun" style={{justifyLeft:true,height: "15px" ,width:"15px",color:"black"} } />}
              uncheckedIcon={<FontAwesomeIcon icon={faMoon} className="theme-icon moon" style={{justifyRight:true,height: "15px" ,width:"15px",color:"black"} }/>}
              className="react-switch" height={25}   
            />
          </div>
          </NavItem > */}
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
