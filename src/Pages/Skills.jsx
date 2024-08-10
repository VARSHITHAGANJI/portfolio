// src/components/Skills.js
import React from 'react';
import '../styles/Skills.css';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faTools } from '@fortawesome/free-solid-svg-icons';
import {
  faPython, faJsSquare, faHtml5, faCss3Alt, faNodeJs, faReact, faBootstrap,
  faLinux, faGitAlt, faGithub, faDocker
} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <Row className="skills-row">
        <Col md={4}>
          <Card className="skills-card">
            <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faCode} /> Programming Languages</Card.Title>
              <Card.Text>
                <FontAwesomeIcon icon={faPython} /> Python<br />
                <FontAwesomeIcon icon={faJsSquare} /> JavaScript<br />
                <FontAwesomeIcon icon={faHtml5} /> HTML<br />
                <FontAwesomeIcon icon={faCss3Alt} /> CSS<br />
                C, C++, MySQL, Matlab
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="skills-card">
            <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faLaptopCode} /> Frameworks/Libraries</Card.Title>
              <Card.Text>
                <strong>ML:</strong> TensorFlow, PyTorch, Scikit Learn, ML Flow, Pandas, Numpy, Scipy, Seaborn, Matplotlib, OpenCV<br />
                <strong>Web Dev:</strong> <FontAwesomeIcon icon={faReact} /> ReactJS, <FontAwesomeIcon icon={faNodeJs} /> NodeJS, Django, <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="skills-card">
            <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faTools} /> Developer Tools</Card.Title>
              <Card.Text>
                <FontAwesomeIcon icon={faLinux} /> Linux, <FontAwesomeIcon icon={faGitAlt} /> Git, <FontAwesomeIcon icon={faGithub} /> GitHub, LaTex, Bash, Anaconda, Jupyter Notebooks, VS Code, Pycharm, <FontAwesomeIcon icon={faDocker} /> Docker
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
