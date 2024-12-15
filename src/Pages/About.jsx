// src/pages/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';
import profile from "../assets/varshu.jpg"
const About = ({ theme, toggleTheme }) => {
  return (
    <Container fluid className={theme === 'light' ? "about-container about-light" :"about-container about-dark"}>
      <Row noGutters>
        <Col md={6} className="white-column">
          <div className="content-wrapper">
            <img
              src={profile}
              alt="Profile"
              className="profile-image"
            />
            <h2 className="greeting">Hello, I'm Varshitha</h2>
          </div>
        </Col>
        <Col md={6} className="dark-column">
          <div className="content-wrapper">
            <h3 className="title">About Me</h3>
            <p className="description">
              As a software engineer with a degree in AI from IIT Hyderabad, I thrive at the intersection of technology and creativity.
               My passion lies in exploring the realms of machine learning, deep learning, and distributed systems. 
                When I’m not debugging code, you’ll likely find me singing or playing the piano, playing table tennis, or baking for my loved ones.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
