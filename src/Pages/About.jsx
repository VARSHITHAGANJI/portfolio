// src/components/About.js
import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';
import myPhoto from '../assets/varshu.jpg';
import resume from '../assets/Varshitha_Resume.pdf' // Replace with your actual photo path

const About = () => {
  return (
    <Container className="about-container">
      <Row className="justify-content-center align-items-center about-content">
        <Col md={4} className="about-photo">
          <img src={myPhoto} alt="My Photo" />
        </Col>
        <Col md={8} className="about-bio">
          <h2>About Me</h2>
          <p>
            Hi, I'm [Your Name], a passionate developer with expertise in various technologies. 
            I enjoy building impactful projects and constantly learning new skills. 
            I have a background in [Your Background] and am currently focusing on [Your Current Focus].
          </p>
          <div className="resume-button">
            <Button variant="primary" href={resume} target="_blank">
              View Resume 
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
