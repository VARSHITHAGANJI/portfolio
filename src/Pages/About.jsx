// src/pages/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';
import profile from "../assets/varshu.jpg"
const About = () => {
  return (
    <Container fluid className="about-container">
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
              Sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis cras sed felis eget.
              Amet risus nullam eget felis eget nunc. Lacus vestibulum sed arcu non odio euismod.
              Consectetur adipiscing elit duis tristique. Pharetra magna ac placerat vestibulum
              lectus mauris ultrices.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
