// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import sunIcon from '../assets/sun.png'; // Replace with your actual path
// import moonIcon from '../assets/moon.png'; // Replace with your actual path

const sunIcon = <><span style="font-size: 3rem;">
  <span style="color: Mediumslateblue;">
    <i class="fa-solid fa-camera"></i>
  </span>
</span></>;
const moonIcon = <><span style="font-size: 3rem;">
  <span style="color: Mediumslateblue;">
    <i class="fa-solid fa-camera"></i>
  </span>
</span></>;


const MyNavbar = ({ theme, toggleTheme }) => {
  return (
    <Navbar  bg={theme === 'light' ? 'light' : 'dark'} variant={theme} expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/about">
              <Nav.Link className="nav-link">
              <Navbar.Text className='nav-text'>
            About
          </Navbar.Text>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/skills">
              <Nav.Link className="nav-link">
              <Navbar.Text className='nav-text'>
            Skills
          </Navbar.Text>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/education">
              <Nav.Link className="nav-link">
              <Navbar.Text className='nav-text'>
            Education
          </Navbar.Text></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link className="nav-link">
              <Navbar.Text className='nav-text'>
            Projects
          </Navbar.Text></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link className="nav-link">
              <Navbar.Text className='nav-text'>
            Blog
          </Navbar.Text>
              </Nav.Link>
            </LinkContainer>
          </Nav>
           <moonIcon />
          <div className="theme-toggle">
            <button onClick={toggleTheme} className="theme-toggle-button">
              {theme === 'light' ? (
                <moonIcon />
              ) : (
                <sunIcon />
              )}
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
